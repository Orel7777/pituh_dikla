import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BabySteps from './components/BabySteps';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Modaah from './components/Modaah';

function App() {
  return (
    <div 
      className="min-h-screen text-foreground font-assistant"
      style={{
        background: 'linear-gradient(165deg, rgb(181, 218, 205, 0.95) 15%, rgba(181, 218, 205, 0.3) 50%, rgba(245, 242, 240, 0.95) 85%)'
      }}
    >
      <div className="relative">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <Modaah />
          <Services />
          <Testimonials />
          <BabySteps />
          <Stats />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;