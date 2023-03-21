import { ContentHome, HomeContainer, ImageHome } from "./styles";
import { Heart, InstagramLogo, TiktokLogo } from "phosphor-react";
import FotoPerfil from '../../assets/foto-thauany.jpg';

export function Home() {
    return (
        <HomeContainer id="/home">
            <ContentHome>
                <h1>
                    Olá pessoal !
                </h1>
                <p>Sou profissional de design de sobrancelhas e maquiagem.</p>                 
                <p>
                    Me sigam nas redes sociais e acompanhem meu trabalho.
                    <Heart size={24} color="#fde047" />
                </p>
                <span>
                    <a href="https://www.tiktok.com/@thata_barbosa4" target="__blank">
                        <TiktokLogo size={32} />
                        tiktok
                    </a>
                    <a href="https://www.instagram.com/beauty_boss04/" target="__blank">
                        <InstagramLogo size={32} />
                        instagram
                    </a>
                </span>
            </ContentHome>
            <ImageHome>
                <img src={FotoPerfil} />
            </ImageHome>
        </HomeContainer>
    )
}