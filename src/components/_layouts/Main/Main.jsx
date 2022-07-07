import React from 'react'
import s from './Main.scss'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const Main = () => {
	return (
		<div className={s.container}>

			<Header/>

			<main className={s.main}>

				Please, read the README.md and the TODOs

				{/*TODO: Sections, main content, ...*/}

			</main>

			<Footer/>
		</div>
	)
}

export default Main
