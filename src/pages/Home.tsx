import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

const Home = () => {
  const programs = [
    {
      icon: Eye,
      title: "Bachelor of Optometry",
      description: "Comprehensive 4-year program covering all aspects of eye care and vision science.",
      duration: "3+1 Years"
    },
  ];

  const stats = [
    // { icon: Users, number: "20+", label: "Students Enrolled" },
    { icon: Award, number: "98%", label: "Graduate Success Rate" },
    { icon: BookOpen, number: "10+", label: "Expert Faculty" },
    { icon: Eye, number: "11+", label: "Years of Excellence" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
  <iframe
    src="https://my.spline.design/celestialflowabstractdigitalform-CZzYywxKdWgTSoOx5S7skZng/"
    frameBorder="0"
    width="100%"
    height="100%"
    allowFullScreen
    className="w-full h-full"
  ></iframe>
</div> */}

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
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfrKremrqPjDh5O_o9GrJ60qdIq4d9LjIJ30IDe-Ar9YrQchw/viewform?usp=sharing', '_blank')}
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
                onClick={() => window.location.href = '/admission'}
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
              S.Salins college of Optometry, Bidar established Dr. Sybil Salins in the memory of her mother Dr. Mrs. Susheela Salins in the year 2014-15. Dr. Sybil Salins realized that there are no optometry colleges in the northern part of Karnataka and especially in Bidar district. So she has taken a challenge to open an optometry college to educate students in the Bidar district. S.Salins College of Optometry is running by the Velemegna Good News Society Hospital, Bidar. Here we are offering B.Sc Optometry course since 2014-15. Our college is affiliated with Rajiv Gandhi University of Health Sciences, Bangalore.
              </p>
            </div>
            <div className="lg:order-last">
              <img 
                src="http://velemegna.org/newsletters/About1.jpg?auto=format&fit=crop&w=1200&q=80" 
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
          
          <div className="flex justify-center">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md max-w-sm w-full">
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

      {/* Special Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground">
              Special <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover what makes S Salins College of Optometry unique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-semibold text-xl text-foreground">Infrastructure</h3>
                <p className="text-muted-foreground">Good infrastructure with well-equipped labs and clinics providing students with a modern learning environment.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-semibold text-xl text-foreground">Supportive Environment</h3>
                <p className="text-muted-foreground">A friendly atmosphere providing proactive support to students, fostering growth and learning.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-semibold text-xl text-foreground">Expert Faculty</h3>
                <p className="text-muted-foreground">A committed set of teaching faculty who nurture students and provide excellent opportunities to learn, grow, and shine.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-semibold text-xl text-foreground">Clinical Excellence</h3>
                <p className="text-muted-foreground">Complete emphasis on clinical training to ensure practical expertise in the field of optometry.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-semibold text-xl text-foreground">Career Opportunities</h3>
                <p className="text-muted-foreground">Excellent job opportunities within Velemegna eye hospital and other eye care providers through our campus placement services.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-semibold text-xl text-foreground">Research Environment</h3>
                <p className="text-muted-foreground">A dynamic research environment that pushes students to excel and think out-of-the-box.</p>
              </CardContent>
            </Card>
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
              Velemegna society seeks to demonstrate the love of Christ through excellence in health care and community services.
              </p>
              <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              ‘Velemegna’ is a registered charitable society. We provide quality eye care services, which is comprehensive and affordable to all. This is achieved by training, research, and excellence in service delivery. In addition, we will continue with Founders compassion for care of the Leprosy affected.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto">
                      <stat.icon className="w-10 h-10 text-primary-foreground" />
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
        </div>
      </section>
    </div>
  );
};

export default Home;