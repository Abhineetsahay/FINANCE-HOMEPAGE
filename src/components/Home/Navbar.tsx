import { motion } from "framer-motion";
import navIcon from "../../assets/navIcon.png";
import './Navbar.css'; 

const Navbar:React.FC = () => {
  return (
    <motion.div 
      className="navbar"
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="navbar-logo"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={navIcon} alt="Logo" /> 
      </motion.div>
      <motion.div 
        className="navbar-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.a href="#home" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          Home
        </motion.a>
        <motion.a href="#careers" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          Careers
        </motion.a>
        <motion.a href="#about" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          About
        </motion.a>
        <motion.a href="#security" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          Security
        </motion.a>
      </motion.div>
      <motion.div 
        className="navbar-login"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "#a3e000" }} 
          transition={{ type: "spring", stiffness: 300 }}
        >
          Login
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
