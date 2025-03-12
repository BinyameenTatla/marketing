import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Services } from './Services';
import { Footer } from './Footer';

const Client = lazy(() => import('./Client'));
const Choose = lazy(() => import('./Choose'));
const Team = lazy(() => import('./Team'));
const About = lazy(() => import('./About'));
const Test = lazy(() => import('./Test'));
const Faqs = lazy(() => import('./Faqs'));
const Pricing = lazy(() => import('./Pricing'));
const Contact = lazy(() => import('./Contact'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Services />
    
    {/* Lazy load non-critical sections */}
    <Suspense fallback={<div>Loading...</div>}>
      <Choose />
      <Client />
      <Team />
      <About />
      <Test />
      <Faqs />
      <Pricing />
      <Contact />
    </Suspense>
    
    <Footer />
  </StrictMode>
);
