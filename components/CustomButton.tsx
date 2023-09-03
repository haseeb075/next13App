'use client'

import React from 'react';
import Image from 'next/image';
import CustomButtonProps from '@/types'

function CustomButton({ title,
  containerStyles,
  handleClick, btnType }: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {/* Make reusable component through props */}
      <span className={'flex-1'}>{title} </span>
    </button>
  )
}

export default CustomButton