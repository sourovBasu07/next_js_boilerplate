"use client";

import React from 'react'
import Input from '@/components/shared/inputs/Inputs';
import Button from '@/components/shared/button/Button';
import Link from 'next/link';

const SignupForm = ({ openNewPage, callback }) => {

    const handleSubmit = (data) => {
        console.log(data);

        // Navigate to new page based on modal or page
        callback();
    };

    return (
        <div className="w-full flex flex-col gap-[1.875rem] px-5 sm:px-10">
            <div className="flex flex-col gap-1 text-center px-5">
                <p className={`font-medium text-2xl leading-9 text-center`}>Sign Up</p>
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
                        <Input
                            type="password"
                            style="outline"
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                            placeholder="confirm your password"
                            Icon
                        />
                    </div>

                    <Button type='submit' name='Sign Up' className='w-full bg-primary2 hover:bg-primary text-base font-medium leading-6 mt-7' />

                </form>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-1">
                    <p className="text-base leading-6 text-primary2">Already have an account yet?</p>

                    <Link href="/login" className="text-primary underline cursor-pointer font-medium ml-1 text-base leading-6">Login now</Link>

                </div>
            </div>
        </div>
    )
}

export default SignupForm