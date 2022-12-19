import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <TextForm heading="Enter Your Heading Here" />
    </>
  );
}

export default App;