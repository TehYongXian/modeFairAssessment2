import React, { useState } from 'react';
import './App.css';
import data from './demoData.json';

function App() {
  const products = data.Product;

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleCollapse = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="App flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="block max-h-600px overflow-x-auto w-full max-w-4xl bg-white shadow-md rounded-lg">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="sticky top-0 z-10 bg-white border border-gray-300 p-2 text-left"></th>
              <th className="sticky top-0 z-10 bg-white border border-gray-300 p-2 text-left">Product</th>
              <th className="sticky top-0 z-10 bg-white border border-gray-300 p-2 text-left">ID</th>
              <th className="sticky top-0 z-10 bg-white border border-gray-300 p-2 text-left">Unit Price</th>
              <th className="sticky top-0 z-10 bg-white border border-gray-300 p-2 text-left">Qty Per Unit</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <React.Fragment key={index}>
                <tr className="hover:bg-gray-200 odd:bg-gray-200">
                  <td className="border border-gray-300 p-2 text-center">
                    <button
                      className="px-2 py-1 text-black rounded"
                      onClick={() => toggleCollapse(index)}
                    >
                      {openIndexes.includes(index) ? '-' : '+'}
                    </button>
                  </td>
                  <td className="border border-gray-300 p-2">{item.Product}</td>
                  <td className="border border-gray-300 p-2">{item.ID}</td>
                  <td className="border border-gray-300 p-2">{item.UnitPrice}</td>
                  <td className="border border-gray-300 p-2">{item.QtyPerUnit}</td>
                </tr>
                {openIndexes.includes(index) && (
                  <tr className="">
                    <td colSpan="5" className="p-2 border border-gray-300">
                      <div className="text-left pl-70px">
                        <div className="pt-1">
                          <strong>In Stock:</strong> {item.InStock}
                        </div>
                        <div className="pt-2">
                          <strong>On Order:</strong> {item.OnOrder}
                        </div>
                        <div className="pt-2">
                          <strong>Reorder Level:</strong> {item.ReorderLevel}
                        </div>
                        <div className="pt-2">
                          <strong>Discontinued:</strong> {item.Discontinued}
                        </div>
                        <div className="pt-2">
                          <strong>Category:</strong> {item.Category}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
