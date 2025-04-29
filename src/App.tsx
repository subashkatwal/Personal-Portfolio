import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import CustomCursor from './components/UI/CustomCursor';

function App() {
  useEffect(() => {
    // Set dark mode by default on initial load
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <CustomCursor />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
