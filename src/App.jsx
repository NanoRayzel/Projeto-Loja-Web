import './App.css'
import CaixaProduto from './caixaProduto'
import { ShoppingCart, Heart } from 'lucide-react'

function App() {
  return (
    <>
      <header>
        <h1>Lolja</h1>
        <hr />
      </header>
      

      <div id='D-1'>
        <button onClick= {() => console.log("Clicou")} >Início</button>
        <button onClick= {() => console.log("Clicou")}>Produtos</button>
        <button onClick= {() => console.log("Clicou")}> Afins</button>
        <button onClick= {() => console.log("Clicou")}> Mais Sobre</button>
      </div>

      

      <section id='foda'>
        <CaixaProduto Nome='Boga' Valor='10' />
        <CaixaProduto Nome="Camisa" Valor='50'/>
        <CaixaProduto Nome='Crack' Valor='17' />
        <CaixaProduto Nome='Pedra' Valor='42' />
        <CaixaProduto Nome='Relógio' Valor='57' />
        <CaixaProduto Nome='Bolsa' Valor='39' />
        <CaixaProduto Nome='Sapato' Valor='67' />
        <CaixaProduto Nome='Copo' Valor='69' />
      </section>

      <section id='foda'>
        <CaixaProduto Nome='Boga' Valor='10' />
        <CaixaProduto Nome="Camisa" Valor='50'/>
        <CaixaProduto Nome='Crack' Valor='17' />
        <CaixaProduto Nome='Pedra' Valor='42' />
        <CaixaProduto Nome='Relógio' Valor='57' />
        <CaixaProduto Nome='Bolsa' Valor='39' />
        <CaixaProduto Nome='Sapato' Valor='67' />
        <CaixaProduto Nome='Copo' Valor='69' />
      </section>

      <section id='foda'>
        <CaixaProduto Nome='Boga' Valor='10' />
        <CaixaProduto Nome="Camisa" Valor='50'/>
        <CaixaProduto Nome='Crack' Valor='17' />
        <CaixaProduto Nome='Pedra' Valor='42' />
        <CaixaProduto Nome='Relógio' Valor='57' />
        <CaixaProduto Nome='Bolsa' Valor='39' />
        <CaixaProduto Nome='Sapato' Valor='67' />
        <CaixaProduto Nome='Copo' Valor='69' />
      </section>
    </>
  )
}

export default App
