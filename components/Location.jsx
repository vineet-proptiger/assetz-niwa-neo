'use client'
import React from 'react'

const locationList = [
  {
    title: 'KIADB Aerospace Park',
    time: '2 km | 5 mins',
    icon: 'fa-industry',
  },
  {
    title: 'Shell Technology Centre',
    time: '8 km | 15 mins',
    icon: 'fa-laptop-code',
  },
  {
    title: 'Kempegowda International Airport',
    time: '15 km | 20-25 mins',
    icon: 'fa-plane',
  },
  {
    title: 'Yelahanka',
    time: '14 km | 25 mins',
    icon: 'fa-location-dot',
  },
  {
    title: 'Hebbal',
    time: '20 km | 30-35 mins',
    icon: 'fa-road',
  },
  {
    title: 'Manyata Tech Park',
    time: '21 km | 35-40 mins',
    icon: 'fa-briefcase',
  },
  {
    title: 'RMZ Galleria Mall',
    time: '16 km | 30 mins',
    icon: 'fa-bag-shopping',
  },
]

const Location = () => {
  return (
    <section id="location" className="location-section py-10 md:py-14 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[850px] mx-auto mb-10 md:mb-12" data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#AF751C] text-[#AF751C] bg-white">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            A Location That Keeps You <span className="text-[#AF751C]">Connected</span>
          </h2>
          <div className="w-16 h-1 bg-[#AF751C] mx-auto mt-3 rounded-full" />
        </div>

        {/* ── 2-Column Grid: Left List (8 Cards) / Right Map (Equal Height) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: 8 Location Points */}
          <div className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full">
            {locationList.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index * 40).toString()}
                className="group bg-white hover:bg-[#F0E9D8] border border-[#EAE6DF] hover:border-[#AF751C]/60 rounded-[12px] px-3.5 sm:px-4 py-2.5 sm:py-3.5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200"
              >
                {/* Left side: Category Icon & Title */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E8DFCB] group-hover:bg-[#111111] text-[#111111] group-hover:text-[#AF751C] flex items-center justify-center text-[13px] sm:text-[14px] shrink-0 transition-colors duration-200">
                    <i className={`fa-solid ${item.icon || 'fa-circle-check'} text-[#111111] group-hover:text-[#AF751C]`}></i>
                  </div>
                  <span className="text-[#1f2937] group-hover:text-[#111111] font-semibold text-[13.5px] sm:text-[14.5px] transition-colors duration-200 leading-snug">
                    {item.title}
                  </span>
                </div>

                {/* Right side: Time Badge */}
                <span className="bg-[#E8DFCB] group-hover:bg-[#111111] text-[#111111] group-hover:text-white font-bold text-[11.5px] sm:text-[12.5px] px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 shrink-0 shadow-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Google Maps Embed (Exact Equal Height) */}
          <div 
            className="relative w-full h-full min-h-[340px] lg:min-h-0 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200 bg-gray-100 flex"
            data-aos="fade-left"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.2347280970725!2d77.6787975!3d13.147588599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1bbe94d94cc7%3A0xe2f734360a9416b6!2sAssetz%20KVN%20Niwa%20%26%20Neo!5e0!3m2!1sen!2sin!4v1793255200433!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Assetz KVN Niwa & Neo Location Map"
              className="w-full h-full block flex-1"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
