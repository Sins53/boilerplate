import React from "react";
import { getComputedClassNames } from "@/utility/tailwind/tailwind-utility";
import { Flexbox } from "@/components/ui/core/Flexbox";
import {
  LoadingBaseMapping,
  LoadingBorderUnfilledMapping,
  LoadingFilledMapping,
  SpinnerSizeClassMapping,
  type SpinnerTypes,
  SpinnerVariants,
} from "@/components/ui/data-display/Spinner/Spinner.schema";
import "@/components/ui/feedback/Spinner/style/Spinner.css";
import { DefaultSizes } from "@/components/ui/ui.types";

interface LoadingProps {
  className?: string;
  variant?: SpinnerVariants;
  size?: DefaultSizes;
  type?: SpinnerTypes;
}

const Spinner: React.FunctionComponent<LoadingProps> = (props) => {
  const { variant = "primary", type = "circleHalf", size = "md", className } = props;

  const LoadingComputedClass = getComputedClassNames(
    "loader",
    SpinnerSizeClassMapping[size],
    LoadingFilledMapping[variant][type],
    LoadingBaseMapping[variant][type],
    LoadingBorderUnfilledMapping[variant][type],
    className,
  );

  const flexComputedClass = getComputedClassNames("d-flex justify-center ", className);

  return (
    <Flexbox className={flexComputedClass} data-testid="spinner">
      <span className={LoadingComputedClass} />
    </Flexbox>
  );
};

export default Spinner;
