import React from 'react'
import { createRoot } from 'react-dom/client'
import './sass/_global.scss'
import Main from './components/_layouts/Main/Main'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<Main/>
)