import { FC } from "react";
type typeProps = {
  progress: number;
  widthsize?: number | string;
  colorMain: string;
  className?: string;
};
export const ProgressBar: FC<typeProps> = ({
  progress,
  widthsize,
  colorMain,
  className,
}) => {
  const remaining = 100 - progress;
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: `${colorMain}`,
    display: "flex",
  };
  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#73BBFF",
    borderRadius: "inherit",
    textAlign: "center",
  };
  const short = {
    width: `${remaining}%`,
    textAlign: "center",
  };
  const labelStyles = {
    color: "white",
  };
  const length = {
    width: `${widthsize}`,
  };
  return (
    <div className="progress" style={length}>
      <div className="progress-bar" style={containerStyles}>
        <div style={fillerStyles as any}>
          <span style={labelStyles}>{progress}%</span>
        </div>
        <div style={short as any}>
          <span>{remaining}%</span>
        </div>
      </div>
    </div>
  );
};
