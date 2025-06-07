import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, CheckCircle, Clock, FileText, GraduationCap, BookOpen, Users } from 'lucide-react';

const Admission = () => {
  const eligibilityRequirements = [
    {
      program: "Bachelor of Optometry",
      requirements: [
        "Completed 12th grade with Physics, Chemistry, Biology",
        "Minimum 75% aggregate marks in science subjects",
        "Valid entrance exam score (NEET/State CET)",
        "Age between 17-25 years"
      ],
      duration: "4 Years",
      intake: "60 Students"
    },
    {
      program: "Advanced Optometry Programs",
      requirements: [
        "Bachelor's degree in Optometry (B.Optom)",
        "Minimum 70% marks in undergraduate program",
        "2+ years clinical experience preferred",
        "Research proposal for specialized tracks"
      ],
      duration: "2 Years",
      intake: "20 Students"
    }
  ];

  const admissionSteps = [
    {
      step: 1,
      title: "Online Application",
      description: "Complete the online application form with all required details",
      icon: FileText,
      timeline: "March - June"
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Upload all necessary academic and personal documents",
      icon: CheckCircle,
      timeline: "After Application"
    },
    {
      step: 3,
      title: "Entrance Examination",
      description: "Appear for written test and practical assessment",
      icon: BookOpen,
      timeline: "July"
    },
    {
      step: 4,
      title: "Interview & Counseling",
      description: "Personal interview and academic counseling session",
      icon: Users,
      timeline: "August"
    },
    {
      step: 5,
      title: "Final Selection",
      description: "Merit list publication and seat allocation",
      icon: GraduationCap,
      timeline: "August - September"
    }
  ];

  const faqs = [
    {
      question: "What is the application deadline for the Bachelor of Optometry program?",
      answer: "The application deadline is typically June 30th for the academic year starting in September. However, we recommend applying early as seats are limited and filled on a first-come, first-served basis among qualified candidates."
    },
    {
      question: "Are there any scholarship opportunities available?",
      answer: "Yes, we offer various scholarships including merit-based scholarships for top performers, need-based financial aid, and special scholarships for students from underrepresented communities. Details are available during the counseling process."
    },
    {
      question: "What documents are required for admission?",
      answer: "Required documents include: academic transcripts, entrance exam scores, identity proof, address proof, caste certificate (if applicable), medical certificate, passport-size photographs, and migration certificate from the previous institution."
    },
    {
      question: "What is the fee structure?",
      answer: "The fee structure varies by program. Bachelor of Optometry: ₹80,000 per year. Advanced programs: ₹1,20,000 per year. Additional costs include hostel fees, examination fees, and practical lab charges. Detailed fee structure is provided during admission counseling."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-4xl md:text-6xl text-foreground mb-6">
            Join Our <span className="text-primary">Community</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Begin your journey toward a rewarding career in optometry. Discover our comprehensive admission process and requirements.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
            onClick={() => window.open('https://forms.google.com/placeholder', '_blank')}
          >
            Apply Now
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground">
              Eligibility <span className="text-primary">Requirements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Review our program requirements to ensure you meet the criteria for admission
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eligibilityRequirements.map((program, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center justify-between">
                    {program.program}
                    <div className="flex gap-2">
                      <Badge variant="secondary">{program.duration}</Badge>
                      <Badge variant="outline">{program.intake}</Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold text-foreground">Requirements:</h4>
                  <ul className="space-y-3">
                    {program.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground">
              Admission <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow these steps to complete your application successfully
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold text-sm">
                        {step.step}
                      </div>
                      <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-primary">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{step.timeline}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-foreground">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our admission process
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="font-semibold text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Admission;