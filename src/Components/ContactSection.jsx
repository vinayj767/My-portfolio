import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "vinayj767@gmail.com", href: "mailto:vinayj767@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91-93151-34706", href: "tel:+919315134706" },
    { icon: MapPin, label: "Location", value: "IIIT Dharwad, Karnataka, India", href: null }
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/vinayjain767", color: "hover:text-blue-600" },
    { icon: Github, label: "GitHub", href: "https://github.com/vinayj767", color: "hover:text-slate-800" }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Use Formspree endpoint
      const response = await fetch("https://formspree.io/f/mnnzlydj", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError("Sorry, there was an error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-md mx-auto bg-white shadow-2xl rounded-2xl">
            <div className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600 mb-6">
                Thank you for reaching out. I'll get back to you soon!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white font-medium hover:text-amber-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-300 hover:bg-slate-700 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl p-6 border border-amber-500/30">
              <h4 className="text-lg font-semibold text-white mb-2">Open for Opportunities</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                I'm actively seeking internships and full-time opportunities in full-stack development,
                AI/ML engineering, and innovative tech roles. Let's build something amazing together!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-2xl rounded-2xl">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-slate-700 font-medium">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-slate-700 font-medium">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-slate-700 font-medium">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Collaboration Opportunity"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-slate-700 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:border-amber-500 focus:ring-amber-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white font-semibold py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}