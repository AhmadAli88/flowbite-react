import { Card } from 'flowbite-react';

const MyCard = () => (
  <div style={{width: '300px', marginLeft: '50px', marginTop: '40px'}}>
    <Card imgSrc='https://flowbite.com/docs/images/blog/image-1.jpg'>
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Card Title
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        Some quick example text to build on the card title and make up the bulk
        of the cards content.
      </p>
    </Card>
  </div>
);

export default MyCard;
