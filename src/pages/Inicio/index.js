import Banner from "../../componentes/Banner"
import Cabecalho from "../../componentes/Cabecalho"
import Rodape from "../../componentes/Rodape"
import Titulo from "../../componentes/Titulo"

const Inicio = () => {
    return (
        <main>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus videos e filmes!</h1>
            </Titulo>
            <Rodape />
        </main>
    )
}

export default Inicio