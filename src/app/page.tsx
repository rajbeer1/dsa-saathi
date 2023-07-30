
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-4xl py-10"  >Welcome to DsaSaathi</h1>
      <h2 className="text-center py-20 text-2xl text-orange-800">find your perfect DSA partner</h2>
      <div className="flex justify-center items-center h-screen">
      <Link className="px-4 text-3xl" href='/signup'>Visit signup</Link>
      <Link className="px-4 text-3xl" href='/login'>Visit login</Link></div>

    </div>
  )
}
