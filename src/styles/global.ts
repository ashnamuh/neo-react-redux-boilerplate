import { createGlobalStyle } from 'styled-components'
import reset from './reset'
import { resetButton, resetInput } from './mixins'

export default createGlobalStyle`
${reset}
a {
  text-decoration: none;
  color: inherit;
}
body {
  font-family: 'AppleSDGothicNeo-Light', 'Malgun Gothic', '맑은 고딕', sans-serif;
  background-color: white;
}
button {
  ${resetButton}
}
input {
  ${resetInput}
}
`
