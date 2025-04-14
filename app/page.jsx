import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-4 min-h-screen">
      
      <Link href="/sign-in" className="w-fit">
        <button className="bg-white text-black text-base py-4 px-20 rounded-xl font-normal cursor-pointer border-2 hover:bg-black hover:text-white">
          Sign in
        </button>
      </Link>
      
      <Link href="/sign-up" className="w-fit">
        <button className="bg-black text-white text-base py-4 px-20 rounded-xl font-normal cursor-pointer border-2 border-black hover:bg-white hover:text-black hover:border-2">
          Sign up
        </button>
      </Link>
    
    </div>
  );
}
