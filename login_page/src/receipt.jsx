import { useState } from 'react';
//import './App.css';

function App() {
  const [isopenreceipt, setisopenreceipt] = useState(false);

  const receiptOpen = () => {

    setisopenreceipt(true);
  }

  const closereceipt = () => {
    setisopenreceipt(false);
  }

  return (
    <>
    <div className='h-screen w-screen flex items-center justify-center'>
      <button
      onClick={receiptOpen}
      className='mb-4 px-6 py-2 bg-red-500 font-bold rounded flex justify-center border-separate hover:bg-red-700 border-spacing-1 text-white shadow-lg'>
        payment receipt
      </button>
    </div>
      
      {isopenreceipt && ( 
      <div className=" fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-2
       rounded-lg shadow-lg max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Payment receipt</h2>
        <h2 className="mb-6 text-black">Thank you for Shopping</h2>
      
       <p className='mb-6 text-black underline'>Store Name: Dmart </p>
       <p className='mb-6 text-black underline'>Receipt #: 9876543210 </p>
        <p className='mb-6 text-black underline'>Cashier: John Doe </p>
        <p className='mb-6 text-black underline'>Phone: (123) 456-7890 </p>
        <button 
          onClick={closereceipt} 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
          Close receipt
        </button>

        </div>

      </div>)
      }
    </>
  );
}

export default App;
