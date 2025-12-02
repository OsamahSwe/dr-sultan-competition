import { motion } from "framer-motion";

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-purple-500 p-10"
    >
      Tailwind is working 🎉
    </motion.div>
  )
}

export default App
