import {SignedIn, SignedOut, SignOutButton, SignInButton, UserButton} from '@clerk/clerk-react';
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    // <h1 className="text-red-500 bg-orange-400 p-10 text-3xl">Welcome to the app</h1>
    <Routes>
      
      <Route path="/" element={ <HomePage/> } />
      <Route path="/about" element={ <AboutPage/> } />
      
    </Routes>
    
  )
}

export default App;
