import { useStore } from "../store";


export const ItemList = () => {
	const { posts } = useStore();
	
	return (
		<div>

			<div className="flex flex-col items-center justify-center">
				{posts.get().map((post) => (
					<div className="border-2 w-96" key={post.id}>{post.title}</div>
				))}
            </div>
		</div>
	);
};
