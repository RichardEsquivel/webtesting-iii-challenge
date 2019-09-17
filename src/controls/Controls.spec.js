import React from 'react';
import 'react-testing-library/cleanup-after-each';
import { render, fireEvent } from 'react-testing-library';
import Controls from './Controls';

describe('<Controls />', () => {
	test('open, unlocked', () => {
		//this will check when open and unlocked that lock Gate is disabled and Close Gate is able to be clicked
		//Create spy function
		const closeSpy = jest.fn();
		const { queryByText } = render(<Controls locked={false} closed={false} toggleClosed={closeSpy} />);
		const lockButton = queryByText('Lock Gate');
		expect(lockButton);
		expect(lockButton.disabled).toBe(true);
		const closeButton = queryByText('Close Gate');
		expect(closeButton);
		expect(closeButton.disabled).toBe(false);
		fireEvent.click(closeButton);
		expect(closeSpy).toBeCalled();
	});
	test('closed, unlocked', () => {
		//this will check when by user action gate is closed and unlocked that lock Gate is disabled and Close Gate is able to be clicked
		const openSpy = jest.fn(), lockSpy = jest.fn();
		const { queryByText } = render(<Controls locked={false}
			closed={true}
			toggleClosed={openSpy}
			toggleLocked={lockSpy} />);
		const lockButton = queryByText('Lock Gate');
		expect(lockButton);
		expect(lockButton.disabled).toBe(false);
		const openButton = queryByText('Open Gate');
		expect(openButton);
		expect(openButton.disabled).toBe(false);
		fireEvent.click(openButton);
		expect(openSpy).toBeCalled();
		fireEvent.click(lockButton);
		expect(lockSpy).toBeCalled();
	});

	('closed, locked', () => {
		const unlockSpy = jest.fn();
		const { queryByText } = render(<Controls locked={true} closed={true} toggleLocked={unlockSpy} />);
		const unlockButton = queryByText('Unlock Gate');
		expect(unlockButton);
		expect(unlockButton.disabled).toBe(false);
		const openButton = queryByText('Open Gate');
		expect(openButton);
		expect(openButton.disabled).toBe(true);
		fireEvent.click(unlockButton);
		expect(unlockSpy).toBeCalled();
	});
});