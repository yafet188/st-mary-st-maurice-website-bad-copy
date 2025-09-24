// CountrySelect.tsx

import { useState } from "react";
import Image from "next/image";

// CountrySelect is a dropdown component for selecting a country code (currently only Canada).
const CountrySelect = () => {
  // State for the selected country code (default: "+1" for Canada)
  const [selected, setSelected] = useState("+1");
  // State to control dropdown open/close
  const [open, setOpen] = useState(false);

  // Handle selecting a country code and close the dropdown
  const handleSelect = (code: string) => {
    setSelected(code);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Button to open/close the dropdown, shows selected country code */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center bg-[#151B2F] text-white p-3 rounded-l-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        {/* Country flag image */}
        <Image
          src="/Images/Countries/Canada.png"
          alt="Canada"
          width={26.67}
          height={20}
        />
        {/* Selected country code */}
        <span className="ml-2">{selected}</span>
      </button>
      {/* Dropdown menu, visible when open */}
      {open && (
        <div className="absolute top-full left-0 bg-[#151B2F] border border-gray-600 rounded-md mt-1 z-10">
          {/* Option for Canada (add more options as needed) */}
          <button
            className="flex items-center p-3 hover:bg-gray-700 w-full text-left"
            onClick={() => handleSelect("+1")}
          >
            <Image
              src="/Images/Flags/Canada.png"
              alt="Canada"
              width={24}
              height={16}
            />
            <span className="ml-2">+1</span>
          </button>
          {/* Add additional country options here if needed */}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
