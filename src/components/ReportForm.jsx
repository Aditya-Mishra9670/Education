import React, { useState } from 'react';

const ReportForm = ({ onCancel, onSubmit }) => {
    const [reason,setReason] = useState("");
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-base-100 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Report Content</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit((reason));
          }}
        >
          <input
            className="input input-info w-full mb-4"
            placeholder="Enter the reason for reporting..."
            onChange={(e)=>setReason(e.target.value)}
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="btn btn-outline btn-error"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportForm;
