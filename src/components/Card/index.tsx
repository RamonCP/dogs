import * as S from './styled'

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
				<S.Title>{dogName}</S.Title>
			</S.Text>
		</S.Wrapper>
	)
}

export default Card