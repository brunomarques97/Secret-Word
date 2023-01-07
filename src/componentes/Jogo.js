import "./Jogo.css";

  export const Jogo = ({verificarLetras}) => {
  return (
    <div>
      <h1>Jogo</h1>
      <button onClick={verificarLetras}>Finalizar jogo</button>
    </div>
  )
}
