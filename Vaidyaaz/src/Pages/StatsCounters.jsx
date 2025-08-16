import React from "react";
import { Users, Briefcase, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";
import "./StatsCounters.css";

const stats = [
  { icon: <Users />, number: "1500+", label: "Happy Clients" },
  { icon: <Briefcase />, number: "250+", label: "Projects Done" },
  { icon: <Award />, number: "25+", label: "Awards Won" },
  { icon: <Globe />, number: "10+", label: "Countries Served" },
];

const StatsCounters = () => {
  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="stat-item"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <motion.div
            className="stat-icon"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: index * 0.3 }}
          >
            {stat.icon}
          </motion.div>
          <motion.h2
            className="stat-number"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.4 }}
          >
            {stat.number}
          </motion.h2>
          <p className="stat-label">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCounters;
