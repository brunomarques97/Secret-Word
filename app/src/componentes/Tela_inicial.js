import "./Tela_inicial.css";

const Telainicial=({jogar})=>{
    return(
        <div classeName="start">
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={jogar}>Começar o jogo</button>
        </div>
    )
};

export default Telainicial;