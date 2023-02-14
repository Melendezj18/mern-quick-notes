import { Link } from "react-router-dom";
import * as userService from '../../../utilities/users-service'

export default function NavBar({ user, setUser }) {

	function handleLogOut () {
		// we should delgate the actual logging out to the users service
		userService.logOut()
		setUser(null)
	}

	return (
		<nav>
			<Link to='/'>Note List</Link>
			&nbsp; | &nbsp;
			&nbsp;
			<span>Welcome, { user.name }</span>
			&nbsp;&nbsp;
			<Link to="" onClick={handleLogOut}>Log Out</Link>
		</nav>
	)
}
