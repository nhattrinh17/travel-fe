"use client";

import { AnimatedCounter } from "@/components/AnimatedCouter";
import { countries } from "@/constants";
import { sendMailHome } from "@/utils/api";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const dataUser = [
  {
    image: "/about-us/users/user1.png",
    name: "Le Van Tuan",
    position: "Leader",
  },
  {
    image: "/about-us/users/user2.png",
    name: "Kyle Cannon",
    position: "Sales Manager",
  },
  {
    image: "/about-us/users/user3.png",
    name: "Mark Lusk",
    position: "Sales Representative",
  },
  {
    image: "/about-us/users/user4.png",
    name: "Hien Cao",
    position: "Marketing",
  },
  {
    image: "/about-us/users/user5.png",
    name: "Danni Uncini",
    position: "Creative Manager",
  },
  {
    image: "/about-us/users/user6.png",
    name: "Lee Spangenberg",
    position: "Sales Representative",
  },
];

const dataSlider = [
  "/about-us/sliders/slider1.jpg",
  "/about-us/sliders/slider2.jpg",
  "/about-us/sliders/slider3.jpg",
  "/about-us/sliders/slider4.jpg",
  "/about-us/sliders/slider5.jpg",
];

export function AboutUsSection(): JSX.Element {
  const [phoneCountry, setPhoneCountry] = useState(countries[0].dial_code);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<number>();
  const [numberPerson, setNumberPerson] = useState<number>();
  const [otherRequest, setOtherRequest] = useState("");
  const router = useRouter();

  useEffect(() => {
    const autoNextSlider = setInterval(() => {
      const preBtnSwiper = document.querySelector(".swiper-button-next");
      if (preBtnSwiper) (preBtnSwiper as HTMLElement).click();
    }, 5000);

    return () => clearInterval(autoNextSlider);
  }, []);

  const [tabActive, setTabActive] = useState(0);

  return (
    <div className="bg-[var(--bg-container-color)]">
      {/* Video Intro */}
      <section className="w-full relative overflow-hidden pb-[60%] lg:pb-[50%]">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Swiper
            slidesPerView={1}
            //  pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper h-full"
            loop
          >
            {dataSlider.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  key={index}
                  alt="slider"
                  src={image}
                  width={1589}
                  height={874}
                  className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <iframe
          className="absolute top-0 left-0 w-full h-full scale-[2]"
          src="https://www.youtube.com/embed/JPe2mwq96cw?autoplay=1&mute=1&loop=1&playlist=JPe2mwq96cw&controls=0&showinfo=0&modestbranding=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-xl lg:text-3xl font-bold">
              We are Grand Tour World Class Travel Agency
            </h1>
            <p className="text-sm lg:text-base">
              Trips, experiences, and places. All in one service.
            </p>
          </div>
        </div> */}
      </section>
      {/* Text intro */}
      <section className="py-20 bg-black">
        <div className="container text-white text-center">
          <div className="flex text-white ">
            <div
              onClick={() => setTabActive(0)}
              className={classNames(
                "flex-1 text-center pb-4 border-b-[1px] cursor-pointer",
                {
                  "border-dotted": tabActive !== 0,
                  "border-solid text-[var(--primary-color)]": tabActive == 0,
                }
              )}
            >
              <div className="w-full h-full flex items-center justify-center">
                <h3 className="">Sales Team</h3>
              </div>
            </div>
            <div
              onClick={() => setTabActive(1)}
              className={classNames(
                "flex-1 text-center pb-4 border-b-[1px] cursor-pointer",
                {
                  "border-dotted": tabActive !== 1,
                  "border-solid text-[var(--primary-color)]": tabActive == 1,
                }
              )}
            >
              <div className="w-full h-full flex items-center justify-center">
                <h3>About Us</h3>
              </div>
            </div>
            <div
              onClick={() => setTabActive(2)}
              className={classNames(
                "flex-1 text-center pb-4 border-b-[1px] cursor-pointer",
                {
                  "border-dotted": tabActive !== 2,
                  "border-solid text-[var(--primary-color)]": tabActive == 2,
                }
              )}
            >
              <div className="w-full h-full flex items-center justify-center">
                <h3>Deposit & Payment</h3>
              </div>
            </div>
            <div
              onClick={() => setTabActive(3)}
              className={classNames(
                "flex-1 text-center pb-4 border-b-[1px] cursor-pointer",
                {
                  "border-dotted": tabActive !== 3,
                  "border-solid text-[var(--primary-color)]": tabActive == 3,
                }
              )}
            >
              <div className="w-full h-full flex items-center justify-center">
                <h3>Security and Booking Conditions</h3>
              </div>
            </div>
          </div>
          <div
            className={classNames("pt-3 animate-slideDownSort", {
              hidden: tabActive !== 0,
            })}
          >
            <h2 className="text-3xl font-light  text-[var(--primary-color)] text-center mb-3">
              Who We Are?
            </h2>

            <div className="text-white text-justify text-sm">
              <p>
                Welcome to TH Global Travel, your gateway to Vietnam’s
                wonders. Our seasoned sales team specializes in crafting
                unforgettable journeys across this enchanting destination. With
                deep expertise and a passion for travel, we ensure every detail
                of your adventure, from the bustling streets of Hanoi to the
                serene beauty of Ha Long Bay, is meticulously curated. Discover
                Vietnam with TH Global Travel, where every moment promises an
                adventure of a lifetime.
              </p>

              <h4 className="font-bold py-5 text-base">Our Team Members</h4>
              <p>
                Meet the vibrant sales team at TH Global Travel! Le Van Tuan,
                Kyle Cannon, Mark Lusk, Lee Spangenberg, Hien Cao, and Danni
                Uncini. With diverse skills and unwavering dedication, they
                ensure every client receives exceptional service. From forging
                lasting relationships to navigating markets with finesse, their
                synergy propels us toward excellence, crafting unforgettable
                travel experiences for all.
              </p>

              <h4 className="font-bold py-5 text-base">Fun Facts About Us</h4>
              <p>
                At TH Global Travel, our team is full of fun quirks! Tuan
                predicts office snack trends like a pro, Kyle’s lunchbox is a
                bottomless pit of food, and Hien’s fashion sense could start a
                magazine. Danni’s tech skills are like magic, Mark’s playlist is
                always on point, and Lee’s pun game is unbeatable. These unique
                traits bring laughter and joy to our workplace every day!
              </p>
            </div>

            <div className="grid grid-cols-2 pt-6">
              <div className="flex flex-col items-center">
                <AnimatedCounter end={1278} duration={2000} />
                <p className="text-center text-[var(--text-color-default)] my-3">
                  Trips
                </p>
              </div>
              <div className="flex flex-col items-center">
                <AnimatedCounter end={7130} duration={2000} />
                <p className="text-center text-[var(--text-color-default)] my-3">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <div
            className={classNames("pt-3 animate-slideDownSort", {
              hidden: tabActive !== 1,
            })}
          >
            <h2 className="text-3xl font-light  text-[var(--primary-color)] text-center mb-3">
              About TH Global Travel
            </h2>
            <h3 className="text-white font-semibold text-center text-lg py-5">
              Welcome to TH Global Travel, where your dream Vietnam holiday
              becomes a reality. We’re not just another travel agency; we’re a
              passionate team dedicated to crafting unforgettable experiences
              that exceed your expectations. Dive into our story, mission, and
              values ​​to discover why TH Global Travel is your trusted partner
              for exploring Vietnam.
            </h3>

            <div className="text-white text-justify text-sm">
              <h4 className="font-bold py-5 text-base">Our Story</h4>
              <p>
                Founded with a vision to redefine travel experiences, TH Global
                Travel began as a humble initiative fueled by a love for
                exploration and a desire to connect people with the world. Over
                the years, our journey has been filled with adventures,
                challenges, and countless memorable moments. From our modest
                beginnings to becoming a trusted name in the travel industry,
                our story is a testament to our commitment to excellence and
                customer satisfaction.
              </p>

              <h4 className="font-bold py-5 text-base">Our Mission</h4>
              <p>
                Our mission at TH Global Travel is simple yet profound: to
                inspire and empower travelers to discover the beauty of the
                world with confidence and convenience. We strive to make travel
                accessible to all, offering personalized services and
                unparalleled support every step of the way. Whether you’re
                embarking on a solo adventure, a family vacation, or a business
                trip, our mission is to ensure that your journey is seamless,
                enriching, and truly unforgettable.
              </p>
              <h4 className="font-bold py-5 text-base">Our Core Values:</h4>
              <ul className="list-disc pl-10">
                <li className="pb-3">
                  <p>
                    <span className="font-bold">Customer-Centricity:</span> We
                    prioritize the needs and preferences of our customers,
                    delivering solutions and exceptional service with a personal
                    touch.
                  </p>
                </li>
                <li className="pb-3">
                  <p>
                    <span className="font-bold">Integrity:</span> We uphold the
                    highest standards of honesty, transparency, and ethical
                    conduct in all our interactions and transactions.
                  </p>
                </li>
                <li className="pb-3">
                  <p>
                    <span className="font-bold">Innovation:</span> We embrace
                    innovation and technology to enhance the travel experience,
                    constantly seeking new ways to delight and inspire our
                    clients.
                  </p>
                </li>
                <li className="pb-3">
                  <p>
                    <span className="font-bold">Teamwork:</span> : We foster a
                    collaborative and inclusive work environment, where every
                    team member is valued, respected, and empowered to
                    contribute to our collective success.
                  </p>
                </li>
                <li className="pb-3">
                  <p>
                    <span className="font-bold">Sustainability:</span> We are
                    committed to promoting responsible and sustainable tourism
                    practices, minimizing our environmental footprint, and
                    supporting local communities.
                  </p>
                </li>
                <li className="pb-3">
                  <p>
                    <span className="font-bold">Continuous Improvement:</span>
                     We are dedicated to continuous learning and improvement,
                    constantly striving to enhance the quality of our services
                    and exceed customer expectations.
                  </p>
                </li>
              </ul>

              <h4 className="font-bold py-5 text-base">
                Our Commitment to You
              </h4>
              <p>
                With over a decade of experience, TH Global Travel has earned a
                reputation for providing responsible, sustainable travel
                services and sharing unforgettable experiences with
                customers. Our professional, passionate team is dedicated to
                bringing you the best travel products, ensuring every trip with
                us is memorable and enriching.
              </p>

              <h3 className="text-white font-semibold text-center text-lg pt-5">
                We sincerely thank you for your support and trust in TH Global
                Travel. As we continue to grow and evolve, we remain committed
                to our motto of responsible, sustainable tourism and sharing
                experiences to bring you the best of Vietnam.
              </h3>

              <h3 className="text-white font-semibold text-center text-lg pt-5">
                Join us on an adventure filled with enthusiasm, love for our
                job, and unforgettable travel experiences. We look forward to
                welcoming you and creating memories that last a lifetime.
              </h3>

              <h3 className="text-white font-semibold text-center text-lg pt-5">
                Your dream Vietnam holiday starts here with TH Global Travel.
              </h3>
            </div>
          </div>
          <div
            className={classNames("pt-3 animate-slideDownSort", {
              hidden: tabActive !== 2,
            })}
          >
            <h2 className="text-3xl font-light  text-[var(--primary-color)] text-center mb-3">
              PAYMENT BY CREDIT CARD
            </h2>

            <div className="text-white text-justify text-sm">
              <p className="py-3">
                Instructions to pay online with Visa, MasterCard, American
                Express, JCB Card.
              </p>
              <p className="py-3">
                We connect with 9pay Payment Gateway to accept Online Card
                Payment{" "}
                <Link
                  href={"https://www.9pay.vn"}
                  className="text-[var(--rt-color-info)]"
                >
                  (www.9pay.vn)
                </Link>
                . All of your card information is processed through SSL protocol
                with international card security standards. Your card
                information will not be stored at our system (merchant) but with
                MasterCard using international security standards.
              </p>
              <p className="py-3">
                After you have received your order from us through a link,
                please check the information of the Order. If all the
                information is correct, please read & agree with Terms and
                Conditions before clicking to pay. You will be redirected to
                9pay Payment Gateway to pay us online with Visa, MasterCard,
                American Express, and JCB Card.
              </p>
              <p>
                <span className="font-bold">Note:</span> In some cases, your
                transaction may not be successful due to:
              </p>

              <ul className="list-disc pl-10">
                <li className="pb-3">
                  <p>Incorrect card information</p>
                </li>
                <li className="pb-3">
                  <p>Not enough credit balance (daily or monthly)</p>
                </li>
                <li className="pb-3">
                  <p>
                    Your card has not been activated for online payment. You
                    should contact the Issuer Bank for card activation.
                  </p>
                </li>
              </ul>

              <p className="py-3">
                In case you input correct card information but do not receive
                the transaction result from the payment gateway or from us,
                please do not try to make another payment. Contact us to get the
                transaction result and confirmation of the Order{" "}
                <a
                  href={"mail:info@thglobaltravel.com"}
                  className="text-[var(--rt-color-info)]"
                >
                  (Email: info@thglobaltravel.com)
                </a>
                .
              </p>

              <h4 className="font-bold py-5 text-base">
                PAYMENT & DEPOSIT FOR BOOKING CRUISES, TOURS & HOLIDAY PACKAGES
              </h4>
              <p>
                a - <span className="font-bold">Deposit</span>: A deposit of 30%
                of the total value by credit card is required upon confirmation
                of your booking. Once the deposit of your booking has been made,
                it is agreed that you have read, understood, and accepted all
                our Terms and Conditions.
              </p>
              <p className="pt-2">
                b - <span className="font-bold">Remaining balance</span>: The
                remaining balance of the tour value (70%) will be paid on
                arrival.
              </p>
            </div>
          </div>
          <div
            className={classNames("pt-3 animate-slideDownSort", {
              hidden: tabActive !== 3,
            })}
          >
            <h2 className="text-3xl font-light  text-[var(--primary-color)] text-center mb-3">
              Security and Booking Conditions
            </h2>
            <p className="text-white text-start">
              At TH Global Travel, your safety and satisfaction are our utmost
              priorities. We are committed to providing you with a secure and
              seamless booking experience. Please review the following security
              and booking conditions to understand how we ensure your safety and
              protect your interests
            </p>

            <div className="text-white text-justify text-sm">
              <ul className="list-decimal py-4">
                <li className="font-bold py-2">
                  <h4 className="">Secure Booking Platform:</h4>
                  <ul className="list-disc font-light pl-6">
                    <li className="py-2">
                      <p>
                        Our online booking platform employs the latest
                        encryption technology to safeguard your personal and
                        payment information.
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        We regularly update our security measures to mitigate
                        risks and protect against unauthorized access.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="font-bold py-2">
                  <h4 className="">Licensed and Accredited:</h4>
                  <ul className="list-disc font-light pl-6">
                    <li className="py-2">
                      <p>
                        TH Global Travel is a fully licensed and accredited
                        travel agency, complying with all relevant industry
                        regulations and standards.
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        Our team consists of experienced professionals dedicated
                        to providing you with reliable and trustworthy services.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="font-bold py-2">
                  <h4 className="">Transparent Pricing:</h4>
                  <ul className="list-disc font-light pl-6">
                    <li className="py-2">
                      <p>
                        We believe in transparency and honesty. Our pricing is
                        clear, with no hidden fees or surcharges.
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        Any additional charges or fees are clearly communicated
                        to you before confirming your booking
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="font-bold py-2">
                  <h4 className="">Flexible Booking Policies:</h4>
                  <ul className="list-disc font-light pl-6">
                    <li className="py-2">
                      <p>
                        We understand that plans can change unexpectedly. That's
                        why we offer flexible booking policies, including
                        options for rescheduling or cancellations.
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        Please review our booking terms and conditions for
                        detailed information on our cancellation and
                        modification policies.
                      </p>
                    </li>
                    <li className="py-2">
                      <p className="font-bold">Cancellation Policy:</p>
                    </li>
                    <li className="py-2">
                      <p>
                        Cancellations made 20 days or more before the departure
                        date: “full refund”
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        Cancellations made within 7-10 days of the departure
                        date: “50% partial refund”
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        Cancellations made within 1-7days or No-shows: “100% of
                        total booking amount forfeited”
                      </p>
                    </li>
                    <li className="py-2">
                      <p className="font-bold"> Modification Policy:</p>
                    </li>
                    <li className="py-2">
                      <p>
                        Modifications to bookings are subject to availability
                        and may incur additional charges
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        Modifications prices may vary, please contact sales team
                        for assistance.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="font-bold py-2">
                  <h4 className="">24/7 Customer Support:</h4>
                  <ul className="list-disc font-light pl-6">
                    <li className="py-2">
                      <p>
                        Our customer support team is available around the clock
                        to assist you with any inquiries or concerns.
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        Whether you have questions about your booking or need
                        assistance during your trip, we're here to help.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="font-bold py-2">
                  <h4 className="">Travel Insurance:</h4>
                  <ul className="list-disc font-light pl-6">
                    <li className="py-2">
                      <p>
                        While we take every precaution to ensure your safety, we
                        highly recommend purchasing travel insurance for added
                        peace of mind.
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        Travel insurance can provide coverage for unforeseen
                        events such as trip cancellations, medical emergencies,
                        and lost luggage.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="font-bold py-2">
                  <h4 className="">Health and Safety Measures:</h4>
                  <ul className="list-disc font-light pl-6">
                    <li className="py-2">
                      <p>
                        In light of current global health concerns, we
                        prioritize the health and safety of our customers.
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        We closely monitor travel advisories and implement
                        appropriate measures to mitigate health risks during
                        your journey.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="font-bold py-2">
                  <h4 className="">Refund and Compensation Policy:</h4>
                  <ul className="list-disc font-light pl-6">
                    <li className="py-2">
                      <p>
                        In the rare event of disruptions or issues with your
                        booking, we have a clear refund and compensation policy
                        in place.
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        Your satisfaction is important to us, and we strive to
                        resolve any issues promptly and fairly.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="font-bold py-2">
                  <h4 className="">Data Privacy and Protection:</h4>
                  <ul className="list-disc font-light pl-6">
                    <li className="py-2">
                      <p>
                        We respect your privacy and are committed to protecting
                        your personal data in accordance with applicable data
                        protection laws.
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        Your information is securely stored and used only for
                        purposes related to your booking and travel
                        arrangements.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="font-bold py-2">
                  <h4 className="">Feedback and Improvement:</h4>
                  <ul className="list-disc font-light pl-6">
                    <li className="py-2">
                      <p>
                        We value your feedback and continuously strive to
                        improve our services based on your suggestions and
                        experiences.
                      </p>
                    </li>
                    <li className="py-2">
                      <p>
                        Please share your thoughts with us, as your input helps
                        us enhance the quality of our offerings.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                By choosing TH Global Travel, you can book with confidence,
                knowing that your safety, security, and satisfaction are our top
                priorities. We look forward to serving you and making your
                travel experience unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Form */}
      <section>
        <div className="w-full h-[800px] text-black">
          <div className="bg-[url(/about-us/bg1.jpeg)] bg-no-repeat bg-cover w-full h-full object-cover">
            <div className="container h-full flex justify-end items-center py-5">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const dataSend = {
                    otherRequest,
                    fullName,
                    email,
                    phone: `${phoneCountry} ${phone}`,
                    numberPerson,
                  };

                  const res = await sendMailHome(dataSend);
                  if (res.data) {
                    router.push("/");
                  }
                }}
                className="p-10 bg-white shadow-md rounded-md"
              >
                <div className="mb-7">
                  <h4 className="text-4xl font-bold text-black">
                    Get In Touch With Us
                  </h4>
                  <p className="text-[var(--text-color-default)]">
                    We will contact you within 24 hours
                  </p>
                </div>
                <div className="mb-4">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder="Nhat Trinh"
                    className="w-full outline-none border-[1px] rounded-md p-2"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="halong@travel.com.vn"
                    className="w-full outline-none border-[1px] rounded-md p-2"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <div className="relative w-full text-sm h-10  py-2 outline-none border-[1px]">
                    <select
                      id="select-phone"
                      defaultValue={phoneCountry}
                      onChange={(e) => setPhoneCountry(e.target.value)}
                      className="absolute cursor-pointer text-transparent bg-transparent top-0 px-3 z-[1] left-0 right-0 bottom-0 w-full text-sm py-3 outline-none"
                    >
                      {countries.map((country) => (
                        <option
                          key={country.code}
                          value={country.dial_code}
                          className="text-black"
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <label className="absolute top-0 left-0 bottom-0 flex items-center justify-center w-20 bg-white border-r-[1px]">{`${
                      countries.find((i) => i.dial_code == phoneCountry)?.code
                    }(${phoneCountry})`}</label>
                    <input
                      value={phone}
                      onChange={(e) => {
                        if (Number(e.target.value) > 0) {
                          setPhone(+e.target.value);
                        } else {
                          setPhone(0);
                        }
                      }}
                      required
                      name="phone"
                      className="outline-none absolute top-0 right-0 bottom-0 left-[80px] z-[2] pl-2"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="numberPerson">Number of Person</label>
                  <input
                    id="numberPerson"
                    required
                    value={numberPerson}
                    onChange={(e) => setNumberPerson(+e.target.value)}
                    placeholder="Enter person number"
                    className="w-full outline-none border-[1px] rounded-md p-2"
                    type="number"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="interestedIn">Other Request</label>
                  <textarea
                    id="interestedIn"
                    required
                    value={otherRequest}
                    onChange={(e) => setOtherRequest(e.target.value)}
                    placeholder="Request"
                    className="w-full outline-none border-[1px] rounded-md p-2 min-h-32"
                  />
                </div>

                <button
                  type="submit"
                  className="text-white py-2 px-6 bg-[var(--primary-color)] opacity-95 hover:opacity-100 rounded-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* our team */}
      <section className="container py-10">
        <div className="mb-8 text-center">
          <h5 className="text-4xl font-bold">Meet Our Team</h5>
          <p className="text-[var(--text-color-default)] text-base py-1">
            Trips, experiences, and places. All in one service.
          </p>
        </div>

        <div className="flex justify-center flex-wrap">
          {dataUser.map((user, index) => (
            <div key={index} className="basis-1/2 lg:basis-1/4">
              <div className="px-4 py-2">
                <Image
                  alt="user"
                  src={user.image}
                  width={500}
                  height={500}
                  className="w-full object-contain rounded-full"
                />
                <div className="text-center mt-4">
                  <h6 className="text-xl font-bold text-black">{user.name}</h6>
                  <p className="text-[var(--text-color-default)] text-base py-1">
                    {user.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
