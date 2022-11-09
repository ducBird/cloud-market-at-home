import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="relative App">
      <header>
        <Header />
      </header>
      <section className="h-[1000px] relative top-[130px]"></section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
