import React from 'react';
import './index.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="container">
      {/* 用类名 */}
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>

      {/* 样式中用 */}
      <div className="card mt-5">
        <div className="card-left">
          <img className="card-img" src={logo} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="card-right">ChitChat</div>
          <p className="card-text">You have a new message!</p>
        </div>
      </div>

      {/* Responsive Design */}
      <div className="2xl:flex">
        <img className="w-16 md:w-32 lg:w-48" src={logo} alt="logo"/>
        <div className="text-gray-500">Right content</div>
      </div>

      {/* hover，focus*/}
      <button className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
        Sign up
      </button>
    </div>
  );
}

export default App;
