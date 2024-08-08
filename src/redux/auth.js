// import { currentUser } from "@clerk/nextjs";
import { createSlice } from "@reduxjs/toolkit";

const loadState = () =>{
    try{

        const serializedState = localStorage.getItem("authState");

        if(serializedState === null)
        {
            return undefined;
        }
        return JSON.parse(serializedState);
    }catch(err)
    {
        return undefined;
    }

}


const saveState = (state) =>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem("authState",serializedState);

    }catch
    {
        //
    }
}

const initialState = loadState() || {
    users:[],
    currentUser:null,
    token:null,
    Uid:null,
    Role:null,
    isAuthenticated:false
}

export const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        authenticate:(state,action) =>{
            state.isAuthenticated = action.payload;
            saveState(state);
        },
        setUserInfo:(state,action) =>{
            const {
                user,
                token,
                Uid,
                Name,
                Role,
                Dept
            } = action.payload;
            state.currentUser = user;
            state.token = token;
            state.Uid = Uid;
            state.Name = Name;
            state.Role = Role;
            state.Dept = Dept;
            state.isAuthenticated = true;

            const existingUserIndex = state.users.findIndex((u)=> u.Uid === Uid);
            if(existingUserIndex !== -1)
            {
                state.users[existingUserIndex] = {
                    user,
                    token,
                    Uid,
                    Name,
                    Role,
                    Dept
                };
            }else{
                state.users.push({
                    user,
                    token,
                    Uid,
                    Name,
                    Role,
                    Dept
                })
            }

            saveState(state);
        },
        logOut:(state)=>{
            state.currentUser = null;
            state.token = null;
            state.Uid = null;
            state.Name = null;
            state.Role = null;
            state.Dept = null;
            state.isAuthenticated = false;

            localStorage.removeItem("authState");
        }

    }
});

export const {authenticate,setUserInfo,logOut} = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.currentUser;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUid = (state) => state.auth.Uid;

export const selectCurrentName = (state) => state.auth.Name;
export const selectCurrentRole = (state) =>state.auth.Role;
export const selectCurrentDept = (state) =>state.auth.Dept;

export const selectAllUsers = (state) => state.auth.Users;



export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const setUsers = (users) =>  {

    return {
        type:"auth/setUsers",        
        payload:users,
    };

}


