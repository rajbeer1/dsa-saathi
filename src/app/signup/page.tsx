"use client";
import Link from "next/link";
import React,{useEffect} from 'react'
import { useRouter } from "next/navigation";
import axios from "axios";
export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    name: "",
    language: "",
    experience:""
  }) 
  const [buttonDisabled, setbuttonDisabled] = React.useState(false);
  const [loading, setloading] = React.useState(false);

  const onSignup = async () => {
    try { 
      setloading(true);
      const response = await axios.post('/api/signup', user);
      console.log("signup successful", response.data);
      router.push("/login");
    }
    catch (error) {
      console.log("signup failed")
     }
    finally {
      setloading(false);
    }
    
  }
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.name.length > 0) {
      setbuttonDisabled(false);
    } else { setbuttonDisabled(true) };

  },[user])
  return (<div className="flex flex-col items-center justify-center py-2 min-h-screen">
    <h1 className="p-4 text-3xl">{loading?"processing":"signup"}</h1>
    <hr />
    <label htmlFor="username">name</label>
    <input type="text" id="username" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })
    } placeholder="name" className=" text-black p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" />
    <label htmlFor="email">email</label>
    <input type="text" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })
    } placeholder="email" className="  text-black p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" />
    <label htmlFor="password">password</label>
    <input type="text" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })
    } placeholder="password" className="  text-black p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" />
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
    <button onClick={onSignup} className="p-2 m-3 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-700" > {buttonDisabled ? "enter details" : "signup"}</button>
    
    <Link href='/login'>Visit Login</Link>
  </div>)
}