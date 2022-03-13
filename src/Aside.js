import Usuario from "./Usuario"
import Sugestao from "./Sugestao"

export default function Aside () {
    const usuario = {
        nick: "catanacomics",
        nome: "Catana",
        imagem: "./imagens/catanacomics 1.svg",
        altImagem: "catanacomics"
    }
    const sugestoesParaSeguir = [
        {
            src: "./imagens/badvibesmemes 1.svg",
            alt: "badvibesmemes",
            conta: "bad.vibes.memes",
            status: "Segue você"
    
        },
        {
            src: "./imagens/chibirdart 1.svg",
            alt: "chibirdart",
            conta: "chibirdart",
            status: "Segue você"
    
        },
        {
            src: "./imagens/adorableanimals 1.svg",
            alt: "adorable_animals",
            conta: "adorable_animals",
            status: "Segue você"
    
        },
        {
            src: "./imagens/smallcutecats 1.svg",
            alt: "smallcutecats",
            conta: "smallcutecats",
            status: "Segue você"
    
        }

    ]

    return (
        <aside>
            {Usuario (usuario)}
            <div class="sidebar-meio">
                <div class="sugestoes">
                <strong>Sugestões para você</strong>
                <spam>Ver tudo</spam>
                </div>
                {sugestoesParaSeguir.map((sugestao) => {
                    return (
                        Sugestao(sugestao)
                    )
                })}
            </div>
            <div class="sidebar-sobre">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags • 
                    Idioma</p>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </aside>
    )
}