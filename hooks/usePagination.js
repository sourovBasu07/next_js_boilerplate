"use client"

import Dropdown from "@/components/shared/dropdown/Dropdown";
import { rowsData } from "@/db";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const usePagination = (initialData) => {
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const currentPage = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const totalPages = Math.ceil(initialData?.length / limit);
    const start = (currentPage - 1) * limit;
    const end = Math.min(currentPage * limit, initialData?.length);
    const paginatedData = initialData?.slice(start, end);
    const hasPreviousPage = start > 0;
    const hasNextPage = end < initialData?.length;

    // console.log(currentPage);

    const startPage = Math.min(Math.max(1, currentPage - 2), totalPages - 6);

    const pages = Array.from({ length: 7 }, (_, index) => startPage + index).filter((value => value > 0));

    const handlePageChange = (page) => {
        const params = new URLSearchParams(searchParams);

        params.set("page", page);
        replace(`${pathname}?${params.toString()}`);
    };

    const handleRowsPerPage = (data) => {
        const params = new URLSearchParams(searchParams);

        params.set("page", Math.min(Math.ceil(initialData.length / data.name), currentPage));
        params.set("limit", data.name);
        replace(`${pathname}?${params.toString()}`);
    }

    const PaginationComponent = ({ showStats = true }) => {
        return (
            <div className="flex justify-between items-center">
                <div className="">
                    {showStats && <div className="text-textColor2 text-sm leading-5 font-normal">{`Showing ${start + 1}-${end} of ${initialData?.length} results`}</div>}
                    <div className="">
                        <p className="">Rows per page</p>
                        <Dropdown size="sm" data={rowsData} onChange={handleRowsPerPage} />
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <button disabled={!hasPreviousPage} className="" onClick={() => handlePageChange(currentPage - 1)}>&lt; Prev</button>
                    <div className="flex gap-3">
                        {pages.map((page, index) => {
                            return (
                                <button key={page} className={`w-10 h-10 rounded-full ${page === currentPage ? "bg-primary2 text-white" : "bg-white text-primary"}`} onClick={() => handlePageChange(page)}>{page}</button>
                            )
                        })}
                    </div>
                    <button disabled={!hasNextPage} className="" onClick={() => handlePageChange(currentPage + 1)}>Next &gt;</button>
                </div>
            </div>
        )
    }

    return { paginatedData, currentPage, limit, totalPages, hasPreviousPage, hasNextPage, PaginationComponent }
};

export default usePagination;