"use client";

interface ButtonProps {
  handleClick: (e: any) => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ handleClick, text = "Text" }) => {
  return (
    <button
      className="  hover:font-bold transition-all bg-background-dark text-background dark:bg-background dark:text-background-dark px-4 py-2 cursor-pointer"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
