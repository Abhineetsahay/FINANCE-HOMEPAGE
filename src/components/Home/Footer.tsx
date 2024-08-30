import React, { useEffect } from "react";
import "./Footer.css";
import Arrow from "../../assets/Arrow.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer: React.FC = () => {
  const bankingFeatures = [
    {
      title: "24/7 Account Access",
      description:
        "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
    },
    {
      title: "Mobile Banking App",
      description:
        "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
    },
    {
      title: "Secure Transactions",
      description:
        "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
    },
    {
      title: "Bill Pay and Transfers",
      description:
        "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
    },
  ];

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
    <div className="footer" ref={ref}>
      <motion.div
        className="footer-header"
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <h3>
          Our <span className="highlight">Features</span>
        </h3>
        <p>
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience.
        </p>
      </motion.div>
      <div className="footer-content">
        <motion.div
          className="footer-menu"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <div className="menu-item">Online Banking</div>
          <div className="menu-item">Financial Tools</div>
          <div className="menu-item">Customer Support</div>
        </motion.div>
        <motion.div
          className="footer-features"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          {bankingFeatures.map((bankingFeature, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial="hidden"
              whileHover={{scale:1.05}}
              animate={controls}
              variants={fadeInVariants}
            >
              <div className="feature-header">
                <h5 className="feature-title">{bankingFeature.title}</h5>
                <img src={Arrow} alt="Arrow" className="feature-icon" />
              </div>
              <p className="feature-description">
                {bankingFeature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
