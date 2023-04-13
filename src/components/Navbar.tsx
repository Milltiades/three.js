import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src='/assets/logo.png'/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Links>
            <Icons>
                <Icon src="/assets/search.png" />
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}



const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1400px;
    padding: 10px 0px;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`

const Icons = styled.div`
     display: flex;
    align-items: center;
    gap: 20px;
`
const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`
const Logo = styled.img`
    height: 50px;
`
const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
    
`
const ListItem = styled.li`
    cursor: pointer;
`
const Button = styled.button`
    width: 100px;
    padding: 10px;
    border: none;
    color: white;
    background-color: #bb21bb;
    cursor: pointer;
    border-radius: 5px;
`

