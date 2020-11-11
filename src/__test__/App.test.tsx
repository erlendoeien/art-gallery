import React from 'react';
import { render, Wrapper } from './custom_context_wrapper';
import App from '../App';

it('renders correctly', () => {
    const { container } = render(<App />, {
        wrapper: Wrapper
    });
    // snapshot testing
    expect(container).toMatchSnapshot();
});

test('renders title', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/Velkommen til vektorgalleriet!/i);
    expect(headerElement).toBeInTheDocument();
});
