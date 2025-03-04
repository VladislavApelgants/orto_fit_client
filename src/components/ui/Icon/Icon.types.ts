import { IconConfig } from "@/components/ui/Icon/Icon.config";

export type IconType = keyof typeof IconConfig;

export interface TIconComponentProps {
  type: IconType;
  classnames?: string;
  width: number;
  height: number;
  boxWidth?: number;
  boxHeight?: number;
}
