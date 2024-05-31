import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { Container, Content, Card, CardLink } from './styles'

export function Contact() {
  return (
    <Container>
      <img src="/images/japaneseGuyCartoon.png" alt="Eu" width={450} />
      <Content>
        <div className="cards">
          <Card>
            <CardLink
              className="linkedin"
              href="https://www.linkedin.com/in/sergio-rbf/"
              target="_blank"
            >
              <FaLinkedin size={40} />
              <span>LinkedIn</span>
            </CardLink>
          </Card>
          <Card>
            <CardLink
              className="github"
              href="https://github.com/sergiorbf"
              target="_blank"
            >
              <FaGithub size={40} />
              <span>GitHub</span>
            </CardLink>
          </Card>
          <Card>
            <CardLink
              className="instagram"
              href="https://www.instagram.com/sergio.rbf"
              target="_blank"
            >
              <FaInstagram size={40} />
              <span>Instagram</span>
            </CardLink>
          </Card>
        </div>
      </Content>
    </Container>
  )
}
