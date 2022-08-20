import logo from '../img/logo.svg'
import '../styles/Login.scss'


const LogIn = () => {
	return (
		<div>
			<header>
				<img className='img' src={logo} alt='logo' />
				<p>Burger</p>
			</header>
			<div className='logIn-Form'>
				<input type='text' />
				<input type='text' />
				<input type='text' />
				<button>login</button>
			</div>
		</div>

	)
}

export default LogIn
