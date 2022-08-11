import React, { useState } from "react";
import MoreFeaturesHeader from "./MoreFeaturesHeader";
import MoreFeaturesContent from "./MoreFeaturesContent";

const MoreFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState("Overview");
  return (
    <div>
      <MoreFeaturesHeader setFeature={setSelectedFeature} />
      <MoreFeaturesContent content={selectedFeature} />
    </div>
  );
};

export default MoreFeatures;
