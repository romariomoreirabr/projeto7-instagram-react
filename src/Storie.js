export default function Storie(props) {
    return (
        <div class="storie">
            <div class="conjunto">
                <img class="storie-imagem" src = {props.imagem} alt={props.textoAlternativo} />
            </div>
            <small>{props.descricao}</small>
        </div>
    )
}


