import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#111',
  gray: '#333',
  green: '#10ac84',
  white: '#eeeeee',
  lightGray: '#a3a3a3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    color: ${colors.white};
  }

  body {
    background-color: ${colors.black};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
