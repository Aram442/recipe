import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      <Veggie />
      <Popular />
    </div>
  );
}

export default Home;
