import { Dropdown } from 'flowbite-react';

const MyDropdown = () => (
  <div>
    <Dropdown label='Options' style={{background: 'black'}}>
      <Dropdown.Item>Profile</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Logout</Dropdown.Item>
    </Dropdown>
  </div>
);

export default MyDropdown;
