const INIT_STATE = {
    age: 23,
    weight: 102,
    height: 175,
    gender: "Male",
    bmi: 0,
    comment: ""
};

const bmiReducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case 'CHANGE_WEIGHT':
            return {
                ...state,
                [action.weight]: action.weight
            };
        default:
            return state;
    }
};

export default bmiReducer;
