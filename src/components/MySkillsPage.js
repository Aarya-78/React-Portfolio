import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Develope, Design} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:200vh;
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;


`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 40vw;
  height: 70vh;
  z-index:3;
  line-height: 1.5;
  cursor: pointer;
  margin: 2rem;

  font-family: 'Ubuntu Mono',monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`
const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`



const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Develope width={40} height={40} /> Full Stack Developer
</Title>
<Description>
I love to develop scalable and efficient applications, combining both frontend and backend expertise.
</Description>
<Description>
<strong>Skills</strong>
<p>
Html, Css, Js, React, Redux, Node.js, Express, MongoDB, Mongoose, Firebase etc.
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
VScode, Github, Codepen, Postman etc.
</p>
</Description>

            </Main>
            <Main>
<Title>
    <Design width={40} height={40} /> UI/UX Designer
</Title>
<Description>
I value business or brand for which i'm designing, thus i enjoy bringing new ideas to life with clean and minimalistic designs.
</Description>
<Description>
<strong>I like to Design</strong>
<ul>
    <li>
        Web Design
    </li>
    <li>
        Mobile Apps
    </li>
</ul>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>
       Figma
    </li>
    
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Machine Learning & AI
</Title>
<Description>
I love to explore and implement machine learning and AI solutions to real-world problems.
</Description>
<Description>
<strong>Skills</strong>
<p>
Python, TensorFlow, Keras, PyTorch, Scikit-Learn, Natural Language Processing etc.
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
Jupyter Notebook, Google Colab, TensorBoard etc.
</p>
</Description>

            </Main>
            <Main>
<Title>
    <Design width={40} height={40} /> Cyber Security
</Title>
<Description>
I value the security and integrity of digital assets, and I enjoy implementing measures to protect them.
</Description>
<Description>
<strong>Skills</strong>
<ul>
    <li>
        Network Security
    </li>
    <li>
        Cryptography
    </li>
    <li>
        Threat Analysis
    </li>
</ul>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>
       Nmap
    </li>
    <li>
       Burp Suite
    </li>
    
</ul>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="5%" right="40%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage