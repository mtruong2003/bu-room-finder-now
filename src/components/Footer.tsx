
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bu-gray text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-bu-red" />
              <h3 className="text-lg font-semibold">About This Project</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              BU Classroom Finder was created by students, for students. We understand the struggle of finding quiet study spaces on campus. This tool aggregates real-time classroom availability data to help you find the perfect spot to focus on your studies.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-bu-red" />
              <h3 className="text-lg font-semibold">Contact Us</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Email: classrooms@bu.edu</p>
              <p>Hours: 24/7 Online Support</p>
              <p>Response Time: Within 24 hours</p>
            </div>
          </div>

          {/* Feedback Form */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-bu-red" />
              <h3 className="text-lg font-semibold">Quick Feedback</h3>
            </div>
            <div className="space-y-3">
              <Input 
                placeholder="Your email (optional)" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Textarea 
                placeholder="Tell us how we can improve..." 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                rows={3}
              />
              <Button className="w-full bg-bu-red hover:bg-red-700">
                Send Feedback
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 BU Classroom Finder. Made with ❤️ by BU students for BU students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
