import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';

const App: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'menu.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#f5e6d3] p-6 flex align-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1400px] mx-auto">
        
        <div className="grid grid-rows-[1fr_auto] gap-4">
          
          <div className="bg-[#f1dec1] p-10 flex flex-col items-center justify-center text-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
              alt="profile"
              className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
            />
            <p className="text-base text-[#5c3d2e] font-['Open_Sans'] mb-4">@Katiebakery</p>
            <h1 className="font-['Wendy_One'] text-3xl text-[#5c3d2e] leading-tight mb-5">
              Order my home made bakeries right at your front door
            </h1>
            <p className="text-[#5c3d2e] text-sm font-['Open_Sans'] leading-relaxed max-w-sm opacity-80">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
            </p>

            <div className="flex gap-6 mt-8">
              <Icon icon="mdi:facebook" width="30" className="text-[#5c3d2e] cursor-pointer hover:scale-110 transition"/>
              <Icon icon="mdi:youtube" width="30" className="text-[#5c3d2e] cursor-pointer hover:scale-110 transition"/>
              <Icon icon="mdi:instagram" width="30" className="text-[#5c3d2e] cursor-pointer hover:scale-110 transition"/>
            </div>
          </div>

          {/* Contact Button - Short Row */}
          <button
            className="w-full bg-[#5c3d2e] hover:bg-[#4a2f23] text-white font-['Wendy_One'] text-xl py-5 transition shadow-lg"
          >
            CONTACT ME FOR ORDERS
          </button>
        </div>

        {/* SECOND COLUMN - Divided into 2 equal columns (A and B) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* COLUMN A - 3 rows */}
          <div className="grid grid-rows-[0.3fr_1fr_1fr] gap-4">
            
            {/* Download Menu */}
              <button
                onClick={handleDownload}
                className="hover:bg-[#4a2f23] text-[#5c3d2e] hover:text-[#f1dec1] font-['Wendy_One'] transition text-sm md:text-xl bg-[#f1dec1] p-6 flex flex-col justify-center items-center"
              >
                DOWNLOAD MENU
              </button>

            {/* Try my new Orange Cake - with background image and overlay */}
            <div
              className="overflow-hidden relative bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-['Wendy_One'] text-2xl leading-tight mb-3">
                  Try my new<br />Orange cake
                </h3>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#5c3d2e] hover:bg-gray-100 transition self-start shadow-md">
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>

            {/* Instagram Promo */}
            <div className="bg-[#f1dec1] p-5 flex flex-col justify-between">
              <p className="text-xs text-[#5c3d2e] font-['Open_Sans'] opacity-70">Valid Till March 15th</p>
              <h3 className="font-['Wendy_One'] text-[#5c3d2e] text-lg mt-2 leading-tight">
                Get 20% OFF when tagging me on Instagram
              </h3>
              <p className="text-xs text-[#5c3d2e] font-['Open_Sans'] mt-2 leading-relaxed opacity-80">
                Send me a screenshot of your post/story on Instagram and get 20% OFF on your next purchase.
              </p>
            </div>
          </div>

          {/* COLUMN B - 3 rows */}
          <div className="grid grid-rows-[0.3fr_1fr_1fr] gap-4">
            
            {/* Follow Me with Slide Effect */}
            <div className="bg-[#f1dec1] flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <h2 className="font-['Wendy_One'] text-[#5c3d2e] text-sm md:text-xl absolute transition-all duration-500 
                group-hover:translate-y-[-100px] group-hover:opacity-0">
                FOLLOW ME
              </h2>
              <span className="font-['Wendy_One'] text-[#5c3d2e] text-xl absolute translate-y-[100px] opacity-0 
                group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                @miracle.ao
              </span>
            </div>

            {/* Swiper Carousel - 3 images with pagination */}
            <div className="overflow-hidden relative shadow-lg">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="h-full"
              >
                <SwiperSlide>
                  <div
                    className="relative bg-cover bg-center h-full min-h-[200px]"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800')"
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="relative bg-cover bg-center h-full min-h-[200px]"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FrZXN8ZW58MHx8MHx8fDI%3D')"
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="relative bg-cover bg-center h-full min-h-[200px]"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1595272568891-123402d0fb3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNha2VzfGVufDB8fDB8fHwy')"
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Sweet Pâté - with background image and overlay */}
            <div
              className="overflow-hidden relative bg-cover bg-center shadow-lg"
              style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="font-['Wendy_One'] text-2xl leading-tight mb-3">
                  Ask for my<br />sweet Pâté
                </h3>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#5c3d2e] hover:bg-gray-100 transition self-start shadow-md">
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Wendy+One&family=Open+Sans:wght@300;400;600;700&display=swap');
        
        .swiper {
          height: 100%;
        }
        
        .swiper-pagination {
          bottom: 12px !important;
        }
        
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 8px;
          height: 8px;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default App;