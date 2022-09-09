import "./App.css";
import Navbar from "./components/SideNavBar/Navbar";
import SideNav from "./components/SideNavBar/SideNav";
import Overview from "./components/Overview/Overview";
import Content from "./components/Overview/Overview";
import Login from "./Pages/login";

function App() {
  return (
    <Login />
    // <div className=" bg-background w-screen">
    //   <Navbar />
    //   <div className="flex items-start space-x-2 justify-start w-full">
    //     <SideNav className="mr-10" />

    //     <Content />
    //   </div>
    // </div>
  );
}

export default App;
