import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;
