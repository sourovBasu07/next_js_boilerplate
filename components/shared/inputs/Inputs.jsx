
/**
 * Input Component
 *
 * A reusable input component with customizable styles and attributes.
 *
 * @param {Object} props - The component's props.
 * @param {string} [props.style='primary'] - The style of the input.
 * @param {string} [props.className=''] - Additional CSS classes for the input.
 * @param {string} [props.id=''] - The HTML id attribute for the input.
 * @param {string} [props.name=''] - The HTML name attribute for the input.
 * @param {string} [props.value=''] - The value attribute for the input.
 * @param {function} [props.onChange=''] - The onChange event handler for the input.
 * @param {function} [props.onBlur=''] - The onBlur event handler for the input.
 * @param {Object} [props.rest={}] - Additional props to be spread onto the input element.
 * @param {ReactNode} [props.children=''] - The content to be displayed inside the input.
 *
 * @returns {ReactNode} The rendered input component.
 */
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { SearchIcon } from '@/assets';

const styles = {
    primary: "w-full bg-inputColor border-[0.04rem] rounded-lg border-borderColor text-blacky placeholder:text-sm placeholder:text-textColor2",
    secondary: "w-full bg-inputColor border-[0.04rem] rounded-lg border-borderColor text-blacky placeholder:text-sm placeholder:text-textColor2",
    outline: "w-full border-[0.04rem] rounded-lg border-borderColor text-blacky placeholder:text-sm placeholder:text-textColor2",
    // otp: "w-full bg-white border rounded-lg border-borderColor font-medium text-primary2 text-[2rem] text-center leading-[3rem] placeholder:text-textColor2 focus:border-primary2"
};
const labelStyle = {
    primary: 'font-normal text-base text-blacky',
    secondary: 'font-normal text-base text-blacky',
}
const inputSize = {
    xl: "p-5",
    lg: 'p-4',
    md: 'px-4 py-3',
    sm: 'py-1'
}

const Input = ({
    style = 'primary',
    className = '',
    id = '',
    name = '',
    value,
    onChange,
    type = 'text',
    onBlur,
    placeholder = '',
    size = 'md',
    label,
    Icon,
    iconClassName,
    error,
    min = 0,
    max,
    ref,
    required,
    rest = {}
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const quantityRef = useRef();
    const iconInputRef = useRef();

    const decrementHandler = () => {
        const current = Number(quantityRef.current.value);
        if (current > 0) {
            quantityRef.current.value = current - 1;
        }
    }
    const incrementHandler = () => {
        quantityRef.current.value = Number(quantityRef.current.value) + 1;
    }

    if (type === 'search') {
        return (
            <div className={`w-full flex gap-3 items-center border px-3 border-borderColor bg-transparent rounded-xl ${className} ${inputSize[size]}`}>
                <Image className={size === 'lg' ? 'h-full w-full' : 'h-4 w-4'} src={SearchIcon} alt="searchIcon" />
                <input
                    className={`text-textColor w-full bg-transparent focus:outline-none`}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    type={type}
                    placeholder={placeholder}
                    {...rest}
                />
            </div>
        );
    } else if (type === 'quantity') {
        return (
            <div className='w-full flex flex-col'>
                {label && <label className={`${labelStyle[style]} mb-1`} htmlFor={id}>{label}</label>}

                <div className={`${styles[style]} ${className} ${inputSize[size]} px-6 ${error ? 'border-danger' : ''} flex items-center justify-between`} >
                    {/* <Image className='cursor-pointer' onClick={() => decrementHandler(value)} src={minus} alt="" /> */}
                    <input
                        className={` focus:outline-none w-full text-center`}
                        ref={quantityRef}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        type={'number'}
                        min={min}
                        max={max}
                        placeholder={placeholder}
                        {...rest}
                    />
                    <Image className='cursor-pointer' onClick={() => incrementHandler(value)} src={plus} alt="" />
                </div>
            </div>
        )
    } else if (type === "password") {
        return (
            <div className={`flex flex-col cursor-text`} >
                {label && <label className={`${labelStyle[style]} mb-1`} htmlFor={id}>{label}{required && <span className='text-error'> * </span>}</label>}
                <div className={`${styles[style]} relative flex items-center border-[0.04rem] rounded-lg border-borderColor pr-4 ${className}`}>
                    <input
                        className={`${styles[style]} ${inputSize[size]} border-none focus:outline-none ${error ? 'border-danger' : ''}`}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        type={showPassword ? "text" : "password"}
                        min={min}
                        max={max}
                        placeholder={placeholder}
                        ref={iconInputRef}
                        {...rest}
                        required
                    />

                    {/* {Icon && (showPassword ? <HidePasswordIcon onClick={() => setShowPassword(!showPassword)} className={`${iconClassName} cursor-pointer`} /> : <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)} className={`${iconClassName} cursor-pointer`} />)} */}

                </div>

            </div>
        )

    } else if (type === "iconInput") {
        return (<div className={`flex flex-col cursor-text`} onClick={() => iconInputRef.current.focus()}>
            {label && <label className={`${labelStyle[style]} mb-1`} htmlFor={id}>{label}{required && <span className='text-error'> * </span>}</label>}
            <div className={`relative flex items-center border-[0.04rem] rounded-lg border-borderColor pr-4 ${className}`}>
                <input
                    className={`${styles[style]} ${inputSize[size]} border-none focus:outline-none ${error ? 'border-danger' : ''}`}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    type={type}
                    min={min}
                    max={max}
                    placeholder={placeholder}
                    ref={iconInputRef}
                    {...rest}
                />
                {Icon && <Icon className={`${iconClassName}`} />}
            </div>

        </div>
        )
    } else if (type === "textarea") {
        return (
            <div className='w-full flex flex-col'>
                {label && <label className={`${labelStyle[style]} mb-1`} htmlFor={id}>{label}{required && <span className='text-error'> * </span>}</label>}
                <textarea
                    className={`${styles[style]} ${className} ${inputSize[size]}  focus:outline-none resize-none ${error ? 'border-error' : ''}`}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    type={type}
                    min={min}
                    max={max}
                    placeholder={placeholder}
                    {...rest}
                />
            </div>
        )
    } else {
        return (
            <div className={`w-full flex flex-col ${className}`}>
                {label && <label className={`${labelStyle[style]} mb-1`} htmlFor={id}>{label}{required && <span className='text-error'> * </span>}</label>}
                <input
                    className={`${styles[style]} ${inputSize[size]} focus:outline-none px-6 ${error ? 'border-danger' : ''}`}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    type={type}
                    min={min}
                    max={max}
                    placeholder={placeholder}
                    ref={ref}
                    {...rest}
                />
            </div>
        );
    }
};

export default Input;

