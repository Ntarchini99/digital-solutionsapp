import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Portfolio } from '@/components/Portfolio'
import { Process } from '@/components/Process'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/Form/ContactForm'
import { FormProvider } from '@/components/Form/FormContext'
import { useRef, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { projects } from './components/Routes/projects'
import ButtonWhatsapp from './components/ButtonWhatsapp/ButtonWhatsapp'

function App() {

  const faqRef = useRef(null);

  useEffect(() => {

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          faqRef.current.style.backgroundColor = '#1C1953'
        } else {
          faqRef.current.style.backgroundColor = '#635BFF';
        }
      })
    }, options)

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    }
  }, []);

  return (
    <FormProvider>
      <ButtonWhatsapp />
      <Navbar />
      <Hero />
      <Features />
      <Routes>
        <Route path='/*' element={<Portfolio />} />
          <Route
          />
      </Routes>
      <Process />
      <Footer />
      <ContactForm />
    </FormProvider>
  )
}

export default App
