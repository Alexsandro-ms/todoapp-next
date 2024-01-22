'use client'
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { useRef } from "react"

export default function SignIn(){
  const email = useRef("")
  const password = useRef("")

  const handleOnSubmit = async () => {
    await   signIn("google", {callbackUrl: "http://localhost:3000/"} )
  }

  return (
    <div>
      <Button onClick={handleOnSubmit} variant="default" >Entrar com google</Button>
    </div>
  )
}