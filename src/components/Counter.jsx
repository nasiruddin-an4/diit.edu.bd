import React, { useState, useEffect } from 'react';
import { FaUserGraduate, FaUserTie, FaGraduationCap, FaHandHoldingMedical } from 'react-icons/fa';

const CounterSection = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(0);
  const [experiencedFaculties, setExperiencedFaculties] = useState(0);
  const [completedGraduates, setCompletedGraduates] = useState(0);
  const [studentsEmployed, setStudentsEmployed] = useState(0);

  useEffect(() => {
    // Simulate counter animation
    const interval = setInterval(() => {
      setEnrolledStudents(prevCount => prevCount < 3200 ? prevCount + 50 : 3200);
      setExperiencedFaculties(prevCount => prevCount < 80 ? prevCount + 1 : 80);
      setCompletedGraduates(prevCount => prevCount < 1300 ? prevCount + 25 : 1300);
      setStudentsEmployed(prevCount => prevCount < 800 ? prevCount + 20 : 800);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
          <FaUserGraduate className="mx-auto text-4xl mb-4" />
          <h3 className="text-4xl font-bold mb-2">{enrolledStudents}+</h3>
          <p className="text-gray-400">Student Enrolled</p>
        </div>
        <div className="text-center">
          <FaUserTie className="mx-auto text-4xl mb-4" />
          <h3 className="text-4xl font-bold mb-2">{experiencedFaculties}+</h3>
          <p className="text-gray-400">Experienced Faculties</p>
        </div>
        <div className="text-center">
          <FaGraduationCap className="mx-auto text-4xl mb-4" />
          <h3 className="text-4xl font-bold mb-2">{completedGraduates}+</h3>
          <p className="text-gray-400">Completed Graduates</p>
        </div>
        <div className="text-center">
          <FaHandHoldingMedical className="mx-auto text-4xl mb-4" />
          <h3 className="text-4xl font-bold mb-2">{studentsEmployed}+</h3>
          <p className="text-gray-400">Students Employed</p>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;