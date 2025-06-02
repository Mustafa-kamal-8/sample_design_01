'use client';

import React from 'react';
import profilePic from '../../images/profile.png';
import bannerPic from '../../images/banner.png';
import Footer from '@/src/components/footer';

interface CourseStatProps {
  label: string;
  count: number;
  icon: string;
}

const CourseStat: React.FC<CourseStatProps> = ({ label, count, icon }) => (
  <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
    <img src={icon} alt={label} className="w-10 h-10" />
    <div>
      <p className="text-sm font-medium text-gray-700">{label}</p>
      <p className="text-lg font-bold">{count}</p>
    </div>
  </div>
);

const ProfilePage: React.FC = () => {
  return (
    <>
    <div className="bg-[#f5f0e8] min-h-screen p-4">
      {/* Header */}
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <div className="relative">
          {/* Banner */}
          <img
            src={bannerPic.src}
            alt="Banner"
            className="w-full h-40 object-cover"
          />
          {/* Profile Picture */}
          <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white">
              <img
                src={profilePic.src}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Name & Info */}
        <div className="mt-12 text-center px-4 pb-6">
          <h1 className="text-xl font-bold">Jonathon Smith</h1>
          <p className="text-gray-600 text-sm">Student at Harvard University</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-6 space-y-4">
        <CourseStat label="Enrolled Courses" count={5} icon="/icons/enrolled.svg" />
        <CourseStat label="Active Courses" count={3} icon="/icons/active.svg" />
        <CourseStat label="Completed Courses" count={2} icon="/icons/completed.svg" />
      </div>
    </div>
      <Footer/>

    </>
  );
};

export default ProfilePage;
