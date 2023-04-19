import { useState,useRef } from "react";
import "./Jogo.css";

  export const Jogo = ({
    verificarLetras,
    WordEscolhido,
    categoria,
    letras,
    letrasAdivinhadas,
    letrasErradas,
    chances,
    pontuacao,
  }) => {

    console.log(categoria)
    console.log(WordEscolhido)
    console.log(letras)

    const [letra, setletra] =useState("");
    const letraInput =useRef(null);
    const receberEnviar=(e)=>{
      e.preventDefault();

      verificarLetras(letra)

      setletra("");

      letraInput.current.focus();
    };

  return (
    <div className="game">
      <p className="pontos">
         <span>Pontuação: {pontuacao}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tipo">
        Dica sobre a palavra:<span>{categoria}.</span>
      </h3>
      <p>Você ainda tem {chances} tentativas</p>
      <div className="conteiner">
        {letras.map((letras,i)=>(
           letrasAdivinhadas.includes(letras)? (
              <span key={i} className="letra">
                {letras}
              </span>
            ):(
              <span key={i} className="quadrobranco"></span>
            )
        ))}      
      </div>
      <div className="boxLetra">
        <p>Tente adivinhar a letra da palavra:</p>
        <form onSubmit={receberEnviar}>
          <input type="text" name="letra" maxLength="1" required onChange={(e)=>setletra(e.target.value)} value={letra} ref={letraInput}/>
          <button>Jogar</button>
        </form>
      </div>
      <div className="letrasErradas"></div>
        <p>Letras ja utilizadas:</p>
        {letrasErradas.map((letras,i)=>(
          <span key={i}>{letras}, </span>
        ))}
    </div>
  )
}
