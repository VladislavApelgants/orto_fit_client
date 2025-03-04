import React, { FC } from 'react';
import { IconConfig } from '@/components/ui/Icon/Icon.config';
import { TIconComponentProps } from '@/components/ui/Icon/Icon.types';

export const Icon: FC<TIconComponentProps> = ({ type, width, height,boxWidth, boxHeight, classnames }) => {
  const icon = IconConfig[type];

  if (!icon) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${boxWidth} ${boxHeight}`}
      fill="none"
      className={classnames}
    >
      {icon}
    </svg>
  );
};
