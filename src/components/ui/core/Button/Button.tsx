import { forwardRef, ReactNode } from "react";
import { Box } from "@/components/ui/core/Box";

import Spinner from "@/components/ui/data-display/Spinner/components/Spinner";
import { DefaultSizes, DefaultVariants } from "@/components/ui/ui.types";
import { useButtonStyleMapper } from "@/components/ui/core/Button/button-style";
import { ButtonDisplays, ButtonTypes } from "@/components/ui/core/core.types";
import { getComputedClassNames } from "@/utility/tailwind/tailwind-utility";
import { Flexbox } from "@/components/ui/core/Flexbox";

export interface ButtonProps extends TouchableProps {
  variant?: DefaultVariants | "gray";
  as?: ButtonTypes;
  size?: DefaultSizes;
  display?: ButtonDisplays;
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  plain?: boolean;
}
type TouchableProps = React.ComponentPropsWithRef<'button'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = "primary",
    size = "md",
    display = "inline",
    as = "solid",
    title = "",
    leftIcon,
    rightIcon,
    isLoading = false,
    className,
    children,
    type = "submit",
    plain,
    disabled,
    ...buttonProps
  } = props;

  const { container, icon: iconStyles } = useButtonStyleMapper(size, display, variant, as, className);

  return (
    <button
      ref={ref}
      type={type}
      {...buttonProps}
      disabled={isLoading || disabled}
      className={plain ? className : container}
      title={title}
    >
      <Box className={`relative w-full ${isLoading ? "text-transparent" : ""}`}>
        {leftIcon && (
          <Box
            data-testid="button-icon"
            className={getComputedClassNames(iconStyles.left, "inline-block h-full -translate-y-0.5  align-middle")}
          >
            {leftIcon}
          </Box>
        )}
        {children ?? title}
        {rightIcon && (
          <Box className={[iconStyles.right, "inline-block h-full -translate-y-0.5 align-middle"].join(" ")}>
            {rightIcon}
          </Box>
        )}
        {isLoading ? (
          <Flexbox className="absolute top-0 w-full" justify="center">
            <Spinner
              size={"sm"}
              variant={as === "solid" ? "white" : (variant as Exclude<ButtonProps["variant"], "plain" | "gray">)}
            />
          </Flexbox>
        ) : null}
      </Box>
    </button>
  );
});

Button.displayName = "Button";
