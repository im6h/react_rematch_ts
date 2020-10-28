import React from 'react'
import styled from 'styled-components'
import ShowQuestion from 'src/views/components/ShowQuestion'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <>
      <AppWrapper>
        <AppHeader>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <ShowQuestion />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          <Link to="/">Home</Link>
        </AppHeader>
      </AppWrapper>
    </>
  )
}
const AppWrapper = styled.div`
  text-align: center;
`
const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  a {
    margin-top: 20px;
    color: white;
  }
`
export default Home
