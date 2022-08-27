import { FC } from 'react'
import LogIn from '../pages/LogIn'

interface Route {
	path: string
	component: FC
}

export const routes: Array<Route> = [
	{ path: '/login', component: LogIn },
	{ path: '/auth', component: LogIn }
]
