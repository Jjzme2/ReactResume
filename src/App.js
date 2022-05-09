//Actual App Display code is put here.

import React from "react";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import SkillCard from "./Components/SkillCard"
// import {Footer, Header, Note} from './PageElements';

function App() {
  return (
    <div className="App">
    <Header />
    <SkillCard title="Title" content="Content" />
    <Footer />
    </div>
  );
}

export default App;
