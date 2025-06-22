import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Users, Award, BookOpen, ArrowRight, LucideProps } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import homeContent from '@/content/home.json'; // Import CMS content
import React from 'react';

// Helper to map icon strings to Lucide components
const iconMap: { [key: string]: React.FC<LucideProps> } = {
  Eye,
  Users,
  Award,
  BookOpen,
  ArrowRight
};

const Home = () => {
  // const programs = [ // Replaced by CMS data
  //   {
  //     icon: Eye,
  //     title: "Bachelor of Optometry",
  //     description: "Comprehensive 4-year program covering all aspects of eye care and vision science.",
  //     duration: "3+1 Years"
  //   },
  // ];

  // const stats = [ // Replaced by CMS data
  //   // { icon: Users, number: "20+", label: "Students Enrolled" },
  //   { icon: Award, number: "98%", label: "Graduate Success Rate" },
  //   { icon: BookOpen, number: "10+", label: "Expert Faculty" },
  //   { icon: Eye, number: "11+", label: "Years of Excellence" }
  // ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Spline 
            scene={homeContent.hero_spline_url}
            style={{ 
              pointerEvents: 'none',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }} 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight">
              {homeContent.hero_title1}
              <span className="block text-primary">{homeContent.hero_title2_primary}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {homeContent.hero_subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
                onClick={() => window.open(homeContent.hero_apply_button_link, '_blank')}
              >
                {homeContent.hero_apply_button_text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
                onClick={() => window.location.href = homeContent.hero_learn_more_button_link}
              >
                {homeContent.hero_learn_more_button_text}
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
                {homeContent.about_title1}
                <span className="block text-primary">{homeContent.about_title2_primary}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {homeContent.about_text}
              </p>
            </div>
            <div className="lg:order-last">
              <img 
                src={homeContent.about_image}
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
              {homeContent.programs_title1} <span className="text-primary">{homeContent.programs_title2_primary}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {homeContent.programs_description}
            </p>
          </div>
          
          <div className="flex justify-center">
            {homeContent.programs_list.map((program, index) => {
              const ProgramIcon = iconMap[program.icon] || Eye; // Default to Eye if icon not found
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md max-w-sm w-full">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <ProgramIcon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl text-foreground">{program.title}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {program.duration}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground">
              {homeContent.features_title1} <span className="text-primary">{homeContent.features_title2_primary}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {homeContent.features_description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeContent.features_list.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-semibold text-xl text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
                {homeContent.vision_title}
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                {homeContent.vision_text1}
              </p>
              <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                {homeContent.vision_text2}
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl">
                {homeContent.stats_list.map((stat, index) => {
                  const StatIcon = iconMap[stat.icon] || Eye; // Default to Eye if icon not found
                  return (
                    <div key={index} className="text-center space-y-4">
                      <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto">
                        <StatIcon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-bold text-3xl md:text-4xl">{stat.number}</div>
                        <div className="text-primary-foreground/80">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;