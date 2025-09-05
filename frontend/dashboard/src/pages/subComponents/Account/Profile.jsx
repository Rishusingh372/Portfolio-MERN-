import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div className="w-full h-full">
        <div>
          <div className="grid w-[100%] gap-6">
            <div className="grid gap-2">
              <h2 className="text-3xl font-bold">Profile</h2>
              <p className="mb-5">Full profile preview</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex items-start lg:justify-between lg:items-center flex-col lg:flex-row gap5 mb-5">
              <div className="grid gap-2 w-full sm:w-72 mb-5">
                <Label>Profile Picture</Label>
                <img
                  src={user?.avatar?.url}
                  alt="Avatar"
                  className="w-full h-auto sm:w-72 rounded-2xl"
                />
              </div>

              <div className="grid gap-2 w-full sm:w-72 mb-5">
                <Label>Resume</Label>
                <img
                  src={user?.resume?.url}
                  alt="Resume"
                  className="w-full h-auto sm:w-72 rounded-2xl"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Full Name</Label>
              <Input type="text" defaultValue={user?.fullName} disabled />
            </div>
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input type="text" defaultValue={user?.email} disabled />
            </div>
            <div className="grid gap-2">
              <Label>Phone</Label>
              <Input type="text" defaultValue={user?.phone} disabled />
            </div>
            <div className="grid gap-2">
              <Label>About me</Label>
              <Textarea
                className="h-full min-h-[150px]"
                defaultValue={user?.aboutMe}
                disabled
              />
            </div>
            <div className="grid gap-2">
              <Label>Portfolio URL</Label>
              <Input defaultValue={user?.portfolioURL} disabled />
            </div>
            <div className="grid gap-2">
              <Label>LinkedIn URL</Label>
              <Input defaultValue={user?.linkedInURL} disabled />
            </div>
            <div className="grid gap-2">
              <Label>GitHub URL</Label>
              <Input defaultValue={user?.githubURL} disabled />
            </div>
            <div className="grid gap-2">
              <Label>Instagram URL</Label>
              <Input defaultValue={user?.instaURL} disabled />
            </div>
            <div className="grid gap-2">
              <Label>Facebook URL</Label>
              <Input defaultValue={user?.fbURL} disabled />
            </div>
            <div className="grid gap-2">
              <Label>Twitter (X) URL</Label>
              <Input defaultValue={user?.twitterURL} disabled />
            </div>
            <div className="grid gap-2">
              <Label>HackerRank URL</Label>
              <Input defaultValue={user?.hackerRankURL} disabled />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
