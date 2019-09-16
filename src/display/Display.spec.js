import React from 'react';
import Display from './Display.js';
import { render } from 'react-testing-library';


describe('Display/>', () => {
	test('renders without crashing', () => {
		render(<Display />);
	});
});