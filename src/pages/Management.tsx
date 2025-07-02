import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone } from 'lucide-react';
import managementData from '@/content/management.json';

const Management = () => {
  const { principal, administrator, faculty_heads: facultyHeads, hero_title1, hero_title2_primary, hero_subtitle } = managementData;

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-4xl md:text-6xl text-foreground mb-6">
            {hero_title1} <span className="text-primary">{hero_title2_primary}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {hero_subtitle}
          </p>
        </div>
      </section>

      {/* Principal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* First Card */}
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
                    
                    {principal.achievements && principal.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {principal.achievements.map((achievement, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                      {principal.email && (
                        <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${principal.email}`} className="hover:text-primary">{principal.email}</a>
                        </div>
                      )}
                      {principal.phone && (
                        <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${principal.phone}`} className="hover:text-primary">{principal.phone}</a>
                        </div>
                      )}
                    </div> */}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second Card - Same structure as first card */}
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <img 
                    src={administrator.image} 
                    alt={administrator.name}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                  <div className="p-8 space-y-4">
                    <div>
                      <h3 className="font-bold text-2xl text-foreground">{administrator.name}</h3>
                      <p className="text-primary font-semibold">{administrator.title}</p>
                      <p className="text-sm text-muted-foreground">{administrator.qualification}</p>
                    </div>
                    
                    <Badge variant="secondary" className="font-medium">
                      {administrator.experience} Experience
                    </Badge>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {administrator.bio}
                    </p>
                    
                    {administrator.achievements && administrator.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {administrator.achievements.map((achievement, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                      {administrator.email && (
                        <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${administrator.email}`} className="hover:text-primary">{administrator.email}</a>
                        </div>
                      )}
                      {administrator.phone && (
                        <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${administrator.phone}`} className="hover:text-primary">{administrator.phone}</a>
                        </div>
                      )}
                    </div> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
                    
                    {faculty.specialization && (
                      <div className="text-center my-2">
                        <Badge variant="outline" className="text-xs">
                          {faculty.specialization}
                        </Badge>
                      </div>
                    )}
                    
                    <div className="pt-2 border-t border-border">
                      {faculty.email && (
                        <div className="flex items-center space-x-2 text-muted-foreground text-sm mt-2">
                          <Mail className="w-4 h-4 flex-shrink-0" />
                          <a href={`mailto:${faculty.email}`} className="truncate hover:text-primary">{faculty.email}</a>
                        </div>
                      )}
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