
import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown } from '../../../assets';

const Dropdown = ({ data, className, onChange = () => { }, error, placeholder = "", selectedItem, size = "lg", style = "primary" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [selected, setSelected] = useState(null);
    // const inputRef = useRef(null);

    useEffect(() => {
        selectedItem && setSelected(selectedItem);
    }, [selectedItem]);

    useEffect(() => {
        setIsOpen(false);
        // onChange(selected);
    }, [selected]);

    // useEffect(() => {
    //     if (defaultCountry) {
    //         setSelected(defaultCountry)
    //     }
    // }, [defaultCountry])

    //console.log((selectedItem));

    useEffect(() => {
        // Close the dropdown when the user clicks outside of it
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        // Add event listener when the dropdown is open
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);

        } else {
            // Remove the event listener when the dropdown is closed
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (item) => {
        setSelected(item);
        onChange(item)
        setIsOpen(false);
    };

    const styles = {
        primary: "bg-white",
        secondary: "bg-inputColor"
    }

    const optionsSize = {
        sm: "text-sm px-4 py-1",
        lg: "text-base p-4"
    }

    const placeholderSize = {
        sm: "min-w-[7rem] text-sm px-4 py-1 rounded",
        lg: "min-w-[7rem] text-base p-4 rounded-lg"
    }

    return (
        <div className={`flex flex-col ${className}`}>
            <div className="" ref={dropdownRef}>
                <div onClick={toggleDropdown} className={`${styles[style]} border-r border-borderColor ${error ? 'border-error' : 'border-borderColor'} flex justify-between items-center cursor-pointer ${placeholderSize[size]}`}>
                    {
                        selected ? (
                            <div className="flex items-center gap-1">
                                <img src={selected?.flags["svg"]} alt="" className="w-5 h-auto" />
                                <p className="font-normal text-sm text-blacky overflow-hidden text-ellipsis whitespace-nowrap">
                                    {selected.countryCode}
                                </p>
                            </div>
                        ) : <p className="font-normal text-sm text-blacky overflow-hidden text-ellipsis whitespace-nowrap">{placeholder}</p>
                    }
                    <ArrowDown className="w-4 h-4 stroke-blacky" />
                </div>
                <ul className={`${isOpen ? '' : 'hidden'} absolute w-full max-h-[21rem] bg-white ${size === "sm" ? "rounded" : "rounded-xl"} border-[0.04rem] border-borderColor mt-3 py-2 z-10 overflow-x-hidden overflow-y-auto`}>
                    {data?.map((country, index) => (
                        <li
                            onClick={() => handleSelect(country)}
                            key={index}
                            className={`flex items-center gap-1 ${selected?.name.common === country?.name.common ? 'bg-primary2 text-white' : 'text-blacky bg-white'} ${optionsSize[size]} hover:bg-primary2 hover:text-white cursor-pointer `}
                        >
                            <img src={country?.flags["svg"]} alt="" className="w-4 h-4" />
                            <p className="">
                                ({country?.countryCode})
                            </p>
                            <p className="">
                                {country?.countryName}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
