import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const TaskForm = ({
  fetchTasks,
  closeModal,
}: {
  fetchTasks: () => void;
  closeModal: () => void;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const payload = {
      title,
      description,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/tasks/create",
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(response.data.message);

      fetchTasks();
      closeModal();
    } catch {
      toast.error("Error creating task");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-5">Create New Task</h2>
      <div>
        <label className="block text-gray-600 font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-gray-600 font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-[#6261fd] text-white font-medium rounded-md"
      >
        Create
      </button>
    </form>
  );
};

export default TaskForm;
