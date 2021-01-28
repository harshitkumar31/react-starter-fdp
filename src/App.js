import React, { Component } from 'react';
import "./styles.css";

import TodoList from './todoList';

const list = [
  {
    name: "FDP",
    status: false
  },
  {
    name: "Training",
    status: false
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>Todo app</h1>
      <TodoList list={list} />

      <TodoList list={list} />

      <TodoList list={list} />
    </div>
  );
}
