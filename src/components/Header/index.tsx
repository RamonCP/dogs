import * as S from './styled'
import Title from '../Title'

const Header = ({ title }: { title: string }) => {
  return (
    <S.Wrapper>
      <Title size="large">{title}</Title>
    </S.Wrapper>
  )
}

export default Header
