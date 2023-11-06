import React from 'react';

const DashboardSection = () => {
  return (
    <div className="pl-10 min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 flex justify-center items-start pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Google Calendar and Task List */}
        <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
          <iframe title="Google Calendar" src="https://calendar.google.com/calendar/embed?src=your-calendar-id" style={{ border: 0 }} width="100%" height="350" frameBorder="0" scrolling="no"></iframe>
          <hr className="my-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Tasks for Today</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Complete project outline</li>
            <li>Team meeting at 2 PM</li>
            <li>Send out weekly newsletter</li>
          </ul>
        </div>

        {/* Usage Stats */}
        <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Usage Stats</h2>
          <p>Token Usage: <strong>1200 tokens</strong></p>
          <p>Compute Usage: <strong>750 hours</strong></p>
          <p>Database Usage: <strong>300 GB</strong></p>
        </div>

        {/* Work to Check */}
        <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Work to Check</h2>
          <p>AI Agent 1: <span className="text-green-600">Task Completed</span></p>
          <p>AI Agent 2: <span className="text-yellow-600">Review Pending</span></p>
          <p>AI Agent 3: <span className="text-red-600">Feedback Needed</span></p>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Notifications</h2>
          <p><span className="font-medium">New message:</span> Team Lead</p>
          <p><span className="font-medium">Reminder:</span> Server maintenance at 3 AM</p>
          <p><span className="font-medium">Deadline:</span> Project submission by Friday</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
