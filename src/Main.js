import Stories from "./Stories"
import Navegacao from "./Navegacao"
import Footer from "./Footer"
import Aside from "./Aside"

export default function Main () {
    return (
    <main>
        <div class="pagina">
            <Stories />
            <Navegacao />
            <Footer />
        </div>
        <Aside />        
    </main>
    )
}