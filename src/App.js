import React from "react";
import { CentralBody, LeftFloatView, Header, Footer } from "./Components/AppContent";

function App() {
  return (
    <div className="App">

    {/* Left View
    <div className="left-float-view">
        <LeftFloatView />
    </div> */}

    {/* Central View */}
      <div className="central-view">
      <Header />
      <CentralBody />       
        <Footer />
      </div>
    </div>
  );
}

export default App;