import styled from 'styled-components'
import thomasPic from './../images/thomasPicCropped1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'


function PersonalInfo() {

    const Section = styled.section`
        position: relative;
        width: 100%;
    `

    const MainPic = styled.img`
        position: absolute;
        top: 30px;
        left: 10%;
        width: 14%;
        border-radius: 100%;
    `

    const AccentBanner = styled.div`
        background-color: #62A87C;
        height: 100px;
    `

    const PresentationBanner = styled.div`
        background-color: #1D263B;
        height: 200px;
        `
        
        const Name = styled.h1`
        font-size: 3rem;
        position: absolute;
        left: 28%;
        bottom: 210px;
        `
        
        const InfoWrapper = styled.div`
        color: white;
        position: absolute;
        left: 28%;
        top: 110px;
    `

    const StyledLink = styled.a`
        color: rgb(160, 160, 190);
        text-decoration: none;
    `
    

  return (
    <Section>

        <MainPic src={thomasPic}></MainPic>

        <AccentBanner></AccentBanner>

        <Name>Thomas Le Fils</Name> 

        <PresentationBanner></PresentationBanner>
    
        <InfoWrapper>
            <h2>Postdoc at University of Sydney</h2>
            <div>
                <FontAwesomeIcon icon={faEnvelope}/>
                <span>   </span>
                <span>
                    thomas.le-fils@imj-prg.fr
                </span>
            </div>
            <StyledLink class="cv" href="#">
                <FontAwesomeIcon icon={faFilePdf}/>
                <span>   </span>

                <span>My CV</span>
            </StyledLink>
            <p>L4B12C175</p>
            <p>
                Quadrangle A14
            </p>
            <p>University of Sydney</p>
        </InfoWrapper>

    </Section>
  )
}

export default PersonalInfo