import { X } from 'phosphor-react'
import { useState } from 'react'
import { MenuStyle } from './style'

export function Menu() {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	return (
		<>
			<MenuStyle />
			<button onClick={() => setMenuIsOpen(!menuIsOpen)}>
				<span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='42'
						height='42'
						fill='var(--purple)'
						viewBox='0 0 256 256'
					>
						<rect width='256' height='256' fill='none'></rect>
						<line
							x1='40'
							y1='128'
							x2='216'
							y2='128'
							stroke='var(--purple)'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='16'
						></line>
						<line
							x1='40'
							y1='64'
							x2='216'
							y2='64'
							stroke='var(--purple)'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='16'
						></line>
						<line
							x1='40'
							y1='192'
							x2='216'
							y2='192'
							stroke='var(--purple)'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='16'
						></line>
					</svg>
				</span>
			</button>
			<div className={menuIsOpen ? 'open' : 'closed'}>
				<div className='container'>
					<button>
						<X
							size={42}
							color='var(--purple)'
							onClick={() => setMenuIsOpen(!menuIsOpen)}
						/>
					</button>
					<nav className='nav-menu'>
						<ul>
							<li className='oi'>
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
			</div>
		</>
	)
}
