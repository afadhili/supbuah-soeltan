"use client"
import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

export default function BackOnTop() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true)
    }
    else if (scrolled <= 100) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, [])

  return (
    <button type="button" className={`${visible ? 'fixed' : 'hidden'} bottom-4 right-4 p-4 rounded-full bg-gray-700 shadow-lg z-50`} onClick={() => scrollToTop()}>
      <FaArrowCircleUp size={20} color="white" />
    </button>
  )
}