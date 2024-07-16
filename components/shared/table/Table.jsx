"use client";

import usePagination from "@/hooks/usePagination";
import SortIcon from "asset/icons/sort_icon.svg";
import Image from 'next/image';


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
    const { PaginationComponent } = usePagination(data);

    const HeaderComponent = ({ config, actions }) => {
        return (
            <thead className="">
                <tr className="bg-primary2 rounded-lg" style={{ borderRadius: "8px", boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}>
                    {(serial && data.length > 0) && (<th
                        className="text-left text-slate-600 text-xs leading-4 font-medium"
                        style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                    >
                        <div className="flex gap-1 items-center">
                            <p>Serial</p>
                            <Image src={SortIcon} alt="" />
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
    }

    let serialArr = [];
    if (data.length > 0) serialArr = showPagination ? data?.map((_, ind) => ind + 1 + (pagination?.page - 1) * pagination?.limit) : data?.map((_, ind) => ind + 1);
    return (
        <div>
            <div className="w-full overflow-x-scroll scrollbar">
                <table className="w-full">
                    <HeaderComponent config={config} actions={actions} />
                    <tbody>

                        {data.length > 0 && data.map((item, index) => (
                            <tr key={item.id} className="" style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}>
                                {(serial && data.length > 0) && (<td
                                    className={`py-[1.125rem] text-left px-6 text-sm leading-5`}
                                    style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                                >
                                    {serialArr[index] ? serialArr[index] : index + 1}
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