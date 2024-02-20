import React, { useState } from 'react';

const ShowRecInfo = () => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className="mx-auto max-w-xl p-6">
      <p className="text-base md:text-lg">
        Open DevTools with{' '}
        <kbd className="px-2 py-1 bg-gray-200 text-gray-800 rounded">F12</kbd>,
        go to <em>More Tools</em> by clicking the three-dot icon, and choose{' '}
        <em>Recorder</em> to use Chrome's built-in user flow recorder.
      </p>
      <div className="mt-4 space-y-2 text-center">
        <a
          href="https://www.youtube.com/watch?v=jZ9CxLAelfg"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-md text-blue-500 hover:text-blue-300 transition duration-200"
        >
          Watch Tutorial
        </a>
        <a
          href="https://owloops.readme.io"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-md text-blue-500 hover:text-blue-300 transition duration-200"
        >
          Read Documentation
        </a>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setShowNotes(!showNotes)}
          className="bg-blue-500 hover:bg-blue-400 text-md text-white py-2 px-4 border-none rounded-md cursor-pointer transition duration-300 inline-flex items-center"
        >
          Troubleshooting
          <svg
            className={`w-4 h-4 ml-2 transform transition-transform ${
              showNotes ? 'rotate-90' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div
        className={`mt-4 text-sm transition-opacity duration-500 ease-in-out ${
          showNotes ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ maxHeight: showNotes ? '100%' : '0', overflow: 'hidden' }}
      >
        <p className="text-blue-300">
          Owloops Replay is not visible on Chrome's default new tab page with
          Google Search.
        </p>
        <p className="mt-2 text-blue-300">
          This extension works best in regular mode and is not supported in
          incognito mode.
        </p>
      </div>
    </div>
  );
};

export default ShowRecInfo;
