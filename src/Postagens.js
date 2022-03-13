import Post from "./Post";

export default function Postagens() {
    const posts = [
        {
            srcMiniaturaPerfil: "./imagens/meowed 2.svg",
            perfil: "meowed",
            srcPostagem: "./imagens/img1.jpg",
            altPost: "img1",
            informacoes: {
                srcInformacoes: "./imagens/respondeai 2.svg",
                altInformacoes: "respondeai",
                perfilInformacoes: "respondeai",
                curtidas: 101.523
            }
        },
        {
            srcMiniaturaPerfil: "./imagens/meowed 2.svg",
            perfil: "meowed",
            srcPostagem: "./imagens/img2.jpg",
            altPost: "img2",
            informacoes: {
                srcInformacoes: "./imagens/respondeai 2.svg",
                altInformacoes: "respondeai",
                perfilInformacoes: "respondeai",
                curtidas: 700.832
            }
        },
        {
            srcMiniaturaPerfil: "./imagens/meowed 2.svg",
            perfil: "meowed",
            srcPostagem: "./imagens/img3.jpg",
            altPost: "img3",
            informacoes: {
                srcInformacoes: "./imagens/respondeai 2.svg",
                altInformacoes: "respondeai",
                perfilInformacoes: "respondeai",
                curtidas: 564.221
            }
        }
    ];

    return (
        <div>
            {posts.map((post) => {
                return Post(post);
            })}
        </div>
    )
}