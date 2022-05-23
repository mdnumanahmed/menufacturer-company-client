import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Portfolio from "../pages/Portfolio/Portfolio";

const publicRoutes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/home", name: "Home", Component: Home },
    { path: "/blogs", name: "Blogs", Component: Blogs },
    { path: "/gallery", name: "Gallery", Component: Gallery },
    { path: "/portfolio", name: "Portfolio", Component: Portfolio },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/login", name: "Login", Component: Login },
  ];

export default publicRoutes;