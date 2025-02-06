import { useCallback, useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Modal from "../components/Modal";
import axios from "axios";
interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(10);

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const fetchTasks = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://kazam-ev-backend.vercel.app/tasks/mytasks",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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

      <TaskList
        tasks={currentTasks}
        fetchTasks={fetchTasks}
        onEdit={handleEditTask}
      />

      <div className="flex justify-center mt-4">
        {Array.from(
          { length: Math.ceil(tasks.length / tasksPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-[#6261fd] text-white"
                  : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTask(null);
        }}
      >
        <TaskForm
          fetchTasks={fetchTasks}
          closeModal={() => setIsModalOpen(false)}
          task={selectedTask}
        />
      </Modal>
    </div>
  );
};

export default Tasks;
