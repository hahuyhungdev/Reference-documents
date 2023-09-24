import { ProgressBarDynamic } from "@components/ProgressBar/dynamic";
import React from "react";

const GainLostBar = () => {
  return (
    <div className="w-full">
  <ProgressBarDynamic colors={["#F4AC20"]} dataProgress={[
                      {
                        name: "WETH",
                        value: 40
                      }]}
                      widthsize="col-span-2" />      <div className="w-full flex items-center justify-between mt-[8px]">
        <span className="text-[#525252] text-[11px]">40 (40%)</span>
        <span className="text-[#525252] text-[11px]">60 (60%)</span>
      </div>
    </div>
  );
};

export default GainLostBar;
