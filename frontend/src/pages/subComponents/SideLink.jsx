import { Link } from "react-router-dom";

const SideLink = ({ redirectTo, selectedComponent, handleClick, content }) => {
  return (
    <>
      <Link
        href={redirectTo}
        className={
          selectedComponent === content
            ? "font-semibold text-primary pointer-events-none"
            : ""
        }
        onClick={handleClick}
      >
        {content}
      </Link>
    </>
  );
};

export default SideLink;
