import { useState } from 'react';
import { ModalDialog } from './ModalDialog';

export default {
    title: 'Components/ModalDialog',
    component: ModalDialog,
};

export const Confirmation = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <ModalDialog
            isOpen={isOpen}
            title="Confirm Action"
            description="Are you sure you want to proceed?"
            onConfirm={() => setIsOpen(false)}
            onClose={() => setIsOpen(false)}
        />
    );
};
