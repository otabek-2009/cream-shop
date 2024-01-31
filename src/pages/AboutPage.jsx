import React from 'react'
import Abaut from '../components/Abaut';
import HeroItem from '../components/HeroItem';
import bgimg from  '../image/collectionPage.png'   
function AboutPage() {
  return (
    <main>
      <HeroItem bgImg={bgimg} title="Lorem ipsum" text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum" />
 <Abaut /> 
    </main>
  )
}

export default AboutPage
