import { Button } from 'flowbite-react';

const MyButton = () => (
  <div className='p-4'>
    <Button color='blue' size='sm'>
      Primary Button
    </Button>
    <Button color='gray' pill={true} size='md'>
      Rounded Button
    </Button>
    <Button color='red' size='lg'>
      Large Button
    </Button>
    <div className='bg-primary p-4 text-secondary'>
      This is using the custom primary color!
    </div>
    <button className='btn btn-sm'>Small Button</button>
    <button className='btn btn-md'>Medium Button</button>
    <button className='btn btn-lg'>Large Button</button>
    <button className='btn btn-xl'>Extra Large Button</button>

    <Button className='md:w-1/2 w-full'>Responsive Button</Button>
    {/* use custom classes */}
    <button className='btn text-sm px-md py-sm bg-primary text-white rounded'>
      CCCC Button
    </button>
  </div>
);

export default MyButton;
