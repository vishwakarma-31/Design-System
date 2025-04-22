import { useState } from 'react'
import { DatePicker } from './DatePicker'

export default {
    title: 'Components/DatePicker',
    component: DatePicker,
}

export const Default = () => {
    const [date, setDate] = useState<Date | null>(null)

    return (
        <div className="p-4 max-w-sm">
            <DatePicker
                selectedDate={date}
                onChange={setDate}
                label="Select a Date"
            />
        </div>
    )
}

export const WithError = () => {
    const [date, setDate] = useState<Date | null>(null)

    return (
        <div className="p-4 max-w-sm">
            <DatePicker
                selectedDate={date}
                onChange={setDate}
                label="Date of Birth"
                error="This field is required"
            />
        </div>
    )
}
