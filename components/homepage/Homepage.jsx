"use client";

// This is the landing page 
import usePagination from '@/hooks/usePagination';
import { useGetAllProductsQuery } from '@/services/apiSlices/productsSlice';
import LoadingComponent from '@/utils/wrappers/Loading';
import React from 'react'

const Homepage = () => {
    const { data, isLoading, error } = useGetAllProductsQuery();

    const { paginatedData, currentPage, limit, totalPages, hasPreviousPage, hasNextPage, PaginationComponent } = usePagination(data?.products);

    console.log(paginatedData);

    if (isLoading) {
        return <LoadingComponent />
    }

    return (
        <div>
            {paginatedData?.map((item) => (
                <p key={item.id} className="">{item.title}</p>
            ))}
        </div>
    )
}

export default Homepage