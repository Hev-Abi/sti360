import React from "react";
import LifecycleCard from "./LifecycleCard";

const LifecycleLayout = () => {
  const steps = [
    "Student Lifecycle Dashboard",
    "View Personal Data & Information",
    "Virtual Student Checklist",
    "View Curriculum",
    "Upload Grades",
    "Calculate Estimated Grade",
    "Check Scholarship Eligibility",
  ];

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {steps.map((step, index) => (
        <LifecycleCard key={index} title={step} />
      ))}
    </div>
  );
};

export default LifecycleLayout;