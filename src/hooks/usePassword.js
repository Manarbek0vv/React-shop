import { useState } from "react";

export const usePassword = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        const value = event.target.value
        const trueSymbols = 'abcdefghijklmnopqrstuvwxyz1234567890 '

        if (value.length > 20) {
            console.log(2)
            return
        }

        if (value.length > 0 && !(trueSymbols.includes(value.toLowerCase()[value.length - 1]))) {
            return
        }


        setValue(value);
    };

    return {
        value,
        onChange: handleChange
    };
};