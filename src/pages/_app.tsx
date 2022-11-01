import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import Logo from '../assets/Logo.svg'
import Image from "next/image"
import { Container, Header } from "../styles/pages/app"
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={Logo} alt="Logo" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
