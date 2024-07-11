import React, { useEffect, useRef, useState } from 'react';
import Dropdown from './Dropdown';
import { countriesCode } from '../../../constants/phoneData';

const styles = {
    primary: "w-full bg-white border-[0.04rem] border-l-0 rounded-lg border-borderColor text-blacky placeholder:text-sm placeholder:text-textColor2",
    secondary: "w-full bg-inputColor border-[0.04rem] border-l-0 rounded-lg border-borderColor text-blacky placeholder:text-sm placeholder:text-textColor2",
    outline: "w-full border-[0.04rem] border-l-0 rounded-lg border-borderColor text-blacky placeholder:text-sm placeholder:text-textColor2",
    // otp: "w-full bg-white border rounded-lg border-borderColor font-medium text-primary2 text-[2rem] text-center leading-[3rem] placeholder:text-textColor2 focus:border-primary2"
};
const labelStyle = {
    primary: 'font-normal text-base text-blacky',
    secondary: 'font-normal text-base text-blacky',
}
const inputSize = {
    lg: 'p-4',
    md: 'px-4 py-3',
    sm: 'py-1'
}

const PhoneInput = ({
    style = 'primary',
    className = "",
    id = "",
    name = "phone",
    phone = "",
    onBlur,
    placeholder = "",
    size = "md",
    label,
    error,
    min = 0,
    max,
    required,
    rest = {}
}) => {
    const countryCodesList = () => {
        const sortedCodes = countriesCode.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
        const codeWithRoot = sortedCodes.filter(item => item.idd.root);
        const countryCodes = codeWithRoot.map(item => ({ ...item, countryCode: `${item?.idd.root}${item?.idd.suffixes.length > 1 ? "" : item?.idd.suffixes[0]}` }))
        return countryCodes;
    };

    const [countriesList, setCountriesList] = useState(countryCodesList());
    const [country, setCountry] = useState(countriesList.find(country => country.name.common === "Bangladesh"));
    const [phoneNumber, setPhoneNumber] = useState(phone)

    const phoneRef = useRef("");

    useEffect(() => {
        const fetchCountries = () => {
            fetch("https://restcountries.com/v3.1/all?fields=name,flags,idd")
                .then((res) => res.json())
                .then((data) => data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
                ).then((data) => data.filter(item => item.idd.root))
                .then((data) => setCountriesList(data.map(item => ({ ...item, countryName: item.name.common, countryCode: `${item?.idd.root}${item?.idd.suffixes.length > 1 ? "" : item?.idd.suffixes[0]}` }))))
        }

        fetchCountries();
    }, []);

    useEffect(() => {
        if (phone) {
            const country = countriesList.find(country => phone.startsWith(country.countryCode));
            setCountry(country);
            setPhoneNumber(phone);
            return;
        }

        setPhoneNumber(country?.countryCode);

    }, [])

    const handleChange = (e) => {
        const value = e.target.value;

        if (!value.startsWith(country.countryCode)) {
            setPhoneNumber(phoneNumber);
            return;
        }
        setPhoneNumber(value);
    };

    const handleDropdownChange = (data) => {
        setCountry(data);
        console.log(data);
        setPhoneNumber(data?.countryCode);
    };

    return (
        <div className="">
            <div className={`w-full flex flex-col ${className}`}>
                {label && <label className={`${labelStyle[style]} mb-1`} htmlFor={id}>{label}{required && <span className='text-error'> * </span>}</label>}
                <div className={`relative flex items-center ${styles[style]}`}>
                    <Dropdown data={countriesList} size="sm" style={style} selectedItem={country} onChange={handleDropdownChange} />
                    <input
                        className={`w-full ${styles[style]} ${inputSize[size]} focus:outline-none px-6 ${error ? 'border-danger' : ''}`}
                        id={id}
                        name={name}
                        value={phoneNumber || ""}
                        onBlur={onBlur}
                        type="tel"
                        min={min}
                        max={max}
                        placeholder={placeholder}
                        ref={phoneRef}
                        {...rest}
                        required={required}
                        onChange={handleChange}

                    />
                </div>
            </div>
        </div>
    )
}

export default PhoneInput