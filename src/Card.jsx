import { useStore } from "./store";

export const Card = () => {
	const { name, data, age } = useStore();

	return (
		<div className="bg-green-100 p-10 border-4">
			<div>name is: {name.get()}</div>
			<div>age is: {age.get()}</div>
			<div>details: {JSON.stringify(data.get())}</div>
		</div>
	);
};
