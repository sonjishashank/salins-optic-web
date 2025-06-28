import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/salinsoptometrycollege/?utm_source=ig_embed&ig_rid=de764a22-ba8b-4ebc-a7fb-45a3050862dd' },
    // { name: 'LinkedIn', icon: Linkedin, url: '#' },
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
                Golekhana, Bidar – 585401, Karnataka India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/80" />
                <p className="text-primary-foreground/80">+91 9900293035</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/80" />
                <p className="text-primary-foreground/80">ssalinsoptometrycollege@gmail.com</p>
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
          <p>&copy; {new Date().getFullYear()} S. Salins College of Optometry. All rights reserved.</p> 
  <p className="mt-2 text-sm">
    Created with ❤️ by{" "}
    <a
      href="https://wa.me/919110886128?text=We%20need%20a%20software%20solution%20for%20our%20business"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Starset Consultancy Services
    </a>
  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
