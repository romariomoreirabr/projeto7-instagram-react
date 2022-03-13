export default function Post (props) {
    return (
        // Essa div foi adicionada
        <div>
            <div class="post">
                <div class="post-cabecalho">
                    <div class="cabecalho-esquerdo">
                        <img class="perfil" src={props.srcMiniaturaPerfil} alt={props.perfil} />
                        <strong>{props.perfil}</strong>
                    </div>
                    <div class="cabecalho-direito">
                        <img class="ellipsis-horizontal" src="./imagens/ellipsis-horizontal.svg" alt="ellipsis-horizontal" />
                    </div>
                </div>
                <div class="post-imagem">
                    <img src={props.srcPostagem} alt={props.altPost} />
                </div>
                <div class="post-reacoes">
                    <div class="post-icones">
                        <div class="icones-esquerdo">
                            <img class="icone" src="./imagens/heart-outline.svg" alt="heart-outline" />
                            <img class="icone" src="./imagens/chatbubble-outline.svg" alt="chatbubble-outline" />
                            <img class="icone" src="./imagens/paper-plane-outline.svg" alt="paper-plane-outline" />
                        </div>
                        <div class="icones-direito">
                            <img class="icone" src="./imagens/bookmark-outline.svg" alt="bookmark-outline" />
                        </div>
                    </div>
                    <div class="post-informacao">
                        <img src={props.informacoes.srcInformacoes} alt={props.informacoes.altInformacoes} />
                        <p>Curtido por &nbsp; <strong>{props.informacoes.perfilInformacoes} &nbsp;</strong> e &nbsp;<strong>outras {props.informacoes.curtidas} pessoas</strong></p>
                    </div>
                </div>
            </div>
            <div class="entrepost"></div>
        </div>
    )
}