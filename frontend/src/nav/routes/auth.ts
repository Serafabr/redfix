import React from "react";
import { paths } from '../paths';

// Lazy imports
const Login = React.lazy(() => import("../../features/Authentication"));
const Profile = React.lazy(() => import("../../features/Profile"));

const routes = [
  { path: paths.auth.login, name: "Login", component: Login },
  { path: paths.auth.profile, name: "Profile", component: Profile },
];

export default routes;