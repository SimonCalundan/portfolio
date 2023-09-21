interface ButtonLinkProps {
  link: string;
  text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  link = "#",
  text = "Text",
}) => {
  return (
    <a
      className=" relative transition-all bg-background-dark text-background dark:bg-background dark:text-background-dark px-4 py-2 cursor-pointer overflow-hidden group"
      href={link}
    >
      <p className=" relative z-50 group-hover:text-white transition-all duration-500">
        {text}
      </p>
      <div className="absolute bg-teal-500 rotate-12 top-[150%] right-[0%] w-[400%] h-full group-hover:top-0 group-hover:rotate-0 transition-all duration-500 z-0 ease-in-out"></div>
    </a>
  );
};

export default ButtonLink;
