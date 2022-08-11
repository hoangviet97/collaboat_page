import React, { FC } from "react";

interface Props {
  content: string;
}

const MoreFeaturesContent: FC<Props> = ({ content }) => {
  return (
    <div className="flex justify-center">
      <img src={`./${content}.png`} className="img-shadow w-[70%]" />
    </div>
  );
};

export default MoreFeaturesContent;
