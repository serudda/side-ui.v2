export enum ButtonSize {
	sm = "sm",
	base = "base",
	lg = "lg",
}

export enum ButtonAppearance {
	contained = "contained",
	outlined = "outlined",
	ghost = "ghost",
}

export enum ButtonVariant {
	primary = "primary",
	neutral = "neutral",
	destructive = "destructive",
}

// TODO: While VariantProps is not exported, we need to use this type: https://github.com/heroui-inc/tailwind-variants/issues/270
export type VariantProps<T extends (...args: any) => any> = Omit<
	NonNullable<Parameters<T>[0]>,
	"class" | "className"
>;