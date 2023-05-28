import MeuComponente from "./components/MeuComponente"
import MeuBotao from "./components/MeuBotao"
import MeuContador from "./components/MeuContador"
import MinhaLista from "./components/MinhaLista"
import MinhasTarefas from "./components/MinhasTarefas"


function App() {

  return (
    <div>
      <div>
        <h1>Olá Mundo, React!</h1>
        <MeuComponente />
        <MeuBotao conteudo='me clique' />
        <MeuBotao conteudo='depois aqui' />
        <MeuBotao conteudo='e por fim aqui' />
      </div>

      <div>
        <MeuContador />
      </div>

      <div>
        <MinhaLista />
      </div>

      <div>
        <MinhasTarefas />
      </div>
    </div>
  )
}

export default App
