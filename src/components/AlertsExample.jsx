import  { useState } from "react";
import { Alert } from "flowbite-react";

export default function AlertsExample() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">
      {visible && (
        <Alert color="failure" onDismiss={() => setVisible(false)}>
          <span>
            <span className="font-medium">Error!</span> Something went wrong.
          </span>
        </Alert>
      )}
      <button
        onClick={() => setVisible(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Show Alert
      </button>
    </div>
  );
}
