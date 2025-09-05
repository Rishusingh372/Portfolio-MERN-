import { clearAllUserErrors, getUser, logout } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import {
  FolderGit,
  History,
  Home,
  LayoutGrid,
  LogOut,
  MessageSquareMore,
  Package,
  PanelLeft,
  PencilRuler,
  User,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import TooltipComp from "./subComponents/TooltipComp";
import SidebarItems from "./subComponents/SidebarItems";
import Dashboard from "./subComponents/Dashboard/Dashboard";
import AddProject from "./subComponents/AddProjects/AddProject";
import AddSkills from "./subComponents/AddSkills/AddSkills";
import AddApplications from "./subComponents/AddApplications/AddApplications";
import AddTimeline from "./subComponents/AddTimeline/AddTimeline";
import Messages from "./subComponents/Messages/Messages";
import Account from "./subComponents/Account/Account";

const HomePage = () => {
  const [active, setActive] = useState("Account");
  const { isAuthenticated, error, message, loading, user } = useSelector(
    (state) => state.user
  );

  const contentArr = [
    { content: "Dashboard", Icon: Home },
    { content: "Add Project", Icon: FolderGit },
    { content: "Add Skills", Icon: PencilRuler },
    { content: "Add Applications", Icon: LayoutGrid },
    { content: "Add Timeline", Icon: History },
    { content: "Messages", Icon: MessageSquareMore },
    { content: "Account", Icon: User },
  ];

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
    }

    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }

    if (!isAuthenticated) {
      navigateTo("/login");
    }
  }, [isAuthenticated, message]);
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 hidden w-14 flex-col border-r bg-background sm:flex z-50 overflow-y-auto">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link className="group flex h-p w-p shrink-0 items-center justify-center gap-2 rounded-full">
              <Package className="h-6 w-6 transition-all group-hover:scale-110" />
              <span className="sr-only">Dashboard</span>
            </Link>

            {contentArr.map((ele) => {
              return (
                <TooltipComp
                  key={ele.content}
                  content={ele.content}
                  Icon={ele.Icon}
                  handleClick={() => setActive(ele.content)}
                  active={active}
                />
              );
            })}
          </nav>

          <nav className="mt-auto flex-col items-center gap-4 px-2 py-4">
            <TooltipComp
              content={"Logout"}
              Icon={LogOut}
              handleClick={handleLogout}
              active={active}
            />
          </nav>
        </aside>

        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 max-[900px]:h-[100px]">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="sm:hidden">
                {/* <Button size="icon" variant="outline" className="sm:hidden"> */}
                <PanelLeft className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-wx overflow-y-auto">
              <SheetHeader className="mt-3 mb-6">
                <SheetTitle>Hello, {user?.fullName}!</SheetTitle>
                <SheetDescription>
                  Manage your portfolio from here...
                </SheetDescription>
              </SheetHeader>
              <nav className="grid gap-6 text-lg font-medium">
                {/* <Link className="group flex h-10 w-10 shrink=0 items-center justify-center gap -2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Dashboard</span>
                </Link> */}

                {contentArr.map((ele) => {
                  return (
                    <SidebarItems
                      key={ele.content}
                      content={ele.content}
                      Icon={ele.Icon}
                      active={active}
                      handleClick={() => setActive(ele.content)}
                    />
                  );
                })}

                <SidebarItems
                  content={"Logout"}
                  Icon={LogOut}
                  handleClick={handleLogout}
                />
              </nav>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-4 md:grow-0 sm:ml-16 sm:mt-5">
            <img
              src={user?.avatar?.url}
              alt="Avatar"
              className="w-20 h-20 rounded-full max-[900px]:hidden"
            />
            <h2 className="text-4xl max-[900px]:text-2xl">
              Welcome back, {user?.fullName}!
            </h2>
          </div>
        </header>

        {(() => {
          switch (active) {
            case contentArr[0].content:
              return <Dashboard />;
              break;

            case contentArr[1].content:
              return <AddProject />;
              break;

            case contentArr[2].content:
              return <AddSkills />;
              break;

            case contentArr[3].content:
              return <AddApplications />;
              break;

            case contentArr[4].content:
              return <AddTimeline />;
              break;

            case contentArr[5].content:
              return <Messages />;
              break;

            case contentArr[6].content:
              return <Account />;
              break;

            default:
              return <Dashboard />;
              break;
          }
        })()}
      </div>
    </>
  );
};

export default HomePage;
