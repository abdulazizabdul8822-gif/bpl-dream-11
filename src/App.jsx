
import { Suspense } from 'react';
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

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
