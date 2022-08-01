import "./App.css";
import { Nav } from "./body/Nav.js";
import { Presentation } from "./body/Presentation";
import { Services } from "./body/Services";
import { Portfolio } from "./body/Portfolio";
import { Contact } from "./body/Contact";
import { About } from "./body/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Presentation />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
