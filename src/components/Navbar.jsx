import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import SignInModal from "@/components/SignInModel.jsx";
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="flex justify-between p-8 px-14">
      <div className="">
          <p className="text-[#868686]">Blocky</p>
      </div>

      <div className="flex gap-16">
        <Link href="/" className="text-[#868686] hover:text-[#c2c1c1]">home</Link>
        <Link href="/" className="text-[#868686] hover:text-[#c2c1c1]">link1</Link>
        <Link href="/" className="text-[#868686] hover:text-[#c2c1c1]">link2</Link>
        <Link href="/" className="text-[#868686] hover:text-[#c2c1c1]">link3</Link>
      </div>

      <div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-[#868686]"
          >
            <PersonIcon/>
          </button>
        )}
      </div>

      {/* Import and use SignInModal */}
      <SignInModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
