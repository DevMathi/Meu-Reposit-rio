import MyCv from '../../asssets/Meucv.pdf'
import { Menu } from './Menu/Menu'
import { HeaderStyle } from './style'

export function Header() {
	const isMobile = window.screen.width
	return (
		<HeaderStyle data-aos='slide-down' data-aos-duration='1500'>
			{isMobile < 1023 ? (
				<Menu />
			) : (
				<div className='menu-desk'>
					<nav>
						<ul>
							<li>
								<a href='#about-me'>Sobre mim</a>
							</li>
							<li>
								<a href='#skills'>Skills</a>
							</li>
							<li>
								<a href='#projects-section'>Projetos</a>
							</li>
							<li>
								<a href='#contact'>Contato</a>
							</li>
						</ul>
					</nav>
				</div>
			)}
			<div className='curriculo-button'>
				<a
					href='https://docs.google.com/document/d/1kSwCZ4P17d9zel2o7pPVlqari5FLovKaY72Hq5BDsOA/edit?usp=sharing'
					className='link-curriculo'
				>
					Currículo
				</a>
			</div>
		</HeaderStyle>
	)
}
