import { css, keyframes } from 'styled-components'

export const media = {
    desktop: (...args) => css`
    @media (min-width: 769px) {
      ${ css(...args)}
    }
  `,
    tablet: (...args) => css`
    @media (max-width: 768px) {
      ${ css(...args)}
    }
  `,
    phone: (...args) => css`
    @media (max-width: 568px) {
      ${ css(...args)}
    }
  `
}
