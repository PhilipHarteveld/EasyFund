import "./App.css";
import Navbar from "./components/SideNavBar/Navbar";
import SideNav from "./components/SideNavBar/SideNav";
import Overview from "./components/Overview/Overview";

function App() {
  return (
    <div className=" bg-background w-full">
      <Navbar />

      <SideNav className="mr-10" />
      <Overview />
    </div>
  );
}

export default App;
