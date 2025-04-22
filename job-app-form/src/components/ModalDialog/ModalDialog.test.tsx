import { render, screen } from '@testing-library/react';
import { ModalDialog } from './ModalDialog';
import { expect } from '@storybook/test';

test('renders ModalDialog with title', () => {
    render(
        <ModalDialog
            isOpen={true}
            title="Test Title"
            onClose={() => { }}
        />
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
});
