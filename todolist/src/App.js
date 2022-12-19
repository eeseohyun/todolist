import "./App.css";
import React, { useState } from "react";
import InsertForm from "./components/InsertForm";
import ListView from "./components/ListView";

const App = () => {
	const [todoList, setTodoList] = useState([]); //InsertForm으로부터 전달받은 할일을 등록하고 관리할 todoList state를 선언
	const handleInsert = (value) => {
		setTodoList((current) => {
			const newTodoList = [...current];
			newTodoList.push({
				key: new Date().getTime(), // 랜덤으로 고유번호 부여
				value: value, // onInsert로부터 전달받은 값,
				isCompleted: false, // 완료 처리를 위한 flag
			});
			return newTodoList;
		});
	};

	return (
		<div className="App">
			<ListView todoList={todoList} />
			<InsertForm onInsert={handleInsert} />
		</div>
	);
};

export default App;
