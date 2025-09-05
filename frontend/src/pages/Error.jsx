import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-[100vh]">
        <img className="h-[80%]" src="/images/Error.svg" alt="Error" />
        <Link to={"/"}>
          <Button>Start from begin</Button>
        </Link>
      </div>
    </>
  );
};

export default Error;
