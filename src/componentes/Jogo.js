import "./Jogo.css";

  export const Jogo = ({verificarLetras}) => {
  return (
    <div className="game">
      <p className="pontos">
         <span>Pontuação:000</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tipo">
        Dica sobre a palavra:<span>dica...</span>
      </h3>   
      <div className="conteiner">
        <span className="letra">a</span>
        <span className="quadrobranco">b</span>
      </div>
      <div className="boxLetra">
        <p>Tente adivinhar a letra da palavra:</p>
        <form>
          <input type="text" name="letra" maxLength="1" required/>
          <button>Jogar</button>
        </form>
      </div>
      <div className="letrasErradas"></div>
        <p>Letras ja utilizadas:</p>
        <span>a,</span>
        <span>b,</span>
    </div>
  )
}
