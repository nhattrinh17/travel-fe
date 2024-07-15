import { languageList } from "@/constants";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export function FooterLayout(): JSX.Element {
  return (
    <footer className="relative z-[-1]">
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
              Being Halong bay cruise experts with over 10 years of experience.
              <span className="text-[--text-hover-default]">
                Let us help you!
              </span>
            </h3>
            <p className="text-sm">
              Halong Bay Cruises team is grateful to bring you a cruise vacation
              that will exceed your greatest expectations and offer you
              exceptional value. With the confidence and knowledge to find the
              right Halong bay cruise choice, we are always here to listen and
              arrange everything as your desire. Don't hesitate to send us your
              requests. We will send you the best offers shortly!
            </p>
          </div>
          <button className="h-fit ml-auto mt-3 lg:mt-0 px-4 py-2 flex items-center rounded-3xl text-white justify-center bg-[var(--primary-color)]">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <span className="uppercase font-bold"> Help me find a cruise</span>
          </button>
        </div>
      </div>
      <div className="py-6 bg-[var(--bg-footer-color)]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-center text-xs">
            <p className="uppercase font-bold text-[#b9d0d0] mb-2">Language:</p>
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
          <Image
            alt="halong-bay-cruises"
            src={"/home/footer/halong-bay-cruises.jpg"}
            width={1500}
            height={209}
            className="w-full object-contain py-4 opacity-80 hover:opacity-100"
          />
          <div className="grid lg:grid-cols-6 gap-10 text-xs text-[#ccc]">
            <div className="col-span-6 lg:col-span-2 flex flex-col">
              <Image
                alt="inside travel"
                src={"/home/footer/inside-travel-logo.webp"}
                width={800}
                height={300}
              />
              <h1 className="font-bold my-2">
                Operated by INSIDE TRAVEL Experts - Best Price Guarantee!
              </h1>
              <p className="my-2">
                Hanoi: No.20-C2, Song Long Building, Nam Trung Yen Urban, Trung
                Hoa, Cau Giay Dist, Hanoi Capital
              </p>
              <p className="my-2">
                Halong bay: No.16 Anh Dao St., Bai Chay Ward, Ha Long city
              </p>
              <a className="my-2" href="tel:+84 2462 698 528">
                Phone: (+84) 2462 698 528
              </a>
              <a className="my-2" href="tel:+84 243 99 88 668">
                Hotline: (+84) 243 99 88 668
              </a>
              <a className="my-2" href="mailto:sales@halongbaycruises.com">
                Email1: sales@halongbaycruises.com
              </a>
              <a className="my-2" href="mailto:experts@insidetravel.com">
                Email2: experts@insidetravel.com
              </a>
              <div className="flex my-2 text-[var(--text-hover-default)]">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="mx-2 text-base"
                />
                <FontAwesomeIcon icon={faTwitter} className="mx-2 text-base" />
                <FontAwesomeIcon
                  icon={faGooglePlusG}
                  className="mx-2 text-base"
                />
                <FontAwesomeIcon icon={faYoutube} className="mx-2 text-base" />
              </div>
              <div className="grid grid-cols-2 gap-1">
                <Image
                  alt="travel"
                  src={"/home/footer/inside-travel-travellers-choice-2023.webp"}
                  width={300}
                  height={300}
                  className="w-full object-contain"
                />
                <Image
                  alt="travel"
                  src={"/home/footer/trip24.webp"}
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
                <Link href={""} className="block py-2">
                  Meet Our Team
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Why Book With Us
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Why Book With Us
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Deposit & Payment
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Cancellation Policy
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Terms & Conditions
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Privacy Policy
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Myanmar river cruise
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Asia Tours Official Web
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Vietnam Tours
                </Link>
              </li>
            </ul>
            <ul className="col-span-3 lg:col-span-1">
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Best Halong Bay Cruises
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Newest Halong Bay Cruises
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Luxury Halong Bay Cruises
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Deluxe Halong Bay Cruises
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Budget Halong Bay Cruises
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Halong Bay Family Cruises
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Halong Bay Day Cruises
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Halong bay travel guide
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Halong bay destinations
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Sea Stars Cruise
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Lan Ha Bay Cruises
                </Link>
              </li>
              <li className="relative hover:text-[var(--text-hover-default)] hover:translate-x-2 transition-transform duration-500">
                <Link href={""} className="block py-2">
                  Vietnam Family Tours
                </Link>
              </li>
            </ul>
            <div className="col-span-6 lg:col-span-2">
              <Image
                alt="confirm "
                src={"/home/footer/chl_secure.jpg"}
                width={723}
                height={85}
                className="w-full object-contain"
              />
              <p className="py-3">
                © 2024 Official website of
                <span className="text-[var(--text-hover-default)] font-bold mx-1">
                  Halong Bay Cruises
                </span>
                all rights reserved.
              </p>
              <p className="py-7">
                Proudly a part of
                <span className="text-[var(--text-hover-default)] font-bold mx-1">
                  INSIDE TRAVEL
                </span>
                Corporation.
              </p>
              <p>
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
              </p>
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
                <div className="bg-[url(/home/footer/inside-travel-travellers-choice-2023.webp)] bg-no-repeat bg-contain w-[70px] h-[70px] opacity-60 hover:opacity-100"></div>
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
          <Image
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
          />
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
  );
}
