import { Text } from "@/app/components";
import React from "react";

const Javascript = () => {
  return (
    <div>
      <Text>
        JavaScript
        {Array(100)
          .fill(0)
          .map((el, index) => (
            <Text key={index}>{el}</Text>
          ))}
      </Text>
    </div>
  );
};

export default Javascript;
