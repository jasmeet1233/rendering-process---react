const initialState = {
    count: 0,
    data: [],
    message: ''
}

export const getdata = (name) => {
    return async (dispatch, getState) => {
        console.log(name)
        console.log(getState())
        try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data)
        dispatch({type: 'SUCCESS', payload: data})
        } catch (error) {
            console.log(error.message)
            dispatch({type: "ERROR", message: error.message})
        }
        console.log(getState());
    }
};


export const countReducer = (state = initialState, action) => {
    if (action.type === "increment") {
            return { count: state.count + 1 }  
    }

    if (action.type === "decrement") {
      return { count: state.count -1 };
    }

    if(action.type === "reset") {
      return { count: 0 };
    }

    if(action.type === 'SUCCESS') {
        return {...state, data: action.payload}
    }

    if(action.type === 'ERROR'){
        return {...state, message: action.message}
    }

    return state;

}