import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, Download, Github, Linkedin, ExternalLink, Code, 
  Palette, Server, Database, Monitor, Smartphone, Calendar,
  MapPin, Building, Award, ChevronRight, Star, Eye,
  Heart, MessageCircle, Users, Coffee, Clock, Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const techCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      color: "from-blue-500 to-purple-600",
      technologies: [
        { name: 'React', icon: '⚛️', level: 95 },
        { name: 'Next.js', icon: '▲', level: 92 },
        { name: 'TypeScript', icon: '🔷', level: 90 },
        { name: 'Tailwind CSS', icon: '💨', level: 88 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-green-500 to-emerald-600",
      technologies: [
        { name: 'Node.js', icon: '🟢', level: 85 },
        { name: 'Express', icon: '��', level: 82 },
        { name: 'Python', icon: '🐍', level: 80 },
        { name: 'GraphQL', icon: '📊', level: 75 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: 'MongoDB', icon: '🍃', level: 88 },
        { name: 'PostgreSQL', icon: '🐘', level: 85 },
        { name: 'AWS', icon: '🌐', level: 78 },
        { name: 'Firebase', icon: '🔥', level: 80 }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      color: "from-purple-500 to-pink-600",
      technologies: [
        { name: 'Git', icon: '🐙', level: 90 },
        { name: 'Docker', icon: '🐳', level: 75 },
        { name: 'Figma', icon: '🎨', level: 85 },
        { name: 'VS Code', icon: '💻', level: 95 }
      ]
    },
    {
      title: "Computer Vision",
      icon: "👁️",
      color: "from-cyan-500 to-blue-600",
      technologies: [
        { name: 'OpenCV', icon: '📷', level: 82 },
        { name: 'TensorFlow', icon: '🧠', level: 78 },
        { name: 'PyTorch', icon: '🔥', level: 75 },
        { name: 'YOLO', icon: '⚡', level: 70 }
      ]
    },
    {
      title: "Advanced Databases",
      icon: "🗄️",
      color: "from-indigo-500 to-purple-600",
      technologies: [
        { name: 'Redis', icon: '⚡', level: 80 },
        { name: 'Elasticsearch', icon: '🔍', level: 72 },
        { name: 'Neo4j', icon: '🕸️', level: 68 },
        { name: 'Apache Kafka', icon: '📡', level: 65 }
      ]
    }
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.',
      achievements: [
        'Led development of 5+ major features increasing user engagement by 40%',
        'Mentored 3 junior developers and established coding standards',
        'Reduced bundle size by 35% through optimization techniques'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupX',
      location: 'New York, NY',
      period: '2021 - 2022',
      description: 'Developed and maintained full-stack applications using modern web technologies in a fast-paced startup environment.',
      achievements: [
        'Built complete e-commerce platform from scratch',
        'Implemented real-time chat system with 99.9% uptime',
        'Optimized database queries reducing response time by 50%'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      period: '2020 - 2021',
      description: 'Created responsive websites and web applications for various clients, focusing on performance and user experience.',
      achievements: [
        'Delivered 15+ client projects with 100% satisfaction rate',
        'Improved website performance scores by average of 60%',
        'Implemented advanced animations and micro-interactions'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js']
    }
  ];

  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce management with real-time analytics and inventory tracking.',
      tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      link: '#',
      github: '#',
      featured: true,
      stats: { views: '2.5k', likes: '324', comments: '89' }
    },
    {
      title: 'AI-Powered Task Manager',
      description: 'Smart task management application with AI suggestions and automated scheduling capabilities.',
      tech: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      link: '#',
      github: '#',
      featured: true,
      stats: { views: '1.8k', likes: '256', comments: '45' }
    },
    {
      title: 'Real-time Collaboration Tool',
      description: 'Web application for team collaboration with live editing, video calls, and project management features.',
      tech: ['React', 'Socket.io', 'WebRTC', 'Redis'],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop',
      link: '#',
      github: '#',
      featured: false,
      stats: { views: '3.2k', likes: '412', comments: '156' }
    },
    {
      title: 'Fitness Tracking Mobile App',
      description: 'Cross-platform mobile app for fitness tracking with social features and workout recommendations.',
      tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      link: '#',
      github: '#',
      featured: false,
      stats: { views: '1.9k', likes: '298', comments: '73' }
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -150, 0], 
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              YB
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <Button className="hidden md:flex">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <motion.div 
          className="container mx-auto px-6 py-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Badge variant="outline" className="mb-4 text-primary border-primary/50">
                  <Star className="mr-2 h-3 w-3" />
                  Available for freelance
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                variants={fadeInUp}
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                  Yasmine
                </span>
              </motion.h1>
              
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl lg:text-4xl text-muted-foreground mb-4">
                  Frontend Developer
                </h2>
                <motion.div 
                  className="flex items-center space-x-2 text-muted-foreground"
                  variants={fadeInUp}
                >
                  <MapPin className="h-4 w-4" />
                  <span>Based in Tunisia</span>
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                variants={fadeInUp}
              >
                Passionate about creating modern, intuitive web experiences. I transform ideas 
                into innovative digital applications with clean code and beautiful design.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all">
                  <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex space-x-4 pt-4"
                variants={fadeInUp}
              >
                <Button variant="ghost" size="sm" className="hover:text-primary hover:scale-110 transition-all">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary hover:scale-110 transition-all">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={fadeInUp}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-slate-600/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <Avatar className="w-80 h-80 border-4 border-blue-600/20 relative z-10 shadow-2xl">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" alt="Yasmine" />
                  <AvatarFallback className="text-6xl bg-gradient-to-br from-blue-600 to-slate-600 text-white">YB</AvatarFallback>
                </Avatar>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Code className="h-6 w-6" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-slate-600 text-white p-3 rounded-full shadow-lg"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <Palette className="h-6 w-6" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Passionate developer with 3+ years of experience crafting modern web applications. 
                I specialize in frontend technologies and love solving complex problems with elegant solutions.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My approach combines creativity and technical expertise to deliver exceptional user experiences. 
                I'm always seeking new challenges and learning opportunities.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { number: '3+', label: 'Years Experience', icon: Clock },
                  { number: '20+', label: 'Projects Completed', icon: Briefcase },
                  { number: '100%', label: 'Client Satisfaction', icon: Heart },
                  { number: '24/7', label: 'Support Available', icon: Users }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold text-2xl text-primary mb-1">{stat.number}</h4>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6">Technologies I Use</h3>
              
              <div className="space-y-4">
                {[
                  { name: 'Frontend Development', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
                  { name: 'Backend Development', techs: ['Node.js', 'Express', 'Python', 'GraphQL'] },
                  { name: 'Database & Cloud', techs: ['MongoDB', 'PostgreSQL', 'AWS', 'Firebase'] },
                  { name: 'Tools & Workflow', techs: ['Git', 'Docker', 'Figma', 'VS Code'] }
                ].map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    className="p-4 rounded-lg bg-background/50 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-primary mb-3">{category.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.techs.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <motion.div
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-slate-600"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              />
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start space-x-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Building className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    {/* Experience card */}
                    <motion.div 
                      className="flex-1"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                              <CardDescription className="text-lg font-semibold text-foreground mt-1">
                                {exp.company}
                              </CardDescription>
                              <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-4 w-4" />
                                  <span className="text-sm">{exp.location}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span className="text-sm">{exp.period}</span>
                                </div>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-primary border-primary/50">
                              Current
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          
                          <div className="space-y-3 mb-4">
                            <h4 className="font-semibold text-sm">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li 
                                  key={i}
                                  className="flex items-start space-x-2 text-sm text-muted-foreground"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.2 + i * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 50, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div
          className="container mx-auto px-6 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl">💻</div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Technologies I Use
              </h2>
              <div className="text-4xl">🚀</div>
            </motion.div>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />

            <motion.p
              className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              Cutting-edge tools and frameworks that power my development journey
            </motion.p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Category Card */}
                <div className="relative p-8 rounded-2xl bg-background/70 backdrop-blur-xl border border-border/50 hover:border-border transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      rotate: [0, 180, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Category Header */}
                  <motion.div
                    className="flex items-center space-x-3 mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </motion.div>

                  {/* Technologies Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        className="group/tech relative p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 border border-border/30 hover:border-border/60"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: categoryIndex * 0.15 + techIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                      >
                        {/* Tech Icon */}
                        <motion.div
                          className="text-2xl mb-2 group-hover/tech:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {tech.icon}
                        </motion.div>

                        {/* Tech Name */}
                        <h4 className="text-sm font-semibold mb-2 group-hover/tech:text-blue-600 transition-colors">
                          {tech.name}
                        </h4>

                        {/* Skill Level Bar */}
                        <div className="relative">
                          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.level}%` }}
                              transition={{ duration: 1.5, delay: categoryIndex * 0.15 + techIndex * 0.2 }}
                              viewport={{ once: true }}
                            >
                              {/* Shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-white/30 rounded-full"
                                animate={{ x: [-100, 200] }}
                                transition={{ duration: 2, repeat: Infinity, delay: techIndex * 0.3 }}
                              />
                            </motion.div>
                          </div>
                          <motion.span
                            className="text-xs text-muted-foreground mt-1 inline-block"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: categoryIndex * 0.15 + techIndex * 0.2 + 1 }}
                            viewport={{ once: true }}
                          >
                            {tech.level}%
                          </motion.span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating particles */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${category.color} rounded-full opacity-60`}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: categoryIndex * 0.5 }}
                />
                <motion.div
                  className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r ${category.color} rounded-full opacity-40`}
                  animate={{
                    y: [0, 8, 0],
                    scale: [1, 0.8, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: categoryIndex * 0.7 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Floating Tech Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { icon: '⚛️', left: '10%', top: '20%' },
              { icon: '🚀', left: '85%', top: '15%' },
              { icon: '🔥', left: '75%', top: '60%' },
              { icon: '💻', left: '15%', top: '70%' },
              { icon: '🌐', left: '90%', top: '80%' },
              { icon: '📊', left: '20%', top: '40%' },
              { icon: '🎨', left: '80%', top: '35%' },
              { icon: '⚡', left: '5%', top: '90%' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl opacity-20"
                style={{
                  left: item.left,
                  top: item.top,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex space-x-3">
                        <Button size="sm" className="shadow-lg">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{project.stats.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{project.stats.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{project.stats.comments}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life!
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="p-8 backdrop-blur-sm bg-background/50">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">yasmine@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Tunisia</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Coffee className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Let's Chat</p>
                      <p className="text-muted-foreground">Available for coffee chats</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 backdrop-blur-sm bg-background/50">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="John" className="bg-background/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Doe" className="bg-background/50" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="Project Discussion" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project..." 
                      rows={5}
                      className="bg-background/50"
                    />
                  </div>
                  <Button size="lg" className="w-full group shadow-lg hover:shadow-xl transition-all">
                    <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Yasmine Boukraiem. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:text-primary hover:scale-110 transition-all">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary hover:scale-110 transition-all">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
