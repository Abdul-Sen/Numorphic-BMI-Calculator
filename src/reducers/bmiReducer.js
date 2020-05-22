const INIT_STATE = {
    age: 0,
    weight: 0,
    height: 250,
    gender: true,
};

const bmiReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_HEIGHT':
            return {
                ...state,
                height : action.height
            }   
        case 'CHANGE_GENDER':
            return {
                ...state,
                gender: action.gender
            }
        case 'CHANGE_WEIGHT':
            return {
                ...state,
                weight: action.weight
            };
        case 'CHANGE_AGE':
            return {
                ...state,
                age: action.age
            };
        default:
            return state;
    }
};

export default bmiReducer;
