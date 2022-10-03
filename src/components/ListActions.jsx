import { useStore } from "../store";
let i = 0;
export const ListActions = () => {
	const { posts, addPost, clearPosts } = useStore();

	return (
		<div className="flex justify-around bg-green-200 p-2 m-5">
			<div>
				<button onClick={clearPosts}>Clear</button>
			</div>
			<div>
				<button
					onClick={addPost}
				>
					Add
				</button>
			</div>
		</div>
	);
};
