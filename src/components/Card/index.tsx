import * as S from './styled'
import Title from '../Title'

interface Props {
  urlImage: string
  dogName: string
}

const Card = ({ urlImage, dogName }: Props) => {
  return (
    <S.Wrapper>
      <S.Figure>
        <img src={urlImage} alt={dogName} />
      </S.Figure>
      <S.Text>
        <Title>{dogName}</Title>
      </S.Text>
    </S.Wrapper>
  )
}

export default Card
