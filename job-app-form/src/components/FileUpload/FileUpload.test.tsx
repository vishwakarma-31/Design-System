import { render, screen } from '@testing-library/react';
import { FileUpload } from '../FileUpload/Fileupload';
import { expect } from '@storybook/test';

test('renders FileUpload with label', () => {
    render(<FileUpload label="Upload File" onFileSelect={() => { }} />);
    expect(screen.getByText('Upload File')).toBeInTheDocument();
});
