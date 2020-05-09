import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
	it('default state unlocked and open', () => {
		const { getByText } = render(<Dashboard />);
		expect(getByText('Unlocked'));
		expect(getByText('Open'));
		expect(getByText('Lock Gate'));
		expect(getByText('Close Gate'));
	});
	describe('Test all states and back', () => {
		const { queryByText, getByText } = render(<Dashboard />);
		// close
		const closeButton = queryByText('Close Gate');
		expect(closeButton);
		fireEvent.click(closeButton);
		expect(getByText('Unlocked'));
		expect(getByText('Closed'));
		expect(getByText('Lock Gate'));
		expect(getByText('Open Gate'));
		// lock
		const lockButton = queryByText('Lock Gate');
		expect(lockButton);
		fireEvent.click(lockButton);
		expect(getByText('Locked'));
		expect(getByText('Closed'));
		expect(getByText('Unlock Gate'));
		expect(getByText('Open Gate'));
		// unlock
		const unlockButton = queryByText('Unlock Gate');
		expect(unlockButton);
		fireEvent.click(unlockButton);
		expect(getByText('Unlocked'));
		expect(getByText('Closed'));
		expect(getByText('Lock Gate'));
		expect(getByText('Open Gate'));
		// open
		const openButton = queryByText('Open Gate');
		expect(openButton);
		fireEvent.click(openButton);
		expect(getByText('Unlocked'));
		expect(getByText('Open'));
		expect(getByText('Lock Gate'));
		expect(getByText('Close Gate'));
	});
});