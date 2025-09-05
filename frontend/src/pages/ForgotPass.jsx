import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  clearAllPassErrors,
  forgotPassword,
} from "../store/slices/passwordSlice";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SpecialLoadingButton from "./subComponents/SpecialLoadingButton";

const ForgotPass = () => {
  const [email, setEmail] = useState("wagh.bhushan.998@gmail.com");
  const { loading, error, message } = useSelector((state) => state.password);
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleForgotPassword = () => {
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllPassErrors());
    }

    if (isAuthenticated) {
      navigateTo("/");
    }

    if (message !== null) {
      toast.success(message);
    }
  }, [isAuthenticated, dispatch, error, loading]);
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[100vh] lg:grid-cols-2 xl:min-h-[100vh]">
        <div className="min-h-[100vh] flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Forgot Password</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to request for reset password
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
                <div className="flex items-center">
                  <Link
                    to={"/login"}
                    className="ml-auto inline-block text-sm underline"
                  >
                    Remember your password?
                  </Link>
                </div>
              </div>

              {loading ? (
                <SpecialLoadingButton content="Requesting" />
              ) : (
                <Button
                  type="submit"
                  onClick={handleForgotPassword}
                  className="w-full"
                >
                  Request For Reset Password
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:flex justify-center items-center">
          <img
            // style={{ height: "87%" }}
            alt="Forgot password image"
            className="h-auto w-[87%] object-cover dark:brightness-[0.2] dark:grayscale"
            src="/images/forgotPass.svg"
          />
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
