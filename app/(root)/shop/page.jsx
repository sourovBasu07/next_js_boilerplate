"use client"

import Button from '@/components/shared/button/Button';
import Dropdown from '@/components/shared/dropdown/Dropdown';
import Table from '@/components/shared/table/Table'
import usePagination from '@/hooks/usePagination';
import useTable from '@/hooks/useTable';
import { useGetAllProductsQuery } from '@/services/apiSlices/productsSlice';
import React, { useEffect } from 'react';
// import { productsData } from '@/db';

const config = [
    {
        id: 1,
        name: "Product Name",
        key: "title"
    },
    {
        id: 2,
        name: "Category",
        key: "category"
    },
    {
        id: 3,
        name: "Price",
        key: "price"
    }
];

const Shop = () => {
    const { data, isLoading } = useGetAllProductsQuery();
    const products = data?.products || [];
    const { handleColumnVisibility, tableConfig, visibleColumns, tableData, handleSort } = useTable({ data: products, columns: config });

    console.log(products);

    // useEffect(() => {
    //     const fetchPost = async () => {
    //         const res = await fetch("/api/post");
    //         const data = await res.json();
    //         console.log(data);
    //     }

    //     fetchPost();
    // }, [])

    return (
        <div className="min-h-[350px] flex flex-col justify-center items-center bg-primary3">
            <h2 className="font-semibold text-2xl text-white">Shop Page</h2>
            <div className="">
                {tableConfig?.map((item, index) => {
                    return (
                        <div key={item.key} className="flex items-center gap-2">
                            <input type="checkbox" checked={item.visible} name={item.key} id={item.key} value={item.key} onChange={(e) => handleColumnVisibility(e, item, index)} />
                            <p className="">{item.name}</p>
                        </div>
                    )
                })}
            </div>
            <Button name="Sort" onClick={handleSort} />
            <Table data={tableData} config={visibleColumns} />
        </div>
    )
}

export default Shop