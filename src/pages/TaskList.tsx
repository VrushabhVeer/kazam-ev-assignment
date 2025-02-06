import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import calendarIcon from "../assets/calendar.png";
import checkedIcon from "../assets/checked.png";
import cancelIcon from "../assets/cancel.png";
import { useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";
interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

const TaskList = ({
  tasks,
  fetchTasks,
}: {
  tasks: Task[];
  fetchTasks: () => void;
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  const handleDeleteClick = (task: Task) => {
    setTaskToDelete(task);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!taskToDelete) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found, please log in.");
        return;
      }

      await axios.delete(
        `http://localhost:8000/tasks/delete/${taskToDelete._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      fetchTasks(); // Refresh the task list
      setIsDeleteModalOpen(false); // Close modal
      setTaskToDelete(null);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="mt-10">
      {tasks.length === 0 ? (
        <div className="text-center mt-40">
          <h1 className="text-2xl font-bold">
            No tasks added yet
          </h1>
          <p className="text-gray-600 mt-2">
            Start by adding a new task to keep track of your work.
          </p>
        </div>
      ) : (
        tasks.map((task, index) => (
          <div
            key={index}
            className="border mt-1 border-gray-100 py-3 px-5 shadow-sm rounded-md hover:shadow-lg bg-white"
          >
            <div>
              <p className="font-medium">{task.title}</p>
              <p className="text-gray-600 text-sm">{task.description}</p>
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-ce space-x-2">
                <img
                  className="w-5"
                  src={calendarIcon}
                  alt="calendar-icon"
                  loading="lazy"
                />

                <p className="text-gray-600 text-[13px]">
                  {new Date(task.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <button>
                  <img
                    className="w-5"
                    src={editIcon}
                    alt="edit-icon"
                    loading="lazy"
                  />
                </button>
                <button onClick={() => handleDeleteClick(task)}>
                  <img
                    className="w-6"
                    src={deleteIcon}
                    alt="delete-icon"
                    loading="lazy"
                  />
                </button>
                <button>
                  <img
                    className="w-5"
                    src={task.completed === true ? cancelIcon : checkedIcon}
                    alt="checked-icon"
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <h2 className="text-lg font-bold">Confirm Delete</h2>
        <p className="mt-2">
          Are you sure you want to delete <b>{taskToDelete?.title}</b>?
        </p>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="bg-gray-300 px-4 py-2 rounded-md"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={confirmDelete}
          >
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TaskList;
