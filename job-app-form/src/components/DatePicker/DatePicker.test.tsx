import { render, screen } from '@testing-library/react';
import { DatePicker } from './DatePicker';
import '@testing-library/jest-dom';

test('renders DatePicker with label', () => {
    render(<DatePicker selectedDate={new Date()} onChange={() => { }} label="Select Date" />);
    expect(screen.getByLabelText('Select Date')).toBeInTheDocument();
});
