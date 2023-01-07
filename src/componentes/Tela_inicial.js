import "./Tela_inicial.css";

const Tela_inicial=({startGame})=>{
    return(
        <div classeName="start">
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={startGame}>Começar o jogo</button>
        </div>
    )
};

export default Tela_inicial;