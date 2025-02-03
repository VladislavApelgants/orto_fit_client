import { TIconProps } from "@/components/types/TIconProps";
import { IconConfig } from "@/components/ui/Icon/Icon.config";

export type IconType = keyof typeof IconConfig;

export interface TIconComponentProps extends TIconProps {
  type: IconType;
}
