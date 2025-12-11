import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Events',
      href: '/events',
      dropdown: [
        { label: 'Workshops', to: '/events#workshops' },
        { label: 'Hackathons', to: '/events#hackathons' },
        { label: 'Coding Contests', to: '/events#contests' },
        { label: 'Seminars', to: '/events#seminars' },
      ],
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        { label: 'DSA', to: '/resources#dsa' },
        { label: 'Web Dev', to: '/resources#web' },
        { label: 'CP', to: '/resources#cp' },
        { label: 'App Dev', to: '/resources#app' },
      ],
    },
    { name: 'Team', href: '/team' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO - big, floating, no box */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="GeeksforGeeks Logo"
              className="w-16 h-16 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 drop-shadow-[0_6px_12px_rgba(0,0,0,0.18)]"
            />
            <div className="hidden sm:block">
              <h1 className="font-sofia font-bold text-gfg-black text-2xl leading-tight">
                GeeksforGeeks
              </h1>
              <p className="font-source text-gfg-navy text-sm">Student Chapter</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {/* If link has dropdown: show NavLink for navigation and separate chevron button for toggle */}
                {link.dropdown ? (
                  <div className="flex items-center">
                    {/* Parent link navigates to parent route */}
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-source font-semibold transition-all duration-200 flex items-center gap-1 ${
                          isActive ? 'text-gfg-green bg-[#f1f8f5]' : 'text-gfg-black hover:text-gfg-green hover:bg-[#f1f8f5]'
                        }`
                      }
                      onClick={() => {
                        // Clicking the text should close dropdown (since user navigates)
                        setActiveDropdown(null);
                      }}
                    >
                      {link.name}
                    </NavLink>

                    {/* Chevron toggle (separate) */}
                    <button
                      onClick={(e) => {
                        // prevent NavLink click when chevron clicked
                        e.stopPropagation();
                        setActiveDropdown(activeDropdown === link.name ? null : link.name);
                      }}
                      aria-expanded={activeDropdown === link.name}
                      aria-haspopup="menu"
                      className="px-2 py-2 rounded-lg ml-1 text-gfg-black hover:text-gfg-green hover:bg-[#f1f8f5] transition-all"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                ) : (
                  // No dropdown -> normal NavLink
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg font-source font-semibold transition-all duration-200 flex items-center gap-1 ${
                        isActive ? 'text-gfg-green bg-[#f1f8f5]' : 'text-gfg-black hover:text-gfg-green hover:bg-[#f1f8f5]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}

                {/* Desktop Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-100 animate-fadeIn">
                    {/* Optional header linking to parent route for clarity */}
                    <NavLink
                      to={link.href}
                      className="block px-4 py-2 text-sm font-source text-gfg-navy hover:bg-[#f7faf8]"
                      onClick={() => setActiveDropdown(null)}
                    >
                      View all {link.name}
                    </NavLink>

                    <div className="border-t border-gray-100 mt-1 pt-1">
                      {link.dropdown.map((item, idx) => (
                        <NavLink
                          key={idx}
                          to={item.to}
                          className={({ isActive }) =>
                            `block px-4 py-2 font-source text-gfg-black hover:bg-[#f1f8f5] hover:text-gfg-green transition-colors ${
                              isActive ? 'text-gfg-green' : ''
                            }`
                          }
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => navigate('https://chat.whatsapp.com/JXUbInxZza2Cno35TdSyjT?mode=hqrt1')}
              className="px-6 py-2.5 bg-gfg-green text-white font-sofia font-semibold rounded-lg hover:bg-gfg-ocean transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Join Community
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              // close desktop dropdowns when opening mobile
              setActiveDropdown(null);
            }}
            className="lg:hidden p-2 rounded-lg text-gfg-black hover:bg-[#f1f8f5] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl animate-slideDown">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {!link.dropdown ? (
                  <NavLink
                    to={link.href}
                    className="block px-4 py-3 rounded-lg font-source font-semibold text-gfg-black hover:bg-[#f1f8f5] hover:text-gfg-green transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                      className="w-full flex justify-between items-center px-4 py-3 rounded-lg font-source font-semibold text-gfg-black hover:bg-[#f1f8f5] hover:text-gfg-green transition-colors"
                      aria-expanded={mobileDropdown === link.name}
                      aria-controls={`${link.name}-mobile-dropdown`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>

                    {mobileDropdown === link.name && (
                      <div id={`${link.name}-mobile-dropdown`} className="ml-4 mt-1 space-y-1">
                        {/* optional parent link */}
                        <NavLink
                          to={link.href}
                          className="block px-4 py-2 text-sm font-source text-gray-700 hover:text-gfg-green"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdown(null);
                          }}
                        >
                          View all {link.name}
                        </NavLink>

                        {link.dropdown.map((item, idx) => (
                          <NavLink
                            key={idx}
                            to={item.to}
                            className="block px-4 py-2 text-sm font-source text-gray-600 hover:text-gfg-green transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setMobileDropdown(null);
                            }}
                          >
                            {item.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            <button
              className="w-full mt-4 px-6 py-3 bg-gfg-green text-white font-sofia font-semibold rounded-lg hover:bg-gfg-ocean transition-colors shadow-lg"
              onClick={() => {
                setIsOpen(false);
                navigate('/join');
              }}
            >
              Join Community
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
