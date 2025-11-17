import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Download, 
  Moon, 
  Sun,
  Code,
  Palette,
  Smartphone,
  Globe,
  ChevronRight,
  MapPin,
  Calendar,
  User,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Skills data
  const skills = [
    { name: 'HTML5', level: 90, icon: <Code className="w-6 h-6" />, color: 'bg-orange-500' },
    { name: 'CSS3', level: 85, icon: <Palette className="w-6 h-6" />, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 75, icon: <Globe className="w-6 h-6" />, color: 'bg-yellow-500' },
    { name: 'React', level: 65, icon: <Smartphone className="w-6 h-6" />, color: 'bg-cyan-500' }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Modern responsive e-commerce site with cart functionality, product filters, and checkout process.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "CSS3", "JavaScript"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Interactive weather app with API integration, location search, and 7-day forecast display.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tech: ["JavaScript", "API", "CSS3"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Productivity app with drag-and-drop functionality, categories, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["React", "Local Storage", "Tailwind"],
      github: "#",
      demo: "#"
    }
  ];

  // Experience data
  const experiences = [
    {
      title: "Frontend Development Bootcamp",
      company: "Tech Academy",
      period: "2024 - Present",
      description: "Intensive 6-month program focusing on modern web technologies and industry best practices."
    },
    {
      title: "Web Development Intern",
      company: "StartupXYZ",
      period: "Summer 2024",
      description: "Assisted in building responsive websites and learned version control with Git."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-blue-600 transition-colors duration-200 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`transform transition-all duration-1000 ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Profile Image */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                    <div className={`w-full h-full rounded-full ${darkMode ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center`}>
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Priya Tanwar
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Frontend Developer | Learning React & Building Amazing UIs
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </button>
                <button className={`border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center gap-2`}>
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Hello! I'm Alex</h3>
                <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm a passionate frontend developer with a love for creating beautiful, functional web experiences. 
                  Currently diving deep into React and modern JavaScript frameworks while building projects that solve real-world problems.
                </p>
                <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  My goal is to become a full-stack developer and contribute to innovative tech companies that make a positive impact.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>Available Now</span>
                  </div>
                </div>
              </div>
              
              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h4 className="text-xl font-semibold mb-6">What I'm Learning</h4>
                <div className="space-y-4">
                  {['Advanced React Patterns', 'TypeScript', 'Node.js Backend', 'UI/UX Design'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Skills
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-full ${skill.color} text-white`}>
                      {skill.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-center mb-4">{skill.name}</h3>
                  
                  <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 mb-2`}>
                    <div
                      className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible.skills ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200 + 500}ms`
                      }}
                    ></div>
                  </div>
                  
                  <p className="text-center text-sm text-gray-500">{skill.level}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="lg:w-1/2">
                    <div className="rounded-2xl overflow-hidden shadow-lg group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience & Education
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Resume Download */}
              <div className="text-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 mx-auto">
                  <Download className="w-5 h-5" />
                  Download Full Resume
                </button>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                
                {experiences.map((exp, index) => (
                  <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 md:w-1/2">
                      <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-5 h-5 text-blue-600" />
                          <span className="text-sm text-blue-600 font-semibold">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-lg font-medium text-blue-600 mb-3">{exp.company}</p>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.description}</p>
                      </div>
                    </div>
                    
                    <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-4 border-blue-600 rounded-full`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200`}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200`}
                    />
                  </div>
                  <div>
                    <textarea
                      rows="5"
                      placeholder="Your Message"
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200`}
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </div>
              
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600 rounded-full text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>alex.johnson@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-600 rounded-full text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-600 rounded-full text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow me</h4>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-200">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-900 text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Alex Johnson. All rights reserved.</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;