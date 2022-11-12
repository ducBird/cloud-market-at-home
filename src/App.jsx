import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IntroductionHomePage from "./Components/Home";

function App() {
  return (
    <div className="relative App ">
      <header>
        <Header />
      </header>
      <section className="relative top-[130px]">
        {/* Introduction home page */}
        <IntroductionHomePage />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
