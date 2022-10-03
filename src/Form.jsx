import { useStore } from "./store";
export const Form = () => {
	const { name, details, toggleSidebar, data, age, increamentAge } = useStore();

	return (
		<div className="bg-red-100 p-10 border-4">
			<button onClick={toggleSidebar}>
				Toggle Sidebar
			</button>
			<input
				type="text"
				placeholder="change title"
				onChange={(e) => data.set({ ...data.get(), title: e.target.value })}
				value={data.get().title}
			/>
			<input
				type="text"
				placeholder="change description"
				onChange={(e) =>
					data.set({ ...data.get(), description: e.target.value })
				}
				value={data.get().description}
			/>
			<input
				type="number"
				placeholder="change price"
				onChange={(e) => data.set({ ...data.get(), price: e.target.value })}
				value={data.get().price}
			/>
			<button
				onClick={increamentAge}
			>
				Change details
			</button>
		</div>
	);
};
