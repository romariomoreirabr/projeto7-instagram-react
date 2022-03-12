import Storie from "./Storie"

export default function Stories() {
    return (
        <div class="stories">
            {stories.map(storie => {
                return Storie(storie)
            })}
            <div class="setinha">
                <img src="./imagens/chevron-forward-circle 1.svg" alt="chevron-forward-circle" />
            </div>
        </div>
    )
}

const stories = [
    {
        imagem: "./imagens/9gag 1.svg",
        textoAlternativo: "9gag",
        descricao: "9gag"
    },
    {
        imagem: "./imagens/meowed 1.svg",
        textoAlternativo: "meowed",
        descricao: "meowed"
    },
    {
        imagem: "./imagens/barked 1.svg",
        textoAlternativo: "barked",
        descricao: "barked"
    },
    {
        imagem: "./imagens/nathanwpylestrangeplanet 1.svg",
        textoAlternativo: "nathanwpyle",
        descricao: "nathanwpyle"
    },
    {
        imagem: "./imagens/wawawiwacomicsa 1.svg",
        textoAlternativo: "wawawiwacomicsa",
        descricao: "wawawiwacomicsa"
    },
    {
        imagem: "./imagens/respondeai 1.svg",
        textoAlternativo: "respondeai",
        descricao: "respondeai"
    },
    {
        imagem: "./imagens/filomoderna 1.svg",
        textoAlternativo: "filomoderna",
        descricao: "filomoderna"
    },
    {
        imagem: "./imagens/9gag 1.svg",
        textoAlternativo: "9gag",
        descricao: "9gag"
    }
]
