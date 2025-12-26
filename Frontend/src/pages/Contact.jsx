import React, { useEffect, useState } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Instagram,
    Linkedin,
    Github,
    Twitter,
    Facebook,
    MessageSquare,
    User,
    Building,
    Clock,
    CheckCircle,
    AlertCircle,
    Navigation
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const Contact = () => {


    <Helmet>
    <title>Contact Us - GeeksforGeeks Student Chapter @ RSCOE</title>
    <meta name="description" content="Get in touch with the GeeksforGeeks Student Chapter at RSCOE. Whether you have questions, want to collaborate, or just want to say hi, we're here to connect!" />
    </Helmet>

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        loading: false
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ submitted: false, error: false, loading: true });

        try {
            // TODO: Replace with your actual backend API endpoint
            // const response = await fetch('YOUR_API_ENDPOINT', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setFormStatus({ submitted: true, error: false, loading: false });
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus({ submitted: false, error: false, loading: false });
            }, 5000);
        } catch (error) {
            setFormStatus({ submitted: false, error: true, loading: false });
        }
    };

     useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);
    
    const collegeLocation = {
        name: 'Rajarshi Shahu College of Engineering (RSCOE)',
        address: 'Tathawade, Pune, Maharashtra 411033',
        coordinates: {
            lat: 18.6200922,  
            lng: 73.7471974  
        },
        mapUrl: 'https://www.google.com/maps/place/JSPM+Rajarshi+Shahu+College+Of+Engineering+,+Tathawade/@18.6200922,73.7471974,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bbbc138acb7b:0x67043867a211a31d!8m2!3d18.6200922!4d73.7471974!16s%2Fg%2F11fly22nwc?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D' // UPDATE with actual Google Maps link
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            value: 'gfg.rscoe@gmail.com',
            link: 'mailto:gfg.rscoe@gmail.com',
            color: 'from-gfg-green to-gfg-ocean'
        },
        {
            icon: Phone,
            title: 'Call Us',
            value: '+91 9890538583',
            link: 'tel:+919890538583',
            color: 'from-gfg-navy to-gfg-blue'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            value: 'RSCOE, Tathawade, Pune',
            link: collegeLocation.mapUrl,
            color: 'from-gfg-accent-orange to-gfg-accent-yellow'
        },
        {
            icon: Clock,
            title: 'Working Hours',
            value: 'Mon-Fri: 9 AM - 6 PM',
            link: null,
            color: 'from-gfg-accent-purple to-gfg-accent-lime'
        }
    ];

    
    const socialLinks = [
        { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/gfg.rscoe/?igsh=MTJtYWQ2eHVmYW8wdw%3D%3D#', color: 'hover:text-pink-600' },
        { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/company/geeksforgeeksrscoe/', color: 'hover:text-blue-600' },
        { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/people/GfGRSCOE/61551517804739/', color: 'hover:text-blue-700' }
    ];

  
    const faqs = [
        {
            question: 'How can I join the chapter?',
            answer: 'Fill out the membership form on our website or reach out via email. We welcome all students passionate about coding!'
        },
        {
            question: 'Are there any membership fees?',
            answer: 'No! Our chapter is completely free to join. We believe in accessible education for all.'
        },
        {
            question: 'What events do you organize?',
            answer: 'We conduct workshops, hackathons, coding contests, webinars, and study groups throughout the semester.'
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-white via-gfg-gray to-[#f1f8f5]">

           
            <section className="pt-32 pb-12 px-4 sm:px-6 relative overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 bg-gfg-green/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-gfg-ocean/10 rounded-full blur-3xl"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="font-sofia font-bold text-4xl sm:text-5xl lg:text-6xl text-gfg-black mb-6 leading-tight">
                        Let's Connect &
                        <span className="block bg-linear-to-r from-gfg-green via-gfg-ocean to-gfg-navy bg-clip-text text-transparent">
                            Build Together
                        </span>
                    </h1>

                    <p className="font-source text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Have questions? Want to collaborate? Or just want to say hi?
                        We'd love to hear from you!
                    </p>
                </div>
            </section>

          
            <section className="py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, idx) => {
                            const Icon = info.icon;
                            return (
                                <a
                                    key={idx}
                                    href={info.link || '#'}
                                    target={info.link?.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
                                >
                                    <div className={`w-14 h-14 bg-linear-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="font-sofia font-bold text-lg text-gfg-black mb-2">{info.title}</h3>
                                    <p className="font-source text-gray-600 text-sm leading-relaxed">{info.value}</p>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

         
            <section className="py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">

                        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-linear-to-br from-gfg-green to-gfg-ocean rounded-xl flex items-center justify-center">
                                    <Send className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="font-sofia font-bold text-2xl sm:text-3xl text-gfg-black">Send us a Message</h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                             
                                <div>
                                    <label className="block font-source font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gfg-green focus:outline-none transition-colors font-source"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-source font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gfg-green focus:outline-none transition-colors font-source"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-source font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gfg-green focus:outline-none transition-colors font-source"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-source font-semibold text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <div className="relative">
                                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="How can we help you?"
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gfg-green focus:outline-none transition-colors font-source"
                                        />
                                    </div>
                                </div>

                              
                                <div>
                                    <label className="block font-source font-semibold text-gray-700 mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Tell us more about your inquiry..."
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gfg-green focus:outline-none transition-colors font-source resize-none"
                                    ></textarea>
                                </div>

                              
                                <button
                                    type="submit"
                                    disabled={formStatus.loading}
                                    className="w-full py-4 bg-linear-to-r from-gfg-green to-gfg-ocean text-white font-sofia font-bold rounded-xl hover:shadow-xl transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {formStatus.loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {formStatus.submitted && (
                                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                        <p className="font-source text-green-700 text-sm">
                                            Message sent successfully! We'll get back to you soon.
                                        </p>
                                    </div>
                                )}

                                {formStatus.error && (
                                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl">
                                        <AlertCircle className="w-5 h-5 text-red-600" />
                                        <p className="font-source text-red-700 text-sm">
                                            Oops! Something went wrong. Please try again.
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                        <div className="space-y-6">

                            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[450px] relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.080024071442!2d73.7446225!3d18.6200922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbbc138acb7b%3A0x67043867a211a31d!2sJSPM%20Rajarshi%20Shahu%20College%20Of%20Engineering%20%2C%20Tathawade!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale-50% group-hover:grayscale-0 transition-all duration-300"
                                ></iframe>


                                <a
                                    href={collegeLocation.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-4 right-4 px-6 py-3 bg-gfg-green text-white font-sofia font-bold rounded-xl shadow-lg hover:bg-gfg-ocean transition-all flex items-center gap-2 hover:scale-105"
                                >
                                    <Navigation className="w-5 h-5" />
                                    Get Directions
                                </a>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-linear-to-br from-gfg-accent-orange to-gfg-accent-yellow rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-sofia font-bold text-xl text-gfg-black mb-2">
                                            Find Us Here
                                        </h3>
                                        <p className="font-source text-gray-600 leading-relaxed mb-3">
                                            {collegeLocation.name}
                                        </p>
                                        <p className="font-source text-gray-500 text-sm leading-relaxed">
                                            {collegeLocation.address}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="py-12 px-4 sm:px-6 bg-linear-to-br from-gfg-green/5 via-white to-gfg-navy/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-sofia font-bold text-3xl sm:text-4xl text-gfg-black mb-4">
                        Connect With Us
                    </h2>
                    <p className="font-source text-lg text-gray-600 mb-8">
                        Follow us on social media for updates, events, and community highlights
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {socialLinks.map((social, idx) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110 border border-gray-100 ${social.color}`}
                                    aria-label={social.name}
                                >
                                    <Icon className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-sofia font-bold text-3xl sm:text-4xl text-gfg-black mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="font-source text-lg text-gray-600">
                            Quick answers to common questions
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                                <h3 className="font-sofia font-bold text-lg text-gfg-black mb-2">
                                    {faq.question}
                                </h3>
                                <p className="font-source text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;