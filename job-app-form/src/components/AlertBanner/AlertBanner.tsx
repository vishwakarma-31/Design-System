import { X } from 'lucide-react'

type AlertBannerProps = {
    type: 'info' | 'success' | 'error' | 'warning'
    message: string
    onClose?: () => void
}

const styles = {
    info: 'bg-blue-100 text-blue-800 border-blue-300',
    success: 'bg-green-100 text-green-800 border-green-300',
    error: 'bg-red-100 text-red-800 border-red-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
}

export const AlertBanner = ({ type, message, onClose }: AlertBannerProps) => {
    return (
        <div
            role="alert"
            className={`w-full flex justify-between items-center px-4 py-3 border rounded-md ${styles[type]}`}
        >
            <p className="text-sm">{message}</p>
            {onClose && (
                <button onClick={onClose} className="ml-4 focus:outline-none">
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>
    )
}
