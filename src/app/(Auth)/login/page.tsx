'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";
import {LoginUsers} from "@/mig/userAction";
import ButtonForm from "@/app/(forms)/Contribute/ButtonForm";


export default function page() {
  const router = useRouter()

  const [error , setError] = useState('')
  async function clientUser(form:FormData){
    
    
    const data = {
      email: form.get('email') as string,
      password: form.get('password') as string,
    };

    const res = await LoginUsers(data)

    if(res?.error){
      setError(res.error)
    }else{
      router.push('/Profile')
      router.refresh()
    }

  }

  return (
    <div>
        <form action={clientUser}>
            <input required type="email" name='email'/>
            <input required  type='text' name='password'/>

            <ButtonForm/>
            {error}
        </form>
        

    </div>
  )
}
