import "./App.css";
import React, { useState } from "react";
import InsertForm from "./components/InsertForm";
const App = () => {
	return (
		<div className="App">
			<InsertForm onInsert={console.log} />
		</div>
	);
};

export default App;
