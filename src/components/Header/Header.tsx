import { ListStyle, HeaderStyle } from './style'
import { X } from 'phosphor-react'

export function Header() {
	return (
		<HeaderStyle>
			<ListStyle size={35} data-aos='zoom-in' data-aos-duration='3000' />
			<a
				href='file:///C:/Users/Matheus/Desktop/Meu%20CV/C%C3%B3pia/Meu%20CV.pdf'
				data-aos='zoom-in'
				data-aos-duration='3000'
			>
				Currículo
			</a>
		</HeaderStyle>
	)
}
