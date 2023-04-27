import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Notes from "./components/pages/Notes";

const App = () => {
  return (
    <>
      <Navbar />
      <Notes />
      <Footer />
    </>
  );
};

export default App;
