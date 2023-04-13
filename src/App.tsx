
import styled, { createGlobalStyle } from 'styled-components';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';
import Test from './components/Test';


function App() {


  return (
    <Container className="App">
      <GlobalStyles/>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      <Test/>
    </Container>
  )
}

export default App;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./assets/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
  
`


const GlobalStyles = createGlobalStyle`
  :root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  font-family: 'Ubuntu', sans-serif;
}

* {
  margin: 0;
  padding: 0;
}

body {
  min-width: 320px;
  min-height: 100vh;
}

`
