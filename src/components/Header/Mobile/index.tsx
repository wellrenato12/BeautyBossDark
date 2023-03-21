import { X } from "phosphor-react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { MobileContainer } from "./styles"

interface MobileProps {
    menuIsVisible: boolean;
    handleMenuIsVisible: (isVisible: boolean) => void;
}

export function Mobile({ menuIsVisible, handleMenuIsVisible }: MobileProps) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible])
    return (
        <MobileContainer menuIsVisible={menuIsVisible}>
            <X size={45} color="#18181b" onClick={() => handleMenuIsVisible(false)} />
            <nav>
                <div>
                    <ul>
                        <li>
                            <Link
                                onClick={() => handleMenuIsVisible(false)}
                                to="/home"
                                spy={true}
                                smooth={true}
                                offset={-250}
                                duration={1000}
                            >
                                Sobre
                            </Link>
                        </li>

                        <li>
                            <Link
                                onClick={() => handleMenuIsVisible(false)}
                                to="/design"
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={1000}
                            >
                                Sobrancelha
                            </Link>
                        </li>

                        <li>
                            <Link
                                onClick={() => handleMenuIsVisible(false)}
                                to="/makeup"
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={1000}
                            >
                                Maquiagem
                            </Link>
                        </li>

                        <li>
                            <Link
                                onClick={() => handleMenuIsVisible(false)}
                                to="/contact"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={1000}
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </MobileContainer>
    )
}