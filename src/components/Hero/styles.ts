import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  height: 480px;
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background -position: center;
  padding-top: 16px;

  @media(max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  &::after {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.56);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      text-decoration: line-through;
      display: block;
    }
  }
`