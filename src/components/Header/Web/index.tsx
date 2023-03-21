import { WebContainer } from "./styles";
import { Link } from 'react-scroll'
import { List } from "phosphor-react";
import Logo from '../../../assets/BeautyBoss.png';

interface WebProps {
    handleMenuIsVisible: (isVisible: boolean) => void;
}

export function Web({ handleMenuIsVisible }: WebProps) {
    const { innerWidth: width } = window;
    
    return (
        <WebContainer>
            <nav>
                <Link 
                    to="/home" 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={1000}
                >
                    <img src={Logo} alt="Logotipo" />
                </Link>
                <span>
                    <button>
                        <List size={32} onClick={() => handleMenuIsVisible(true)} />
                    </button>
                </span>
                <div>
                    <ul>
                        <li>
                            <Link 
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
                                to="/design" 
                                spy={true} 
                                smooth={true} 
                                offset={-250}
                                duration={1000}
                            >
                                Sobrancelha
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/makeup" 
                                spy={true} 
                                smooth={true} 
                                offset={-250}
                                duration={1000}
                            >
                                Maquiagem
                            </Link>
                        </li>

                        <li>
                            <Link 
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
        </WebContainer>
    )
}