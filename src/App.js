import styled from 'styled-components'
import './App.css'

import OnePaper from './components/OnePaper'
import PersonalInfo from './components/PersonalInfo'

import papers from './articles.json'
import articlesImages from './images/articlesImages'

function App() {

  const {articles, talks, thesis} = papers

  const Section = styled.section`
    margin: 0 15%;
  `

  const SectionList = styled.div`
    margin: 2rem 0;
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

      <Section>
        <h2>Articles</h2>
      <SectionList className="articles">
          {
              articles.map(article => <OnePaper key={article.title} {...article} pic={articlesImages[article.pic]} type="article"/>)
          }
      </SectionList>
      </Section>

      <Section>
        <h2>Talks</h2>
      <SectionList className="talks">
        {
              talks.map(talk => <OnePaper key={talk.title} {...talk} pic={articlesImages[talk.pic]} type="talk" />)
        }
      </SectionList>
      </Section>

      <Section>
        <h2>Thesis</h2>
      <SectionList className="thesis">
          <OnePaper {...thesis} pic={articlesImages[thesis.pic]} />
      </SectionList>
      </Section>

    </PaperWrapper>
    </>
  );
}

export default App;
