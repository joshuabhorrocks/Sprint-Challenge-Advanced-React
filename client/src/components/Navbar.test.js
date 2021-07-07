import React from 'react';
import {render, fireEvent, getByTestId} from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar without crashing', () => {
  render(<Navbar />);
});

test("Dark Mode Functionality", () => {
    async () => {
        const darkButton = getByTestId("darkButton")
        act(async () => {
            fireEvent.click(darkButton);
            expect(localStorage.setItem).toHaveBeenCalled();
        })
    }
})
