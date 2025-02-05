import { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Modal from "../components/Modal";

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      <TaskList />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskForm />
      </Modal>
    </div>
  );
};

export default Tasks;
