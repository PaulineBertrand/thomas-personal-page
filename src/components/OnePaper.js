import React from 'react'
import {useState} from 'react'
import styled, {css} from 'styled-components'

function OnePaper({title, pic, abstract, arXivLink, publishedLink, type}) {

    const [showAbstract, setShowAbstract] = useState(false)
    const toggle = () => {
        setShowAbstract(!showAbstract)
    }

    // {
    const Article = styled.article`
        width: 60%;
        display: grid;
        grid-template-columns: 30% 70%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: ${props => props.small ? "10px" : "20px"};
        border-radius: 5px;
        background-color: #FFFEF9;
        text-align: center;
        vertical-align: middle
    `
    const SmallImage = styled.img`
        height: 3rem;
        margin: auto;
    `

    const BigImage = styled.img`
        width: 90%;
        margin: auto;
    `

    const LinkContainer = styled.div`
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin: 0.5rem;
    `

    const Abstract = styled.p`
        padding: 10px;
    `
    // }

    return (
        <>
        {
            showAbstract ?

            <Article big onClick={toggle}>
            {pic !== undefined && <BigImage src={pic} alt="figure from article"></BigImage>}
            <div>
                <h4>{title}</h4>
                <Abstract>{abstract}</Abstract>
                {
                    type === "article" &&

                    <LinkContainer>
                    <a href={arXivLink} target="_blank" className="link">arXiv</a>
                    {publishedLink && <a href={publishedLink} target="_blank" className="link">Published</a>}

                    </LinkContainer>
                }
            </div>
            </Article>

            :

            <Article small onClick={toggle}>
            {pic !== undefined && <SmallImage src={pic} alt="figure from article"></SmallImage>}
            <div className="centered">
                <h4>{title}</h4>
                {
                    type === "article" &&
                    
                <LinkContainer>
                    <a href={arXivLink} target="_blank" className="link">arXiv</a>
                    {publishedLink && <a href={publishedLink} target="_blank" className="link">Published</a>}

                </LinkContainer>
                }
            </div>
            </Article>
        }
        </>
    )
}

export default OnePaper