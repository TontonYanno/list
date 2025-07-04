"use client";
import { useState } from "react";

export default function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    // Ici on Vérifie si la tâche n'est pas vide avant de l'ajouter
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Ma To-Do List
      </h1>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        className='w-full p-2 border border-gray-300 rounded '
      />
      <button
        onClick={addTask}
        className='mt-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded'
      >
        Ajouter
      </button>

      <ul style={{ marginTop: "2rem" }}>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded">
            {task}{" "}
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
