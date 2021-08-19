const initialState = {
    users: []
}

const UsersReduce = (state =initialState, action) =>{
    switch(action.type){
        case "ADD_USER":
            return {...state, username:action.payload};

            default : return state;
    }
}
export default UsersReduce;