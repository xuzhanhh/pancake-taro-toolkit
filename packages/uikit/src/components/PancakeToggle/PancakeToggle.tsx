import React from "react";
import { Box } from "../Box";
import { PancakeStack, PancakeInput, PancakeLabel } from "./StyledPancakeToggle";
import { PancakeToggleProps, scales } from "./types";

const PancakeToggle: React.FC<PancakeToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <PancakeStack scale={scale}>
    <PancakeInput id={props.id || "pancake-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <PancakeLabel scale={scale} checked={checked} for={props.id || "pancake-toggle"}>
      <Box className="pancakes">
        <Box className="pancake" />
        <Box className="pancake" />
        <Box className="pancake" />
        <Box className="butter" />
      </Box>
    </PancakeLabel>
  </PancakeStack>
);

export default PancakeToggle;
