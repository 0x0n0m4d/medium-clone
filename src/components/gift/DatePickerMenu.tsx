import { Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarIcon } from '@/atoms/icons';
import { monthSelector } from '@/lib/utils';
import './datepicker.css';

interface Props {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}

const DatePickerMenu = ({ selectedDate, setSelectedDate }: Props) => {
  const maxDate = new Date();
  maxDate.setMonth(new Date().getMonth() + 12);
  const today = new Date();

  return (
    <DatePicker
      className="outline-none px-5 py-3.5 rounded-lg w-full bg-stone-200/60 focus:bg-stone-50 focus:border focus:border-solid focus:border-black text-base mb-12 text-start cursor-pointer"
      value={`${selectedDate.toLocaleDateString()}, ${selectedDate.toLocaleDateString() === today.toLocaleDateString() ? 'Today' : '8:00 AM'}`}
      onChange={newDate => setSelectedDate(newDate!)}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled
      }) => (
        <div className="flex w-full justify-between items-center pt-8 mb-8">
          <button
            className="p-2 border border-solid border-stone-400 disabled:border-stone-200 rounded-2xl text-stone-400 disabled:text-stone-200"
            onClick={e => {
              e.preventDefault();
              decreaseMonth();
            }}
            disabled={prevMonthButtonDisabled}
          >
            <svg width="19" height="19" viewBox="0 0 19 19">
              <path
                stroke="currentColor"
                fillRule="evenodd"
                d="M11.47 13.969 6.986 9.484 11.47 5l.553.492L8.03 9.484l3.993 3.993z"
              ></path>
            </svg>
          </button>
          <h2 className="text-black text-md font-bold">
            {monthSelector(date.getMonth())} {date.getFullYear()}
          </h2>
          <button
            className="p-2 border border-solid border-stone-400 disabled:border-stone-200 rounded-2xl text-stone-400 disabled:text-stone-200"
            onClick={e => {
              e.preventDefault();
              increaseMonth();
            }}
            disabled={nextMonthButtonDisabled}
          >
            <svg width="19" height="19" viewBox="0 0 19 19">
              <path
                stroke="currentColor"
                fillRule="evenodd"
                d="M7.6 5.138 12.03 9.5 7.6 13.862l-.554-.554L10.854 9.5 7.046 5.692"
              ></path>
            </svg>
          </button>
        </div>
      )}
      calendarClassName="flex items-start justify-center min-w-[304px] min-h-[314px] bg-white rounded-xl border border-solid border-stone-200"
      weekDayClassName={() => {
        return 'inline-flex text-sm text-center min-w-[32px] min-h-[32px] mx-1 items-center justify-center mb-8 text-slate-400';
      }}
      formatWeekDay={date => {
        return date[0];
      }}
      dayClassName={day => {
        if (day.toLocaleDateString() === selectedDate.toLocaleDateString()) {
          return 'inline-flex serif text-sm text-center min-w-[32px] min-h-[32px] rounded-full items-center justify-center text-white bg-primary disabled:bg-lime-500/50 mx-1 cursor-pointer aria-disabled:cursor-default';
        }
        return 'inline-flex serif text-sm text-center min-w-[32px] min-h-[32px] rounded-full items-center justify-center hover:bg-stone-200 transition mx-1 text-black aria-disabled:text-slate-300 cursor-pointer aria-disabled:cursor-default aria-disabled:hover:bg-white';
      }}
      minDate={new Date()}
      maxDate={maxDate}
      showPopperArrow={false}
      shouldCloseOnSelect={false}
      showIcon
      toggleCalendarOnIconClick
      icon={
        <span className="absolute right-5 top-3 cursor-pointer text-black hover:text-stone-600 transition">
          <CalendarIcon />
        </span>
      }
    />
  );
};

export default DatePickerMenu;
