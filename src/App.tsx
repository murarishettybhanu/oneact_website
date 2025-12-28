import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Hero } from './components/hero/Hero';
import { Features } from './components/features/Features';
import { Security } from './components/features/Security';
import { FAQ } from './components/faq/FAQ';
import { CTA } from './components/cta/CTA';
import './App.css';

function App() {
  return (
    <div className="w-full">
      <Header />
      <main>
        <Hero />
        <Features />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
