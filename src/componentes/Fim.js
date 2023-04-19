import './Fim.css';

export const Fim = ({reiniciar,pontuacao}) => {
  return (
    <div>
        <h1>Fim</h1>
        <h3>A sua pontuação foi: <span>{pontuacao}</span></h3>
        <button onClick={reiniciar}>Reiniciar jogo</button>
    </div>
  )
}
