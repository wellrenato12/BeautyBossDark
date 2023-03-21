import { DesignContainer, ImageDesign, TextDesign } from "./styles";
import Sobrancelha from '../../assets/sobrancelha1.png'
import { Button } from "../Button";

export function Design() {
    return (
        <DesignContainer id="/design">
            <TextDesign>
                <h1>
                    Design de Sobrancelhas
                </h1>
                <p>
                    <strong>Atendimento de segunda a sábado.</strong>
                </p>
                <p></p>
                <p>Click no botão abaixo e me envie uma mensagem para agendarmos.</p>
                <Button />
            </TextDesign>
            <ImageDesign>
                <img src={Sobrancelha} />
            </ImageDesign>
        </DesignContainer>
    )
}