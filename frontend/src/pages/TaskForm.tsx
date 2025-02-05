import { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-5">Create New Task</h2>
      <div>
        <label className="block text-gray-600">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-gray-600">Description</label>
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
