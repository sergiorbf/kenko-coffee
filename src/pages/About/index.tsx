import { Container, Title, Text, Button } from './styles'

export function About() {
  return (
    <Container>
      <Title>
        <span>Conheça a nossa história</span>
      </Title>
      <Text>
        A Kenko Coffee é uma franquia da Holding SolCau Franchising, que passou
        a integrar o grupo em 2016, recebendo um novo conceito que hoje é o
        principal motivo do seu sucesso.
        <br />
        <br />
        Muito mais do que cafeteria de cafés especiais nos tornamos
        especialistas em proporcionar momentos únicos e criar boas memórias
        através de sensações e aromas que remetem as melhores lembranças da
        nossa vida.
        <br />
        <br />
        Disseminamos a cultura do Café Especial e com nosso Empório levamos o
        melhor de Santa Catarina para todo o Brasil, e agora pelo mundo.
        <br />
        <br />
        Estar na Kenko Coffee é se sintonizar consigo mesmo. É restabelecer
        laços. É se desligar do mundo enquanto delicia um dos nossos famosos
        cafés. É provar sabores que extraem um lindo e prolongado sorriso.
        <br />
        <br />
        As experiências sensoriais e todo o nosso ambiente vão além de preparar
        um bom café para você. O aroma do café que percorre os corredores o
        conectando ao lugar, toda a rusticidade, quadros e escritas que te fazem
        entender que ali há paixão, e que tudo tem uma história… um por quê para
        cada coisa e cada pessoa que ali o recebe de uma maneira tão única a
        fazer você querer mais um café e uma boa conversa.
        <br />
        <br />
        Este é o nosso motivo.
        <br />
        <br />
        A Kenko Coffee é um lugar de características únicas que te leva a
        experimenta-lo como um todo. Criando e reavivando lembranças que são
        fixadas na sua mente e no seu paladar.
        <br />
        <br />
        Este é o nosso país das maravilhas.
        <br />
        <br />
        Este é o Empório Catarinense Kenko Coffee.
      </Text>
      <Button href="/expansion" target="_blank" rel="noreferrer">
        Quero saber mais sobre a franquia
      </Button>
    </Container>
  )
}
