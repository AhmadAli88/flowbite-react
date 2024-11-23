import './App.css';
import AlertsExample from './components/AlertsExample';
import MyButton from './components/Button';
import MyCard from './components/Card';
import MyDropdown from './components/Dropdown';
import MyModal from './components/Modal';
import MyNavbar from './components/Navbar';
import PaginationExample from './components/PaginationExample';
import TabsExample from './components/TabsExample';
import TooltipsExample from './components/TooltipsExample';

function App() {
  return (
    <div>
      <MyButton />
      <MyNavbar />
      <div>
        <MyModal />
      </div>
      <MyDropdown/>
      <MyCard/>
      <TabsExample/>
      <PaginationExample/>
      <AlertsExample/>
      <TooltipsExample/>
    </div>
  );
}

export default App;
