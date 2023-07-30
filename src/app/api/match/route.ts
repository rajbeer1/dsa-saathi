import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
 
connect();

export async function POST(request: NextRequest, response: NextResponse) {
  const { language, experience } = await request.json();
 
const foundUsers = await User.find({ language, experience });

if (foundUsers.length > 0) {
  const usersData = foundUsers.map(user => ({
    name: user.name,
    email: user.email
  }));

  const responseObject = {
    usersData
  };
  return NextResponse.json(responseObject);
} else {
  const responseObject = {
    status: 'failure',
    message: 'Users not found',
   
  };
  return NextResponse.json(responseObject);
}

}