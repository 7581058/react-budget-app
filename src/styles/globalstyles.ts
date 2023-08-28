import { css, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.black};
  }

  * {
    box-sizing: border-box;
  }
`

export const flexcenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
