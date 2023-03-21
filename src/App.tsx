import { ThemeProvider } from 'styled-components'
import { CarouselDesign } from './components/CarouselDesign'
import { CarouselMakeup } from './components/CarouselMakeup'
import { Contact } from './components/Contact'
import { Design } from './components/Design'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Makeup } from './components/Makeup'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <Design />
      <CarouselDesign />
      <Makeup />
      <CarouselMakeup />
      <Contact />
      <GlobalStyle />
    </ThemeProvider>
  )
}