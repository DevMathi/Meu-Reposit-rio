import { Menu } from '../Menu/Menu'
import { ListStyle, HeaderStyle } from './style'

export function Header() {
	return (
		<HeaderStyle>
			<Menu />
			<a
				href='file:///C:/Users/Matheus/Desktop/Meu%20CV/C%C3%B3pia/Meu%20CV.pdf'
				className='link-curriculo'
			>
				Currículo
			</a>
		</HeaderStyle>
	)
}
