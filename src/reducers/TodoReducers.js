//  export const TodoReducer =(state = {todoss: []}, action)=> {
//     switch(action.type){
//         case "ADD_TODO" :
//             return {todoss: action.payload};
//         case "REMOVE_TODO" :
//             return {todoss: action.payload};  
//         default :
//       return state;  
//     }  
// }
// export default  TodoReducer;

const initialState = {
    todos: [],
};

export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return { todos: [...action.payload] };
        case "REMOVE_TODO":
            return { todos: [...action.payload] };
        default:
            return state;
    }
};