import { css } from "@emotion/core"

const globalCSS = css`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    font-size: 16px;
    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
  img {
    max-width: 100%;
  }
`

export default globalCSS
