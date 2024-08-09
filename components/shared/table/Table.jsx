"use client";

import usePagination from "@/hooks/usePagination";
import SortIcon from "@/assets/icons/sort_icon.svg";
import Image from 'next/image';
import Input from "../inputs/Inputs";
import { debounceFn } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Dropdown from "../dropdown/Dropdown";
import { useState } from "react";
import useTable from "@/hooks/useTable";
import Button from "../button/Button";


/**
 * Table Component
 *
 * This component is used to display tabular data with optional pagination and actions.
 *
 * @param {Object[]} data - An array of objects representing the table rows.
 * @param {Object[]} config - An array of configuration objects defining table columns.
 * @param {Object} pagination - Pagination configuration object (optional).
 * @param {Object[]} actions - An array of action objects to be displayed as icons (optional).
 *
 * @returns {JSX.Element} A JSX element representing the table component.
 */
export default function Table({ data = [], config = [], pagination = {}, actions = [], showPagination = true, serial = true, uid, showStats }) {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    // const [sorting, setSorting] = useState({ column: "price", order: "asc" });
    const { paginatedData, PaginationComponent, currentPage, limit, totalPages, hasPreviousPage, hasNextPage } = usePagination(data);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleCheck = (checked, row) => {
        if (checked) {
            setSelectedRows(prev => ([...prev, row]))
        } else {
            setSelectedRows(prev =>
                prev.filter(item => item.id !== row.id)

            )
        }
    }

    console.log(selectedRows);

    const HeaderComponent = ({ config, actions }) => {
        return (
            <thead className="">
                <tr className="bg-primary2 rounded-lg" style={{ borderRadius: "8px", boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}>
                    <td className={`py-3 px-5`}>
                        <label className="checkbox-container">
                            <input
                                className="custom-checkbox h-[16px] w-[16px] accent-black"
                                type="checkbox"
                                checked={selectedRows.length > 0 && selectedRows.length === paginatedData.length}
                                onChange={({ target: { checked } }) =>
                                    checked ? setSelectedRows(paginatedData.map(data => data)) : setSelectedRows([])
                                }
                            />
                            <span className="checkmark"></span>
                        </label>
                    </td>
                    {(serial && paginatedData.length > 0) && (<th
                        className="text-left text-slate-600 text-xs leading-4 font-medium"
                        style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                    >
                        <div className="flex gap-1 items-center">
                            <p>Serial</p>
                            <Image src={SortIcon} alt="" width="auto" height="auto" />
                        </div>
                    </th>)}
                    {
                        config.map((column, index) => (
                            <th
                                key={column.name}
                                className="py-4 first:pl-[1.875rem] px-5 first:rounded-tl-lg leading-4 font-medium text-sm text-white text-left min-w-[10rem] max-w-max"
                                style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                            >
                                {index === 0 ? (
                                    <div className="flex items-center">
                                        <span>{column.name}</span>
                                    </div>
                                ) : (
                                    column.name
                                )}
                            </th>
                        ))
                    }
                    {
                        actions.length > 0 ? <th
                            className="text-left text-white text-sm leading-4 font-medium rounded-tr-lg min-w-[2rem] max-w-max"
                            style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                        >
                            Actions
                        </th> : <></>
                    }
                </tr>
            </thead >
        )
    };

    // let serialArr = [];
    // if (data.length > 0) serialArr = showPagination ? data?.map((_, ind) => ind + 1 + (currentPage - 1) * limit) : data?.map((_, ind) => ind + 1);
    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-between">
                <div className="">
                    <Input type="search" onChange={(e) => handleSearch(e.target.value)} />
                </div>

                <div className="flex justify-between items-center my-3">
                    {selectedRows.length > 0 ? (
                        <p className="">You have selected {selectedRows.length} {selectedRows.length > 1 ? "rows" : "row"}</p>
                    ) : (
                        <p className="">No row selected</p>
                    )}
                    <Button name="Delete all" disabled={selectedRows.length === 0} className="disabled:bg-[#5f5f5f] disabled:opacity-50" />
                </div>

                {/* <Dropdown data={ } /> */}
            </div>
            <div className="w-full overflow-x-scroll scrollbar">
                <table className="w-full">
                    <HeaderComponent config={config} actions={actions} />
                    <tbody>
                        {paginatedData.length > 0 && paginatedData.map((item, index) => (
                            <tr key={item.id} className="" style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}>
                                <td className={`py-3 px-5`}>
                                    <label className="checkbox-container">
                                        <input
                                            className="custom-checkbox h-[16px] w-[16px] accent-black"
                                            type="checkbox"
                                            checked={selectedRows.find(row => row.id === item.id) ? true : false}
                                            onChange={({ target: { checked } }) => {
                                                handleCheck(checked, item)
                                            }
                                            }
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                                {(serial && paginatedData.length > 0) && (<td
                                    className={`py-[1.125rem] text-left px-6 text-sm leading-5`}
                                    style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                                >
                                    {/* {serialArr[index] ? serialArr[index] : index + 1} */}
                                </td>)}
                                {config.map(({
                                    key = uid(),
                                    value,
                                    onClick = () => { },
                                    modify = () => undefined,
                                    Comp
                                }) => {
                                    if (Comp) return <td key={key}><Comp data={item} index={index} /></td>;
                                    if (key.includes('.')) value = key.split('.').reduce((obj = {}, k) => obj?.[k], item);

                                    return (
                                        <td
                                            onClick={() => onClick && onClick(item, index)}
                                            key={key}
                                            className={`min-w-[10rem] max-w-max px-5 py-5 text-sm leading-5 whitespace-nowrap ${key === "ID" || key === "StudentName" || key === "Category" ? 'text-blue' : 'text-textBlue'}`}
                                            style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                                        >
                                            {modify(value || item[key]) || value || item[key]}

                                        </td>

                                    );
                                }

                                )}
                                {
                                    actions.length > 0 ? <td
                                        className={`min-w-[2rem] py-[1.125rem] text-center px-4 text-sm leading-5 $`}
                                        style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                                    >
                                        <div className="flex items-center gap-4">
                                            {
                                                actions.map(({ name, Icon, onClick, className, style: { size, weight } }) =>
                                                    Icon ?
                                                        (
                                                            <div
                                                                className=" hover:text-red text-[#64748B] cursor-pointer"
                                                                key={name}
                                                                onClick={() => onClick(name, item)}
                                                            >
                                                                <Icon size={size} weight={weight} data={item} />
                                                            </div>
                                                        ) : <p key={name} className={className}>{name}</p>)
                                            }
                                        </div>
                                    </td> : <></>
                                }
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            {
                showPagination ? <div className="w-full ">
                    {
                        !data.length > 0 ? <></> : <PaginationComponent showStats={showStats} />
                    }
                </div> : <></>
            }
        </div >
    );
}