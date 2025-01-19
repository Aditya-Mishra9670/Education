import React from 'react';
import './CourseLister.css'; // Assuming you have a CSS file for styling

const courses = [
  { id: 1, title: 'DSA in 1 minute', description: 'jaise 1 hour me jee tu nikala tha 🃏', thumbnail: 'src/components/HomeCompo/image3.jpg' },
  { id: 2, title: 'Course 2', description: 'Description for Course 2', thumbnail: 'src/components/HomeCompo/image3.jpg' },
  { id: 3, title: 'Course 3', description: 'Description for Course 3', thumbnail: 'src/components/HomeCompo/image3.jpg' },
  { id: 4, title: 'Course 3', description: 'Description for Course 3', thumbnail: 'src/components/HomeCompo/image3.jpg' },
  { id: 5, title: 'Course 3', description: 'Description for Course 3', thumbnail: 'src/components/HomeCompo/image3.jpg' },
  { id: 6, title: 'Course 3', description: 'Description for Course 3', thumbnail: 'src/components/HomeCompo/image3.jpg' },
  { id: 7, title: 'Course 3', description: 'Description for Course 3', thumbnail: 'src/components/HomeCompo/image3.jpg' },
  // Add more courses as needed
];

const CourseLister = () => {
  return (
    <div className="course-grid">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <img src={course.thumbnail} alt={course.title} className="course-thumbnail" />
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default CourseLister;