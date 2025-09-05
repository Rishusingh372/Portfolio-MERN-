import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Error from "./pages/Error";
import ForgotPass from "./pages/ForgotPass";
import ManageSkills from "./pages/ManageSkills";
import ManageTimeline from "./pages/ManageTimeline";
import MangeProjects from "./pages/MangeProjects";
import ResetPass from "./pages/ResetPass";
import UpdateProject from "./pages/UpdateProject";
import ViewProject from "./pages/ViewProject";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./store/slices/userSlice";
import Profile from "./pages/subComponents/Account/Profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/forgot" element={<ForgotPass />} />
        <Route path="/password/reset/:token" element={<ResetPass />} />
        <Route path="/manage/skills" element={<ManageSkills />} />
        <Route path="/manage/timeline" element={<ManageTimeline />} />
        <Route path="/manage/projects" element={<MangeProjects />} />
        <Route path="/view/project/:id" element={<ViewProject />} />
        <Route path="/update/project/:id" element={<UpdateProject />} />
        {/* <Route path="/account" element={<Profile />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        pauseOnHover={false}
        theme="light"
        closeButton={false}
      />
    </BrowserRouter>
  );
}

export default App;
