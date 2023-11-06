// pages/dashboard/[section].tsx
import VerticalNavBar from '@/components/VerticleNavBar';
import DashboardSection from '@/components/DashboardSection';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sticky Sidebar */}
      <div className="sticky top-0 h-screen w-64 overflow-hidden bg-gray-900"> {/* Adjusted for a sticky sidebar */}
        <VerticalNavBar />
      </div>
      
      {/* Dashboard Section to the right of the sidebar */}
      <div className="flex-grow overflow-auto">
        <DashboardSection />
      </div>
    </div>
  );
};

export default Dashboard;
