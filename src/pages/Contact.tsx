import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
// Remove this import
// import { useForm } from 'react-hook-form';

// Add this import
import { useForm, ValidationError } from '@formspree/react';
import contactData from '@/content/contact.json';

// Helper to map icon names to Lucide components
const iconComponents: { [key: string]: React.ElementType } = {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
};

const Contact = () => {
  const {
    contact_info: contactInfoData,
    social_links: socialLinksData,
    form_endpoint: formEndpoint,
    hero_title1,
    hero_title2_primary,
    hero_subtitle
  } = contactData;

  const contactInfo = contactInfoData.map(info => ({
    ...info,
    icon: iconComponents[info.icon] || MapPin, // Default to MapPin if icon not found
  }));

  const socialLinks = socialLinksData.map(link => ({
    ...link,
    icon: iconComponents[link.icon] || Facebook, // Default to Facebook if icon not found
  }));

  const [formState, submitForm] = useForm(formEndpoint);

  if (formState.succeeded) {
    return (
      <div className="text-center p-8">
        <h3 className="text-2xl font-semibold text-primary">Thank you for your message!</h3>
        <p className="text-muted-foreground mt-2">We will get back to you soon.</p>
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm(e);
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-4xl md:text-6xl text-foreground mb-6">
            {hero_title1} <span className="text-primary">{hero_title2_primary}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {hero_subtitle}
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
            <Card className="p-8">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={formState.errors} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Your message"
                    className="min-h-[150px]"
                  />
                  <ValidationError prefix="Message" field="message" errors={formState.errors} />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={formState.submitting}
                >
                  {formState.submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
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
              onClick={() => window.location.href = 'tel:+91 9483612027'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency: +91 9483612027
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
              onClick={() => window.location.href = 'mailto:ssalinsoptometrycollege@gmail.com'}
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