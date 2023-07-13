
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import mapImg from "../public/images/mapa-Polski.png"
const Oferta = ({ data }) => {
    const { frontmatter} = data;
    const {services, workflow, call_to_action } = frontmatter;
    const cities = [
        { name: 'Wrocław', nameSite: 'w  Wrocławiu', slug: 'agencja-reklamowa-wroclaw' },
        { name: 'Bydgoszcz', nameSite: 'w  Bydgoszczy', slug: 'agencja-reklamowa-bydgoszcz' },
        { name: 'Lublin', nameSite: 'w  Lublinie', slug: 'agencja-reklamowa-lublin' },
        { name: 'Zielona Góra', nameSite: 'w  Zielonej Górze', slug: 'agencja-reklamowa-zielona-gora' },
        { name: 'Łódź', nameSite: 'w  Łodzi', slug: 'agencja-reklamowa-lodz' },
        { name: 'Kraków', nameSite: 'w  Krakowie', slug: 'agencja-reklamowa-krakow' },
        { name: 'Warszawa', nameSite: 'w  Warszawie', slug: 'agencja-reklamowa-warszawa' },
        { name: 'Opole', nameSite: 'w  Opolu', slug: 'agencja-reklamowa-opole' },
        { name: 'Rzeszów', nameSite: 'w  Rzeszowie', slug: 'agencja-reklamowa-rzeszow' },
        { name: 'Białystok', nameSite: 'w  Białystoku', slug: 'agencja-reklamowa-bialystok' },
        { name: 'Gdańsk', nameSite: 'w  Gdańsku', slug: 'agencja-reklamowa-gdansk' },
        { name: 'Katowice', nameSite: 'w  Katowicach', slug: 'agencja-reklamowa-katowice' },
        { name: 'Kielce', nameSite: 'w  Kielcach', slug: 'agencja-reklamowa-kielce' },
        { name: 'Olsztyn', nameSite: 'w  Olsztynie', slug: 'agencja-reklamowa-olsztyn' },
        { name: 'Poznań', nameSite: 'w  Poznaniu', slug: 'agencja-reklamowa-poznan' },
        { name: 'Szczecin', nameSite: 'w  Szczecinie', slug: 'agencja-reklamowa-szczecin' },
      ];

  return (
    <div>
      {/* services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${isOdd && "bg-theme-light"}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={
                      service.images.length > 1 ? { clickable: true } : false
                    }
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    init={service?.images > 1 ? false : true}
                  >
                    {/* Slides */}
                    {service?.images.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Image src={slide} alt="slides" width={600} height={500} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${
                    !isOdd && "md:order-1"
                  }`}
                >
                  <h2 className="font-bold leading-[40px]">{service?.title}</h2>
                  <p className="mt-4 mb-2">{service?.content}</p>
                  {service.button.enable && (
                    <Link
                      href={service?.button.link}
                      className="cta-link inline-flex items-center text-primary"
                    >
                      {service?.button.label}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* workflow */}
      <section className="section pb-0">
        <div className="mb-8 text-center">
          {markdownify(
            workflow.title,
            "h2",
            "mx-auto max-w-[500px] font-bold leading-[44px]"
          )}
          {markdownify(workflow.description, "p", "mt-3")}
        </div>
        <Image
          src={workflow.image}
          alt="workflow image"
          className="w-full"
          width={1920}
          height={296}
        />
      </section>
      <section className="section px-4">
        <div className="section container rounded-xl shadow">
        <h2 >Działamy w</h2>
            <div className="row  items-center justify-center">
            <div className="sm:grid-cols-4 md:col-12 lg:col-8 grid md:grid-cols-6 mt-4 lg:grid-cols-4 gap-8">
                {cities.map((city, index) => (
                    <h5 key={index} className="h7">
                    <Link className="hover:text-primary mr-5" href={`oferta/${city.slug}`}>
                        {city.name}
                    </Link>
                    </h5>
                ))}
            </div>
            <div className="md:col-5 ml-5 lg:col-3">
                <Image
                src={mapImg}
                alt="call to action image"
                width={900}
                height={853}
                />
            </div>
            </div>
        </div>
    </section>
    </div>   
)}

export default Oferta;