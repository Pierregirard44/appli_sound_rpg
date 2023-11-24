import ButtonSound from "./components/ButtonSound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-[100%]">
      <Navbar />
      <h1 className="text-gray-50 text-4xl text-center pt-5">RPG SoundBox</h1>
      <ButtonSound />
    </div>
  );
}

export default App;
