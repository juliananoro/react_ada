import { useEffect, useState } from "react"

const minhaLista = [
    { id: '1', value: 'Fruta' },
    { id: '2', value: 'Legume' },
    { id: '3', value: 'Carne' }
]

export default function MinhaLista() {

    const [produtos, setProdutos] = useState(minhaLista)
    const [pesquisa, setPesquisa] = useState('')

    useEffect(
        () => {
            if (pesquisa) {
                const novaLista = minhaLista.filter((item) => {
                    return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                })
                setProdutos(novaLista)
            } else {
                setProdutos(minhaLista)
            }

        }
        , [pesquisa])

    return (
        <div>
            <h3>Minha Lista Efeitos Colaterais</h3>
            <input
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Pesquise aqui...">
            </input>
            {produtos.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.value}</p>
                    </div>
                )
            })}
        </div>
    )
}