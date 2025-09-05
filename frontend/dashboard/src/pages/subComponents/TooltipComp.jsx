import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link, Outlet } from "react-router-dom";

const TooltipComp = ({ content, Icon, handleClick, active }) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                active === content
                  ? "text-accent-foreground bg-accent"
                  : "text-muted-foreground"
              } transition-colors hover:text-foreground md:h-8 md:w-8`}
              onClick={handleClick}
              // to={`./${content.replace(" ", "")}`}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{content}</span>
            </Link>
            {/* <Outlet /> */}
          </TooltipTrigger>
          <TooltipContent className="select-none" side="right">
            {content}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default TooltipComp;
