import { useState } from "react";
import UpdateProfile from "./UpdateProfile";
import Profile from "./Profile";
import UpdatePassword from "./UpdatePassword";
import SideLink from "../SideLink";

const Account = () => {
  const linkArr = ["Profile", "Update Profile", "Update Password"];
  const [selectedComponent, setSelectedComponent] = useState(linkArr[2]);

  return (
    <>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 md:pl-20 sm:pl-20">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h2 className="text-3xl font-semibold">Settings</h2>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            // x-chunk="dashboard-04-chunk-0"
          >
            {linkArr.map((ele) => (
              <SideLink
                key={ele}
                redirectTo={"#"}
                content={ele}
                handleClick={() => setSelectedComponent(ele)}
                selectedComponent={selectedComponent}
              />
            ))}
          </nav>
          <div className="grid gap-6">
            {(() => {
              switch (selectedComponent) {
                case linkArr[0]:
                  return <Profile />;
                  break;

                case linkArr[1]:
                  return <UpdateProfile />;
                  break;

                case linkArr[2]:
                  return <UpdatePassword />;
                  break;

                default:
                  return <Profile />;
                  break;
              }
            })()}
          </div>
        </div>
      </main>
    </>
  );
};

export default Account;
