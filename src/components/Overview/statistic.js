import React, { useState } from "react";
import { Data } from "../data";
import { Progress } from "@chakra-ui/react";

function Statistics() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className=" justify-between w-full flex flex-col">
      <div className=" bg-cardBackground w-1/2 content-start ">
        <h1 className="text-silver">Savings graph </h1>
      </div>
    </div>
  );
}

export default Statistics;
