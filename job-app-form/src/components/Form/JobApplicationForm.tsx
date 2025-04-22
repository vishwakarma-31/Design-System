import React, { useState } from 'react'
import { DatePicker } from '../DatePicker/DatePicker'
import { FileUpload } from '../FileUpload/Fileupload'
import { AlertBanner } from '../AlertBanner/AlertBanner'
import { ModalDialog } from '../ModalDialog/ModalDialog'
import { Typography } from '../Typography/Typography'

export const JobApplicationForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState<Date | null>(null)
    const [resume, setResume] = useState<File | null>(null)

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const resetForm = () => {
        setName('')
        setEmail('')
        setDob(null)
        setResume(null)
    }

    const validate = () => {
        if (!name || !email || !dob || !resume) {
            setError('Please fill all required fields.')
            return false
        }
        return true
    }

    const handleSubmit = async () => {
        setError('')
        setSuccess('')
        setIsSubmitting(true)

        try {
            await new Promise((res) => setTimeout(res, 1500))
            setSuccess('Form submitted successfully!')
            resetForm()
        } catch {
            setError('Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
            setShowConfirmModal(false)
        }
    }

    const handleFinalSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return
        setShowConfirmModal(true)
    }

    return (
        <form
            className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white space-y-5"
            onSubmit={handleFinalSubmit}
        >
            <Typography variant="h2" className="text-center text-gray-800">
                Job Application Form
            </Typography>

            {error && <AlertBanner type="error" message={error} onClose={() => setError('')} />}
            {success && <AlertBanner type="success" message={success} onClose={() => setSuccess('')} />}

            {/* Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={`w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 ${!name ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-300'
                        }`}
                />

                {!name && <p className="text-red-500 text-sm mt-1">This field is required</p>}
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={`w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 ${!email ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-300'
                        }`}
                />

                {!email && <p className="text-red-500 text-sm mt-1">This field is required</p>}
            </div>

            {/* DOB */}
            <DatePicker
                selectedDate={dob}
                onChange={setDob}
                label="Date of Birth"
                required
                error={!dob ? 'This field is required' : ''}
            />

            {/* Resume Upload */}
            <FileUpload
                label="Resume"
                onFileSelect={setResume}
                required
                error={!resume ? 'Resume is required' : ''}
            />

            <div className="text-right pt-4">
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all disabled:bg-blue-300"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>

            <ModalDialog
                isOpen={showConfirmModal}
                title="Confirm Submission"
                description="Are you sure you want to submit your application?"
                onClose={() => setShowConfirmModal(false)}
                onConfirm={handleSubmit}
                confirmText="Yes, Submit"
                cancelText="Cancel"
                type="confirmation"
            />
        </form>
    )
}
