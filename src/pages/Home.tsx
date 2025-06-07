import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

const Home = () => {
  const programs = [
    {
      icon: Eye,
      title: "Bachelor of Optometry",
      description: "Comprehensive 4-year program covering all aspects of eye care and vision science.",
      duration: "4 Years"
    },
    {
      icon: BookOpen,
      title: "Advanced Optometry",
      description: "Specialized courses in contact lens fitting, low vision rehabilitation, and pediatric optometry.",
      duration: "2 Years"
    },
    {
      icon: Award,
      title: "Research Programs",
      description: "Cutting-edge research opportunities in vision science and ocular health.",
      duration: "Ongoing"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Students Enrolled" },
    { icon: Award, number: "95%", label: "Graduate Success Rate" },
    { icon: BookOpen, number: "25+", label: "Expert Faculty" },
    { icon: Eye, number: "15+", label: "Years of Excellence" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight">
              Excellence in
              <span className="block text-primary">Optometric Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover your potential at S. Salins College of Optometry, where we shape the future of eye care professionals through innovative education and hands-on experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
                onClick={() => window.open('https://forms.google.com/placeholder', '_blank')}
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-bold text-4xl md:text-5xl text-foreground">
                About Our
                <span className="block text-primary">Institution</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                S. Salins College of Optometry has been at the forefront of optometric education for over 15 years. We are committed to providing world-class education in eye care and vision science, preparing our students to become competent and compassionate eye care professionals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our state-of-the-art facilities, experienced faculty, and comprehensive curriculum ensure that our graduates are well-equipped to meet the evolving needs of the eye care industry.
              </p>
            </div>
            <div className="lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
                alt="College Building" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground">
              Our <span className="text-primary">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive educational programs designed to prepare you for a successful career in optometry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {program.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h2 className="font-bold text-4xl md:text-5xl">
                Our Vision & Mission
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                To be the leading institution in optometric education, fostering innovation in eye care and producing skilled professionals who contribute to the advancement of vision science and the well-being of communities worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-3xl md:text-4xl">{stat.number}</div>
                    <div className="text-primary-foreground/80">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;