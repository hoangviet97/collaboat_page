import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faSackDollar, faTags, faChartColumn, faBell, faSquareCheck, faColumns, faTableCells, faTableCellsLarge, faUserShield } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  icon: any;
  setFeature: any;
}

const FeatureHeaderItem: FC<Props> = ({ title, icon, setFeature }) => {
  return (
    <div className="py-[25px] flex flex-col gap-[6px] text-gray-600 hover:bg-blue-500 hover:text-white" onClick={() => setFeature(title)}>
      <FontAwesomeIcon icon={icon} className="text-[22px]" />
      <span>{title}</span>
    </div>
  );
};

export default FeatureHeaderItem;
