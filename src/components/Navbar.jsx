import { Navbar } from "flowbite-react";

const MyNavbar = () => (
  <Navbar fluid={true} rounded={true}>
    <Navbar.Brand href="/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite
      </span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse style={{display: 'block'}}>
      <Navbar.Link href="/home" active={true}>
        Home
      </Navbar.Link>
      <Navbar.Link href="/about">About</Navbar.Link>
      <Navbar.Link href="/services">Services</Navbar.Link>
      <Navbar.Link href="/contact">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;
