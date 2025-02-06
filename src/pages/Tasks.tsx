import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Modal from "../components/Modal";
import axios from "axios";

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
  
      const response = await axios.get("http://localhost:8000/tasks/mytasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Tasks</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#6261fd] text-white font-medium px-6 py-2 rounded-md"
        >
          New Task +
        </button>
      </div>

      <TaskList tasks={tasks}  fetchTasks={fetchTasks} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskForm fetchTasks={fetchTasks} closeModal={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Tasks;
