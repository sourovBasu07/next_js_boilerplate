"use client"

import Link from 'next/link';
import { DoubleArrowIcon } from '@/assets';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Breadcrumbs = ({ title, lastPathText }) => {
    const pathname = usePathname();
    const pathsArray = pathname.split("/").filter(x => x);
    let breadcrumbPath = ""

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <p className="font-normal text-lg text-primary2">Home</p>
                {pathsArray.map((path, index) => {
                    breadcrumbPath += `/${path}`;
                    const isLastPath = index === pathsArray.length - 1;
                    const pathText = `${path.slice(0, 1).toUpperCase()}${path.slice(1)}`;

                    return (
                        <div key={path} className={`flex items-center gap-2`}>
                            <Image src={DoubleArrowIcon} alt="Double arrow icon" width="auto" height="auto" />
                            <Link href={breadcrumbPath}>
                                <p className={`font-normal text-lg ${isLastPath ? "text-primary" : "text-primary2"}`}>
                                    {isLastPath ? (lastPathText ? lastPathText : pathText) : pathText}
                                </p>
                            </Link>
                        </div>
                    )
                }
                )}
            </div>
            <h1 className="font-medium text-2xl md:text-4xl text-primary2 !leading-[3.5rem]">{title}</h1>
        </div>
    )
}

export default Breadcrumbs