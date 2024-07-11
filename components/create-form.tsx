import React from "react";

const CreateForm = () => {
  return (
    <div>
      <form action="">
        <div className="mb-5">
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Fullname..."
            />
          </label>
        </div>
        <div className="mb-5">
          <label htmlFor="phone">
            <input
              type="text"
              name="phone"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Phone Number..."
            />
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
