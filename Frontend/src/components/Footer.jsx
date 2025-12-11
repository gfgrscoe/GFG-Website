// src/components/Footer.jsx
import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Youtube,
  ArrowUpRight,
  Heart
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import WebWarriorsModal from './WebWarriorsModal.jsx';
import { contributors } from '../utils/contributors.js';

const Footer = () => {
  const [email, setEmail] = useState('');

  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Events', to: '/events' },
    { name: 'Team', to: '/team' },
    { name: 'Contact', to: '/contact' },
  ];

   const [isModalOpen, setIsModalOpen] = useState(false);


  const resources = [
    { name: 'DSA Practice', to: '/resources#dsa' },
    { name: 'Web Development', to: '/resources#web' },
    { name: 'Competitive Programming', to: '/resources#cp' },
    { name: 'App Development', to: '/resources#app' },
    { name: 'Machine Learning', to: '/resources#ml' },
  ];

  const events = [
    { name: 'Upcoming Workshops', to: '/events#upcoming' },
    { name: 'Hackathons', to: '/events#hackathons' },
    { name: 'Coding Contests', to: '/events#contests' },
    { name: 'Seminars', to: '/events#seminars' },
    { name: 'Past Events', to: '/events#past' },
  ];

  const socialLinks = [
    { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61551517804739', label: 'Facebook', colorVar: 'var(--color-gfg-blue)' },
    { Icon: Instagram, href: 'https://www.instagram.com/gfg.rscoe?igsh=MTJtYWQ2eHVmYW8wdw==', label: 'Instagram', colorVar: '#e4405f' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/geeksforgeeksrscoe/', label: 'LinkedIn', colorVar: 'var(--color-gfg-navy)' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email.');
      return;
    }
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  const LinkItem = ({ name, to }) => (
    <NavLink
      to={to}
      className="font-['Source_Sans_3'] text-gray-300 hover:text-gfg-ocean transition-colors flex items-center group"
      style={{ textDecoration: 'none' }}
    >
      <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
      {name}
    </NavLink>
  );

  return (
    <footer
      className="text-white"
      style={{
        background: 'linear-gradient(135deg, var(--color-gfg-black) 0%, #081815 40%, #001f33 100%)'
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
        style={{ animation: 'var(--animate-fadeIn)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="GFG Logo"
                  className="w-12 h-12 rounded-lg bg-white"
                />
                <div>
                  <h2
                    style={{ fontFamily: 'var(--font-sofia)', fontWeight: 700, color: 'var(--color-gfg-white)' }}
                    className="text-2xl"
                  >
                    GeeksforGeeks
                  </h2>
                  <p
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-source)', color: 'var(--color-gfg-ocean)' }}
                  >
                    Student Chapter
                  </p>
                </div>
              </div>
            </div>

            <p
              className="mb-6 leading-relaxed"
              style={{ fontFamily: 'var(--font-nunito)', color: 'rgba(255,255,255,0.78)' }}
            >
              Empowering students through coding, collaboration, and continuous learning.
              Join us in building the tech community of tomorrow.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:gfg.rscoe@gmail.com"
                className="flex items-center space-x-3 transition-colors group"
                aria-label="Send email"
                style={{ color: 'rgba(255,255,255,0.78)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <span style={{ fontFamily: 'var(--font-source)' }}>gfg.rscoe@gmail.com</span>
              </a>

              <a
                href="tel:+919890538583"
                className="flex items-center space-x-3 transition-colors group"
                aria-label="Call phone number"
                style={{ color: 'rgba(255,255,255,0.78)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <span style={{ fontFamily: 'var(--font-source)' }}>+91 98905 38583</span>
              </a>

              <div className="flex items-start space-x-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <address
                  className="not-italic leading-relaxed"
                  style={{ fontFamily: 'var(--font-source)', color: 'rgba(255,255,255,0.78)' }}
                >
                  JSPM Rajarshi Shahu College Of Engineering , Tathawade <br />Pune, Maharashtra - 411033
                </address>
              </div>
            </div>
          </div>
          <div>
            <h3
              className="mb-4"
              style={{ fontFamily: 'var(--font-sofia)', fontWeight: 700, color: 'var(--color-gfg-white)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <LinkItem name={link.name} to={link.to} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-4"
              style={{ fontFamily: 'var(--font-sofia)', fontWeight: 700, color: 'var(--color-gfg-white)' }}
            >
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <LinkItem name={link.name} to={link.to} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-4"
              style={{ fontFamily: 'var(--font-sofia)', fontWeight: 700, color: 'var(--color-gfg-white)' }}
            >
              Events
            </h3>
            <ul className="space-y-2">
              {events.map((link) => (
                <li key={link.name}>
                  <LinkItem name={link.name} to={link.to} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 p-6 sm:p-8 rounded-2xl"
          style={{
            background: `linear-gradient(90deg, ${'var(--color-gfg-green)'} 0%, ${'var(--color-gfg-ocean)'} 100%)`,
            animation: 'var(--animate-slideDown)'
          }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3
              style={{ fontFamily: 'var(--font-sofia)', fontWeight: 700 }}
              className="mb-2"
            >
              Stay Updated! 🚀
            </h3>
            <p className="mb-6" style={{ fontFamily: 'var(--font-source)', color: 'rgba(255,255,255,0.9)' }}>
              Subscribe to our newsletter for latest events, workshops, and coding resources.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'white',
                  fontFamily: 'var(--font-source)'
                }}
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-lg"
                style={{
                  background: 'white',
                  color: 'var(--color-gfg-green)',
                  fontFamily: 'var(--font-sofia)',
                  fontWeight: 700
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ Icon, href, label, colorVar }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg flex items-center justify-center transition-all transform hover:scale-110 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    color: colorVar || 'white'
                  }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p style={{ fontFamily: 'var(--font-nunito)', color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem' }}>
                Official {' '}
                <a
                  href="https://www.geeksforgeeks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-gfg-ocean)', fontWeight: 600, textDecoration: 'none' }}
                >
                  GeeksforGeek Website
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.12)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p style={{ fontFamily: 'var(--font-nunito)', color: 'rgba(255,255,255,0.65)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              © {new Date().getFullYear()} GeeksforGeeks Student Chapter. Made with
              <Heart className="w-4 h-4" style={{ color: '#ff6b6b' }} />
              by{' '}
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-gfg-green hover:text-gfg-ocean transition-colors font-semibold underline decoration-gfg-green/30 hover:decoration-gfg-ocean/50 underline-offset-2 cursor-pointer"
              >
                Web Warriors
              </button>
              .
            </p>
            <div className="flex gap-6">
              <NavLink to="/" style={{ color: 'rgba(255,255,255,0.65)' }} className="hover:text-gfg-ocean transition-colors">
                Privacy Policy
              </NavLink>
              <NavLink to="/" style={{ color: 'rgba(255,255,255,0.65)' }} className="hover:text-gfg-ocean transition-colors">
                Terms of Service
              </NavLink>
              <NavLink to="/" style={{ color: 'rgba(255,255,255,0.65)' }} className="hover:text-gfg-ocean transition-colors">
                Cookie Policy
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <WebWarriorsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contributors={contributors}
      />
    </footer >
  );
};

export default Footer;
