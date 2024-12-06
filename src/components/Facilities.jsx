import React, { useState } from 'react';
import { features, videoSection } from "../constants";
import { 
  FaBook, 
  FaChalkboardTeacher, 
  FaCertificate, 
  FaVideo 
} from 'react-icons/fa';

// Icon mapping function
const getIconComponent = (iconName) => {
  const iconMap = {
    'FaBook': FaBook,
    'FaChalkboardTeacher': FaChalkboardTeacher,
    'FaCertificate': FaCertificate,
    'FaVideo': FaVideo
  };
  
  return iconMap[iconName] || FaBook; // Default to FaBook if icon not found
};

const FeaturesSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Features Column */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          {videoSection.title}
        </h2>
        <div className="space-y-6">
          {features.map((feature, index) => {
            const IconComponent = getIconComponent(feature.icon);
            
            return (
              <div 
                key={index} 
                className="flex items-center space-x-6 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <IconComponent className={`${feature.iconColor} w-12 h-12`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Preview Column */}
      <div className="relative">
        <div 
          className="bg-cover bg-center w-full h-96 rounded-lg shadow-lg relative cursor-pointer"
          style={{
            backgroundImage: `url(${videoSection.thumbnailImage})`,
            backgroundSize: 'cover'
          }}
          onClick={openVideoModal}
        >
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
            <button 
              className="bg-white text-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-50 transition-all"
              onClick={openVideoModal}
            >
              <FaVideo className="w-12 h-12" />
            </button>
          </div>
        </div>
      </div>

      {/* YouTube Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="bg-white rounded-lg overflow-hidden max-w-4xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <iframe
                width="100%"
                height="100%"
                src={videoSection.videoUrl}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button 
                onClick={closeVideoModal}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturesSection;