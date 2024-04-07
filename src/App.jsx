import "./App.css";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <div className="left">
          <Navbar />
        </div>

        <div className="right">
          <Landing />
        </div>
      </div>
    </>
  );
}

export default App;
