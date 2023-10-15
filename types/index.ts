import { MouseEventHandler } from "react";

export type CustomButtonProps = {
	title: string;
	btnType?: 'button' | 'submit'
	containerStyles?: string;
	textStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	isDisabled?: boolean;
	rightIcon?: string
	anchor?: string
}
export type CarProps = {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}
export type SearchProps = {
	manufacturer?: string;
	setManufacturer?: (manufacturer: string) => void;
	model?: string
	setModel?: (model: string) => void;
	allCars?: CarProps[] 
}

export type FilterProps = {
	model?: string;
	manufacturer?: string;
	year?: number;
	limit?: number;
	fuel?: string;
}

export type HomeProps = {
	searchParams: FilterProps
}

export type OptionProps = {
	title: string
	value: string
}

export type CustomFilterProps = {
	title: string
	options: OptionProps[]
}

