import React from "react";
import { getComputedClassNames } from "@/utility/tailwind/tailwind-utility";
import { Flexbox } from "@/components/ui/core/Flexbox";
import "@/components/ui/feedback/Spinner/style/BallSpin.css";
import { DefaultSizes } from "@/components/ui/ui.types";
import {
  BallSpinColorMapping,
  SpinnerSizeClassMapping,
  SpinnerVariants,
} from "@/components/ui/data-display/Spinner/Spinner.schema";

interface BallSpinProps {
  size?: DefaultSizes;
  className?: string;
  variant?: SpinnerVariants;
}

const BallSpin: React.FunctionComponent<BallSpinProps> = (props) => {
  const { variant = "primary", className, size = "md" } = props;

  const LoadingComputedClass = getComputedClassNames(
    "loader -indent-96  translate-y-0   opacity-75  translate-y-0  w-4 h-4 text-xs rounded-full",
    "animate-mulShdSpin",
    SpinnerSizeClassMapping[size],
    BallSpinColorMapping[variant],
    className
  );

  const flexComputedClass = getComputedClassNames(
    "d-flex justify-center ",
    className
  );

  return (
    <Flexbox className={flexComputedClass}>
      <span className={LoadingComputedClass} />
    </Flexbox>
  );
};

export default BallSpin;
