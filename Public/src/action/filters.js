//Set Text Filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//Sort By Date
export const sortByDate = () => ({
    type: 'DATE',
});

//Sort By Amount
export const sortByAmount = () => ({
    type: 'AMOUNT',
});

//Set Start Date
export const setStartDate = (date) => ({
    type: 'START_DATE',
    date,
});

//Set End Date
export const setEndDate = (date ) => ({
    type: 'END_DATE',
    date,
});