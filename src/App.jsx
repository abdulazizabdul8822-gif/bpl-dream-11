
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/homePage/Banner/Banner'
import Players from './components/homePage/Banner/players/Players';
import NavBar from './components/NavBar/NavBar'

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(500000)

  return (
    <>
      <NavBar coin={coin}></NavBar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
    </>
  )
}

export default App
