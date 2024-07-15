"use client";

import React from 'react'
import Input from '@/components/shared/inputs/Inputs';
import Button from '@/components/shared/button/Button';

const LoginForm = ({ openNewPage, callback }) => {

    const handleSubmit = (data) => {
        console.log(data);

        // Navigate to new page based on modal or page
        callback();
    };

    return (
        <div className="w-full flex flex-col gap-[1.875rem] px-5 sm:px-10">
            <div className="flex flex-col gap-1 text-center px-5">
                <p className={`font-medium text-2xl leading-9 text-center`}>Sign In</p>
            </div>
            <div className='w-full flex flex-col space-y-[1.875rem]'>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-[1.125rem]">
                        <Input style="outline" id='email' type="email" label="Email Address" placeholder="Enter your email address" className="" />
                        <Input
                            type="password"
                            style="outline"
                            id="password"
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                            Icon
                        />
                    </div>
                    <div className="flex justify-between mt-5 mb-[1.875rem]">
                        <div className="flex gap-1.5 lg:gap-3 items-center">
                            <input type="checkbox" name="" id="" />
                            <p className="text-sm lg:text-base text-textColor2 leading-[1.313rem] lg:leading-6">Remember Me</p>
                        </div>

                        <p className="text-sm lg:text-base text-textColor2 leading-[1.313rem] lg:leading-6 cursor-pointer" onClick={() => openNewPage("forgetPassword")}>Forgot Your Password?</p>

                    </div>

                    <Button type='submit' name='Sign In' className='w-full bg-primary2 hover:bg-primary text-base font-medium leading-6' />

                </form>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-1">
                    <p className="text-base leading-6 text-primary2">Don`&apos;t have an account yet?</p>

                    <p className="text-primary underline cursor-pointer font-medium ml-1 text-base leading-6" onClick={() => openNewPage("signup")}>Create Account</p>

                </div>
            </div>
        </div>
    )
}

export default LoginForm