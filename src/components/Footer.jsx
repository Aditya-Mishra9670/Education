import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10 flex flex-col lg:flex-row gap-6">
        <nav className="flex-1">
          <h6 className="text-lg font-semibold mb-2">Resources</h6>
          <Link to="/branding" className="link link-hover">
            Study Guides
          </Link>
          <Link to="/design" className="link link-hover">
            Tutorials
          </Link>
          <Link to="/marketing" className="link link-hover">
            Workshops
          </Link>
          <Link to="/advertisement" className="link link-hover">
            Webinars
          </Link>
        </nav>
        <nav className="flex-1">
          <h6 className="text-lg font-semibold mb-2">About</h6>
          <Link to="/about" className="link link-hover">
            About Us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/careers" className="link link-hover">
            Careers
          </Link>
          <Link to="/press" className="link link-hover">
            Press Kit
          </Link>
        </nav>
        <nav className="flex-1">
          <h6 className="text-lg font-semibold mb-2">Policies</h6>
          <Link to="/terms" className="link link-hover">
            Terms of Use
          </Link>
          <Link to="/privacy" className="link link-hover">
            Privacy Policy
          </Link>
          <Link to="/cookies" className="link link-hover">
            Cookie Policy
          </Link>
        </nav>
      </footer>
      <footer className="footer text-base-content border-t border-gray-700 px-6 py-4 flex flex-col lg:flex-row items-center">
        <aside className="flex-1 text-center lg:text-left">
          <p className="text-sm font-medium">
            StudyTube - Empowering Learners Everywhere
            <br />
            Unlock your potential with top-quality resources.
          </p>
        </aside>
        <nav className="mt-4 lg:mt-0 flex gap-4">
          <Link to="/facebook" className="hover:text-blue-500">
            <Facebook className="w-6 h-6" />
          </Link>
          <Link to="/twitter" className="hover:text-blue-400">
            <Twitter className="w-6 h-6" />
          </Link>
          <Link to="/youtube" className="hover:text-red-500">
            <Youtube className="w-6 h-6" />
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
