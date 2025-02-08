import Sidebar from "@/components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-[15vw]   text-white p-4">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="w-[85vw] p-12 m-5 mt-20 rounded-3xl bg-[#161616]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
