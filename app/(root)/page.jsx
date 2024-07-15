"use client";

// This is the landing page 

import SuspenseWrapper from '@/utils/wrappers/SuspenseWrapper';
import Homepage from '@/components/homepage/Homepage';


const Home = () => {

    return (
        <div>
            <SuspenseWrapper>
                <Homepage />
            </SuspenseWrapper>
        </div>
    )
}

export default Home;