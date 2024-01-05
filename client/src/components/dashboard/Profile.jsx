import React, { useState, useRef, useEffect } from 'react';

const dummyUserData = {
  name: 'Shivam Maurya',
  email: 'shivam@gmail.com',
  // Add more user information as needed
};

function Profile() {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleClickOutside = (event) => {
    if (detailsRef.current && !detailsRef.current.contains(event.target)) {
      setShowDetails(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-3">
      <button
        type="button"
        className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        onClick={toggleDetails}
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>

      {showDetails && (
        <div
          className="absolute top-12 right-0 bg-white p-4 rounded-md shadow-md w-64"
          ref={detailsRef}
        >
          <h2 className="text-lg font-semibold">User Information</h2>
          <p>Name: {dummyUserData.name}</p>
          <p>Email: {dummyUserData.email}</p>
          <p>Phone: +91 7905861940</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
