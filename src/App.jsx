import Footer from "@design-system/layout/Footer";
import Navbar from "@design-system/navigation/Navbar";
import HomePage from "@design-system/pages/HomePage";

import "@assets/styles/main.css";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
