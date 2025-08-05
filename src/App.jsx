import { useState } from 'react'
import './app.css'

function App() {
  const [mesas, setMesas] = useState(10)

  function entrada (){
    if (mesas == 0){
      alert("Todas as mesas estão ocupadas. Favor, aguarde")
      return      
    }
        
    const num = mesas - 1
    setMesas(num)
  }
  
  function saida(){
    if (mesas == 10){
      alert("Não há mesas ocupadas.")
      return
    }  
    
    const num = mesas + 1
    setMesas(num)
  }

  return (
    <>
      <h1 className='vermelho'>Restaurante Zanatta</h1>
      <h2>Controle de Mesas Ocupadas</h2>
      <img src="./buffet.png" alt="Restaurante" />
      <h2>
        Mesas Disponíveis: {mesas} - Mesas Ocupadas: {10-mesas}
      </h2>
      <button onClick={entrada}>Entrada de Cliente</button>
      <button onClick={saida}>Saída de Cliente</button>
    </>   
  )
}


export default App
