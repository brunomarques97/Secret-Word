// css
import './App.css';
//react
import {useCallback, useEffect, useState} from "react";

//data
import {wordslist} from './data/words';

//componentes
import Tela_inicial from './componentes/Tela_inicial';
import { Jogo } from './componentes/Jogo';
import { Fim } from './componentes/Fim';

const estagio =[
  {id:1,name:"começo"},
  {id:2,name:"jogo"},
  {id:3,name:"fim"},
];
//numero de chances
const numeroChances=5

function App() {
  const[estagiogame, setestagiogame ]= useState(estagio[0].name);
  const[words] =useState(wordslist);

  const[WordEscolhido, setwordEscolhido ]= useState("");
  const[categoria, setcategoria ]= useState("");
  const[letras, setletras ]= useState([]);

  const[letrasAdivinhadas, setletrasAdivinhadas ]= useState([]);
  const[letrasErradas, setletrasErradas]= useState([]);
  const[chances, setchances]= useState(numeroChances);
  const[pontuacao, setpontuacao]= useState(0);

  const WordEscolhidoEcategoria=()=>{
    //escolhe a categoria aleatoria
    const category=Object.keys(words)
    const categoria =category[Math.floor(Math.random()* Object.keys(category).length)];

    //escolhe a palavra aleatoria
    const word =words[categoria][Math.floor(Math.random()*words[categoria].length)];

    return {word,categoria};
  };

  //comeco do jogo
  const startGame =()=>{
    //escolhe o word e escolhe a categoria
    const{word,categoria} =WordEscolhidoEcategoria();

    //cria uma array das letras
    let wordLetras=word.split("");

    wordLetras=wordLetras.map((l)=> l.toLowerCase());
    // preencher estados
    setwordEscolhido(word);
    setcategoria(categoria);
    setletras(wordLetras);

    setestagiogame(estagio[1].name)
  };
  // processo de letras
  const  verificarLetras=(letra)=>{
    const normalizarletra= letra.toLowerCase()

    //verifique se a letra já foi utilizada
    if(
      letrasAdivinhadas.includes(normalizarletra) || 
      letrasErradas.includes(normalizarletra)
      ){
        return;
      }

      //empurra a letra adivinhada ou remove o palpite
      if(letras.includes(normalizarletra)){
        setletrasAdivinhadas((chancesAtuais)=>[
          ...chancesAtuais,
          normalizarletra,
        ]);
      }else{
        setletrasErradas((errosAtuais)=>[
          ...errosAtuais,
          normalizarletra,
        ]);

        setchances((chancesAtuais)=>chancesAtuais-1);
      }
  };
  const limparLetras=()=>{
    setchances([])
    setletrasErradas([])
  }

  useEffect(()=>{
    if(chances<=0){
      //Redefinir estagio
      limparLetras()

      setestagiogame(estagio[2].name);
    }

},[chances])

  //reiniciar o jogo
  const reiniciar =()=>{
    setpontuacao(0);
    setchances(numeroChances);

    setestagiogame(estagio[0].name)
  };

  return (
    <div className="App">
      {estagiogame === 'começo' && <Tela_inicial startGame={startGame}/>}
      {estagiogame === 'jogo' && (
      <Jogo 
        verificarLetras={verificarLetras}
        WordEscolhido={WordEscolhido}
        categoria={categoria}
        letras={letras}
        letrasAdivinhadas={letrasAdivinhadas}
        letrasErradas={letrasErradas}
        chances={chances}
        pontuacao={pontuacao}
        />
      )}
      {estagiogame === 'fim' && <Fim reiniciar={reiniciar}/>}
    </div>
  );
}

export default App;
