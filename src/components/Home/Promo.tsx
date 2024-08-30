import indi1 from "../../assets/Individual.png";
import indi2 from "../../assets/Individual2.png";
import indi3 from "../../assets/Individual3.png";
import indi4 from "../../assets/Individual4.png";

import bussiness1 from "../../assets/Business.png";
import bussiness2 from "../../assets/Business1.png";
import bussiness3 from "../../assets/Business2.png";
import bussiness4 from "../../assets/Business3.png";

import "./Promo.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const individualUseCases = [
  { title: "Managing Personal Finances", image: indi1 },
  { title: "Saving for the Future", image: indi2 },
  { title: "Homeownership", image: indi3 },
  { title: "Education Funding", image: indi4 },
];

const businessUseCases = [
  { title: "Startups and Entrepreneurs", image: bussiness1 },
  { title: "Cash Flow Management", image: bussiness2 },
  { title: "Business Expansion", image: bussiness3 },
  { title: "Payment Solutions", image: bussiness4 },
];

const Promo:React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="promo-container" ref={ref}>
      <motion.div
        className="header"
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <h3>Use Cases</h3>
        <p>
          Take control of your finances with LedgerLink, the ultimate
          transaction manager app designed to streamline your financial journey.
        </p>
      </motion.div>
      <div className="individual-business">
        <motion.div
          className="use-cases-grid"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          {individualUseCases.map((useCase, index) => (
            <motion.div key={index} className="use-case-item">
              <img src={useCase.image} alt={useCase.title} />
              {useCase.title}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="for-individuals"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <h4>For Individuals</h4>
          <div className="individual-stats">
            <div className="stat-item">
              <span className="percentage">78%</span>
              <span className="percen-tag">Secure Retirement Planning</span>
            </div>
            <div className="stat-item">
              <span className="percentage">63%</span>
              <span className="percen-tag">Manageable Debt Consolidation</span>
            </div>
            <div className="stat-item">
              <span className="percentage">91%</span>
              <span className="percen-tag">Reducing Financial Burdens</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#161616" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="learn-more-btn"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
      <div className="individual-business">
        <motion.div
          className="for-business"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <h4>For Business</h4>
          <div className="business-stats">
            <div className="stat-item">
              <span className="percentage">65%</span>
              <span className="percen-tag">Cash Flow Management</span>
            </div>
            <div className="stat-item">
              <span className="percentage">70%</span>
              <span className="percen-tag">Drive Business Expansion</span>
            </div>
            <div className="stat-item">
              <span className="percentage">45%</span>
              <span className="percen-tag">Streamline Payroll Processing</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#161616" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="learn-more-btn"
          >
            Learn More
          </motion.button>
        </motion.div>
        <motion.div
          className="use-cases-grid"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          {businessUseCases.map((useCase, index) => (
            <div key={index} className="use-case-item">
              <img src={useCase.image} alt={useCase.title} />
              {useCase.title}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Promo;
