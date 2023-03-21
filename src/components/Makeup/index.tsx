import { ImageMakeup, MakeupContainer, TextMakeup } from "./styles";
import { ArrowCircleRight } from "phosphor-react";
import MakeUp from '../../assets/makeup.png'
import { Button } from "../Button";

export function Makeup() {
    return (
        <MakeupContainer id="/makeup">
            <ImageMakeup>
                <img src={MakeUp} />
            </ImageMakeup>
            <TextMakeup>
                <h1>Maquiagens</h1>
                <p>
                    <strong>Acompanhe meu trabalho pelas redes sociais.</strong>
                </p>
                <section>
                    <a href="https://www.instagram.com/beauty_boss04/" target="__blank">
                        Instagram
                        <span><ArrowCircleRight size={20} /></span>
                    </a>
                </section>
                <section>
                    <a href="https://www.tiktok.com/@thata_barbosa4" target="__blank">
                        TikTok
                        <span><ArrowCircleRight size={20} /></span>
                    </a>
                </section>
                <Button />
            </TextMakeup>
        </MakeupContainer>
    )
}