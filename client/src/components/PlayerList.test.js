import React from 'react';
import {render, getByTestId} from '@testing-library/react';
import PlayerList from './PlayerList';

test('renders Navbar without crashing', () => {
  render(<PlayerList />);
});

test("data was returned", () => {
    async () => {
        const response = getByTestId("apiResponse")
        act(async () => {
            expect(response).toBeTruthy()
        })
    }
    
})