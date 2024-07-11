
import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown } from '../../../assets';

const Dropdown = ({ data, className, onChange = () => { }, error, placeholder = 'Select', label, addInput = false, reset, selectedItem, size = "lg", InputBG = false, required, primaryColor = false }) => {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setClicked] = useState(false);
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        inputRef.current.value = "";
        setClicked(false)
    }
    useEffect(() => {
        if (selectedItem) {
            setSelected(selectedItem || null);
        }
    }, [selectedItem]);

    useEffect(() => {
        if (reset) {
            setSelected(selectedItem ? selectedItem : null);
        }
    }, [reset, selectedItem])

    useEffect(() => {
        setIsOpen(false);
    }, [selected]);

    useEffect(() => {
        // Close the dropdown when the user clicks outside of it
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setClicked(false);
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
        setIsOpen(false);
        onChange(item);
    };

    const optionsSize = {
        sm: "text-sm px-4 py-1",
        lg: "text-base p-4"
    }

    const placeholderSize = {
        sm: "min-w-[7rem] text-sm px-4 py-1 rounded font-normal text-sm text-primary",
        lg: `font-normal text-sm ${primaryColor ? "text-primary" : "text-textColor2"} p-4 rounded-lg`
    }

    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label className='text-blacky mb-[.375rem] whitespace-nowrap' htmlFor="">{label}
                {required && <span className='text-error'> * </span>}
            </label>}
            <div className="relative w-full" ref={dropdownRef}>
                <div onClick={toggleDropdown} className={`border ${error ? 'border-error' : 'border-borderColor'} ${InputBG ? "bg-inputColor" : ''} flex justify-between items-center gap-1 cursor-pointer ${placeholderSize[size]}`}>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {selected ? selected.name : placeholder}
                    </p>
                    <ArrowDown className={`w-5 h-5 ${primaryColor ? "stroke-primary" : "stroke-blacky"}`} />
                </div>
                <ul className={`${isOpen ? '' : 'hidden'} absolute w-full max-h-[21rem] bg-white ${size === "sm" ? "rounded" : "rounded-xl"} border-[0.04rem] border-borderColor mt-3 py-2 z-10 overflow-x-hidden overflow-y-auto`}>
                    {data?.map((item) => (
                        <li
                            onClick={() => handleSelect(item)}
                            key={item.id}
                            className={`${selected?.id === item?.id ? 'text-primary2 bg-[rgba(0,48,73,0.1)]' : 'text-blacky bg-white'} ${optionsSize[size]} hover:bg-primary2 hover:text-white cursor-pointer `}
                        >
                            {item.name}
                        </li>
                    ))}
                    {addInput &&
                        (!isClicked ? <li
                            onClick={() => setClicked(true)}
                            className={`font-semibold text-blacky bg-white p-4 hover:bg-primary2 hover:text-white cursor-pointer`}

                        >+ Add New</li> : <form className='' onSubmit={handleSubmit}>
                            <input ref={inputRef} className='w-full border-[0.04rem] border-borderColor focus:outline-none p-4' type="text" placeholder='Add new' name="" id="" />
                        </form>)
                    }

                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
