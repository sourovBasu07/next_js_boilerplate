import React, { Suspense } from 'react'
import LoadingComponent from './Loading'

const SuspenseWrapper = ({ children }) => {
    return (
        <Suspense fallback={<LoadingComponent />}>
            {children}
        </Suspense>
    )
}

export default SuspenseWrapper