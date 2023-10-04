import React, {useCallback, useState} from 'react'
import {signIn} from 'next-auth/react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import {FieldValues,
SubmitHandler,
useForm} from 'react-hook-form' 
import useLoginModal from '../../hooks/useLoginModal'
import Modal from './Modal'
import Heading from '../Heading'
import {toast} from 'react-hot-toast'
import  Input  from '../input/Input'
import Button from '../Button.jsx'
import useRegisterModal from '../../hooks/useRegistermodal'
import { useRouter } from 'next/navigation'

const LoginModal = () => {
    
    const router = useRouter()
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()
const [isLoading, setIsLoading] = useState(false)

const {
    register,
    handleSubmit,
    formState: {
        errors,
    }
} = useForm<FieldValues>({
    defaultValues: {
        email : '' ,
        password: ''
    }
}) 

const onSubmit= (data) => {
setIsLoading(true)

signIn('credentials', {
    ... data,
    redirect:false,
    
 
}).then((callback) => {
    setIsLoading(false)
    if(callback?.ok) {
        toast.success('Logged In');
        router.push('/');
        loginModal.onClose()
    } 


if(callback?.error) {
    toast.error(callback.error)
}

})
}
 
const bodyContent = (
    <div className='
    flex
    flex-col
    gap-4
    '> 
<Heading
title='Welcome back'
subtitle='Login to your account!'
/>
<Input
id='email'
label="Email"
disabled={isLoading}
register={register}
errors={errors}
required
/> 

<Input
id='password'
type='password'
label="Password"
disabled={isLoading}
register={register}
errors={errors}
required
/> 
        </div>
)

const footerContent = (
    <div className='
    flex
    flex-col
    gap-4
    mt-3
    '>
<hr/>
<Button
outline
label='Continue with Google'
icon={FcGoogle}
onClick={() => {}}
/> 
<div
className='
text-neutral-500
text-center
mt-4
font-light
'
>
<div className='
flex
flex-row
items-center
justify-center
gap-2
'>
    <div>
    using uniexchange for the first time?
        </div>
        <div>
    Register here
        </div>
    
</div>
</div>
    </div>
)


  return ( 
 <Modal
 disabled={isLoading}
 isOpen={loginModal.isOpen}
 title='Login'
 actionLabel='Continue'
 onClose={loginModal.onClose}
 onSubmit={handleSubmit(onSubmit)}
 body={bodyContent}
 footer={footerContent}
 />

  )
}

export default LoginModal 