import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { DemoPage } from "./pages/DemoPage";
import { LoginPage } from "./pages/LoginPage";

export const router = createBrowserRouter([
  { path: "/", Component: LandingPage },
  { path: "/demo", Component: DemoPage },
  { path: "/login", Component: LoginPage },
]);
