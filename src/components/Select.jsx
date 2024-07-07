import React, { useId } from "react";

function Select({
    options,
    label,
    className,
    ...props
}, ref)  {

    const id = useId()
    return (
        <div className="w-full">
            {label && <label htmlFor={id} className=""></label>}
            <select
             {...props} id={id} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
                {options?.map((option) => {  // options is an array of choices, so first we check that if at all there are any choices available to select from which is done using "?" if true then apply map function to the array 
                    <option key={option} value={option}> 
                        {option}
                    </option>      // map takes an individual value or an index of the array to help iterate through it and there is "key" which can be assigned to every element of that array
                }) }
            </select>
        </div>
    )
}  

export default React.forwardRef(Select)