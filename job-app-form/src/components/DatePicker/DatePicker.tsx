import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type DatePickerProps = {
    selectedDate: Date | null
    onChange: (date: Date | null) => void
    label?: string
    required?: boolean
    error?: string
}

export const DatePicker = ({
    selectedDate,
    onChange,
    label,
    required,
    error,
}: DatePickerProps) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-800 mb-1">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <ReactDatePicker
                selected={selectedDate}
                onChange={onChange}
                className={`w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 ${error ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-300'
                    }`}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}
