import React from 'react';
// import { unwrapResult } from "@reduxjs/toolkit";
import { fetchUsers } from '../redux/user/userSlice';
import { useSelector, useDispatch } from "react-redux";

function Users() {
      const userState = useSelector((state) => state.user);
        const dispatch = useDispatch()

      // const onClickHandler = async() => {
      //   try {
      //     const resultAction = await dispatch(fetchUsers());
      //     const originalPromiseResult = unwrapResult(resultAction);
      //   } catch (rejectedValueOrSerializedError) {
      //     // handle error here
      //   }
      // }
      let userData;
      if(userState.users.length > 0) {
        userData = userState.users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        });
      }
      

  return (
    <div>
        <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>

        {userState.users.length > 0 ? userData : <p>{userState.error}</p>}
    </div>
  )
}

export default Users;