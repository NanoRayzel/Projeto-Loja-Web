import { ShoppingCart, Heart } from 'lucide-react'

function CaixaProduto({Valor, Nome}){
    return (
        <>
            <div id="Fudido">
                <h2> {Nome} </h2>
                <p> R$ {Valor} </p>
                <button> <ShoppingCart /> Comprar </button>
                <button> <Heart /> Favoritar </button>
            </div>
        </>
    )
}

export default CaixaProduto