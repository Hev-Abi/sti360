import React from "react";

const LifecycleCard = ({ title }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition">
      <h3 className="font-semibold text-lg text-center">{title}</h3>
    </div>
  );
};

export default LifecycleCard;