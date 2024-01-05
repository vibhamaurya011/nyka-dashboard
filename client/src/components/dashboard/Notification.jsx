import React, { useState, useRef, useEffect } from 'react';

const dummyNotifications = [
  'Notification 1',
  'Notification 2',
  'Notification 3',
  // Add more notifications as needed
];

function Notification() {
  const [showAllNotifications, setShowAllNotifications] = useState(false);
  const notificationsRef = useRef(null);

  const toggleNotifications = () => {
    setShowAllNotifications(!showAllNotifications);
  };

  const handleClickOutside = (event) => {
    if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
      setShowAllNotifications(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        type="button"
        className="relative rounded-full bg-gray-200 p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ml-3"
        onClick={toggleNotifications}
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">View notifications</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </button>

      {showAllNotifications && (
        <div className="absolute right-0 mt-2 bg-white rounded-md shadow-md border w-64 border-gray-200 p-2" ref={notificationsRef}>
            <h2 className="text-lg font-semibold">View Notifications</h2>
          {dummyNotifications.map((notification, index) => (
            <div key={index} className="p-1 rounded-md" onClick={() => console.log(notification)}>
              {notification}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notification;
