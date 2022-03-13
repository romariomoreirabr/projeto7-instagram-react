export default function Usuario(props) {
    
    const {nick, nome, imagem, altImagem} = props;

    return (
        <div class="sidebar-topo">
            <div class="sidebar-topo-imagem">
                <img src={imagem} alt={altImagem} />
            </div>
            <div class="sidebar-topo-texto">
                <strong class="sidebar-conta">{nick}</strong>
                <br />
                <small>{nome}</small>
            </div>
        </div>
    )
}