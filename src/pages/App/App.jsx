import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../components/NavBar/NavBar';
import './App.css';

import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser())

 return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser}/>
					<Routes>
						<Route path='/notes/new' element={<NewOrderPage />} />
						<Route path='/' element={<OrderHistoryPage />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} user={user}/>
			)}
		</main>
	)
}