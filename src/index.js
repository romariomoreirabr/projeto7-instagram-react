import ReactDom from "react-dom"
import Header from "./Header"
import Main from "./Main";

function Iniciar () {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

ReactDom.render(<Iniciar />, document.querySelector(".root"));
