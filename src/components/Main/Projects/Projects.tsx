import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { A11y, Mousewheel, Navigation, Pagination } from 'swiper'
import { CarouselStyle, ProjectsStyle } from './style'
import PokeProjectImg from '../../../asssets/poke.png'
import { Globe } from 'phosphor-react'

export function Projects() {
	return (
		<ProjectsStyle>
			<CarouselStyle
				direction={'vertical'}
				pagination={{
					clickable: true,
				}}
				spaceBetween={40}
				mousewheel={true}
				slidesPerView={1}
				modules={[Pagination, A11y, Mousewheel]}
				className='mySwiper'
			>
				<SwiperSlide className='slide'>
					<div>
						<div>
							<img src={PokeProjectImg} alt='Projeto Pokedex' />
						</div>
						<div className='project-description'>
							<div>
								<h1>Pokédex</h1>
							</div>
							<div className='tecs'>
								<p>React</p>
								<p>Api</p>
							</div>
							<div className='links'>
								<a href='https://pokedex-orcin-nu.vercel.app/' target='_blank'>
									<Globe size={25} />
								</a>
								<a
									href='https://github.com/DevMathi/My-Pokedex'
									target='_blank'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='25'
										height='25'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='slide'>
					<div>
						<div>
							<img src={PokeProjectImg} alt='Projeto Pokedex' />
						</div>
						<div className='project-description'>
							<div className='project-title'>
								<h1>Pokédex</h1>
							</div>
							<div className='tecs'>
								<p>React</p>
								<p>Api</p>
							</div>
							<div className='links'>
								<a href='https://pokedex-orcin-nu.vercel.app/' target='_blank'>
									<Globe size={25} />
								</a>
								<a
									href='https://github.com/DevMathi/My-Pokedex'
									target='_blank'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='25'
										height='25'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='slide'>
					<div>
						<div>
							<img src={PokeProjectImg} alt='Projeto Pokedex' />
						</div>
						<div className='project-description'>
							<div className='project-title'>
								<h1>Pokédex</h1>
							</div>
							<div className='tecs'>
								<p>React</p>
								<p>Api</p>
							</div>
							<div className='links'>
								<a href='https://pokedex-orcin-nu.vercel.app/' target='_blank'>
									<Globe size={25} />
								</a>
								<a
									href='https://github.com/DevMathi/My-Pokedex'
									target='_blank'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='25'
										height='25'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</CarouselStyle>
		</ProjectsStyle>
	)
}
