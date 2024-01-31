import React from 'react'
import '../style/PdpPage.css'
import Header from "../components/Header"
import Gallary from '../components/Gallary'
import PdpCard from '../components/PdpCard'
import Slider from '../components/Slider'
import FromOur from '../components/FromOur'
function PdpPage() {
  return (
    <main >

<Header />
<Gallary />
<PdpCard/>
<Slider />
<FromOur/>


    </main>
  )
}

export default PdpPage
