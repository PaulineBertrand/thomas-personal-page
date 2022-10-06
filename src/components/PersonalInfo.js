import styled from 'styled-components'
import thomasPic from './../images/thomasPicCropped1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


function PersonalInfo() {

    const Section = styled.section`
        position: relative;
        width: 100%;
    `

    const MainPic = styled.img`
        position: absolute;
        top: 1rem;
        left: 10%;
        width: 14%;
        border-radius: 100%;
    `

    const NameBanner = styled.div`
        position: relative;
        background-color: #FFFEF6;
        height: 90px;
    `

    const AccentBanner = styled.div`
        background-color: grey;
        height: 10px;
    `

    const PresentationBanner = styled.div`
        position: relative;
        z-index: -1;
        background-color: #1D263B;
        height: 150px;
    `
        
    const Name = styled.h1`
        font-size: 3rem;
        position: absolute;
        left: 28%;
        bottom: 0.5rem;
    `
        
    const ContactWrapper = styled.div`
        color: white;
        position: absolute;
        right: 5rem;
        top: 1rem;
    `

    const MainInfoWrapper = styled.div`
        color: white;
        position: absolute;
        left: 28%;
        top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `

    const StyledLink = styled.a`
        color: rgb(160, 160, 190);
        text-decoration: none;
    `
    

  return (
    <Section>

        <NameBanner>
            <Name>Thomas Le Fils</Name> 
        </NameBanner>

        <MainPic src={thomasPic}></MainPic>

        <AccentBanner></AccentBanner>


        <PresentationBanner>
                
            <MainInfoWrapper>
                <h1>Postdoc at University of Sydney</h1>

                <StyledLink href="#">
                    <FontAwesomeIcon icon={faFilePdf}/>
                    <span>   </span>

                    <span>My CV</span>
                </StyledLink>
            </MainInfoWrapper>

            <ContactWrapper>
            <div>
                <FontAwesomeIcon icon={faEnvelope}/>
                <span>   </span>
                <span>
                    thomas.le-fils@imj-prg.fr
                </span>
            </div>
            <div>
            <FontAwesomeIcon icon={faMapMarkerAlt}/>
            <span>L41</span>
            <p>
                Quadrangle A14
            </p>
            <p>University of Sydney</p>
            </div>
        </ContactWrapper>

        </PresentationBanner>




    </Section>
  )
}

export default PersonalInfo