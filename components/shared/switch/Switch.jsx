import React, { useState } from "react";
import "./switch.css"

/**
 * Switch component for creating a toggle switch.
 *
 * @param {string} id - Unique identifier for the switch.
 * @param {boolean} defaultChecked - The initial checked state (true for checked, false for unchecked).
 * @param {function} onChange - Callback function to handle switch state changes.
 */
export default function Switch({ id, defaultChecked = false, onChange }) {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleSwitchChange = (e) => {
        const newChecked = e.target.checked;
        setIsChecked(newChecked);
        onChange(id, newChecked);
    };

    return (
        <div className="relative inline-block w-10 h-6 select-none transition duration-200 ease-in">
            <input
                type="checkbox"
                name={id}
                id={id}
                checked={isChecked}
                onChange={handleSwitchChange}
                className="absolute opacity-0 w-0 h-0"
                aria-checked={isChecked}
                role="switch"
            />
            <label
                htmlFor={id}
                className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${isChecked ? "bg-primary" : "bg-primary2/50"
                    }`}
            >
                <span
                    className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isChecked ? "translate-x-4" : "translate-x-0"
                        }`}
                ></span>
            </label>
        </div>
    );
}

// Example usage
// const handleSwitchChange = (id, isChecked) => {
//     console.log(`Switch with ID ${id} is now ${isChecked ? 'checked' : 'unchecked'}`);
// };

// export function App() {
//     return (
//         <div className="p-4">
//             <h1 className="mb-4">Toggle Switch Example</h1>
//             <Switch id="exampleSwitch" defaultChecked={true} onChange={handleSwitchChange} />
//         </div>
//     );
// }