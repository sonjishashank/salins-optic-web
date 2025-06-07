import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="font-semibold text-xl">S. Salins College</h3>
                <p className="text-primary-foreground/80">of Optometry</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Leading institution in optometric education, committed to excellence in eye care and vision science education.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/80" />
                <p className="text-primary-foreground/80">
                  123 Education Street, Academic City, AC 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/80" />
                <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/80" />
                <p className="text-primary-foreground/80">info@salinsoptometry.edu</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 S. Salins College of Optometry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;