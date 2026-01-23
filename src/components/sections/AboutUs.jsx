import { Award, Heart, History, Rocket, Shield, Target, TrendingUp, Users } from "lucide-react";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        {/* Page Title */}
        <div className="px-4 sm:px-6 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering excellence in automotive care with passion and expertise
            </p>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="px-4 sm:px-6 lg:px-16 pb-12">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are a leading automotive service provider dedicated to delivering excellence in car care. 
              With years of experience and a team of certified professionals, we ensure your vehicle receives 
              the best treatment possible. Our commitment to quality, transparency, and customer satisfaction 
              sets us apart in the industry.
            </p>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="px-4 sm:px-6 lg:px-16 py-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 flex items-center justify-center h-48">
                <Target className="w-24 h-24 text-white" strokeWidth={1.5} />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-600" />
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the most trusted automotive service provider by delivering exceptional quality, 
                  innovative solutions, and unmatched customer care. We envision a future where every vehicle 
                  owner has access to professional, reliable, and affordable car maintenance services.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 flex items-center justify-center h-48">
                <Rocket className="w-24 h-24 text-white" strokeWidth={1.5} />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-orange-600" />
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to provide top-tier automotive services with complete transparency, 
                  fair pricing, and expert craftsmanship. We strive to build lasting relationships with 
                  our customers through consistent quality and genuine care for their vehicles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="px-4 sm:px-6 lg:px-16 py-12">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 flex items-center justify-center bg-white/10">
                <History className="w-32 h-32 text-white" strokeWidth={1.5} />
              </div>
              <div className="p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <History className="w-6 h-6" />
                  Our History
                </h3>
                <p className="leading-relaxed opacity-90">
                  Founded with a passion for automobiles and customer service, we've grown from a small 
                  workshop to a trusted name in automotive care. Our journey is marked by continuous 
                  innovation, expanding services, and an unwavering commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="px-4 sm:px-6 lg:px-16 py-12">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-pink-600" />
                  Our Values
                </h3>
                <p className="text-gray-600 mb-6">
                  We are guided by core values that define who we are:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Integrity</h4>
                      <p className="text-sm text-gray-600">Honest and transparent in all dealings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality</h4>
                      <p className="text-sm text-gray-600">Excellence in every service</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Customer First</h4>
                      <p className="text-sm text-gray-600">Your satisfaction is our priority</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Innovation</h4>
                      <p className="text-sm text-gray-600">Embracing modern technology</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center h-full order-1 md:order-2">
                <Heart className="w-32 h-32 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="px-4 sm:px-6 lg:px-16 py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
              Our Achievements
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Numbers that speak for our commitment
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-red-600 mb-2">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Expert Mechanics</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-red-600 mb-2">4.9★</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;