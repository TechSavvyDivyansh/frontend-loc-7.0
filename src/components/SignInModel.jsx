import { SignIn } from "@clerk/nextjs";


const SignInModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
      onClick={onClose} // Clicking backdrop will close modal
    >
      <div
        className="bg-transparent p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-lg"
        >
          
        </button>
        <SignIn
          routing="hash"
          appearance={{
            variables: {
              colorScheme: "dark",
            },
          }}
        />
      </div>
    </div>
  );
};

export default SignInModal;
