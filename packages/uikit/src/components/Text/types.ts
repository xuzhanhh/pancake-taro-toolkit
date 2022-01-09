import { BoxProps } from "../Box";

export interface TextProps extends BoxProps {
  color?: string;
  fontSize?: string;
  bold?: boolean;
  small?: boolean;
  ellipsis?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}
