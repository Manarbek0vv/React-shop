import { useState } from "react";

export const useName = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        if (event.target.value.length > 25) return
        setValue(event.target.value);
    };

    return {
        value,
        onChange: handleChange
    };
};