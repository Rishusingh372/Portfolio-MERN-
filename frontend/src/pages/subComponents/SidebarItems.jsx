import { Link } from "react-router-dom";

const SidebarItems = ({ content, Icon, handleClick, active }) => {
  return (
    <Link
      href="#"
      className={`flex items-center gap-4 px-2.5 ${
        active === content
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
      onClick={handleClick}
    >
      <Icon />
      {content}
    </Link>
  );
};

export default SidebarItems;
