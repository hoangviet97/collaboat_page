import React, { useState, FC } from "react";
import { faTableColumns, faSackDollar, faTags, faChartColumn, faBell, faSquareCheck, faColumns, faTableCells, faTableCellsLarge, faUserShield } from "@fortawesome/free-solid-svg-icons";
import FeatureHeaderItem from "./FeatureHeaderItem";

interface Props {
  setFeature: any;
}

const MoreFeaturesHeader: FC<Props> = ({ setFeature }) => {
  const [headerFeatures, setHeaderFeatures] = useState([
    { title: "Overview", icon: faTableCellsLarge },
    { title: "Kanban", icon: faTableColumns },
    { title: "Review", icon: faSquareCheck },
    { title: "Reports", icon: faChartColumn },
    { title: "Budget", icon: faSackDollar },
    { title: "Tags", icon: faTags }
  ]);

  return (
    <div className="mx-auto w-[80%] mt-[60px] mb-[60px]">
      <div className="more-features grid grid-cols-3 md:grid-cols-6  w-[100%] bg-slate-100">
        {headerFeatures.map((item: any, index: number) => {
          return <FeatureHeaderItem key={index} title={item.title} icon={item.icon} setFeature={setFeature} />;
        })}
      </div>
    </div>
  );
};

export default MoreFeaturesHeader;
