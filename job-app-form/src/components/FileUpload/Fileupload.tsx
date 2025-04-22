import React, { useState } from 'react'

type FileUploadProps = {
    label?: string
    required?: boolean
    onFileSelect: (file: File | null) => void
    error?: string
}

export const FileUpload = ({ label, required, onFileSelect, error }: FileUploadProps) => {
    const [fileName, setFileName] = useState('')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        setFileName(file ? file.name : '')
        onFileSelect(file)
    }

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium mb-1">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                type="file"
                onChange={handleFileChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 file:mr-2 file:py-1 file:px-3 file:border-0 file:bg-blue-600 file:text-white ${error ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-300'
                    }`}
            />
            {fileName && <p className="mt-1 text-sm text-gray-700">Selected: {fileName}</p>}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}
