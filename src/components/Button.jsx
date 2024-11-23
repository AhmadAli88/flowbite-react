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
  </div>
);

export default MyButton;
