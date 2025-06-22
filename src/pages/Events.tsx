import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button'; // Button not used in the current CMS driven content for upcoming events
import { Calendar, MapPin, Clock, Users, ExternalLink, LucideProps } from 'lucide-react';
import eventsContent from '@/content/events.json'; // Import CMS content
import React from 'react';

// Helper to map icon strings to Lucide components (if needed in future for events)
const iconMap: { [key: string]: React.FC<LucideProps> } = {
  Calendar,
  MapPin,
  Clock,
  Users,
  ExternalLink
};


const Events = () => {
  // const upcomingEvents = [ // Replaced by CMS
  //   // ...
  // ];

  // const eventVideos = [ // This section was commented out in original, and not in CMS config
  //   // ...
  // ];

  // const pastEventImages = [ // Replaced by CMS
  //   // ...
  // ];

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
            {eventsContent.hero_title1} <span className="text-primary">{eventsContent.hero_title2_primary}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {eventsContent.hero_subtitle}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      {eventsContent.featured_event_image && (
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br from-background to-accent/5 border-2 border-accent/20">
              <CardContent className="p-0">
                <div className="aspect-[16/9] relative">
                  <img
                    src={eventsContent.featured_event_image}
                    alt={eventsContent.featured_event_title || "Featured Event"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">{eventsContent.featured_event_title}</h3>
                      <p className="text-white/90">{eventsContent.featured_event_description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Featured Video */}
      {eventsContent.featured_video_url && (
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br from-background to-accent/5 border-2 border-accent/20">
              <CardContent className="p-0">
                <div className="aspect-[16/9] relative">
                  <iframe
                    src={eventsContent.featured_video_url}
                    title={eventsContent.featured_video_title || "Featured Video"}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{eventsContent.featured_video_title}</h3>
                  <p className="text-muted-foreground">{eventsContent.featured_video_description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground">
              {eventsContent.upcoming_title1} <span className="text-primary">{eventsContent.upcoming_title2_primary}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {eventsContent.upcoming_description}
            </p>
          </div>
          
          <div className="space-y-8">
            {eventsContent.upcoming_events_list.map((event, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="font-bold text-2xl text-foreground">{event.title}</h3>
                        {event.type && (
                          <Badge className={`${getEventTypeColor(event.type)} border-0`}>
                            {event.type}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Description was not displayed in original UI, but available in CMS
                      {event.description && <p className="text-muted-foreground leading-relaxed">{event.description}</p>}
                      */}
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        {event.date && (
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{event.date}</span>
                          </div>
                        )}
                        {event.time && (
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{event.time}</span>
                          </div>
                        )}
                        {event.location && (
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                        )}
                        {/* Attendees was not displayed in original UI, but available in CMS
                        {event.attendees && (
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Users className="w-4 h-4 text-primary" />
                            <span>{event.attendees}</span>
                          </div>
                        )}
                        */}
                      </div>
                    </div>
                    
                    {/* Registration button was commented out in original UI and not part of current CMS requirements for display
                    {event.registration && (
                      <div className="lg:col-span-1 flex justify-center lg:justify-end">
                        <Button
                          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
                          onClick={() => window.open(event.registration, '_blank')}
                        >
                          Register Now
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}
                    */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Videos Section was commented out in original code and not included in CMS config */}
      {/* <section className="py-16 bg-accent/20"> ... </section> */}

      {/* Past Events Gallery */}
      {eventsContent.gallery_images && eventsContent.gallery_images.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="font-bold text-4xl md:text-5xl text-foreground">
                {eventsContent.gallery_title1} <span className="text-primary">{eventsContent.gallery_title2_primary}</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {eventsContent.gallery_description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventsContent.gallery_images.map((imageObj, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <img
                    src={imageObj.image_item}
                    alt={`${eventsContent.gallery_title2_primary || 'Past Event'} ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Events;