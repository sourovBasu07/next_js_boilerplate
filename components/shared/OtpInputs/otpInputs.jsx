import React, { useEffect, useRef } from 'react';

const OtpInputs = ({ otp, setOtp }) => {
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Clear focus after filling input 
        inputRefs.current[index].value && inputRefs.current[index].blur();

        // Move focus to the next input
        if (value && index < otp.length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        const prevInput = inputRefs.current[index - 1];
        const nextInput = inputRefs.current[index + 1];

        // Move focus to the previous input if backspace is pressed on an empty input
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            prevInput.focus();
            prevInput.setSelectionRange(1, 1);
        }

        if (e.key === "ArrowLeft") {
            e.preventDefault()
            if (index > 0 && inputRefs.current[index - 1]) {
                prevInput.focus();
                prevInput.setSelectionRange(1, 1);
            }
        }

        if (e.key === "ArrowRight" && otp[index] && index < otp.length - 1 && inputRefs.current[index + 1]) {
            nextInput.focus();
        }
    };

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);

        // Move focus to the previous input if backspace is pressed on an empty input
        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    };

    return (
        <div className="w-full flex flex-col gap-[1.875rem]">
            <div className="w-full flex justify-between">
                {otp.map((value, index) => (
                    <div key={index} className="w-20 h-auto">
                        <input
                            value={value}
                            ref={(ref) => inputRefs.current[index] = ref}
                            className="w-full bg-white border rounded-lg border-borderColor px-4 py-3 font-medium text-primary2 text-[2rem] text-center leading-[3rem] placeholder:text-textColor2 focus:border-primary2"
                            onChange={(e) => handleChange(e, index)}
                            onClick={() => handleClick(index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OtpInputs;