import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import SpecialLoadingButton from "./subComponents/SpecialLoadingButton";
import {
  clearAllPassErrors,
  resetPassword,
} from "../store/slices/passwordSlice";
import { toast } from "react-toastify";
import { getUser } from "../store/slices/userSlice";

const ResetPass = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading, error, message } = useSelector((state) => state.password);
  const { isAuthenticated } = useSelector((state) => state.user);
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleResetPassword = () => {
    dispatch(resetPassword(token, password, confirmPassword));
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
      dispatch(getUser());
    }
  }, [isAuthenticated, dispatch, error, loading]);
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[100vh] lg:grid-cols-2 xl:min-h-[100vh]">
        <div className="min-h-[100vh] flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Reset Password</h1>
              <p className="text-balance text-muted-foreground">
                Set a new password
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label>Confirm Password</Label>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <Link
                to={"/login"}
                className="ml-auto inline-block text-sm underline"
              >
                Login with password!
              </Link>

              {loading ? (
                <SpecialLoadingButton content="Resetting Password" />
              ) : (
                <Button
                  type="submit"
                  onClick={handleResetPassword}
                  className="w-full"
                >
                  Reset Password
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:flex justify-center items-center">
          <img
            src="/images/resetPass.svg"
            alt="Reset password image"
            className="h-auto w-[87%] object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
};

export default ResetPass;
