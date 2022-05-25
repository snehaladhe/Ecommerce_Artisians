import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Header from "./components/headers/Header";
import MainPages from "./components/mainpages/Pages";
import Footer from "./components/mainpages/footer";
import Slider from "./components/mainpages/Slider";
function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          {/* <Slider /> */}
          <MainPages />
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
