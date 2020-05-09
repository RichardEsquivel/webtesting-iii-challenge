import React from 'react';
import Display from './Display.js';
import { render } from 'react-testing-library';

//basic check that Display is rendering
describe('Display/>', () => {
	test('renders without crashing', () => {
		render(<Display />);
	});
	//testing initial state of open and unlocked
	test('open and unlocked', () => {
		const { getByText } = render(<Display />);
		getByText(/unlocked/i);
		getByText(/open/i);
	});
	//testing that state props displaying closed and locked are displaying properly
	test('open and unlocked', () => {
		const { getByText } = render(<Display closed={true} locked={true} />);
		//check that unlocked and open text are being displayed not case sensitive in getByText query
		getByText(/locked/i);
		getByText(/closed/i);
	});
});