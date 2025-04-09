import {createSlice} from '@reduxjs/toolkit';

const initialState={
    // firstName:'Krishna',
    // lastName:'Mestree',
    // userId:1,
    isLoggedIn:false,
    profileImage:'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top'
}

export const User= createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        // updateFirstName:(state,action)=>{
        //     state.firstName=action.payload.firstName;
        // },
        logIn:(state,action)=>{
            return {...state,...{isLoggedIn:true}, ...action.payload};
        },
        resetToInitialState:()=>{
            return initialState
        },
        updateToken:(state,action)=>{
            state.token=action.payload;
        }
    },
});

export const {logIn,resetToInitialState,updateToken} = User.actions;
export default User.reducer;   //u can export only user also, but if we mention reducer, we no need to mention in combineReducer for each reducers