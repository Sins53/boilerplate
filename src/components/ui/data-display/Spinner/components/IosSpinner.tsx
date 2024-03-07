import React from "react";
import "@/components/ui/feedback/Spinner/style/IosSpinner.css";
import {
  IosColorMapping,
  SpinnerSizeClassMapping,
  SpinnerVariants,
} from "@/components/ui/data-display/Spinner/Spinner.schema";
import { getComputedClassNames } from "@/utility/tailwind/tailwind-utility";
import { Flexbox } from "@/components/ui/core/Flexbox";
import { DefaultSizes } from "@/components/ui/ui.types";

interface LoadingProps {
  size?: DefaultSizes;
  className?: string;
  variant?: SpinnerVariants;
}

const IosSpinner: React.FunctionComponent<LoadingProps> = (props) => {
  const { variant = "primary", className, size = "md" } = props;

  const LoadingComputedClass = getComputedClassNames("loader relative w-12 h-12", size);

  // const flexComputedClass = getComputedClassNames("d-flex justify-center ", className);
  const iosSpinnerComputedClass = getComputedClassNames(
    `w-[0.1em] h-[0.3em]  rounded-[0.05em] opacity-0 absolute left-[50%] top-[50%] origin-top-left translate-x-[-50%] translate-y-[70%] animate-fade`,
    "loaderWheel__spoke",
    IosColorMapping[variant],
    SpinnerSizeClassMapping[size],
    className,
  );
  const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Flexbox className={className}>
      <span className={LoadingComputedClass}>
        {Array.from(lines)?.map((index: number) => {
          return <span key={index} className={iosSpinnerComputedClass} />;
        })}
      </span>
    </Flexbox>
  );
};

export default IosSpinner;
