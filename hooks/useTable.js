"use client";

import { useEffect, useState } from "react";
import usePagination from "./usePagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { debounceFn } from "@/utils";

const useTable = ({ pagination, data, columns, showPagination = true }) => {
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [sorting, setSorting] = useState({ column: "price", order: "asc" });
    const [searchValue, setSearchValue] = useState("");
    const [tableConfig, setTableConfig] = useState();
    const [hiddenColumns, setHiddenColumns] = useState([]);
    const [visibleColumns, setVisibleColumns] = useState([]);
    const [tableData, setTableData] = useState(data || []);

    // console.log(hiddenColumns);
    // const searchValue = searchParams.get("query") || "";

    // const filteredOptions = ["search", "sort"];

    useEffect(() => {
        setTableConfig(columns?.map(column => ({ ...column, visible: true })));
        setVisibleColumns(columns?.map(column => ({ ...column, visible: true })))
    }, [columns]);

    console.log(tableData);

    const handleSearch = debounceFn((value) => {
        console.log(value);
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set("query", value);
        } else {
            params.delete("query")
        }

        replace(`${pathname}?${params.toString()}`);
    }, 500);

    const handleSort = () => {
        setTableData(data.sort((a, b) => a.price - b.price));
        // const params = new URLSearchParams(searchParams);
        // params.set("field ")
        // params.set("sortBy", value);

        // replace(`${pathname}?${params.toString()}`);
    };

    const handleColumnVisibility = (e, item, index) => {
        if (e.target.checked) {
            const newConfig = tableConfig.map(column => {
                if (column.key === item.key) {
                    return ({ ...column, visible: true })
                }
                return column;
            })
            setTableConfig(newConfig);
            setVisibleColumns(newConfig.filter(config => config.visible === true))
            // const column = hiddenColumns.find(column => column.item.key === item.key);

            // const hiddenItems = hiddenColumns.filter(column => column.item.key !== item.key);
            // setHiddenColumns(hiddenItems);

            // const newConfig = [...tableConfig];
            // newConfig.splice(column.index, 0, item)
            // setTableConfig(newConfig)
        } else {
            // setHiddenColumns(prev => ([...prev, item.key]))
            // const column = hiddenColumns.find(column => column.item.key === item.key);
            const newConfig = tableConfig.map(column => {
                if (column.key === item.key) {
                    return ({ ...column, visible: false })
                }
                return column;
            })
            setTableConfig(newConfig);
            setVisibleColumns(newConfig.filter(config => config.visible === true))
            // const newConfig = tableConfig.filter(item => item.key !== e.target.value)
            // setTableConfig(newConfig)
        }
    };

    return { handleSearch, handleSort, handleColumnVisibility, tableConfig, visibleColumns, tableData }
}

export default useTable