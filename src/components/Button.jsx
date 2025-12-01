const Button = ({ children, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="block bg-blue w-full px-300 py-200 rounded-[8px] text-white text-preset-2-bold hover:bg-linear-to-r hover:from-gradient-from hover:to-gradient-to transition duration-500 ease-in-out"
    >
      {children}
    </button>
  );
};

export default Button;
