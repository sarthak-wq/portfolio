import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import { Layout } from 'antd';
import { useState, useEffect } from 'react';

const { Content } = Layout;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Layout className={`relative min-h-screen ${isDarkMode ? 'bg-backgroundDark' : 'bg-backgroundLight'}`}>
      <div className={`futuristic-grid-background ${isDarkMode ? 'dark-mode-grid' : 'light-mode-grid'}`}></div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Content style={{ background: 'transparent' }}>
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Timeline isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </Content>
    </Layout>
  );
}

export default App;