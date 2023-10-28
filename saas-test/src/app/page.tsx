import { Button } from "@/components/ui/button"
import { UserButton, auth } from "@clerk/nextjs"
import Link from "next/link";
import { LogInIcon }from 'lucide-react'
import FileUpload from "@/components/FileUpload";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex item-center">
            <h1 className="mr-3 text-5xl font-semibold">10,000x Your Productivity</h1>
            <UserButton afterSignOutUrl="/"/>
          </div>

    <div className="flex mt-2">
      {isAuth && (<Button>Start Now</Button>)}
    </div>

    <p className="max-w-xl mt-2 text-2xl text-slate-600">
    One of You, Ten Thousand Times the Output!</p>
    <p className="max-w-xl mt-2 text-lg text-slate-600">Transform the way you work by cloning your skills with AI.
    </p>
    <p className="max-w-xl mt-1 text-lg text-slate-600">Do more in less time. 
    </p>
    <p className="max-w-xl mt-1 text-lg text-slate-600"> Experience the future today, Create Your Clone Now! 
    </p>
   
          <div className="w-full mt-4">
            {isAuth ? (
            <FileUpload />):(
              <Link href="/sign-in">
              <Button>Login to get Started!
                <LogInIcon className="w-4 h-4 ml-2"/>
              </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}