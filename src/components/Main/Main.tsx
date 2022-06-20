import { MainStyle } from './style'
import MyPhoto from '../../asssets/MyPhoto.jpg'
import { Skills } from './Skills/Skills'
import { Projects } from './Projects/Projects'
import { DiscordLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'

export function Main() {
	return (
		<MainStyle>
			<section className='about-me'>
				<p>Olá, Sou</p>
				<span>Matheus</span>
				<span>Front-End Dev</span>
				<div data-aos='zoom-in' data-aos-duration='2000'>
					<img src={MyPhoto} alt='oi' />
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
						temporibus aut voluptates totam culpa? Vero illum magnam similique
						minima adipisci quibusdam repellendus atque ipsum, soluta ab. Velit
						dolores repellendus ad!
					</p>
				</div>
			</section>
			<section>
				<div className='skills-container'>
					<div className='skills-title'>
						<h1>Skills</h1>
					</div>
					<Skills />
				</div>
			</section>
			<section className='projects-section'>
				<div className='projects-title'>
					<h1>Projetos</h1>
				</div>
				<div>
					<Projects />
				</div>
			</section>
			<section className='contact'>
				<div className='contact-title'>
					<h1>Contato</h1>
				</div>
				<div className='contact-icons'>
					<div>
						<a
							href='https://www.linkedin.com/in/matheus-oliveira-687671217/'
							target='_blank'
						>
							<LinkedinLogo size={32} color='var(--purple)' />
						</a>
						<a
							href='https://api.whatsapp.com/send/?phone=5511988260803&text&app_absent=0'
							target='_blank'
						>
							<WhatsappLogo size={32} color='var(--purple)' />
						</a>
					</div>
					<div>
						<a href=''>
							<DiscordLogo size={32} color='var(--purple)' />
						</a>
						<a href='https://github.com/DevMathi' target='_blank'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='32'
								height='32'
								viewBox='0 0 24 24'
								fill='none'
								stroke='var(--purple)'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
							</svg>
						</a>
					</div>
				</div>
			</section>
		</MainStyle>
	)
}
