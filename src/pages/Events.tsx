import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Optometry Conference 2024",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Auditorium",
      description: "Join leading experts in optometry for three days of cutting-edge research presentations, workshops, and networking opportunities.",
      attendees: "200+ Expected",
      type: "Conference",
      registration: "https://forms.google.com/placeholder"
    },
    {
      title: "Student Research Symposium",
      date: "April 8, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Research Center",
      description: "Showcase of outstanding student research projects in vision science and clinical optometry.",
      attendees: "150+ Expected",
      type: "Academic",
      registration: "https://forms.google.com/placeholder"
    },
    {
      title: "Industry Connect Workshop",
      date: "April 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Seminar Hall B",
      description: "Interactive workshop connecting students with industry professionals and potential employers.",
      attendees: "80+ Expected",
      type: "Workshop",
      registration: "https://forms.google.com/placeholder"
    }
  ];

  const eventVideos = [
    {
      title: "Graduation Ceremony 2023 Highlights",
      videoId: "dQw4w9WgXcQ",
      description: "Celebrating our graduating class of 2023 with memorable moments from the ceremony."
    },
    {
      title: "Research Excellence Award Presentation",
      videoId: "dQw4w9WgXcQ",
      description: "Annual research excellence awards recognizing outstanding contributions to vision science."
    },
    {
      title: "International Optometry Day Celebration",
      videoId: "dQw4w9WgXcQ",
      description: "Special celebration featuring guest lectures and community eye care awareness programs."
    }
  ];

  const pastEventImages = [
    "/images/image65.jpeg",
    "/images/image 74.jpeg",
    "/images/image 74.jpeg",
    "/images/image 74.jpeg",
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Conference': return 'bg-blue-100 text-blue-800';
      case 'Academic': return 'bg-green-100 text-green-800';
      case 'Workshop': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-4xl md:text-6xl text-foreground mb-6">
            Events & <span className="text-primary">Activities</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest events, conferences, and academic activities that enhance your learning experience
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mark your calendars for these exciting upcoming events and opportunities
            </p>
          </div>
          
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="font-bold text-2xl text-foreground">{event.title}</h3>
                        <Badge className={`${getEventTypeColor(event.type)} border-0`}>
                          {event.type}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1 flex justify-center lg:justify-end">
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
                        onClick={() => window.open(event.registration, '_blank')}
                      >
                        Register Now
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Videos */}
      {/* <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground">
              Event <span className="text-primary">Highlights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch highlights from our recent events and celebrations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gray-200">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-semibold text-lg text-foreground">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Past Events Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground">
              Past <span className="text-primary">Events Gallery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A glimpse into our vibrant campus life and memorable events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEventImages.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <img 
                  src={image} 
                  alt={`Past Event ${index + 1}`} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;