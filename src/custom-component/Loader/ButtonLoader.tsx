'use client'

import React, { useEffect } from "react";
import "ldrs/dotPulse";

import { dotPulse } from "ldrs";
// Default values shown

const ButtonLoader = () => {
  useEffect(() => {
    dotPulse.register();
  }, []);
  return (
    <div>
      <l-dot-pulse size="43" speed="1.3" color="white"></l-dot-pulse>
    </div>
  );
};

export default ButtonLoader;
