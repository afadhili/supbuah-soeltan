"use client"
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

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
    <button type="button" className={`${visible ? 'fixed' : 'hidden'} bottom-4 right-4 p-2 rounded-full border-pink-600 text-pink-600 hover:bg-pink-600/30 border shadow-lg z-50`} onClick={() => scrollToTop()}>
      <FaArrowUp size={20} />
    </button>
  )
}