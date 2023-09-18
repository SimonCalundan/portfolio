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
      className="  hover:font-bold transition-all bg-background-dark text-background dark:bg-background dark:text-background-dark px-4 py-2 cursor-pointer"
      href={link}
    >
      {text}
    </a>
  );
};

export default ButtonLink;
