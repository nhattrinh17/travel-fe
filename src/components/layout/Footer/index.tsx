"use client";

import { countries, languageList } from "@/constants";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.scss";
import { sendMailHome } from "@/utils/api";

const cx = classNames.bind(styles);

export function FooterLayout(): JSX.Element {
  const [showSendMail, setShowSendMail] = useState(false);
  const [phoneCountry, setPhoneCountry] = useState(countries[0].dial_code);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<number>();
  const [otherRequest, setOtherRequest] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <div>
      <div className="fixed z-10 bottom-0 left-0 right-0 bg-[var(--bg-header-color)] grid lg:hidden grid-cols-3">
        <a
          href="tel:0556565521"
          className="flex flex-col justify-center items-center text-white py-2 text-[13px] border-r-[1px] border-[#fff]"
        >
          <FontAwesomeIcon icon={faPhone} className="mb-2 text-base" />
          <span>Call us</span>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=84985637445"
          className="flex flex-col justify-center items-center text-white py-2 text-[13px] border-r-[1px] border-[#fff]"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="mb-2 text-lg" />
          <span>Whatsapp</span>
        </a>
        <div
          onClick={() => setShowSendMail(true)}
          className="flex flex-col justify-center items-center text-white py-2 text-[13px]"
        >
          <FontAwesomeIcon icon={faCalendarDays} className="mb-2 text-lg" />
          <span>Booking</span>
        </div>
      </div>
      <div
        className={cx(
          "fixed top-0 left-0 right-0 bottom-0 bg-[#00000091] z-[12] flex justify-center items-center",
          {
            hidden: !showSendMail,
          }
        )}
        onClick={() => setShowSendMail(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-[400px] h-fit p-4 bg-[url(/home/footer/bg-flash.jpg)] bg-cover bg-no-repeat shadow-md rounded-md animate-slideDownSort"
        >
          <div className="flex">
            <Image
              alt="HELP"
              src={"/home/sup3.jpg"}
              width={150}
              height={150}
              className="w-[67px] object-contain rounded-full mr-2"
            />
            <h4 className="text-2xl text-white font-semibold">
              We are here to help you{" "}
              <span className="text-[#f3c576]">24/7</span>
            </h4>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-black text-base cursor-pointer"
              onClick={() => setShowSendMail(false)}
            />
          </div>
          <span className="block text-sm text-[#f3c576] my-3 font-semibold drop-shadow-sm">
            Save time - Save Money - Travel More
          </span>
          <form
            className={cx("pt-5", {
              hidden: submitSuccess,
            })}
            onSubmit={async (e) => {
              e.preventDefault();
              const dataSend = {
                otherRequest,
                fullName,
                email,
                phone: `${phoneCountry} ${phone}`,
              };

              const res = await sendMailHome(dataSend);
              if (res.data) {
                setSubmitSuccess(true);
              }
            }}
          >
            <div className="mb-3">
              <label className="text-black text-sm font-semibold pb-1 block">
                Request
              </label>
              <textarea
                value={otherRequest}
                onChange={(e) => setOtherRequest(e.target.value)}
                className="min-h-32 w-full p-2 font-semibold rounded-md outline-none"
                placeholder="Type your request here ..."
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="text-black text-sm font-semibold pb-1 block">
                Name
              </label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-2 font-semibold rounded-md outline-none"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="text-black text-sm font-semibold pb-1 block">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 font-semibold rounded-md outline-none"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="flex items-start mb-4">
              <input id="checkBox" type="checkbox" className="mr-2" />
              <label htmlFor="checkBox" className="flex text-white text-xs">
                <FontAwesomeIcon icon={faPhone} className="mx-1" />
                Sometimes emails get lost, help us: you'll receive our email.
              </label>
            </div>

            <div className="mb-3">
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

            <button
              type="submit"
              className={cx(
                "submit_search",
                "col-span-2 w-full rounded-lg p-3 font-bold text-base border-[1px] border-white uppercase text-white bg-[#d0720b]"
              )}
            >
              SEND ME BEST OFFERS
            </button>
            <span className="text-xs font-bold text-white mt-2 block">
              We will send you the Best Deals what you can not find anywhere
              else. Best Price Guarantee!
            </span>
          </form>

          <p
            className={cx("text-base text-white font-semibold", {
              hidden: !submitSuccess,
            })}
          >
            We will contact you soon, please keep an eye on your email inbox.
          </p>
        </div>
      </div>
      <footer className="relative  mb-[60px] lg:mb-0">
        <div className="bg-white py-5">
          <div className="container flex flex-col lg:flex-row justify-between items-center">
            <div className="w-[70px]">
              <Image
                alt="HELP"
                src={"/home/sup3.jpg"}
                width={70}
                height={70}
                className="object-contain w-full rounded-full hidden lg:block"
              />
            </div>
            <div className="flex-1 mx-10 text-[#666]">
              <h3 className="font-bold text-base">
                As Vietnam travel experts with over 10 years of experience
                <span className="text-[--text-hover-default]">
                  Let us help you!
                </span>
              </h3>
              <p className="text-sm">
                TH Global Travel is dedicated to providing you with an
                unforgettable cruise and travel vacation that exceeds your
                expectations and offers exceptional value. Our knowledgeable
                team is here to help you find the perfect Halong Bay cruise,
                tailored travel packages to your desire. We are always ready to
                listen and arrange everything to ensure a seamless experience.
                Don't hesitate to send us your requests, and we will promptly
                send you the best offers! Let TH Global Travel make your dream
                cruise and travel vacation a reality.
              </p>
            </div>
            <button
              id="help-me-find-cruise"
              onClick={() => setShowSendMail(true)}
              className="h-fit cursor-pointer ml-auto mt-3 lg:mt-0 px-4 py-2 flex items-center rounded-3xl text-white justify-center bg-[var(--primary-color)]"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span className="uppercase font-bold">Help me find a cruise</span>
            </button>
          </div>
        </div>
        <div className="py-6 bg-[var(--bg-footer-color)]">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center justify-center text-xs">
              <p className="uppercase font-bold text-[#b9d0d0] mb-2">
                Language:
              </p>
              <ul className="flex items-center flex-wrap justify-center">
                {languageList.map((ld, indx) => (
                  <li
                    key={indx}
                    className="flex justify-center items-center mb-2 uppercase text-white mx-4"
                  >
                    <span className="block mr-2 font-bold">
                      {ld.name.split("-")[1] ? ld.name.split("-")[1] : ld.name}
                    </span>
                    <div
                      className="bg-[url(/co-quoc-gia.png)] bg-[length:100%] bg-no-repeat w-8 h-5"
                      style={{
                        backgroundPositionY: ld.positionY,
                        backgroundPositionX: 0,
                      }}
                    ></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative my-4">
              <Image
                alt="halong-bay-cruises"
                src={"/home/footer/halong-bay-cruises.jpg"}
                width={1500}
                height={209}
                className="w-full object-contain  opacity-80 hover:opacity-100"
              />
              <Image
                alt="logo"
                src={"/logo.png"}
                width={234}
                height={56}
                className="absolute top-1 left-4 w-[15%]"
              />
            </div>
            <div className="grid lg:grid-cols-6 gap-10 text-xs text-[#ccc]">
              <div className="col-span-6 lg:col-span-2 flex flex-col">
                {/* <Image
                alt="inside travel"
                src={"/home/footer/inside-travel-logo.webp"}
                width={800}
                height={300}
              /> */}
                <h1 className="font-bold my-2">TH Global Travel Company</h1>
                <p className="my-2">
                  No 19,lane 4 Trung Lap-Tri Trung-Phu Xuyen-Hanoi-Viet Nam
                </p>

                <a className="my-2" href="tel:+84946707266">
                  Phone: (+84) 946 707 266
                </a>
                <a className="my-2" href="tel:+84946707266">
                  Hotline: (+84) 946 707 266
                </a>
                <a className="my-2" href="mailto:info@thglobaltravel.com">
                  Email: info@thglobaltravel.com
                </a>
                {/* <a className="my-2" href="mailto:experts@insidetravel.com">
                  Email2: experts@insidetravel.com
                </a> */}
                <div className="flex my-2 text-[var(--text-hover-default)]">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="mx-2 text-base"
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="mx-2 text-base"
                  />
                  <FontAwesomeIcon
                    icon={faGooglePlusG}
                    className="mx-2 text-base"
                  />
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="mx-2 text-base"
                  />
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <Image
                    alt="travel"
                    src={"/home/footer/traveler-choice-2023.png"}
                    width={300}
                    height={300}
                    className="w-full object-contain"
                  />
                  <Image
                    alt="travel"
                    src={"/share/trip24.png"}
                    width={300}
                    height={300}
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <ul className="col-span-3 lg:col-span-1">
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={""} className="block py-2">
                    About Us
                  </Link>
                </li>
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={""} className="block py-2">
                    Contact Us
                  </Link>
                </li>
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"/about-us"} className="block py-2">
                    Meet Our Team
                  </Link>
                </li>
                {/* <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={""} className="block py-2">
                    Why Book With Us
                  </Link>
                </li> */}
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"/about-us"} className="block py-2">
                    Why Book With Us
                  </Link>
                </li>
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"/about-us"} className="block py-2">
                    Deposit & Payment
                  </Link>
                </li>
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"/about-us"} className="block py-2">
                    Cancellation Policy
                  </Link>
                </li>
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"/about-us"} className="block py-2">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"/about-us"} className="block py-2">
                    Privacy Policy
                  </Link>
                </li>
                {/* <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"#top"} className="block py-2">
                    Myanmar river cruise
                  </Link>
                </li>
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"#top"} className="block py-2">
                    Asia Tours Official Web
                  </Link>
                </li> */}
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link
                    href={
                      "/tour?name=vietnam-highlights-adventure-10-days-from-ha-noi&type=packet"
                    }
                    className="block py-2"
                  >
                    Vietnam Tours
                  </Link>
                </li>
              </ul>
              <ul className="col-span-3 lg:col-span-1">
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"#best-cruise"} className="block py-2">
                    Best Halong Bay Cruises
                  </Link>
                </li>

                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"#luxury-cruise"} className="block py-2">
                    Luxury Halong Bay Cruises
                  </Link>
                </li>
                {/* <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={""} className="block py-2">
                    Deluxe Halong Bay Cruises
                  </Link>
                </li> */}
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"#budget-cruise"} className="block py-2">
                    Budget Halong Bay Cruises
                  </Link>
                </li>
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={""} className="block py-2">
                    Halong Bay Family Cruises
                  </Link>
                </li>
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"#best-cruise"} className="block py-2">
                    Halong Bay Day Cruises
                  </Link>
                </li>
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={""} className="block py-2">
                    Halong bay travel guide
                  </Link>
                </li>
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={"#top"} className="block py-2">
                    Halong bay destinations
                  </Link>
                </li>
                {/* <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link href={""} className="block py-2">
                    Sea Stars Cruise
                  </Link>
                </li> */}
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link
                    href={"/cruise?destination=lan-ha-bay-cruise"}
                    className="block py-2"
                  >
                    Lan Ha Bay Cruises
                  </Link>
                </li>
                <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                  <Link
                    href={
                      "/tour?name=vietnam-highlights-adventure-10-days-from-ha-noi&type=packet"
                    }
                    className="block py-2"
                  >
                    Vietnam Family Tours
                  </Link>
                </li>
              </ul>
              <div className="col-span-6 lg:col-span-2">
                <a target="_blank" rel="noreferrer" href="/license.jpg">
                  <Image
                    alt="confirm "
                    src={"/home/footer/chl_secure.jpg"}
                    width={723}
                    height={85}
                    className="w-full object-contain"
                  />
                </a>
                <p className="py-3">
                  © 2024 Official website of
                  <span className="text-[var(--text-hover-default)] font-bold mx-1">
                    TH Global Travel
                  </span>
                  all rights reserved.
                </p>
                {/* <p className="py-7">
                  Proudly a part of
                  <span className="text-[var(--text-hover-default)] font-bold mx-1">
                    INSIDE TRAVEL
                  </span>
                  Corporation.
                </p> */}
                {/* <p>
                  International Tour Operator Licence No:
                  <span className="text-[var(--text-hover-default)] font-bold mx-1">
                    #01-638/GPLHQT
                  </span>
                  Official Member:
                  <span className="text-[var(--text-hover-default)] font-bold mx-1">
                    ASTA#900260032
                  </span>
                  - American Society of Travel Agents. Official Member:
                  <span className="text-[var(--text-hover-default)] font-bold mx-1">
                    ATTA#4516
                  </span>
                  - Adventure Travel Trade Association. Official Member:
                  <span className="text-[var(--text-hover-default)] font-bold mx-1">
                    FTA#3227385
                  </span>
                  - Family Travel Association. Certificate of Excellence for 5
                  consecutive years -
                  <span className="text-[var(--text-hover-default)] font-bold mx-1">
                    2015, 2016, 2017, 2018 & 2019
                  </span>
                  by Tripadviosr
                </p> */}
                <p className="py-3">
                  Travelers' Choice Awards winner
                  <span className="text-[var(--text-hover-default)] font-bold mx-1">
                    2020-2024
                  </span>
                  by Tripadviosr
                </p>
                <div className="flex flex-wrap">
                  <div className="bg-[url(/home/footer/chl_partner.png)] bg-no-repeat bg-[-5px_2px] bg-[length:835px] w-[60px] h-[60px] opacity-60 hover:opacity-100"></div>
                  <div className="bg-[url(/home/footer/chl_partner.png)] bg-no-repeat bg-[-61px_0] bg-[length:835px] w-[85px] h-[60px] opacity-60 hover:opacity-100"></div>
                  <div className="bg-[url(/home/footer/chl_partner.png)] bg-no-repeat bg-[-165px_0px] bg-[length:712px] w-[85px] h-[60px] opacity-60 hover:opacity-100"></div>
                  <div className="bg-[url(/home/footer/chl_partner.png)] bg-no-repeat bg-[-522px_0px] bg-[length:650px] w-[130px] h-[44px] opacity-60 hover:opacity-100"></div>
                  <div className="bg-[url(/home/footer/traveler-choice-2023.png)] bg-no-repeat bg-contain w-[70px] h-[70px] opacity-60 hover:opacity-100"></div>
                  <div className="bg-[url(/home/footer/traveler-choice-2020.png)] bg-no-repeat bg-contain w-[70px] h-[73px] opacity-60 hover:opacity-100"></div>
                  <div className="bg-[url(/home/footer/tripad.png)] bg-no-repeat bg-contain w-[70px] h-[73px] opacity-60 hover:opacity-100"></div>
                  <div className="bg-[url(/home/footer/tripad2016.png)] bg-no-repeat bg-contain w-[70px] h-[73px] opacity-60 hover:opacity-100"></div>
                  <div className="bg-[url(/home/footer/tripad2017.png)] bg-no-repeat bg-contain w-[70px] h-[73px] opacity-60 hover:opacity-100"></div>
                  <div className="bg-[url(/home/footer/tripad2018.png)] bg-no-repeat bg-contain w-[70px] h-[73px] opacity-60 hover:opacity-100"></div>
                  <div className="bg-[url(/home/footer/tripad2019.png)] bg-no-repeat bg-contain w-[70px] h-[73px] opacity-60 hover:opacity-100"></div>
                  <div className="bg-[url(/home/footer/certi.png)] bg-no-repeat bg-contain flex-1 opacity-60 hover:opacity-100"></div>
                </div>
              </div>
            </div>
            {/* <Image
            alt="mekong-river-cruises"
            src={"/home/footer/mekong-river-cruises.webp"}
            width={1500}
            height={209}
            className="w-full object-contain py-4 opacity-80 hover:opacity-100"
          />
          <Image
            alt="vietnam-cambodia-tours"
            src={"/home/footer/vietnam-cambodia-tours.jpg"}
            width={1500}
            height={209}
            className="w-full object-contain py-4 opacity-80 hover:opacity-100"
          /> */}
            <Image
              alt="logo_footer_partner"
              src={"/home/footer/logo_footer_partner.jpg"}
              width={1500}
              height={209}
              className="w-full object-contain py-4 "
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
