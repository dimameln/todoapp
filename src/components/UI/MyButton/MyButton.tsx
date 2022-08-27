import { ReactNode } from 'react'
import './MyButton.scss'

type ChildrenPropsType = { children: ReactNode }

const MyButton: React.FC<ChildrenPropsType> = ({ children, ...props }) => {
	return (
		<button className="MyBtn" {...props}>
			{children}
		</button>
	)
}

export default MyButton
