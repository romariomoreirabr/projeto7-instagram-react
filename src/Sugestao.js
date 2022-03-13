export default function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="sugestao-imagem-texto">
                <img src={props.src} alt={props.alt} />
                <div class="sugestao-texto">
                    <strong class="sidebar-conta">{props.conta}</strong>
                    <span>{props.status}</span>
                </div>
            </div>
            <div class="sugestao-seguir">
                <span>Seguir</span>
            </div>
        </div>
    )
}