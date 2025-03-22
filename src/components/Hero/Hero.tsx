import ScrollAnimation from "react-animate-on-scroll"
import { BrowserRouter } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import tiktokIcon from '../../assets/tiktokIcon.svg'
import Hello from '../../assets/Hello.gif'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
import Illustration from "../../assets/mvx2.jpg"
import whatsapp from '../../assets/whatsapp.svg'
import { Container } from "./styles"
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Raj Puvan</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Canada Visa Consultant</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">2 Years of Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/rajpuvan/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://www.tiktok.com/@rajpuvan8/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tiktokIcon} alt="TikTok" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B16474098264&text=Hello+Raj+Puvan%2C+I+found+your+contact+on+your+website+and+I+would+like+to+talk+to+you+about+your+services."
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.facebook.com/Rajh-Puvan/100090187713555/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a></div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}