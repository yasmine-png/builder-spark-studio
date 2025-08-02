import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Github, Linkedin, ExternalLink, Code, Palette, Server, Database, Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const skills = [
    { name: 'React', level: 90, icon: Code },
    { name: 'TypeScript', level: 85, icon: Code },
    { name: 'Node.js', level: 80, icon: Server },
    { name: 'UI/UX Design', level: 75, icon: Palette },
    { name: 'MongoDB', level: 70, icon: Database },
    { name: 'Mobile Dev', level: 65, icon: Smartphone }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Application de commerce électronique moderne avec React et Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/250',
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Application de gestion de tâches avec interface drag-and-drop',
      tech: ['React', 'TypeScript', 'Firebase'],
      image: '/api/placeholder/400/250',
      link: '#',
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Site portfolio responsive avec animations avancées',
      tech: ['React', 'Framer Motion', 'TailwindCSS'],
      image: '/api/placeholder/400/250',
      link: '#',
      github: '#'
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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
            >
              YB
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === item ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item === 'home' ? 'Accueil' : 
                   item === 'about' ? 'À propos' : 
                   item === 'skills' ? 'Compétences' : 
                   item === 'projects' ? 'Projets' : 'Contact'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <motion.div 
          className="container mx-auto px-6 py-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                variants={fadeInUp}
              >
                Salut, je suis{' '}
                <span className="text-primary">Yasmine</span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl lg:text-3xl text-muted-foreground"
                variants={fadeInUp}
              >
                Développeuse Frontend
              </motion.h2>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl"
                variants={fadeInUp}
              >
                Passionnée par la création d'expériences web modernes et intuitives. 
                Je transforme des idées en applications digitales innovantes.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <Button size="lg" className="group">
                  <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Me Contacter
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Télécharger CV
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex space-x-4 pt-4"
                variants={fadeInUp}
              >
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary">
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
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-30 animate-pulse" />
                <Avatar className="w-80 h-80 border-4 border-primary/20 relative z-10">
                  <AvatarImage src="/api/placeholder/320/320" alt="Yasmine" />
                  <AvatarFallback className="text-6xl">YB</AvatarFallback>
                </Avatar>
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
            <h2 className="text-4xl font-bold mb-4">À Propos de Moi</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Mon Parcours</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Développeuse passionnée avec plus de 3 ans d'expérience dans la création 
                d'applications web modernes. Je me spécialise dans les technologies frontend 
                avancées et j'aime résoudre des problèmes complexes avec des solutions élégantes.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Mon approche combine créativité et technicité pour livrer des expériences 
                utilisateur exceptionnelles. Je suis toujours à la recherche de nouveaux 
                défis et d'opportunités d'apprentissage.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-primary mb-2">3+</h4>
                  <p className="text-sm text-muted-foreground">Années d'expérience</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">20+</h4>
                  <p className="text-sm text-muted-foreground">Projets réalisés</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">100%</h4>
                  <p className="text-sm text-muted-foreground">Clients satisfaits</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">24/7</h4>
                  <p className="text-sm text-muted-foreground">Support disponible</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Technologies que j'utilise</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'React & Next.js',
                    'TypeScript',
                    'Node.js & Express',
                    'MongoDB & PostgreSQL',
                    'TailwindCSS',
                    'Git & GitHub'
                  ].map((tech, index) => (
                    <motion.div
                      key={tech}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
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
            <h2 className="text-4xl font-bold mb-4">Mes Compétences</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <skill.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">{skill.level}%</p>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div 
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
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
            <h2 className="text-4xl font-bold mb-4">Mes Projets</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
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
      <section id="contact" className="py-20">
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
            <h2 className="text-4xl font-bold mb-4">Contactez-moi</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter !
            </p>
          </motion.div>
          
          <div className="max-w-2xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Nom</label>
                        <Input placeholder="Votre nom" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input type="email" placeholder="votre@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Sujet</label>
                      <Input placeholder="Sujet de votre message" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea 
                        placeholder="Votre message..." 
                        rows={5}
                      />
                    </div>
                    <Button size="lg" className="w-full group">
                      <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/50 border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Yasmine Boukraiem. Tous droits réservés.
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
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
