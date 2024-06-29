import React from 'react';

const Timeline = () => {
  const events = [
    {
      date: '2023-01-01',
      title: 'Started Learning Vite',
      description: 'Began exploring Vite for modern web development.',
      image: 'path/to/image1.jpg',
    },
    {
      date: '2023-02-15',
      title: 'Built First Project',
      description: 'Completed my first project using Vite.',
      image: 'path/to/image2.jpg',
    },
    // Add more events here
  ];

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-item-content">
            <span className="tag">{event.date}</span>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <img src={event.image} alt={event.title} className="timeline-image" />
            <span className="circle"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
