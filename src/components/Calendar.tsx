import { UseFormReturn, FieldValues, Path, PathValue } from 'react-hook-form'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import '@/styles/Calendar.css'

interface CalendarProps<T extends FieldValues = FieldValues> {
  form: UseFormReturn<T>
  fieldName: Path<T>
  minDate?: Date
  maxDate?: Date
  filterDate?: (date: Date) => boolean
  onClose: () => void
}

export const Calendar = <T extends FieldValues = FieldValues>({
  form,
  fieldName,
  minDate,
  maxDate,
  filterDate = (date: Date) => date.getDay() !== 0 && date.getDay() !== 6,
  onClose,
}: CalendarProps<T>) => {
  return (
    <DatePicker
      {...form.register(fieldName)}
      selected={form.getValues(fieldName)}
      onChange={(date: Date) => {
        const isoDateString = date.toISOString() as PathValue<T, Path<T>>
        form.setValue(fieldName, isoDateString, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        })
        onClose()
      }}
      minDate={minDate}
      maxDate={maxDate}
      filterDate={(date: Date) => filterDate(date)}
      showYearDropdown
      scrollableMonthYearDropdown
      inline
    >
      <div className="absolute bottom-24 left-0 right-0 flex items-center justify-center gap-32 text-14">
        <div className="flex items-center gap-8">
          <span className="w-48 h-4 rounded-full bg-almost-white-3/50">
            &nbsp;
          </span>
          <span>Today</span>
        </div>
        <div className="flex items-center gap-8">
          <span className="w-48 h-4 rounded-full bg-gray-1">&nbsp;</span>
          <span>Selected</span>
        </div>
      </div>
    </DatePicker>
  )
}
