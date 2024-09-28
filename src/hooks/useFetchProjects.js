import { useEffect, useState } from 'react';

const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProjects([
        { 
          name: 'Portfolio Website', 
          description: 'A personal website to showcase my work, skills, and experiences to potential employers and clients.', 
          link: 'https://myportfolio.com' 
        },
        { 
          name: 'E-commerce App', 
          description: 'A fully-functional e-commerce platform that allows users to browse products, add to cart, and complete purchases online.', 
          link: 'https://myecommerceapp.com' 
        },
        { 
          name: 'Blog Website', 
          description: 'A platform to share my thoughts, articles, and tutorials on various topics including technology, web development, and more.', 
          link: 'https://myblog.com' 
        },
        { 
          name: 'Weather App', 
          description: 'A weather forecasting application that displays real-time weather conditions and forecasts based on user location.', 
          link: 'https://myweatherapp.com' 
        },
        { 
          name: 'Task Manager', 
          description: 'A task management tool that helps users organize and prioritize their tasks effectively for better productivity.', 
          link: 'https://mytaskmanager.com' 
        },
        { 
          name: 'Recipe Finder', 
          description: 'An app that helps users find delicious recipes based on ingredients they have at home, reducing food waste.', 
          link: 'https://myrecipefinder.com' 
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return { projects, loading, error };
};

export default useFetchProjects;
