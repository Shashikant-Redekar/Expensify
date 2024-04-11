//Filters Reducer

const filterReducesDefaultState = {
    text : '',
    sortBy: '',
    startDate: undefined,
    endDate: undefined,
}

export default (state = filterReducesDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'DATE':
            if (action.sortBy === 'date'){
                return{
                    ...state
                };
            } else {
                return{
                    ...state,
                    sortBy: 'date'
                }
            };
        case 'AMOUNT':
            if (action.sortBy === 'amount'){
                return{
                    ...state
                };
            } else {
                return{
                    ...state,
                    sortBy: 'amount'
                }
            };   
        case 'START_DATE':
            if(action.date){
                return{
                    ...state,
                    startDate : action.date
                };
            } else {
                return{
                    ...state,
                    startDate: undefined,
                };
            }
        case 'END_DATE':
            if(action.date){
                return{
                    ...state,
                    endDate: action.date
                };
            } else {
                return {
                    ...state,
                    endDate: undefined,
                };
            }
        default:
            return state;
    }
};