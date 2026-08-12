import './setup.js'
import React from 'react'
import { render } from '@testing-library/react'
import App from '../components/App'
import { describe, test, expect } from 'vitest'

describe('App smoke', () => {
	test('renders header', () => {
		const { getByText } = render(<App />)
		expect(getByText('Plantsy')).toBeInTheDocument()
	})
})