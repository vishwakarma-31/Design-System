import { render, screen } from '@testing-library/react';
import { AlertBanner } from './AlertBanner';

test('renders AlertBanner with message', () => {
    render(<AlertBanner type="info" message="Test message" />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
});
