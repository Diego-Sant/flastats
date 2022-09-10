import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FlaCard from "./components/FlaCard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="jogadores">
          <div className="flastats-container">
            <FlaCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
