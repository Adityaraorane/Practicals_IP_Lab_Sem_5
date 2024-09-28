import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ProfilePage from './pages/ProfilePage';
import './styles/App.css'; 

function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainApp />
      </Router>
    </ThemeProvider>
  );
}

const MainApp = () => {
  const { theme } = useTheme(); 

  return (
    <div className={`app-container ${theme}`}> 
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
