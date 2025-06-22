import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone } from 'lucide-react';

const Management = () => {
  const principal = {
    name: "Dr. Sybil Salins",
    title: "Director/Principal",
    qualification: "MBBS.M.Sc.CEH (London), DOMS(Vellore), ophthalmology Surgeon (Eye Specialist)",
    experience: "25+ years",
    email: "principal@salinsoptometry.edu",
    phone: "+1 (555) 123-4501",
    image: "https://velemegna.org/Velemegna%20Update/Dr.%20Sybil.jpeg?auto=format&fit=crop&w=400&q=80",
    bio: "Dr. Sybil Salins brings over 25 years of experience in optometric education and clinical practice. She has been instrumental in developing innovative curricula and advancing research in vision science.",
    achievements: ["Fellow of American Academy of Optometry", "Published 50+ research papers", "Recipient of Excellence in Education Award"]
  };

  const facultyHeads = [
    {
      name: "Mrs.Aparna Rai",
      title: "Assistant Professor ",
      qualification: "Msc optometry",
      specialization: "Contact Lenses & Corneal Health",
      email: "e.rodriguez@salinsoptometry.edu",
      image: "/Staff Images/image 4.jpeg?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Priscilla Topno",
      title: "Tutor for Microbiology and Pathology",
      qualification: "MSc. Microbiology",
      specialization: "Retinal Diseases & Low Vision",
      email: "j.wilson@salinsoptometry.edu",
      image: "/Staff Images/image 3.jpeg?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Dr. Ajai Kumar S. Molakeri",
      title: "Guest Professor",
      qualification: "Ph.D Physics",
      specialization: "Children's Vision & Development",
      email: "l.thompson@salinsoptometry.edu",
      image: "/Staff Images/image 2.jpeg?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mrs Elizabeth",
      title: "Assistant Professor ",
      qualification: "Msc optometry",
      specialization: "Advanced Diagnostic Equipment",
      email: "r.kumar@salinsoptometry.edu",
      image: "/Staff Images/image 1.jpeg?auto=format&fit=crop&w=400&q=80",
    },
    // {
    //   name: "Dr. Robert Kumar",
    //   title: "Head of Technology Integration",
    //   qualification: "OD, MS in Biomedical Engineering",
    //   specialization: "Advanced Diagnostic Equipment",
    //   email: "r.kumar@salinsoptometry.edu",
    //   image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80",
    // },
    // {
    //   name: "Dr. Robert Kumar",
    //   title: "Head of Technology Integration",
    //   qualification: "OD, MS in Biomedical Engineering",
    //   specialization: "Advanced Diagnostic Equipment",
    //   email: "r.kumar@salinsoptometry.edu",
    //   image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80",
    // },
    // {
    //   name: "Dr. Robert Kumar",
    //   title: "Head of Technology Integration",
    //   qualification: "OD, MS in Biomedical Engineering",
    //   specialization: "Advanced Diagnostic Equipment",
    //   email: "r.kumar@salinsoptometry.edu",
    //   image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80",
    // },
    // {
    //   name: "Dr. Robert Kumar",
    //   title: "Head of Technology Integration",
    //   qualification: "OD, MS in Biomedical Engineering",
    //   specialization: "Advanced Diagnostic Equipment",
    //   email: "r.kumar@salinsoptometry.edu",
    //   image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80",
    // },
    // {
    //   name: "Dr. Robert Kumar",
    //   title: "Head of Technology Integration",
    //   qualification: "OD, MS in Biomedical Engineering",
    //   specialization: "Advanced Diagnostic Equipment",
    //   email: "r.kumar@salinsoptometry.edu",
    //   image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80",
    // },
    // {
    //   name: "Dr. Robert Kumar",
    //   title: "Head of Technology Integration",
    //   qualification: "OD, MS in Biomedical Engineering",
    //   specialization: "Advanced Diagnostic Equipment",
    //   email: "r.kumar@salinsoptometry.edu",
    //   image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80",
    // }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-4xl md:text-6xl text-foreground mb-6">
            Our <span className="text-primary">Leadership</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the distinguished faculty and administrators who guide our institution toward excellence in optometric education
          </p>
        </div>
      </section>

      {/* Principal */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img 
                  src={principal.image} 
                  alt={principal.name}
                  className="w-full h-96 lg:h-full object-cover"
                />
                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="font-bold text-2xl text-foreground">{principal.name}</h3>
                    <p className="text-primary font-semibold">{principal.title}</p>
                    <p className="text-sm text-muted-foreground">{principal.qualification}</p>
                  </div>
                  
                  <Badge variant="secondary" className="font-medium">
                    {principal.experience} Experience
                  </Badge>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {principal.bio}
                  </p>
                  
                  {/* <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {principal.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                  
                  <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                    {/* <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                      <Mail className="w-4 h-4" />
                      <span>{principal.email}</span>
                    </div> */}
                    {/* <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                      <Phone className="w-4 h-4" />
                      <span>{principal.phone}</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Faculty Heads */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground">
              Department <span className="text-primary">Heads</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized leadership across our core academic and research divisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyHeads.map((faculty, index) => (
              <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="aspect-[2/3] relative">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-center">
                      <h3 className="font-semibold text-lg text-foreground">{faculty.name}</h3>
                      <p className="text-primary font-medium text-sm">{faculty.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{faculty.qualification}</p>
                    </div>
                    
                    {/* <div className="text-center">
                      <Badge variant="outline" className="text-xs">
                        {faculty.specialization}
                      </Badge>
                    </div> */}
                    
                    <div className="pt-2 border-t border-border">
                      {/* <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{faculty.email}</span>
                      </div> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;