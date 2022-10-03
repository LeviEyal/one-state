import { initStore } from "../oneState/initStore";

export const useStore = () => {
	const store = initStore({
		name: "eyal",
		age: 0,
		details: {},
		isSidebarOpen: true,
		data: {
			title: "",
			description: "",
			price: 0,
		},
		posts: [],
	});

	return {
		...store,
		increamentAge: () => {
			store.age.set(Number(store.age.get()) + 1);
		},
		addPost: () => {
			const i = store.posts.get().length;
			store.posts.set([
				...store.posts.get(),
				{ id: i + 1, title: `Post number ${i + 1}` },
			]);
		},
		clearPosts: () => {
			store.posts.set([]);
		},
		toggleSidebar: () => {
			store.isSidebarOpen.set(!store.isSidebarOpen.get());
		},
	};
};

const kkhs = {
	states: {
		name: "",
		age: 0,
		details: {},
		isSidebarOpen: true,
		data: {
			title: "",
			description: "",
			price: 0,
		},
		posts: [],
	},
	actions: {
		increamentAge: () => {
			store.age.set(Number(store.age.get()) + 1);
		},
		addPost: () => {
			const i = store.posts.get().length;
			store.posts.set([
				...store.posts.get(),
				{ id: i + 1, title: `Post number ${i + 1}` },
			]);
		},
		clearPosts: () => {
			store.posts.set([]);
		},
		toggleSidebar: () => {
			store.isSidebarOpen.set(!store.isSidebarOpen.get());
		},
	},
};
