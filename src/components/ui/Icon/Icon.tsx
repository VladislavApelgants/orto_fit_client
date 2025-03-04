import { IconConfig } from "@/components/ui/Icon/Icon.config";
import { TIconComponentProps } from "@/components/ui/Icon/Icon.types";
import { FC } from "react";

export const Icon: FC<TIconComponentProps> = ({
  type,
  width,
  height,
  boxWidth,
  boxHeight,
  classnames,
}) => {
  const icon = IconConfig[type];

  if (!icon) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${boxWidth ? boxWidth : width} ${
        boxHeight ? boxHeight : height
      }`}
      fill="none"
      className={classnames}
    >
      {icon}
    </svg>
  );
};
