import { Outlet } from "react-router-dom"
import Cabecalho from "../../componentes/Cabecalho"
import Container from "../../componentes/Container"
import FavoritosProvider from "../../contextos/Favoritos"
import Rodape from "../../componentes/Rodape"

const PaginaBase = () => {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase