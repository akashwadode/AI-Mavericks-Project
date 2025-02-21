// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className="home-page">
//       <h1>AI Disease Detector</h1>
//       <p>Welcome to our AI-powered disease detection platform.</p>
//       <button onClick={() => window.location.href="/model-options"}>Get Started</button>
//     </div>

//     </>
//   )
// }

// export default App
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Import your pages
import Another from './pages/Another';
import ModelOptionsPage from './pages/ModelOptionPage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/option" element={<ModelOptionsPage />} />
      <Route path="/another" element={<Another />} />

    </Routes>
  );
}

export default App;
