import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import NewNotePage from '../NewNotePage/NewNotePage';
import NoteListPage from '../NoteListPage/NoteListPage';
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
						<Route path='/' element={<NoteListPage />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} user={user}/>
			)}
		</main>
	)
}