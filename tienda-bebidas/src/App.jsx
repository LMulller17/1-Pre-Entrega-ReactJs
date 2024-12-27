import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListConteiner texto= "¡Explora nuestros productos!"/>
    </div>
  )
}

export default App
