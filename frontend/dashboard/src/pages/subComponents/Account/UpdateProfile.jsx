import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SpecialLoadingButton from "../SpecialLoadingButton";
import {
  clearAllUserErrors,
  getUser,
  resetProfile,
  updateProfile,
} from "../../../store/slices/userSlice";

const UpdateProfile = () => {
  const { user, loading, error, isUpdated, message } = useSelector(
    (state) => state.user
  );
  const [fullName, setFullName] = useState(user?.fullName);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [aboutMe, setAboutMe] = useState(user?.aboutMe);
  const [portfolioURL, setPortfolioURL] = useState(user?.portfolioURL);
  const [linkedInURL, setLinkedInURL] = useState(user?.linkedInURL || "");
  const [githubURL, setGithubURL] = useState(user?.githubURL || "");
  const [instagramURL, setInstagramURL] = useState(user?.instaURL || "");
  const [fbURL, setFbURL] = useState(user?.fbURL || "");
  const [twitterURL, setTwitterURL] = useState(user?.twitterURL || "");
  const [hackerRankURL, setHackerRankURL] = useState(user?.hackerRankURL || "");
  const [avatar, setAvatar] = useState(user?.avatar?.url);
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar?.url);
  const [resume, setResume] = useState(user?.resume?.url);
  const [resumePreview, setResumePreview] = useState(user?.resume?.url);
  const [update, setUpdate] = useState(true);
  const dispatch = useDispatch();

  const avatarHandler = (e) => {
    const file = e.target.files[0];
    console.log(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAvatarPreview(reader.result);
      setAvatar(file);
    };
  };

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setResumePreview(reader.result);
      setResume(file);
    };
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("fullName", fullName?.trim());
    formData.append("email", email?.trim()?.toLowerCase());
    formData.append("phone", phone?.trim());
    formData.append("aboutMe", aboutMe?.trim());
    formData.append("portfolioURL", portfolioURL?.trim());
    formData.append("linkedInURL", linkedInURL?.trim());
    formData.append("githubURL", githubURL?.trim());
    formData.append("instaURL", instagramURL?.trim());
    formData.append("fbURL", fbURL?.trim());
    formData.append("twitterURL", twitterURL?.trim());
    formData.append("hackerRankURL", hackerRankURL?.trim());
    formData.append("avatar", avatar);
    formData.append("resume", resume);

    dispatch(updateProfile(formData));
  };

  useEffect(() => {
    if (
      fullName?.trim() === user.fullName &&
      email?.trim().toLowerCase() === user.email &&
      phone?.trim().toLowerCase() === user.phone &&
      aboutMe?.trim() === user.aboutMe &&
      portfolioURL?.trim() === user.portfolioURL &&
      linkedInURL?.trim() === user.linkedInURL &&
      githubURL?.trim() === user.githubURL &&
      instagramURL?.trim() === user.instaURL &&
      fbURL?.trim() === user.fbURL &&
      twitterURL?.trim() === user.twitterURL &&
      hackerRankURL?.trim() === user.hackerRankURL &&
      avatar === user.avatar.url &&
      resume === user.resume.url
    ) {
      setUpdate(true);
    } else {
      setUpdate(false);
    }
  }, [
    fullName,
    email,
    phone,
    aboutMe,
    portfolioURL,
    linkedInURL,
    githubURL,
    instagramURL,
    fbURL,
    twitterURL,
    hackerRankURL,
    avatar,
    resume,
  ]);

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
              <h2 className="text-3xl font-bold">Update Profile</h2>
              <p className="mb-5">Update your profile</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex items-start lg:justify-between lg:items-center flex-col lg:flex-row gap5 mb-5">
              <div className="flex flex-col gap-2 w-full sm:w-72 mb-5 box-border">
                <Label>Profile Picture</Label>
                <img
                  src={avatarPreview || "/Error.svg"}
                  alt="Avatar"
                  className="w-full h-auto sm:w-72 rounded-2xl"
                />
                <input
                  type="file"
                  className="avtr-updt-btn"
                  onChange={avatarHandler}
                />
              </div>

              <div className="flex flex-col gap-2 w-full sm:w-72 mb-5 box-border">
                <Label>Resume</Label>
                <Link target="_blank" to={user?.resume?.url}>
                  <img
                    src={resumePreview || "/Error.svg"}
                    alt="Resume"
                    className="w-full h-auto sm:w-72 rounded-2xl"
                  />
                </Link>
                <input
                  type="file"
                  className="avtr-updt-btn"
                  onChange={resumeHandler}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Full Name</Label>
              <Input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
              />
            </div>
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
              />
            </div>
            <div className="grid gap-2">
              <Label>Phone</Label>
              <Input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone"
              />
            </div>
            <div className="grid gap-2">
              <Label>About me</Label>
              <Textarea
                className="h-full min-h-[150px]"
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
                placeholder="About you"
              />
            </div>
            <div className="grid gap-2">
              <Label>Portfolio URL</Label>
              <Input
                value={portfolioURL}
                onChange={(e) => setPortfolioURL(e.target.value)}
                placeholder="Your portfolio URL"
              />
            </div>
            <div className="grid gap-2">
              <Label>LinkedIn URL</Label>
              <Input
                value={linkedInURL}
                onChange={(e) => setLinkedInURL(e.target.value)}
                placeholder="Your LinkedIn URL"
              />
            </div>
            <div className="grid gap-2">
              <Label>GitHub URL</Label>
              <Input
                value={githubURL}
                onChange={(e) => setGithubURL(e.target.value)}
                placeholder="Your GitHub URL"
              />
            </div>
            <div className="grid gap-2">
              <Label>Instagram URL</Label>
              <Input
                value={instagramURL}
                onChange={(e) => setInstagramURL(e.target.value)}
                placeholder="Your Instagram URL"
              />
            </div>
            <div className="grid gap-2">
              <Label>Facebook URL</Label>
              <Input
                value={fbURL}
                onChange={(e) => setFbURL(e.target.value)}
                placeholder="Your Facebook URL"
              />
            </div>
            <div className="grid gap-2">
              <Label>Twitter (X) URL</Label>
              <Input
                value={twitterURL}
                onChange={(e) => setTwitterURL(e.target.value)}
                placeholder="Your Twitter (X) URL"
              />
            </div>
            <div className="grid gap-2">
              <Label>HackerRank URL</Label>
              <Input
                value={hackerRankURL}
                onChange={(e) => setHackerRankURL(e.target.value)}
                placeholder="Your HackerRank URL"
              />
            </div>

            <div className={`grid gap-2`}>
              {!loading ? (
                <Button
                  className={`cursor-${update ? "not-allowed" : "pointer"}`}
                  disabled={update}
                  onClick={handleUpdate}
                >
                  Update Profile
                </Button>
              ) : (
                <SpecialLoadingButton content="Updating" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
