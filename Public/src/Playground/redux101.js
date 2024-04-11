import {createStore} from 'redux';

// const incrementCount = (payload = {}) => {
//     return{
//         type: 'INCREMENT',
//         incrementBy : typeof payload.incrementBy === 'number'  ? payload.incrementBy : 1
//     };
// };

const incrementCount = ({incrementBy = 1}= {}) => { //destructuring and giving default value. if value is passed or it is set to undefined value {}.
    return{
        type: 'INCREMENT',
        incrementBy 
    };
};

const decrementCount = ({decrementBy = 1 } = {}) => {
    return{
        type:'DECREMENT',
        decrementBy
    };
};

const reset = () => {
    return{
        type:'RESET'
    }
};

//Reducer
//1.Reducers are pure function.(which does not depends on the outside functions or variables.)
//2.Never change state or action.

const countReducer = ((state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return{
                count : 0
            };
        default:
            return state;
    }
    
    // if (action.type === 'INCREMENT') {
    //    return{
    //     count : state.count + 1
    //    };
    // }else{
    //     return state;
    // }
    // console.log('running');
    // return state;
});

const store = createStore(countReducer);

//Action Generator





const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(decrementCount({decrementBy:7}));
store.dispatch(reset());

unsubscribe();

store.dispatch({
    type:'INCREMENT',
    incrementBy : 5 // dynamic Action
});

store.dispatch({
    type:'DECREMENT',
    decrementBy: 7
});

store.dispatch({
    type:'RESET'
})

