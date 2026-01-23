import { Clock, Mail, MapPin, MessageSquare, Phone, Send, User } from "lucide-react";
import { useState } from "react";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        {/* Hero Section */}
        <div className="px-4 sm:px-6 lg:px-16 py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-90" strokeWidth={1.5} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-lg opacity-90">
              We're here to help and answer any question you might have
            </p>
          </div>
        </div>

        {/* Contact Cards & Form Section */}
        <div className="px-4 sm:px-6 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Contact Information Cards - Left Side */}
            <div className="lg:col-span-1 space-y-6">
              {/* Phone Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-3">Mon-Sat: 9AM - 7PM</p>
                <a href="tel:+18004567890" className="text-red-600 font-semibold hover:text-red-700">
                  +1 800 456 7890
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-3">We'll respond within 24 hours</p>
                <a href="mailto:info@company.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  info@company.com
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm mb-3">Come see us at our office</p>
                <address className="text-gray-700 not-italic">
                  Suite 405, Auto Service Plaza,<br />
                  Main Commercial District,<br />
                  City, State 12345
                </address>
              </div>

              {/* Hours Card */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg p-6 text-white">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="font-semibold">10:00 AM - 3:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="service">Service Inquiry</option>
                        <option value="appointment">Book Appointment</option>
                        <option value="support">Customer Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section (Optional) */}
        <div className="px-4 sm:px-6 lg:px-16 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-200 rounded-xl overflow-hidden h-96 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;