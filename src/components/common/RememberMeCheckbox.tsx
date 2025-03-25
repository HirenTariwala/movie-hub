import { useState } from "react";

export default function RememberMeCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center gap-2 cursor-pointer text-white">
      <div
        className={`w-5 h-5 rounded-md bg-[#224957] flex items-center justify-center relative transition-all duration-200`}
        onClick={() => setChecked(!checked)}
      >
        <div
          className={`absolute w-2.5 h-1.5 border-green-500 top-1.5 border-b-2 border-l-2 rotate-320 scale-0 transition-transform duration-200 ${
            checked ? "scale-100" : ""
          }`}
        />
      </div>
      Remember me
    </label>
  );
}
