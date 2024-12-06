import React from 'react';
import { departments } from '../constants';

const DepartmentSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={department.imageUrl}
                  alt={department.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{department.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{department.description}</p>
                {department.isActive ? (
                  <a href={department.learnMoreUrl} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                    Learn More
                  </a>
                ) : (
                  <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;