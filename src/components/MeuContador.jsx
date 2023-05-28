import { useState } from "react"

export default function MeuContador() {

    const [contador, setContador] = useState(0)

    function adicionar() {
        setContador(contador + 1)

    }

    function subtrair() {
        setContador(contador - 1)
    }

    return (
        <div className="container">
            <h3>Meu contador: {contador}</h3>
            {contador > 9 ? <p>Valor muito grande!</p> : null}
            {contador < 2 ? <p>Valor muito pequeno!</p> : null}
            <div className="buttons">
                <button onClick={subtrair}>Subtrair</button>
            <button onClick={adicionar}>Adicionar</button>
            </div>
            
        </div>
    )
}