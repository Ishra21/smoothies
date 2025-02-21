import React from 'react'
import { motion } from "framer-motion";
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
    <div className="relative w-24 h-40 border-4 border-pink-500 rounded-t-3xl overflow-hidden">
      <motion.div
        className="absolute bottom-0 w-full bg-pink-400"
        initial={{ height: "0%" }}
        animate={{ height: "100%" }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </div>
    <motion.div
      className="w-6 h-10 bg-pink-500 mt-1 rounded-full"
      initial={{ y: -5 }}
      animate={{ y: 5 }}
      transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut", repeatType: "reverse" }}
    />
    <p className="mt-4 text-pink-600 text-lg font-semibold">Loading...</p>
  </div>
  )
}

export default Loader