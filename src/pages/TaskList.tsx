import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import calendarIcon from "../assets/calendar.png";
import checkedIcon from "../assets/checked.png";
import pendingIcon from "../assets/pending.png";
import { useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import { toast } from "react-toastify";
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
  onEdit,
}: {
  tasks: Task[];
  fetchTasks: () => void;
  onEdit: (task: Task) => void;
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  const handleMarkCompleted = async (task: Task) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return console.error("No token found, please log in.");

      await axios.put(
        `https://kazam-ev-backend.vercel.app//tasks/complete/${task._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!task.completed) {
        toast.warn(`Task "${task.title}" marked as incomplete.`);
      } else {
        toast.success(`Task "${task.title}" marked as completed.`);
      }

      fetchTasks();
    } catch (error) {
      console.error("Error marking task as completed", error);
    }
  };

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

      const response = await axios.delete(
        `https://kazam-ev-backend.vercel.app//tasks/delete/${taskToDelete._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success(response.data.message);
      fetchTasks(); // Refresh the task list
      setIsDeleteModalOpen(false); // Close modal
      setTaskToDelete(null);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="mt-10 pb-10">
      {tasks.length === 0 ? (
        <div className="text-center mt-40">
          <h1 className="text-2xl font-bold">No tasks added yet</h1>
          <p className="text-gray-600 mt-2">
            Start by adding a new task to keep track of your work.
          </p>
        </div>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            className="border mt-1 border-gray-100 py-3 px-5 shadow-sm rounded-md hover:shadow-lg bg-white"
          >
            <div>
              <p className="font-medium">{task.title}</p>
              <p className="text-gray-600 text-sm">{task.description}</p>
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-2">
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
                <button onClick={() => onEdit(task)}>
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
                <button onClick={() => handleMarkCompleted(task)}>
                  <img
                    className="w-5"
                    src={task.completed === true ? pendingIcon : checkedIcon}
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
