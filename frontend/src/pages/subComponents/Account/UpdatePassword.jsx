import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpecialLoadingButton from "../SpecialLoadingButton";
import {
  clearAllUserErrors,
  getUser,
  resetProfile,
  updatePassword,
} from "../../../store/slices/userSlice";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const { loading, error, isUpdated, message } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [update, setUpdate] = useState(true);

  const handleUpdatePassword = () => {
    dispatch(updatePassword(currentPassword, newPassword, confirmPassword));
  };

  useEffect(() => {
    if (
      currentPassword === "" ||
      newPassword === "" ||
      confirmPassword === "" ||
      newPassword !== confirmPassword
    ) {
      setUpdate(true);
    } else {
      setUpdate(false);
    }
  }, [currentPassword, newPassword, confirmPassword]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }

    if (isUpdated) {
      dispatch(getUser());
      dispatch(resetProfile());
    }

    if (message) {
      toast.success(message);
    }
  }, [dispatch, loading, error, isUpdated]);
  return (
    <>
      <div className="w-full h-full">
        <div>
          <div className="grid w-[100%] gap-6">
            <div className="grid gap-2">
              <h2 className="text-3xl font-bold">Update Password</h2>
              <p className="mb-5">Update your dashboard password</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label>Current Password</Label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Your full name"
              />
            </div>
            <div className="grid gap-2">
              <Label>New Password</Label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Your full name"
              />
            </div>
            <div className="grid gap-2">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Your full name"
              />
            </div>

            <div className={`grid gap-2`}>
              {!loading ? (
                <Button
                  className={`cursor-${update ? "not-allowed" : "pointer"}`}
                  disabled={update}
                  onClick={handleUpdatePassword}
                >
                  Update Password
                </Button>
              ) : (
                <SpecialLoadingButton content="Updating Password" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
