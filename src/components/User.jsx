import React, { useEffect, useState } from "react";
import SkeletonUser from "../skeletons/SkeletonUser";

export default function User() {
  const [profile, setProfile] = useState();
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);
    }, 5000);
  }, []);
  return (
    <div>
 <h1 className=" text-very-dark-blue text-[20px] font-semibold">
        User Details
      </h1>
      {profile && (
        <div>
          <div className=" grid grid-cols-3 pt-6">
            <div className=" h-[100px] w-[100px] bg-[#f2f2f2] rounded-[50%]"></div>
            <div className=" col-span-2 px-4">
              <h3 className=" pt-4">{profile.username}</h3>
              <p className=" pt-2">{profile.email}</p>
            </div>
          </div>
          
        </div>
      )}

      {!profile && <div><SkeletonUser/></div>}
    </div>
  );
}
