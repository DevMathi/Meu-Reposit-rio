import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyled } from './global/style'

export function App() {
	return (
		<>
			<GlobalStyled />
			<Header />
			<Main />
			<Footer />
		</>
	)
}
