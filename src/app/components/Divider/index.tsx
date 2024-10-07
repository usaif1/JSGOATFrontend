import React from "react";

type Props = {
  height?: string;
};

const Divider: React.FC<Props> = ({ height = "1rem" }) => {
  return <div style={{ width: "100%", height: height }} />;
};

export default Divider;
