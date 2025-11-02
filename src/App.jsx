import { useEffect, useState } from "react";

import Footer from "@design-system/layout/Footer";
import Navbar from "@design-system/navigation/Navbar";
import HomePage from "@design-system/pages/HomePage";

import "@assets/styles/main.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className={`app ${isLoading ? "loaded" : ""}`}>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
