import React from "react";
import LifecycleLayout from "../components/LifecycleLayout";

const StudentLifecyclePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Student Lifecycle Process
      </h1>

      <LifecycleLayout />
    </div>
  );
};

export default StudentLifecyclePage;