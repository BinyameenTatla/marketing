import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { Services } from './Services'
import { Client } from './client'
import { Choose } from './Choose'
import { Team } from './Team'
import { About } from './About'
import { Test } from './Test'
import { Faqs } from './Faqs'
import { Pricing } from './Pricing'
import { Contact } from './Contact'
import { Footer } from './Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar />
  <Hero />
  <Services />
  <Client />
  <Choose />
  <Team />
  <About />
  <Test />
  <Faqs />
  <Pricing />
  <Contact />
  <Footer />
  </StrictMode>,
)
