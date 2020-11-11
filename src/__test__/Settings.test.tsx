import React from 'react';
import { render, Wrapper } from './custom_context_wrapper';
import Settings from '../components/Settings';

it('renders correctly', () => {
    const { container } = render(<Settings />, {
        wrapper: Wrapper
    });
    // snapshot testing
    expect(container).toMatchSnapshot();
});

test('renders title', () => {
    const { getByText } = render(<Settings />);
    expect(getByText('Tilpass siden')).toBeInTheDocument();
});

test('renders img alt text', () => {
    const { getByAltText } = render(<Settings />);
    expect(getByAltText('Glad eller Trist')).toBeInTheDocument();
});
