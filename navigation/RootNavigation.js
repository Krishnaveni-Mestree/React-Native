import React from "react";
import { useSelector } from "react-redux";
import { Authenticated, NonAuthenticated } from "./MainNavigation";

const RootNavigation=()=>{
    const user = useSelector(state=>state.user);
    console.log("Redux User State:", user.isLoggedIn);
    return user.isLoggedIn ? <Authenticated/> : <NonAuthenticated/>;
};

export default RootNavigation;