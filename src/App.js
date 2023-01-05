// css
import './App.css';
//react
import {useCallback, useEffect, useState} from "react";

//data
import {wordslist} from "./data/words";

//componentes
import Tela_inicial from './componentes/Tela_inicial';
import { Jogo } from './componentes/Jogo';
import { Fim } from './componentes/Fim';

const estagio =[
  {id:1,name:"começo"},
  {id:2,name:"jogo"},
  {id:3,name:"fim"},
];

function App() {

  const[estagiogame, setestagiogame ]=useState(estagio[0].name);

  return (
    <div className="App">
      {estagiogame === 'começo' && <Tela_inicial/>}
      {estagiogame === 'jogo' && <Jogo/>}
      {estagiogame === 'fim' && <Fim/>}
    </div>
  );
}

export default App;
