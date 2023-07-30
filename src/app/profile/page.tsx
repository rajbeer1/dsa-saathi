"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { NextResponse } from 'next/server';
import { useRouter } from "next/navigation";

export default function profile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState({
   
    language: "",
    experience:""
  }) 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState({
    usersData: []}
  );
  const logout =async () => {
    try { 
      await axios.get('/api/logout');
      router.push("/login")

    }
    catch (error: any) {
      return NextResponse.json({ error: error.message }, {status: 500})
    }
  }
  const onmatch = async () => {
    try {
      
      const response = await axios.post('/api/match', user);
      setData(response.data);
      console.log("match succesful", data);
      
    }
    catch (error) {
      console.log("signup failed")
    }
  }
  interface data {
  usersData: { name: string; email: string }[];
}
  
  return (<div className="flex flex-col items-center justify-center py-2 min-h-screen">
    <h1 className='text-3xl m-10'>submit your partners</h1>
    
    
 <select  className="p-3 text-black" value={user.experience} onChange={(e) => setUser({ ...user, experience: e.target.value })}>
        <option value="">experience</option>
        <option value="NOVICE">Novice</option>
        <option value="ROOKIE">Rookie</option>
        <option value="DADDY">Daddy</option>
        <option value="GIGACHAD">Gigachad</option>
    </select>
    <select  className=" m-3 p-3 text-black" value={user.language} onChange={(e) => setUser({ ...user, language: e.target.value })}>
        <option value="">language</option>
        <option value="C++">c++</option>
        <option value="JAVA">java</option>
        <option value="PYTHON">python</option>
      <option value="JAVASCRIPT">javaScript</option>
      <option value="OTHER">other</option>
      </select>
    <button onClick={onmatch} className="p-2 m-3 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" > SUBMIT</button>
    <div className='text-2xl'>{data.usersData.map((user:any, index:any) => (
          <li key={index}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}</div>
    <button className=" m-40 bg-slate-600 hover:bg-orange-800 p-4 m-3" onClick={logout}>logout</button>
   
  </div>)
}