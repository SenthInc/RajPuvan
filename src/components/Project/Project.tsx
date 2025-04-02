import ScrollAnimation from "react-animate-on-scroll";
import atlanticIcon from "../../assets/atlantic.png";
import externalLink from "../../assets/external-link.svg";
import mvsIcon from "../../assets/mvs.png";
import itamilIcon from "../../assets/ta.png";
import itamilNewsIcon from "../../assets/itamilnews.png";
import { Container } from "./styles";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://multivisaservice.ca" target="_blank" rel="noreferrer">
                  <img src={mvsIcon} alt="MultiVisa Service" />
                </a>
                <a href="https://multivisaservice.ca" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Project" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MultiVisa Service</h3>
              <p>
                MultiVisa Service specializes in providing expert immigration consultancy, helping individuals apply for Canadian permanent residency through programs like Express Entry, Provincial Nominee Program (PNP), and more.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Consultancy</li>
                <li>Immigration Services</li>
                <li>Express Entry</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://itamilfoundation.com" target="_blank" rel="noreferrer">
                  <img src={itamilIcon} alt="iTamil Foundation" />
                </a>
                <a href="https://itamilfoundation.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Project" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>iTamil Foundation</h3>
              <p>
                iTamil Foundation is a non-profit organization dedicated to preserving Tamil culture, language, and heritage.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Non-Profit</li>
                <li>Cultural Preservation</li>
                <li>Education</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://itamilnews.com" target="_blank" rel="noreferrer">
                  <img src={itamilNewsIcon} alt="iTamil News" />
                </a>
                <a href="https://itamilnews.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Project" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>iTamil News</h3>
              <p>
                iTamil News is a digital media platform delivering the latest Tamil news, culture, and community updates worldwide.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>News</li>
                <li>Media</li>
                <li>Tamil Community</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://atlanticsealine.com" target="_blank" rel="noreferrer">
                  <img src={atlanticIcon} alt="Atlantic Sealine" />
                </a>
                <a href="https://atlanticsealine.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Project" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Atlantic Sealine</h3>
              <p>
                Atlantic Sealine is a logistics and shipping company that offers reliable and efficient transport services, including cargo handling, freight forwarding, and maritime logistics.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Logistics</li>
                <li>Shipping</li>
                <li>Freight Forwarding</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}