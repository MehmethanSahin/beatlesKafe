import "./App.css";
import Menu from "./Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuProvider } from "./MenuContext";
import Navbar from "./Navbar";
import Campaign from "./Campaign";
import Advertise from "./Advertise";
import Contact from "./Contact";
import Opening from "./Hero";
import Testimonial from "./Testimonial";

function App() {
  return (
    <div>
      <MenuProvider>
        <Navbar />
        <Opening />
        <Campaign />
        <Advertise />
        <Menu />
        <Testimonial />
        <Contact />
      </MenuProvider>
    </div>
  );
}

export default App;
