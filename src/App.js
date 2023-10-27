import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ContactCard from "./pages/ContactCard";
import ButtonLg from "./pages/ButtonLg";
import AlreadyAnUser from "./pages/AlreadyAnUser";
import Component from "./pages/Component";
import NavbarStyle8NavbarLight from "./pages/NavbarStyle8NavbarLight";
import ComponentText from "./pages/ComponentText";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame4";
import Frame5 from "./pages/Frame5";
import Frame6 from "./pages/Frame6";
import Frame7 from "./pages/Frame7";
import Frame8 from "./pages/Frame8";
import Frame9 from "./pages/Frame9";
import P141 from "./pages/P141";
import Frame10 from "./pages/Frame10";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/button-lg":
        title = "";
        metaDescription = "";
        break;
      case "/already-an-user-login":
        title = "";
        metaDescription = "";
        break;
      case "/component":
        title = "";
        metaDescription = "";
        break;
      case "/navbarstyle8-navbarlight":
        title = "";
        metaDescription = "";
        break;
      case "/component1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3":
        title = "";
        metaDescription = "";
        break;
      case "/frame-11":
        title = "";
        metaDescription = "";
        break;
      case "/frame-10":
        title = "";
        metaDescription = "";
        break;
      case "/frame-9":
        title = "";
        metaDescription = "";
        break;
      case "/frame-8":
        title = "";
        metaDescription = "";
        break;
      case "/frame-7":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/frame-5":
        title = "";
        metaDescription = "";
        break;
      case "/frame-4":
        title = "";
        metaDescription = "";
        break;
      case "/p14-1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ContactCard />} />
      <Route path="/button-lg" element={<ButtonLg />} />
      <Route path="/already-an-user-login" element={<AlreadyAnUser />} />
      <Route path="/component" element={<Component />} />
      <Route
        path="/navbarstyle8-navbarlight"
        element={<NavbarStyle8NavbarLight />}
      />
      <Route path="/component1" element={<ComponentText />} />
      <Route path="/frame-3" element={<Frame1 />} />
      <Route path="/frame-11" element={<Frame2 />} />
      <Route path="/frame-10" element={<Frame3 />} />
      <Route path="/frame-9" element={<Frame4 />} />
      <Route path="/frame-8" element={<Frame5 />} />
      <Route path="/frame-7" element={<Frame6 />} />
      <Route path="/frame-6" element={<Frame7 />} />
      <Route path="/frame-5" element={<Frame8 />} />
      <Route path="/frame-4" element={<Frame9 />} />
      <Route path="/p14-1" element={<P141 />} />
      <Route path="/frame-2" element={<Frame10 />} />
    </Routes>
  );
}
export default App;
