import NavBar from "../src/Component/NavBar"
import Hero from "../src/Component/Hero"
import Card from "../src/Component/Card"
import data_item from "../src/data"
import './App.css'



function App() {
const data = data_item.map(item => {
  return (
        <Card
          key={item.id} 
          {...item}
        />
        )
})

  return (

      <div>
          <NavBar />
          <Hero />
          <section className="cards-list">
            {data}
          </section>
        
      </div>
      

  )
}

export default App
