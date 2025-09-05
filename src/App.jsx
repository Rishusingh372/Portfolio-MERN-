import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Hero from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ContactForm from './components/ContactForm';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import ProjectCard from './components/ProjectCard';
import Testimonials from './sections/Testimonials';
import Skills from './sections/Skills';
import HeroSection from './sections/HeroSection';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import AuthContextTest from './context/AuthContextTest';

function HomePage() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="bg-black text-white scroll-smooth">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/contact-form" element={<ContactForm />} />
            <Route path="/auth-test" element={<AuthContextTest />} />
            <Route
              path="/project-card"
              element={
                <ProjectCard
                  project={{
                    id: 0,
                    title: 'Demo Project',
                    desc: 'Placeholder description.',
                    img: '/images/demo.png',
                    url: '#',
                  }}
                />
              }
            />
            <Route path="*" element={<Hero />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;