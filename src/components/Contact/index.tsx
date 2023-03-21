import { ContactContainer } from "./styles";
import iconeSobrancelha from '../../assets/íconeSobrancelha.png';
import iconeMakeup from '../../assets/íconeMakeup.png';
import { InstagramLogo, TiktokLogo, WhatsappLogo } from "phosphor-react";

export function Contact() {
    return (
        <ContactContainer id="/contact">
            <nav>
                <ul>
                    <li>
                        Designer de Sobrancelhas
                        <img src={iconeSobrancelha} />
                    </li>
                    <li>
                        Maquiadora Profissional
                        <img src={iconeMakeup} />
                    </li>
                </ul>
                <ul>
                    <li>
                        <strong>Contatos:</strong>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/beauty_boss04/" target="__blank">
                            Instagram
                            <InstagramLogo size={20} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@thata_barbosa4" target="__blank">
                            TikTok
                            <TiktokLogo size={20} />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/556798362110" target="__blank">
                            WhatsApp
                            <WhatsappLogo size={20} />
                        </a>
                    </li>
                </ul>
            </nav>
        </ContactContainer>
    )
}