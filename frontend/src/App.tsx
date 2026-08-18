import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axiosClient from './api/axiosClient';

function App() {
  const [backendMessage, setBackendMessage] = useState<string>('Loading from backend...');

  useEffect(() => {
    // Test API connection
    axiosClient.get('/test/hello')
      .then((res: any) => {
        setBackendMessage(res.message || 'Connected successfully!');
      })
      .catch((err) => {
        console.error(err);
        setBackendMessage('Failed to connect to backend.');
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          Mock Test Platform
        </h1>
        <p className="text-gray-600 mb-6">
          TailwindCSS, Redux Toolkit, React Router, and Axios are successfully configured!
        </p>
        
        <div className="bg-indigo-50 p-4 rounded text-indigo-700 font-medium mb-4">
          <p className="text-sm text-gray-500 mb-1">Backend Connection Status:</p>
          {backendMessage}
        </div>

        <Routes>
          <Route path="/" element={<div className="text-gray-400 text-sm">Home Route Active</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
