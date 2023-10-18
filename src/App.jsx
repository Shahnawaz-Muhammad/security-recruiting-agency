import "./App.css";
import Header from "./components/header";
import Contact from "./pages/Contact";
import Home from "./pages/home";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Home />
        <Contact />
      </div>
    </>
  );
}

export default App;
