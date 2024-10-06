// dependencies
import React from "react";

// components
import { Text } from "@/app/components";

const JSMCQ = () => {
  return (
    <div>
      {Array(100)
        .fill(0)
        .map((el, index) => {
          return <Text key={index}>JSMCQ{el}</Text>;
        })}
    </div>
  );
};

export default JSMCQ;
