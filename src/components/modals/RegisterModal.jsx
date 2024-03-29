import React, {useCallback, useState} from 'react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import {FieldValues,
SubmitHandler,
useForm} from 'react-hook-form' 
import useRegisterModal from '../../hooks/useRegistermodal'
import { data } from 'autoprefixer'
import Modal from './Modal'
import Heading from '../Heading'
import {toast} from 'react-hot-toast'
import  Input  from '../input/Input'
import Button from '../Button.jsx'

const RegisterModal = () => {
    
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
        name: '',
        email : '' ,
        password: ''
    }
}) 

const onSubmit = (data) => {
setIsLoading(true)

axios.post('/api/register/route', data).then((data) => {
    console.log(data)
    toast.success('Logged In')
    registerModal.onClose();
}).catch((error) => {
    toast.error('error')
    console.log(error)
}).finally(() => {
    setIsLoading(false)
})
}
 
const bodyContent = (
    <div className='
    flex
    flex-col
    gap-4
    '> 
<Heading
title='Welcome'
subtitle='Create an account!'
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
id='name'
label="Name"
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
    Already have an account
        </div>
        <div>
    Log in
        </div>
    
</div>
</div>
    </div>
)


  return ( 
 <Modal
 disabled={isLoading}
 isOpen={registerModal.isOpen}
 title='Register'
 actionLabel='Continue'
 onClose={registerModal.onClose}
 onSubmit={handleSubmit(onSubmit)}
 body={bodyContent}
 footer={footerContent}
 />

  )
}

export default RegisterModal 