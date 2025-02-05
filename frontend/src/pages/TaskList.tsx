import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import calendarIcon from "../assets/calendar.png";
import checkedIcon from "../assets/checked.png";
import cancelIcon from "../assets/cancel.png";

const TaskList = () => {
  return (
    <div className="mt-10">
      <div className="border border-gray-100 py-3 px-5 shadow-sm rounded-md hover:shadow-lg bg-white">
        <div>
          <p className="font-medium">Buy Medicine</p>
          <p className="text-gray-600 text-sm">
            Nicip Cold, Paracetamol, Couph Syrup
          </p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-ce space-x-2">
            <img
              className="w-5"
              src={calendarIcon}
              alt="calendar-icon"
              loading="lazy"
            />

            <p className="text-gray-600 text-[13px]">21 Jan 2025</p>
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
            <button>
              {" "}
              <img
                className="w-5"
                src={deleteIcon}
                alt="delete-icon"
                loading="lazy"
              />
            </button>
            <button>
              {" "}
              <img
                className="w-5"
                src={cancelIcon}
                alt="checked-icon"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="border mt-1 border-gray-100 py-3 px-5 shadow-sm rounded-md hover:shadow-lg bg-white">
        <div>
          <p className="font-medium">Buy Medicine</p>
          <p className="text-gray-600 text-sm">
            Nicip Cold, Paracetamol, Couph Syrup
          </p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-ce space-x-2">
            <img
              className="w-5"
              src={calendarIcon}
              alt="calendar-icon"
              loading="lazy"
            />

            <p className="text-gray-600 text-[13px]">21 Jan 2025</p>
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
            <button>
              {" "}
              <img
                className="w-5"
                src={deleteIcon}
                alt="delete-icon"
                loading="lazy"
              />
            </button>
            <button>
              {" "}
              <img
                className="w-5"
                src={checkedIcon}
                alt="checked-icon"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
