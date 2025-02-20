import React from 'react'

const Input = ({type,placeholder,name,value,onChange}) => {
    return (
        <>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border w-full mx-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />
        </>
    )
}

export default Input