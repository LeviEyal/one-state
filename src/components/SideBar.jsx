import { useStore } from "../store";

export const SideBar = () => {
	const { name, age } = useStore();

	return (
		<div className="absolute top-0 left-0 w-[300px] h-full bg-stone-500 flex flex-col items-center justify-center">
			<div className=" bg-white p-10 rounded">
				<div className="text-center">
					<h1>Name: {name.get()}</h1>
				</div>
				<div className="text-center">
					<h1>Age: {age.get()}</h1>
				</div>
			</div>
		</div>
	);
};
