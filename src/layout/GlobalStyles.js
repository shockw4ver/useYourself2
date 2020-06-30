import { css } from '@emotion/core'

export default css`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }

  .gatsby-highlight-code-line {
    display: block;
    background-color: rgba(0,0,0,.1);
    margin-left: -1.2em;
    padding-left: 1.2em;
    margin-right: -1.2em;
    border-left: .35em solid #999;
  }
`