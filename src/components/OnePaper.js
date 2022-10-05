import React from 'react'
import {useState} from 'react'
import styled, {css} from 'styled-components'

function OnePaper({title, pic, abstract}) {

    const [showAbstract, setShowAbstract] = useState(false)
    const toggle = () => {
        setShowAbstract(!showAbstract)
    }

    const Article = styled.article`
        width: 60%;
        display: grid;
        grid-template-columns: 30% 70%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 10px;
        border-radius: 5px;
    `

    const Image = styled.img`
        width: 100%;
    `

    return (
        <Article onClick={toggle}>
            {pic !== undefined && <Image src={pic} alt="figure from article"></Image>}
            <div>
                <h4>{title}</h4>
                {showAbstract && <p>{abstract}</p>}
            </div>
        </Article>
    )
}

export default OnePaper