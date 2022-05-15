//Actual App Display code is put here.

import React from "react";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import {SkillCard, GhostCard} from "./Components/Cards"
import {ListItemBlock, SectionBlock, QuoteBlock} from "./Components/Blocks"

import skills from "./skills";

function createSkillCard(sc){
    return <SkillCard
    name={sc.name}
    yearStarted={sc.yearStarted}
    />
}



function App() {
  return (
    <div className="App">
      <div className="central-view">
        <Header />

        {/* Skills */}
        <h1 className="skill-title">Skills</h1>

        <div className="skill-area">
            {skills.map(createSkillCard)}
        </div>

        <div className="ghost-block">
          <GhostCard
            title="Who I am"
            content="Hi, it's nice to meet you, my name is John Zettler Jr, and I go by Jj (John Jr). I am a father and husband first and foremost,
            but I love programming. I have been working on my skills as a programmer since 2015, when I was introduced to Unity3D, and I've loved creating
            worlds ever since. Recently I began transitioning from Video Games to Web development, and I've had a very fun ride learning many different
            components of web development."
          />

          <GhostCard
            title="What I want"
            content="Big picture: To change the world, and make it more comfortable for people to welcome their natural talents and interests.
            I think, too often, people get comfortable in their position and where they might 'fit in' and deny themselves the chance to grow into
            what they otherwise might become. More immediately though, I would really like to get a job as a web developer to sharpen my skills in this field, the best 
            way, I think, for me to reach the world is through technology."
          />
        </div>


        <ListItemBlock
        title="What I offer"
        content="Aside from the skills listed above, which, admittedly, I can continue to grow in, I offer a variety of what I would consider 
        highly valuable traits that could be challenging for some people to bring to the table."
        listContent={[
          {title:"💡I'm Smart.", quote: "“Everybody is a genius. But if you judge a fish by its ability to climb a tree it will live its whole life believing that it is stupid.” ~Albert Einstein", description:"With this in mind, please understand that although I believe this to be true, my intelligence can't be determined, or confined to a single area. There are many things I don't know, and I would love to learn, but I do learn quickly and I do take the time to learn new topics well."},
          {title:"🌱I adapt and grow.", quote: "“Yeah, next sh!* I'm about to say is obvious, but criticism's worth some more than compliments” ~G-Eazy", description:"I believe only through struggle can we grow. I choose to see struggle as a challenge, and challenges give you the chance to grow. Too often, people see criticism as a negative, however, when taken constructively, criticism is an essential tool for growth."},
          {title:"🕟I'm patient.", quote: "“Patience is bitter, but its fruit is sweet.”  ~Aristotle", description:"I understand that good things come to those who wait, contrariwise, I also understand that the early bird catches the worm. I believe in balance, I think that everything comes with a degree of good and bad, or, rather, everything has benefit and loss with it, depending on perspective. Ultimately, the things we want will come, if we work toward achieving them, and have a little patience."},
          {title:"😎I work well under pressure.", quote: "“I don't ask how hard the work is, got a rough indestructible surface. Diamonds and platinum, I find 'em, I flatten 'em. I take what I'm handed, I break what's demanded”  ~Jessica Darrow *Encanto", description:"I have work experience in many fast-paced environments, and I find that even with pressure being applied, I keep my cool; that getting overwhelmed when the pressure is on only increases the liklihood of making a mistake. While I do try to perform well at all times, I have been told I work better with a little pressure."},
          {title:"💖I love.", quote: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”  ~Martin Luther King Jr.", description:"I'm a very positive person, I would fairly say 80% of the time, at a minimum, I'm a very happy person, and why wouldn't I be, I have a lot to be thankful for. I have an amazing wife, who supports me in everything I do, and is someone who wants to and understands growing in love. Someone who I love, and can love, and in return loves me, and can be loved by me, but still wants to grow, and help me grow. Additionally, I have been blessed with two of the greatest kids on the planet. The three of them can make me smile, no matter how bad something might seem. I digress. I love life, it is a very enjoyable experience, hardships and all. Like I said before, I think everything has good and bad, I choose to see the good, I think that is one of our greatest privileges as humans, being able to make that choice."},
          {title:"⭐I have a unique outlook on life.", quote: "“If the doors of perception were cleansed, everything would appear to man as it is, infinite.”  ~William Blake", description:"I've heard a lot that it's refreshing, admittedly, at times, I've also heard that I'm more than is needed, but always well-intending. I think a lot of that has been displayed in the previous paragraphs, so I won't go much more into it here."},     
          ]}
         />

         <QuoteBlock 
        quote="You take the blue pill... the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill... you stay in Wonderland, and I show you how deep the rabbit hole goes."
        author="Morpheus"
        />

        <p className="centered-text">Ready To Connect? Click my name to head to my LinkedIn.         <a className="centered-text" href="#top">⬆️</a></p>

        <Footer />
      </div>
    </div>
  );
}

export default App;