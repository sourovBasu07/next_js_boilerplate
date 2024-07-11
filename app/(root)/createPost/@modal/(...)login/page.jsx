// This is the intercepting route of the login page 
// To display modal with shareable url of the content page 
// Will navigate to the original route when refreshing or visiting with the link 

"use client"

import LoginForm from '@/components/forms/Loginform'
import Modal from '@/components/shared/modal/Modal';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginModal = () => {
    const router = useRouter();
    const [show, setShow] = useState(true)
    return (
        <div className="">
            <Modal show={show} onClose={() => setShow(false)} callback={() => router.back()}>
                <LoginForm />
            </Modal>
        </div>
    )
}

export default LoginModal