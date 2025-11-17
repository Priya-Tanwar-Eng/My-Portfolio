import React, { useState, useEffect } from 'react';
import punchlightImg from "./assets/punchlight.png";
import movieAppImg from "./assets/movie-app.png";
import navgurukulImg from "./assets/navgurukul.png";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code, Briefcase, User, Menu, X, Sun, Moon, Award, Sparkles, Terminal } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "PunchLight Master",
      description: "A comprehensive client project built with React.js, featuring modern UI/UX design and responsive layouts for optimal user experience.",
      tech: ["React.js", "JavaScript", "CSS3"],
      liveLink: "https://punch-light-master.vercel.app/",
      github: "https://github.com/Priya-Tanwar-Eng/PunchLight-Master",
      badge: "Client Project",
      image: punchlightImg
    },
    {
      title: "Movify App",
      description: "An interactive movie discovery application with real-time search, detailed movie information, and a sleek user interface.",
      tech: ["React.js", "API Integration", "JavaScript"],
      liveLink: "https://react-movie-app-mu37.vercel.app/",
      github: "https://github.com/Priya-Tanwar-Eng/React-Movie-App",
      badge: "Featured",
      image: movieAppImg
    },
    {
      title: "Navgurukul Sarjapur Website",
      description: "Official website for Navgurukul Sarjapur campus, showcasing programs, events, and contact information with a modern design approach.",
      tech: ["React.js", "HTML5", "CSS3"],
      liveLink: "https://navgurukul-sarjapur-website.vercel.app/contact",
      github: "https://github.com/Priya-Tanwar-Eng/navgurukul-sarjapur-website",
      badge: "Educational",
      image: navgurukulImg
    }
  ];

  const skills = {
    "Programming Languages": ["C++", "PHP"],
    "Frontend Development": ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js"],
    "Backend Development": ["Node.js", "MySQL", "MongoDB"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code"],
    "Design & Soft Skills": ["UI/UX Design", "Leadership", "Team Collaboration", "Problem-Solving"]
  };

  const experience = [
    {
      role: "React Developer",
      company: "Client Project",
      duration: "1 Month",
      description: "Developed PunchLight application using React.js with focus on responsive design and user experience"
    },
    {
      role: "Full Stack Development Student",
      company: "Navgurukul",
      duration: "Present",
      description: "Learning and building projects with modern web technologies and best practices"
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const theme = {
    bg: isDark ? 'bg-gray-900' : 'bg-gray-50',
    cardBg: isDark ? 'bg-gray-800 bg-opacity-50' : 'bg-white',
    text: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    border: isDark ? 'border-purple-500 border-opacity-20' : 'border-purple-200',
    navBg: isDark ? 'bg-gray-900 bg-opacity-90' : 'bg-white bg-opacity-90',
    gradient: isDark 
      ? 'from-gray-900 via-purple-900 to-gray-900' 
      : 'from-purple-50 via-pink-50 to-purple-50'
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.gradient} ${theme.text} transition-all duration-500`}>
      {/* Cursor follower effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-20 blur-3xl transition-all duration-300"
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${theme.navBg} backdrop-blur-md z-50 border-b ${theme.border} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Terminal className="text-purple-500" size={28} />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Priya.dev
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 relative group ${
                    activeSection === section ? 'text-purple-500 font-semibold' : theme.textSecondary
                  }`}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full ${
                    activeSection === section ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-300"
              >
                {isDark ? <Sun size={20} className="text-purple-400" /> : <Moon size={20} className="text-purple-500" />}
              </button>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-all"
              >
                {isDark ? <Sun size={20} className="text-purple-400" /> : <Moon size={20} className="text-purple-500" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-white'} border-t ${theme.border}`}>
            {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-4 py-3 capitalize ${isDark ? 'hover:bg-purple-900 hover:bg-opacity-30' : 'hover:bg-purple-50'} transition-all`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden mt-4">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} z-10`}>
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative w-40 h-40 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl border-4 border-white dark:border-gray-800">
              PT
            </div>
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <Sparkles size={12} />
              Available
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Priya Tanwar
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl md:text-3xl font-semibold text-purple-500">Full Stack Developer</span>
            <Code className="text-pink-500" size={28} />
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-8">
            <MapPin size={18} className="text-purple-500" />
            <span className="text-sm">Bangalore, Karnataka • From Harda, MP</span>
          </div>
          
          <p className={`text-lg md:text-xl ${theme.textSecondary} max-w-2xl mx-auto mb-8 leading-relaxed`}>
            Crafting beautiful, functional web experiences with modern technologies. 
            Passionate about clean code, elegant design, and solving real-world problems.
          </p>
          
          <div className="flex justify-center gap-4 mb-10">
            <a href="https://github.com/Priya-Tanwar-Eng" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl hover:scale-110 transition-all duration-300">
              <Github size={24} className="text-white" />
            </a>
            <a href="https://www.linkedin.com/in/priya-tanwar-7a1abb306/" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl hover:scale-110 transition-all duration-300">
              <Linkedin size={24} className="text-white" />
            </a>
            <a href="mailto:priyatanwar24@navgurukul.com"
               className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl hover:scale-110 transition-all duration-300">
              <Mail size={24} className="text-white" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-white"
            >
              <Sparkles size={20} />
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${theme.cardBg} backdrop-blur-lg border ${theme.border} px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 text-purple-500 opacity-20 animate-bounce">
          <Code size={40} />
        </div>
        <div className="absolute bottom-20 right-10 text-pink-500 opacity-20 animate-bounce delay-100">
          <Terminal size={40} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className={`text-lg ${theme.textSecondary}`}>Get to know me better</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`${theme.cardBg} backdrop-blur-lg rounded-2xl p-8 border ${theme.border} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <User className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-500">Who I Am</h3>
              <p className={`${theme.textSecondary} leading-relaxed`}>
                A passionate Full Stack Developer from Harda, MP, currently learning at Navgurukul in Bangalore. I love turning ideas into reality through code.
              </p>
            </div>
            
            <div className={`${theme.cardBg} backdrop-blur-lg rounded-2xl p-8 border ${theme.border} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-500">What I Do</h3>
              <p className={`${theme.textSecondary} leading-relaxed`}>
                I build modern, responsive web applications with React.js, Node.js, and Next.js, focusing on clean code and exceptional user experiences.
              </p>
            </div>
            
            <div className={`${theme.cardBg} backdrop-blur-lg rounded-2xl p-8 border ${theme.border} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-500">My Experience</h3>
              <p className={`${theme.textSecondary} leading-relaxed`}>
                Delivered a successful client project and continuously building projects to enhance my skills in full-stack development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className={`text-lg ${theme.textSecondary}`}>My professional journey</p>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className={`${theme.cardBg} backdrop-blur-lg rounded-2xl p-8 border ${theme.border} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-500 mb-2">{exp.role}</h3>
                      <p className="text-lg font-semibold text-pink-500">{exp.company}</p>
                    </div>
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {exp.duration}
                    </span>
                  </div>
                  <p className={`${theme.textSecondary} leading-relaxed`}>
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className={`text-lg ${theme.textSecondary}`}>Technologies I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={category}
                className={`${theme.cardBg} backdrop-blur-lg rounded-2xl p-6 border ${theme.border} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-purple-500 group-hover:rotate-12 transition-transform duration-300" size={24} />
                  <h3 className="text-xl font-semibold text-purple-500">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span 
                      key={skill}
                      className={`${isDark ? 'bg-purple-900 bg-opacity-40 text-purple-300' : 'bg-purple-100 text-purple-700'} px-3 py-1.5 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className={`text-lg ${theme.textSecondary}`}>My recent work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={project.title}
                className={`${theme.cardBg} backdrop-blur-lg rounded-2xl overflow-hidden border ${theme.border} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative`}
              >
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {project.badge}
                  </span>
                </div>
                
                <div className="h-48 relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-purple-500 group-hover:text-pink-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className={`${theme.textSecondary} mb-4 leading-relaxed text-sm`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className={`${isDark ? 'bg-purple-900 bg-opacity-40 text-purple-300' : 'bg-purple-100 text-purple-700'} px-3 py-1 rounded-full text-xs`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-500 hover:text-pink-500 transition-colors font-semibold text-sm group/link"
                    >
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-500 hover:text-pink-500 transition-colors font-semibold text-sm group/link"
                    >
                      <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className={`text-lg ${theme.textSecondary}`}>Ready to bring your ideas to life</p>
          </div>
          
          <div className={`${theme.cardBg} backdrop-blur-lg rounded-2xl p-10 border ${theme.border} shadow-2xl mb-8`}>
            <p className={`text-xl ${theme.textSecondary} mb-8`}>
              I'm always excited to collaborate on new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="mailto:priyatanwar24@navgurukul.com"
                className={`${theme.cardBg} border ${theme.border} p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
              >
                <Mail className="text-purple-500 mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                <p className="font-semibold mb-1">Email</p>
                <p className={`text-sm ${theme.textSecondary} break-all`}>priyatanwar24@navgurukul.com</p>
              </a>
              
              <a 
                href="https://github.com/Priya-Tanwar-Eng"
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme.cardBg} border ${theme.border} p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
              >
                <Github className="text-purple-500 mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                <p className="font-semibold mb-1">GitHub</p>
                <p className={`text-sm ${theme.textSecondary}`}>@Priya-Tanwar-Eng</p>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/priya-tanwar-7a1abb306/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme.cardBg} border ${theme.border} p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
              >
                <Linkedin className="text-purple-500 mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                <p className="font-semibold mb-1">LinkedIn</p>
                <p className={`text-sm ${theme.textSecondary}`}>Priya Tanwar</p>
              </a>
            </div>
          </div>
          
          <div className={`${theme.textSecondary} text-sm`}>
            <p className="flex items-center justify-center gap-2 mb-2">
              <MapPin size={16} className="text-purple-500" />
              Currently at Navgurukul, Bangalore
            </p>
            <p>© 2024 Priya Tanwar. Crafted with 💜 and React</p>
          </div>
        </div>
      </section>
    </div>
  );
}