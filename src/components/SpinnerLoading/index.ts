import styled from 'styled-components'

const SpinnerLoading = styled.div`
  background: ${({ theme }) => theme.colors.black};
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 0.8rem;
  height: 1.2rem;
  position: absolute;
  bottom: -50px;
  content: '';
  color: ${({ theme }) => theme.colors.black};
  text-indent: -9999em;
  margin: 88px auto;
  font-size: 1rem;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  left: 50%;

  &:before,
  &:after {
    background: ${({ theme }) => theme.colors.black};
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 0.8rem;
    height: 1.5rem;
    position: absolute;
    top: 0;
    content: '';
  }

  &:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &:after {
    left: 1.5em;
  }

  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 1.5rem;
    }
    40% {
      box-shadow: 0 -2em;
      height: 2rem;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 1.5rem;
    }
    40% {
      box-shadow: 0 -2em;
      height: 2rem;
    }
  }
`

export default SpinnerLoading
