import { WhatsappLogo } from "phosphor-react";
import { ButtonContainer } from "./styles";

export function Button() {
  return (
    <ButtonContainer>
      <a href="https://wa.me/556798362110" target="__blank">
        <button>
          Agende agora
          <WhatsappLogo size={24} color="#84cc16" />
        </button>
      </a>
    </ButtonContainer>
  )
}