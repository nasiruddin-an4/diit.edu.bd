import { FaBook, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';

export const navbarLinks = [
  { name: "About", dropdown: ["About Us", "Career", "Contact", "FAQ"] },
  { name: "Admission", dropdown: ["Admission", "Admission Query", "Instruction", "Tution Fees"] },
  { name: "Academic", dropdown: ["Academic Info", "Faculty", "Alumni"] },
  { name: "Department", dropdown: ["Bachelor of Business Administration (BBA)", "Computer Science and Engineering (CSE)", "Bachelor of Tourism and Hospitality Management (BTHM)", "Master of Business Administration (MBA)", "Master of Tourism and Hospitality Management (MTHM)"] },
  { name: "Administrative", dropdown: ["Pure Administrative", "Academic Administrative",] },
  { name: "Campus", dropdown: ["Team", "Mission", "Contact"] },
  { name: "Notice Board", dropdown: ["DIIT Notice", "NU Notice", ]  },
];

export const testimonials = [
  { name: "Alice Johnson", quote: "This platform is amazing for learning!", image: "https://via.placeholder.com/100" },
  { name: "John Doe", quote: "The courses are well-structured and informative.", image: "https://via.placeholder.com/100" },
  { name: "Emma Brown", quote: "Highly recommended for students and professionals!", image: "https://via.placeholder.com/100" },
];

export const heroSlides = [
  {
    image: 'https://picsum.photos/1200/400?random=1',
    title: 'Welcome to Our Website',
    description: 'Discover amazing products and services',
  },
  {
    image: 'https://picsum.photos/1200/400?random=2',
    title: 'Special Offers',
    description: 'Check out our latest deals',
  },
  {
    image: 'https://picsum.photos/1200/400?random=3',
    title: 'Join Our Community',
    description: 'Be part of something special',
  },
];

export const features = [
  {
    icon: 'FaBook',
    iconColor: 'text-blue-600',
    title: "Comprehensive Curriculum",
    description: "Expertly designed courses covering a wide range of topics and skill levels."
  },
  {
    icon: 'FaChalkboardTeacher',
    iconColor: 'text-green-600',
    title: "Expert Instructors",
    description: "Learn from industry professionals with real-world experience and expertise."
  },
  {
    icon: 'FaCertificate',
    iconColor: 'text-purple-600',
    title: "Certification",
    description: "Earn globally recognized certificates to boost your professional profile."
  }
];

export const videoSection = {
  title: "Why Choose DIIT?",
  thumbnailImage: "/path/to/your/thumbnail.jpg",
  videoUrl: "https://www.youtube.com/watch?v=7EtkKmBY2zM"
};

export const departments = [
  {
    title: 'Bachelor of Business Administration (BBA)',
    description: 'Comprehensive business education preparing students for successful careers in various industries.',
    learnMoreUrl: '/bba',
    imageUrl: '/bba-department.jpg',
    isActive: true
  },
  {
    title: 'Bachelor of Science in Computer Science and Engineering (CSE)',
    description: 'Cutting-edge program that equips students with the latest skills in computer science and engineering.',
    learnMoreUrl: '/cse',
    imageUrl: '/cse-department.jpg',
    isActive: true
  },
  {
    title: 'Bachelor of Tourism and Hospitality Management (BTHM)',
    description: 'Specialized degree focused on developing expertise in the thriving tourism and hospitality sector.',
    learnMoreUrl: '/bthm',
    imageUrl: '/bthm-department.jpg',
    isActive: true
  },
  {
    title: 'Master of Business Administration (MBA)',
    description: 'Advanced program designed to cultivate strategic leaders and decision-makers in the business world.',
    learnMoreUrl: '/mba',
    imageUrl: '/mba-department.jpg',
    isActive: true
  },
  {
    title: 'Master of Tourism and Hospitality Management (MTHM)',
    description: 'Postgraduate degree that enhances students\' knowledge and skills in the tourism and hospitality industries.',
    learnMoreUrl: '/mthm',
    imageUrl: '/mthm-department.jpg',
    isActive: false
  }
];