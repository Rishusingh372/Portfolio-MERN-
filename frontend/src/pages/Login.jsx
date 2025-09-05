import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllUserErrors, login } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import SpecialLoadingButton from "./subComponents/SpecialLoadingButton";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export default function Login() {
  const [email, setEmail] = useState("rishu27@gmail.com");
  const [password, setPassword] = useState("Pass@123");
  const { loading, isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogin = () => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error && error !== "User not authenticated!") {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }

    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, isAuthenticated, error, loading, message]);
  return (
    <div className="w-full lg:grid lg:min-h-[100vh] lg:grid-cols-2 xl:min-h-[100vh]">
      <div className="min-h-[100vh] flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
              <Link
                to={"/password/forgot"}
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            {loading ? (
              <SpecialLoadingButton content="Logging in" />
            ) : (
              <Button type="submit" onClick={handleLogin} className="w-full">
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:flex justify-center items-center">
        <img
          alt="Login image"
          className="h-auto w-[87%] object-cover dark:brightness-[0.2] dark:grayscale"
          src="/images/loginLeft.svg"
        />
      </div>
    </div>
  );
}
