import { useEffect, useState } from "react";
import EventEmitter from "events";
const ee = new EventEmitter().setMaxListeners(Infinity);
const store = {};

export const initStore = (initialState) => {
	const useGlobally = (key, value = null) => {
		const [state, setState] = useState(() => store[key]?.state || value);

		useEffect(() => {
			ee.on(key, (text) => setState(JSON.parse(text)));
			return () => ee.removeListener(key, (text) => setState(JSON.parse(text)));
		}, [key]);

		return {
			state,
			set: (newState) => {
				store[key].state = newState;
				ee.emit(key, JSON.stringify(newState));
			},
			get: () => state,
		};
	};
	Object.entries(initialState).forEach(([key, value]) => {
		store[key] = useGlobally(key, value);
	});
	return store;
};