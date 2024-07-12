"use client";

// This is the landing page 

import Button from '@/components/shared/button/Button';
import usePagination from '@/hooks/usePagination';
import { useGetAllProductsQuery } from '@/services/apiSlices/productsSlice';
import { debounceFn } from '@/utils';
import Link from 'next/link';
import React, { useEffect } from 'react'

const Homepage = () => {
    const { data, isLoading, error } = useGetAllProductsQuery();

    const { paginatedData, currentPage, limit, totalPages, hasPreviousPage, hasNextPage, PaginationComponent } = usePagination(data?.products);

    return (
        <div>
            Root Page
            <PaginationComponent />
            <Link href="/login">
                <Button type='submit' name='Sign In' className='bg-primary2 hover:bg-primary text-base font-medium leading-6' />
            </Link>
        </div>
    )
}

export default Homepage