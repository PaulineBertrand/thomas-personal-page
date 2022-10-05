import styled from 'styled-components'
import './App.css'

import OnePaper from './components/OnePaper'
import PersonalInfo from './components/PersonalInfo'

import papers from './articles.json'
import articlesImages from './images/articlesImages'

function App() {

  const {articles, talks, thesis} = papers
  const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  `

  const PaperWrapper = styled.div`
    margin: 30px 0; 
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
  `
  
  return (
    <>
    <PersonalInfo />
    <PaperWrapper className="App">
      <Section className="articles">
          {
              articles.map(article => <OnePaper key={article.title} {...article} pic={articlesImages[article.pic]} />)
          }
      </Section>
      <Section className="talks">
      {
              talks.map(talk => <OnePaper key={talk.title} {...talk} />)
          }
      </Section>
      <Section className="thesis">
          <OnePaper {...thesis} />
      </Section>
    </PaperWrapper>
    </>
  );
}

export default App;
