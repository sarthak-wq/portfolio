import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import { Layout } from 'antd';
import { useEffect } from 'react';

const { Content } = Layout;

function App() {
  // Always enforce dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Layout className="min-h-screen bg-backgroundDark">
      <Navbar />
      <Content>
        <Hero isDarkMode={true} />
        <About isDarkMode={true} />
        <Timeline isDarkMode={true} />
        <Projects isDarkMode={true} />
        <Contact isDarkMode={true} />
      </Content>
    </Layout>
  );
}

export default App;
