"use client";

import React, { useContext } from 'react'
import { UserContext } from '@/store/contexts/userContext';
import Error from 'next/error';

const Dashboard = () => {
    const { user } = useContext(UserContext);

    if (!user) throw new Error({ message: "User doen not exist!" });

    console.log(user);
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard