import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Card } from "./Card";
import { NameChanger } from "./NameChanger";
import { Form } from "./Form";
import { SideBar } from "./components/SideBar";
import { ItemList } from "./components/ItemList";
import { ListActions } from "./components/ListActions";
import { useStore } from "./store";

function App() {
	const { name, data, toggleSidebar, isSidebarOpen } = useStore();

	return (
		<div className="App bg-yellow-100 p-10 border-4">
			<div>
				<button onClick={toggleSidebar}>
					Toggle Sidebar
				</button>
				<Card />
			</div>
			<div>name is: {name.get()}</div>
			<div className="card">
				<NameChanger />
			</div>
			<div>data: {JSON.stringify(data.get())}</div>
			<Form />
			<ListActions />
			<ItemList />
			{isSidebarOpen.get() && <SideBar />}
		</div>
	);
}

export default App;
