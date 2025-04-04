import { Dropdown, DropdownItem } from "flowbite-react";

import { useState } from "react";

export function Flowebit() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(true);

  return (
    <>
       <Dropdown className=" bg-green-" label="Dropdown button" dismissOnClick={false}>
      <h1>hjfhdj</h1>
    </Dropdown>
    </>
  );
}
