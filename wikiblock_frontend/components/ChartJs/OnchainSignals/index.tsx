import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import GaugeChart from "react-gauge-chart";

export function OnchainSignals({ percent }: { percent: number }) {
  const [colors, setColors] = useState(["#EA4228", "#DADADA", "#DADADA"]);
  useEffect(() => {
    if (percent <= 0.4) {
      setColors(["#EA4228", "#DADADA", "#DADADA"]);
    } else if (percent > 0.4 && percent <= 0.6) {
      setColors(["#DADADA", "#FFFF00", "#DADADA"]);
    } else {
      setColors(["#DADADA", "#DADADA", "#3ACC8A"]);
    }
  }, [percent]);
  return (
    /* if percent <= 40 then color equal to "#EA4228" and The other 2 colors are white */
    /* if percent > 40 and percent <= 60 then color equal to "#F5CD19" and The other 2 colors are white */
    /* if percent > 60 and percent <= 100 then color equal to "#5BE12C" and The other 2 colors are white */
    <GaugeChart
      id="gauge-chart"
      nrOfLevels={3}
      arcsLength={[0.4, 0.2, 0.4]}
      colors={colors}
      percent={percent}
      arcPadding={0.01}
      hideText={true}
      arcWidth={0.05}
    />
  );
}
