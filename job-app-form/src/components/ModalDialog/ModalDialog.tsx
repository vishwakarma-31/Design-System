
type ModalDialogProps = {
    isOpen: boolean
    title: string
    description?: string
    onConfirm?: () => void
    onClose: () => void
    confirmText?: string
    cancelText?: string
    type?: 'confirmation' | 'error'
}

export const ModalDialog = ({
    isOpen,
    title,
    description,
    onConfirm,
    onClose,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    type = 'confirmation',
}: ModalDialogProps) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
                <div className="flex justify-end gap-2">
                    <button
                        className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
                        onClick={onClose}
                    >
                        {cancelText}
                    </button>
                    {onConfirm && (
                        <button
                            className={`px-4 py-2 text-sm rounded text-white ${type === 'error' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                            onClick={onConfirm}
                        >
                            {confirmText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
