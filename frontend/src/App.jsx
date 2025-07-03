import { useState } from 'react'
import './App.css'
import { Cards } from './components/Cards'
import { CreateCard } from './components/CreateCard'

function App() {
  const[cards,setCards] = useState([])

  // fetch("http://localhost:3000/cards")
  // .then(async function(res){
  //   const json = await res.json();
  //   setCards(json.cards);
  // })
  

  return (
    <>
    <CreateCard/>
    <Cards cards={[
      {
        Name : "Tom Cruise",
        Description : "Actor,Stunt and Risk",
        SocialMediaLinks :  <a href="https://linkedin.com/in/tommy">LinkedIn</a>,
        Interest : "Action Movie only"
      }
    ]}></Cards>
    </>
  )
}

export default App
