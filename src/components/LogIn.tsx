import logo from '../img/logo.svg'
import '../styles/Login.scss'
import burger from '../img/menu.svg'
import MyButton from './UI/MyButton/MyButton'

const LogIn: React.FC = () => {
	return (
		<div>
			<header className="login__header">
				<div className="login__header__inner">
					<img className="burger" src={burger} alt="burger" />
					<img className="logo" src={logo} alt="logo" />
				</div>
			</header>
			<div className="container">
				<div className="login__form">
					<h2 className="login__form-tittle">Вход в аккаунт</h2>
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
					<p className="login__form-anotation">Еще нет аккаунта? Регистрация</p>
				</div>
			</div>
		</div>
	)
}

export default LogIn
