import Button from '@/components/shared/button/Button'
import Link from 'next/link'
import React from 'react'

const CreatePost = () => {
    return (
        <div>
            CreatePost
            <Link href="/login">
                <Button type='submit' name='Create new post' className='bg-primary2 hover:bg-primary text-base font-medium leading-6' />
            </Link>
        </div>
    )
}

export default CreatePost