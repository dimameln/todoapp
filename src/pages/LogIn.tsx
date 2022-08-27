import logo from '../img/logo.svg'
import '../styles/Login.scss'
import MyButton from '../components/UI/MyButton/MyButton'
import { Link, useLocation } from 'react-router-dom'

const LogIn: React.FC = () => {
	const location = useLocation()
	return (
		<div>
			<header className="login__header">
				<div className="login__header__inner">
					<Link to="/">
						<img className="logo" src={logo} alt="logo" />
					</Link>
					<Link to="/">
						<img className="logo" src={logo} alt="logo" />
					</Link>
				</div>
			</header>
			<div className="container">
				<div className="login__form">
					<h2 className="login__form-tittle">
						{location.pathname === '/auth' ? 'Регистрация' : 'Вход в аккаунт'}
					</h2>
					<form>
						<input
							className="login__form__input"
							type="text"
							placeholder="E-mail"
						/>
						<input
							className="login__form__input"
							type="text"
							placeholder="Пароль"
						/>
					</form>
					<MyButton>Войти</MyButton>
					{location.pathname === '/auth' ? (
						<p className="login__form-anotation">
							Есть аккаунт? <Link to="/login">Войдите</Link>
						</p>
					) : (
						<p className="login__form-anotation">
							Еще нет аккаунта? <Link to="/auth">Регистрация</Link>
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default LogIn
