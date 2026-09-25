import { useState, useEffect } from "react";
import "./index.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import SigninPage from "./pages/SigninPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  // Normalize path by trimming trailing slash (except root)
  const normalizedPath =
    currentPath.length > 1 && currentPath.endsWith("/")
      ? currentPath.slice(0, -1)
      : currentPath;

  if (normalizedPath === "/" || normalizedPath === "" || normalizedPath === "/index.html") {
    return <HomePage />;
  }
  if (normalizedPath === "/about" || normalizedPath === "/about/index.html") {
    return <AboutPage />;
  }
  if (normalizedPath === "/pricing" || normalizedPath === "/pricing/index.html") {
    return <PricingPage />;
  }
  if (normalizedPath === "/contact" || normalizedPath === "/contact/index.html") {
    return <ContactPage />;
  }
  if (normalizedPath === "/SignIn" || normalizedPath === "/SignIn/index.html") {
    return <SigninPage />;
  }

  return <HomePage />;
}
