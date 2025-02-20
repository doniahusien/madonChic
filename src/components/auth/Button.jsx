import React from 'react'

const Button = ({title}) => {
    return (
        <>
            <button
                type="submit"
                className="bg-blue-600 text-white p-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
            >
                {title}
            </button></>
    )
}

export default Button