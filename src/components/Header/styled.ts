import styled from 'styled-components'

export const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background: #fff;
  box-shadow: 0px 1px 8px #0000002b;
  z-index: ${({ theme }) => theme.layers.alwaysOnTop};
`
