import styled, { css, DefaultTheme } from 'styled-components'

interface Props {
  size?: 'medium' | 'large'
}

const modifier = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `
}

const Title = styled.h1<Props>`
  ${({ theme, size = 'medium' }) => css`
    text-align: center;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.black};
    strong {
      font-weight: ${theme.font.bold};
    }

    ${!!size && modifier[size](theme)}
  `}
`
export default Title
