"use client";

import React, { useContext } from 'react'
import { UserContext } from '@/store/contexts/userContext';

const Dashboard = () => {
    const { user } = useContext(UserContext);

    console.log(user);
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard