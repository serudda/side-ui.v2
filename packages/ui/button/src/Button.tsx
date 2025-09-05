import * as React from 'react';
import { ButtonAppearance, ButtonSize, ButtonVariant, type VariantProps } from './types';
import { Slot } from '@radix-ui/react-slot';
import { tv } from 'tailwind-variants';

export const button = tv({
  base: [
    'inline-flex flex-shrink-0 items-center justify-center',
    'relative',
    'select-none',
    'whitespace-nowrap font-normal leading-normal',
    'transition-[border,background-color,color,opacity] duration-100 ease-out',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  variants: {
    appearance: {
      [ButtonAppearance.contained]: '',
      [ButtonAppearance.outlined]: '',
      [ButtonAppearance.ghost]: '',
    },
    isActive: {
      true: '',
    },
    isFullWidth: {
      true: 'w-full',
    },
    size: {
      [ButtonSize.sm]: 'py-2 px-2 text-xs h-6 rounded',
      [ButtonSize.base]: 'px-3.5 text-sm h-8 rounded',
      [ButtonSize.lg]: 'px-4 text-base h-10 rounded',
    },
    variant: {
      [ButtonVariant.primary]: '',
      [ButtonVariant.neutral]: '',
      [ButtonVariant.destructive]: '',
    },
  },
  compoundVariants: [
    {
      appearance: ButtonAppearance.contained,
      variant: ButtonVariant.primary,
      className: ['border border-primary-400/20', 'bg-primary-500 hover:bg-primary-400/70', 'text-white'],
    },
    {
      appearance: ButtonAppearance.contained,
      variant: ButtonVariant.neutral,
      className: ['border border-gray-700/20', 'bg-gray-800 hover:bg-gray-700/70', 'text-white'],
    },
    {
      appearance: ButtonAppearance.contained,
      variant: ButtonVariant.destructive,
      className: ['border border-red-700/20', 'bg-red-600 hover:bg-red-500/80', 'text-white'],
    },
    {
      appearance: ButtonAppearance.outlined,
      variant: ButtonVariant.primary,
      className: ['border border-primary-600/60', 'hover:border-primary-400/20 hover:bg-primary-500', 'text-white'],
    },
    {
      appearance: ButtonAppearance.outlined,
      variant: ButtonVariant.neutral,
      className: ['border border-gray-700/60', 'hover:border-gray-700/20 hover:bg-gray-800', 'text-white'],
    },
    {
      appearance: ButtonAppearance.outlined,
      variant: ButtonVariant.destructive,
      className: ['border border-red-700/60', 'hover:border-red-700/20 hover:bg-red-600', 'text-white'],
    },
    {
      appearance: ButtonAppearance.ghost,
      variant: ButtonVariant.primary,
      className: ['hover:bg-primary-500', 'text-white'],
    },
    {
      appearance: ButtonAppearance.ghost,
      variant: ButtonVariant.neutral,
      className: ['hover:bg-gray-800', 'text-white'],
    },
    {
      appearance: ButtonAppearance.ghost,
      variant: ButtonVariant.destructive,
      className: ['hover:bg-red-600', 'text-white'],
    },
  ],
  defaultVariants: {
    appearance: ButtonAppearance.contained,
    isFullWidth: false,
    size: ButtonSize.base,
    variant: ButtonVariant.primary,
  },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  /**
   * The appearance of the button.
   */
  appearance?: ButtonAppearance;

  /**
   * If true, the button will be rendered as a child
   * element. This is useful when you need to use the button
   * as a link or other element.
   */
  asChild?: boolean;

  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;

  /**
   * If true, the button will be active.
   */
  isActive?: boolean;

  /**
   * If true, the button will be full width.
   */
  isFullWidth?: boolean;

  /**
   * The size of the button.
   */
  size?: ButtonSize;

  /**
   * The variant of the button.
   */
  variant?: ButtonVariant;
}

/**
 * Buttons are used to initialize an action. Button labels
 * express what action will occur when the user interacts
 * with it.
 *
 * @see https://www.uiguideline.com/components/button
 */

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      appearance,
      size = ButtonSize.base,
      variant = ButtonVariant.primary,
      isFullWidth,
      asChild = false,
      isActive = false,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';
    const classes = button({
      appearance,
      size,
      variant,
      isFullWidth,
      isActive,
      className,
    });

    return <Component className={classes} ref={ref} {...props} />;
  },
);

Button.displayName = 'Button';

export { ButtonAppearance, ButtonSize, ButtonVariant };
