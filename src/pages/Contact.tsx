import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Golekhana", "Bidar, KA 585401", "India"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["08482-230467, -230460", "+91 9483612027", "+91 9900293035"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["velemegnabidar@gmail.com", "ssalinsoptometrycollege@gmail.com"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "text-orange-600"
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'hover:text-red-600' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-4xl md:text-6xl text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you with any questions about our programs, admissions, or campus life. Reach out to us today!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground">
              Contact <span className="text-primary">Information</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Send us a <span className="text-primary">Message</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-medium">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name" 
                          className="border-border focus:border-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-medium">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name" 
                          className="border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="border-border focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-medium">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="border-border focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-medium">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="Enter message subject" 
                        className="border-border focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-medium">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Enter your message here..." 
                        rows={6}
                        className="border-border focus:border-primary resize-none"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-full transition-all duration-200 hover:scale-105"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Visit Our <span className="text-primary">Campus</span>
                </h2>
                <p className="text-muted-foreground">
                  Located in the heart of the academic district, our campus is easily accessible by public transport.
                </p>
              </div>
              
              {/* Google Map Embed */}
              <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.3873055129166!2d77.533378!3d17.9140806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec758990ab1f7%3A0xe6459a46b6794e22!2sS%20SALINS%20COLLEGE%20OF%20OPTOMETRY!5e0!3m2!1sen!2sin!4v1749393585453!5m2!1sen!2sin"
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="S. Salins College of Optometry Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Media */}
              <Card className="shadow-lg">
                <CardContent className="p-8 text-center space-y-6">
                  <h3 className="font-semibold text-xl text-foreground">
                    Connect With Us
                  </h3>
                  <p className="text-muted-foreground">
                    Follow us on social media for the latest updates and campus news
                  </p>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="icon"
                        className={`border-border hover:border-primary transition-all duration-200 hover:scale-110 ${social.color}`}
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        <social.icon className="w-5 h-5" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-bold text-3xl md:text-4xl">
            Emergency Contact
          </h2>
          <p className="text-xl text-primary-foreground/90">
            For urgent matters or emergencies, please contact our 24/7 helpline
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary"
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
              onClick={() => window.location.href = 'tel:+91 9900293035'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency: +91 9900293035
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
              onClick={() => window.location.href = 'mailto:velemegnabidar@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Emergency Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;