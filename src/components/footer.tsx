import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-card-foreground py-12 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            {['About', 'Blog'].map(text => (
              <li key={text}>
                <a href="#" className="hover:text-muted-foreground">{text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Live Courses', 'Recorded Sessions', '1-on-1 Consultation', 'Register for Business'].map(text => (
              <li key={text}><a href="#" className="hover:text-muted-foreground">{text}</a></li>
            ))}
          </ul>
        </div>

        {/* Help & Support Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Help & Support</h3>
          <ul className="space-y-2">
            {['FAQs', 'Contact'].map(text => (
              <li key={text}><a href="#" className="hover:text-muted-foreground">{text}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-border pt-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" aria-label="Facebook" className="text-2xl text-[#1877F2] hover:text-[#145dbf]">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="text-2xl text-[#1DA1F2] hover:text-[#0d8ddb]">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-2xl text-[#0077B5] hover:text-[#005983]">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Instagram" className="text-2xl text-gradient-to-br from-[#fd1d1d] via-[#fcb045] to-[#405de6] hover:opacity-80">
            <FaInstagram />
          </a>
        </div>
        <p className="text-sm">&copy; 2025 Copyrights. All rights reserved by MetaMatch</p>
        <p className="text-xs mt-2 space-x-4">
          {['Cookie Preference', 'Privacy', 'Terms of Use'].map((text, idx) => (
            <span key={text}>
              <a href="#" className="hover:text-muted-foreground">{text}</a>
              {idx < 2 && <span> | </span>}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
