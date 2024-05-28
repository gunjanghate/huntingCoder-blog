

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };




import React from 'react';
import { getUser } from '@/lib/data';

const PostUser = async ({ userId }) => {
    // FETCH DATA WITH AN API
    // const user = await getData(userId);
  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);

  if (!user) {
    return (
      <div>
        <span> ~by Unknown User</span>
      </div>
    );
  }

  return (
    <div>
      <span> ~by {user.name}</span>
    </div>
  );
};

export default PostUser;