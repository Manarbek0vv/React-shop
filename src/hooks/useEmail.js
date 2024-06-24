import { useState } from "react";

export const useEmail = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        const value = event.target.value
        if (value.length > 35) return
        if (value.length === 1 && (value[0] === '.' || value[0] === '@')) return
        if (value.at(-1) === '@' && value.split('').some(alpha => alpha === '.')) return
        if (value.split('').filter(alpha => alpha === '.').length > 1) return
        if (value.split('').filter(alpha => alpha === '@').length > 1) return
        setValue(value);
    };

    return {
        value,
        onChange: handleChange
    };
};