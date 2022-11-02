const initialState = {
    name: 'Teste'
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {...state, name: action.payload.name};
        default:
            break;
    }

    return state;
}