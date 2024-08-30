import { motion } from "framer-motion";
import "./Main.home.css";
import ContainerImage from "../../assets/Container.png";
import AbstractDesign from "../../assets/AbstractDesign.png";

const MainPart:React.FC = () => {
  return (
    <div className="main-container">
      <motion.div
        className="left-section"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.75 }}
      >
        <h1 className="main-title">Welcome to LedgerLink</h1>
        <h2 className="sub-title">
          Empowering Your <span>Financial Decisions</span>
        </h2>
        <p className="description">
          Take control of your finances with LedgerLink, the ultimate
          transaction manager app designed to streamline your financial
          journey. Effortlessly track, manage, and analyze your transactions
          with our intuitive interface. From detailed reports to insightful
          analytics, LedgerLink provides the tools you need to make informed
          financial decisions and achieve your goals. Start managing your
          money with confidence today!
        </p>
        <motion.button
          className="view-transactions-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View Transactions
        </motion.button>
      </motion.div>

      <motion.div
        className="right-section"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.75 }}
      >
        <motion.img
          src={ContainerImage}
          alt="Container"
          className="container-image"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src={AbstractDesign}
          alt="Bg"
          className="bg-container-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        />
      </motion.div>
    </div>
  );
};

export default MainPart;
