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
        <div>
            <Modal show={show} onClose={() => router.back()} callback={() => router.back()}>
                <div className="bg-white py-10">
                    <LoginForm />
                </div>
            </Modal>
        </div>
    )
}

export default LoginModal