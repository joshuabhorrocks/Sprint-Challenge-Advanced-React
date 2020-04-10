import React from 'react';
import {render} from '@testing-library/react';
import PlayerList from './PlayerList';

test('renders Navbar without crashing', () => {
  render(<PlayerList />);
});
