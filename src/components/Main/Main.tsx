import { MainStyle } from './style'
import MyPhoto from '../../asssets/MyPhoto.jpg'
import { Skills } from './Skills/Skills'
import { Projects } from './Projects/Projects'
import { DiscordLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'

export function Main() {
	const isMobile = window.screen.width
	return (
		<MainStyle>
			<section className='about-me' id='about-me'>
				<div className='container-about'>
					<p data-aos='fade-left' data-aos-duration='1000'>
						Olá, Sou
					</p>
					<span data-aos='fade-left' data-aos-duration='1500'>
						Matheus
					</span>
				</div>
				<div className='image-container'>
					<div data-aos='zoom-in' data-aos-duration='2000'>
						<img src={MyPhoto} alt='Minha foto' />
					</div>
					<div className='text-about-container'>
						<span data-aos='fade-down' data-aos-duration='2000'>
							Front-End Dev
						</span>
						<p data-aos='fade-up' data-aos-duration='2000'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
							temporibus aut voluptates totam culpa? Vero illum magnam similique
							minima adipisci quibusdam repellendus atque ipsum, soluta ab.
							Velit dolores repellendus ad!
						</p>
					</div>
				</div>
			</section>
			<section className='skills' id='skills'>
				{isMobile < 1023 ? (
					<>
						<div className='skills-container'>
							<div className='skills-title'>
								<h1 data-aos='zoom-in' data-aos-duration='1000'>
									Skills
								</h1>
							</div>
							<Skills />
						</div>
					</>
				) : (
					<>
						<div className='skills-container'>
							<div className='skills-title'>
								<div>
									<h1 data-aos='fade-down' data-aos-duration='2000'>
										Skills
									</h1>
								</div>
								<div>
									<p data-aos='fade-left' data-aos-duration='2000'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
										temporibus aut voluptates totam culpa? Vero illum magnam
										similique minima adipisci quibusdam repellendus atque ipsum,
										soluta ab. Velit dolores repellendus ad!
									</p>
								</div>
							</div>
							<Skills />
						</div>
					</>
				)}
			</section>
			<section className='projects-section' id='projects-section'>
				{isMobile < 1023 ? (
					<>
						<div className='projects-title'>
							<h1 data-aos='zoom-in' data-aos-duration='1000'>
								Projetos
							</h1>
						</div>
						<div data-aos='zoom-in' data-aos-duration='2000'>
							<Projects />
						</div>
					</>
				) : (
					<>
						<div className='projects-title'>
							<h1 data-aos='fade-down' data-aos-duration='2000'>
								Projetos
							</h1>
							<p data-aos='fade-right' data-aos-duration='2000'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
								temporibus aut voluptates totam culpa? Vero illum magnam
								similique minima adipisci quibusdam repellendus atque ipsum,
								soluta ab. Velit dolores repellendus ad!
							</p>
						</div>
						<div data-aos='zoom-in' data-aos-duration='2000'>
							<Projects />
						</div>
					</>
				)}
			</section>
			<section className='contact' id='contact'>
				<div className='contact-title'>
					<h1 data-aos='zoom-in' data-aos-duration='1000'>
						Contato
					</h1>
				</div>
				<div
					className='contact-icons'
					data-aos='flip-up'
					data-aos-duration='2000'
				>
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
					<div className='contact-email'>
						<h1>mathi.oliveira@hotmail.com</h1>
					</div>
				</div>
			</section>
		</MainStyle>
	)
}
