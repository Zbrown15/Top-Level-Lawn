export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24 overflow-hidden">
        {/* Blurred background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
          style={{
            backgroundImage: 'url(/heroBG.png)',
          }}
        ></div>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl w-full text-center">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{
              textShadow: '0 4px 6px rgba(0, 0, 0, 0.7), 0 2px 4px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            Lawns Done Right.
            <br />
            From the Ground Up.
          </h1>
          <p 
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.7), 0 1px 2px rgba(0, 0, 0, 0.6), 0 0 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            Professional turf and hardscape installs for Reno homeowners who want it done once.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our Services
          </h2>

          {/* Service Items */}
          <div className="space-y-24">
            {/* Xeriscape */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/xeriscape.png" 
                    alt="Xeriscape" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Xeriscape
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Beautiful, water-efficient landscaping designed for Reno&apos;s climate. Create stunning outdoor spaces that conserve water while maintaining curb appeal year-round.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Get Quote Now
                </button>
              </div>
            </div>

            {/* Hardscape */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/hardscapeIMG.png" 
                    alt="Hardscape" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Hardscape
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Expert installation of patios, walkways, driveways, and outdoor living spaces. Quality materials and craftsmanship that stand the test of time.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Get Quote Now
                </button>
              </div>
            </div>

            {/* Fire Pits */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/firepitIMG.png" 
                    alt="Fire Pits" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Fire Pits
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Custom fire pit installations to extend your outdoor living season. Cozy gathering spaces perfect for Reno evenings, built with premium materials.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Get Quote Now
                </button>
              </div>
            </div>

            {/* Retaining Walls */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/retainingWallsIMG.png" 
                    alt="Retaining Walls" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Retaining Walls
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Functional and beautiful retaining walls to manage slopes, create terraced gardens, and add structure to your landscape. Built to last.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Get Quote Now
                </button>
              </div>
            </div>

            {/* Irrigation Systems */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/irrigationIMG.png" 
                    alt="Irrigation Systems" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Irrigation Systems
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Smart, efficient irrigation systems designed to keep your landscape healthy while minimizing water waste. Professional installation and maintenance.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Get Quote Now
                </button>
              </div>
            </div>

            {/* Artificial Turf */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/turfIMG.png" 
                    alt="Artificial Turf" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Artificial Turf
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Low-maintenance, year-round green lawns that look and feel natural. Perfect for Reno&apos;s climate, saving water and time while maintaining beauty.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Get Quote Now
                </button>
              </div>
            </div>

            {/* Snow Removal */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/snowShovelIMG.png" 
                    alt="Snow Removal" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Snow Removal
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Reliable snow removal services to keep your property safe and accessible during Reno winters. Prompt, professional service you can count on.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Get Quote Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/howItWorks.png" 
                  alt="How It Works" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bullet Points */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Contact Us
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Reach out through our website, phone, or email to discuss your landscaping needs. We&apos;ll gather initial information about your project and schedule a convenient time to meet.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Meet with our team
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our experienced team will visit your property to assess the space, understand your vision, and discuss options. We&apos;ll provide expert recommendations and a detailed quote tailored to your needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Execute plan
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Once you approve the plan, our skilled professionals get to work. We handle everything from permits to cleanup, ensuring your project is completed on time and to the highest standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            About Us
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Top Level Lawns, we create outdoor spaces that bring comfort, style, and lasting value to your home.
                </p>
                <p>
                  Based in Northern Nevada, we specialize in high quality landscaping, artificial turf installation, concrete work, irrigation, pavers, rock, and complete yard transformations.
                </p>
                <p>
                  We believe every yard deserves the same attention to detail as the front entrance of a luxury home—clean lines, quality materials, professional craftsmanship, and service you can trust. Whether you&apos;re upgrading your lawn, redesigning your outdoor living space, or enhancing curb appeal, our team works closely with you to bring your vision to life.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/aboutUS.png" 
                  alt="About Top Level Lawns" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/gallary1.jpg" 
                alt="Gallery Image 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 2 */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/gallary2.jpg" 
                alt="Gallery Image 2" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 3 */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/gallary3.jpg" 
                alt="Gallery Image 3" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 4 */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/gallary4.jpg" 
                alt="Gallery Image 4" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 5 */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/gallary5.jpg" 
                alt="Gallery Image 5" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 6 */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/gallary6.jpg" 
                alt="Gallery Image 6" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Contact Form */}
      <section id="contact" className="py-24 bg-green-600">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl text-green-50 leading-relaxed">
              Ready to transform your outdoor space? Contact us for a free consultation and quote.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-semibold mb-2 text-base">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-900 text-base"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-900 font-semibold mb-2 text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-900 text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2 text-base">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-900 text-base"
                  placeholder="(775) 123-4567"
                />
              </div>

              {/* Services Field */}
              <div>
                <label htmlFor="service" className="block text-gray-900 font-semibold mb-2 text-base">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-900 text-base bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="xeriscape">Xeriscape</option>
                  <option value="hardscape">Hardscape</option>
                  <option value="fire-pits">Fire Pits</option>
                  <option value="retaining-walls">Retaining Walls</option>
                  <option value="irrigation-systems">Irrigation Systems</option>
                  <option value="artificial-turf">Artificial Turf</option>
                  <option value="snow-removal">Snow Removal</option>
                  <option value="multiple">Multiple Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-900 font-semibold mb-2 text-base">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-900 text-base resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
                >
                  Get Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

