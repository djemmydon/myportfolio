import React from 'react'
import Hero from "./Component/Hero";
import Tools from "./Component/Tools";
import HomeProject from "./Component/HomeProject";

function Home() {
  return (
      <div>
                 <Hero />
        <Tools />
        <HomeProject/>
    </div>
  )
}

export default Home