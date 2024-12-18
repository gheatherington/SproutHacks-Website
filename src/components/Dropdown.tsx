import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

interface CustomLinkInterface {
  buttonText: string;
  content: JSX.Element | string;
}

const Dropdown: React.FC<CustomLinkInterface> = ({
  buttonText,
  content,
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex flex-col w-full bg-green pl-4 pr-2 py-2 rounded-xl text-white font-asap items-center hover:bg-lightblue gap-4 font-bold"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="flex w-full h-fit items-center justify-between">
        <span>{buttonText}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {open && <div className="font-medium">{content}</div>}
    </div>
  );
};

export default Dropdown;
