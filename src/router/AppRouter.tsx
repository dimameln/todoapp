import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import LogIn from '../pages/LogIn'
import { routes } from './routes'

const AppRouter: React.FC = () => {
	return (
		<Routes>
			{routes.map((route) => (
				<Route
					element={<route.component />}
					path={route.path}
					key={route.path}
				/>
			))}
			<Route path="*" element={<LogIn />} />
		</Routes>
	)
}

export default AppRouter
