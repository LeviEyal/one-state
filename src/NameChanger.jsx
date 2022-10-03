import { useStore } from "./store";

export const NameChanger = () => {
	const { name, age, details } = useStore();

	return (
		<div className="bg-cyan-100 p-10 border-4">
			<input
				type="text"
				placeholder="change name"
				onChange={(e) => (name.set(e.target.value))}
				value={name.get()}
			/>
			<input
				type="text"
				placeholder="change age"
				onChange={(e) => (age.set(e.target.value))}
				value={age.get()}
			/>
			<div>details: {JSON.stringify(details.get())}</div>
		</div>
	);
};
