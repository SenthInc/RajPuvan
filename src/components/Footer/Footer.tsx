import githubIcon from '../../assets/github.svg'
import tiktokIcon from '../../assets/tiktokIcon.svg'
import linkedin from '../../assets/linkedin.svg'
import reactIcon from '../../assets/react-icon.svg'
import facebook from '../../assets/facebook.svg'
import whatsapp from '../../assets/whatsapp.svg'
import { Container } from './styles'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://multivisaservice.ca" className="logo">
        <span>Raj Puvan</span>
      </a>

      <div className="social-media">
        <a
        href="https://www.linkedin.com/in/RajPuvan/"
        target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://www.facebook.com/Rajh-Puvan/100090187713555/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B16474098264&text=Hello+Raj+Puvan%2C+I+found+your+contact+on+your+website+and+I+would+like+to+talk+to+you+about+your+services."
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.facebook.com/people/Canada-Visa-Toronto/61552357097067"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.tiktok.com/@rajpuvan8/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tiktokIcon} alt="tiktok" />
        </a>
      </div>
    </Container>
  )
}
