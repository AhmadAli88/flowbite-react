
import { Tooltip } from "flowbite-react";

export default function TooltipsExample() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Tooltip content="This is a tooltip!">
        <button className="bg-blue-500 text-white p-3 rounded">Hover me</button>
      </Tooltip>
    </div>
  );
}
