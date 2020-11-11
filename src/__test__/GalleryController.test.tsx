import React from 'react';
import { render, Wrapper } from './custom_context_wrapper';
import GalleryController from '../components/GalleryController';

it('renders correctly', () => {
    const { container } = render(<GalleryController displayFavorites={false} />, {
        wrapper: Wrapper
    });
    // snapshot testing
    expect(container).toMatchSnapshot();
});
