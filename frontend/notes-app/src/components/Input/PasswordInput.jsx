import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"


const PasswordInput = ({ value, onChange, placeholder }) => {

  const [isShowPassword, setIsShowPassowrd] = useState(false)
  const toggleShowPassword = () => {
    setIsShowPassowrd(!isShowPassword);
  };
  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 roundedn mb-3'>
      <input
        value={value}
        onChange={onChange}
        type={!isShowPassword ? "text" : "password"}
        placeholder={placeholder || "password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
      />

      {isShowPassword ? <FaRegEye
        size={24}
        className="text-primary cursor-pointer"
        onClick={() => toggleShowPassword()}
      /> : <FaRegEyeSlash
        size={24}
        className='text-slate-400 cursor-pointer'
        onClick={() => toggleShowPassword()}
      />}
    </div>
  )
}

export default PasswordInput
