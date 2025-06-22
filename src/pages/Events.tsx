import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "World Sight Day",
      date: "October 09, 2025",
      time: "09:00 AM - 06:00 PM",
      location: "S Salins Optometry College",
      description: "Join leading experts in optometry for three days of cutting-edge research presentations, workshops, and networking opportunities.",
      attendees: "200+ Expected",
      type: "Event",
      registration: "https://forms.google.com/placeholder"
    },
    {
      title: "World Optometry Day",
      date: "March 23, 2026",
      time: "09:00 AM - 06:00 PM",
      location: "S Salins Optometry College",
      description: "Showcase of outstanding student research projects in vision science and clinical optometry.",
      attendees: "150+ Expected",
      type: "Event",
      registration: "https://forms.google.com/placeholder"
    },
    {
      title: "World Glaucoma Week",
      date: "March 09-15, 2026",
      time: "09:00 PM - 06:00 PM",
      location: "S Salins Optometry College",
      description: "Interactive workshop connecting students with industry professionals and potential employers.",
      attendees: "80+ Expected",
      type: "Event",
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
    "/images/image 73.jpeg",
    "/images/image 78.jpeg",
    "/images/image6.jpeg",
    "/images/image59.jpeg",
    "/images/image61.jpeg",
    "/images/image67.jpeg",
    "/images/image47.jpeg",
    "/images/image55.jpeg",
    "/images/image36.jpeg",
    "/images/image24.jpeg",
    "/images/image 75.jpeg",
    "/images/image 76.jpeg",
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

      {/* Featured Image */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br from-background to-accent/5 border-2 border-accent/20">
            <CardContent className="p-0">
              <div className="aspect-[16/9] relative">
                <img 
                  src="/images/image 74.jpeg" 
                  alt="Featured Event" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Featured Event Highlight</h3>
                    <p className="text-white/90">Experience the excellence of optometry education at S. Salins College</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

{/* Featured Video */}
<section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br from-background to-accent/5 border-2 border-accent/20">
            <CardContent className="p-0">
              <div className="aspect-[16/9] relative">
                <iframe
                  src="https://www.youtube.com/embed/y3ENCYq4eP4?si=SqDEmipOspYv1Hc4"
                  title="Featured Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Featured Video</h3>
                <p className="text-muted-foreground">Watch our latest featured content showcasing excellence in optometry education</p>
              </div>
            </CardContent>
          </Card>
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
                      
                      {/* <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p> */}
                      
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
                        {/* <div className="flex items-center space-x-2 text-muted-foreground">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{event.attendees}</span>
                        </div> */}
                      </div>
                    </div>
                    
                    {/* <div className="lg:col-span-1 flex justify-center lg:justify-end">
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
                        onClick={() => window.open(event.registration, '_blank')}
                      >
                        Register Now
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div> */}
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