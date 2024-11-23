import './App.css';
import MyButton from './components/Button';
import MyDropdown from './components/Dropdown';
import MyModal from './components/Modal';
import MyNavbar from './components/Navbar';

function App() {
  return (
    <div>
      <MyButton />
      <MyNavbar />
      <div>
        <MyModal />
      </div>
      <MyDropdown/>
    </div>
  );
}

export default App;
