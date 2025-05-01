import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import { Layout } from 'antd';
import { useState } from 'react';

const { Content } = Layout;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Layout className={isDarkMode ? 'dark-mode' : ''}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Content>
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
