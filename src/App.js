//Actual App Display code is put here.
require('dotenv').config()

import React from "react";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import {SkillCard} from "./Components/SkillCard"
import skills from "./skills";

function createSkillCard(sc){
    return <SkillCard
    name={sc.name}
    yearStarted={sc.yearStarted}
    />
}



function App() {
  return (
    <div className="view">
    <Header />
    <div className="skill-area">
    <h1>Skills</h1>
    <dl>{skills.map(createSkillCard)}</dl>

    </div>
    <Footer />
    </div>
  );
}

export default App;
