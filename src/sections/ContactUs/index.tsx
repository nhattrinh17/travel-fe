"use client";

import { sendMailHome } from "@/utils/api";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ContactUsSection(): JSX.Element {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [otherRequest, setOtherRequest] = useState("");
  const router = useRouter();

  return (
    <div>
      <section className="h-[650px] bg-cover bg-[url(/contact-us/bg-header.jpg)] flex justify-center items-center">
        <div className="text-center text-white">
          <h1
            className="text-3xl font-semibold mb-4"
            style={{ textShadow: "#0000008f 2px 2px" }}
          >
            Contact Us
          </h1>
          <p
            className="font-semibold"
            style={{ textShadow: "#0000008f 2px 2px" }}
          >
            We'd love to hear from you
          </p>
        </div>
      </section>
      <section className="bg-[var(--bg-container-color)] py-10 text-black">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="mb-[30px]">
              <span className="mb-[10px]">Would like to talk</span>
              <h2 className="uppercase text-3xl font-semibold">
                Contact details
              </h2>
            </div>
            <p className="my-5">
              If you have a story to share or a question that has not been
              answered on our website, please get in touch with us via contact
              details listed below or fill in the form on the right.
            </p>
            <div className="">
              <p className="text-[var(--primary-color)] block font-bold text-sm mb-2">
                TH Global Travel Company
              </p>
              <div className="flex mb-2">
                <div className="w-[28px] lg:w-[25px] h-[25px] mr-2 rounded-full flex items-center justify-center bg-[var(--primary-color)]">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-sm text-white w-2/3"
                  />
                </div>

                <a
                  //
                  href=""
                  className="text-wrap"
                  // className="text-[var(--primary-color)]"
                >
                  No 19, lane 4 Trung Lap-Tri Trung-Phu Xuyen-Hanoi-Viet Nam
                </a>
              </div>
              <div className="flex mb-2">
                <div className="w-[25px] h-[25px] mr-2 rounded-full flex items-center justify-center bg-[var(--primary-color)]">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-sm text-white "
                  />
                </div>
                <a
                  href="tel:+0912689730"
                  // className="text-[var(--primary-color)]"
                >
                  0912689730
                </a>
              </div>
              <div className="flex mb-2">
                <div className="w-[25px] h-[25px] mr-2 rounded-full flex items-center justify-center bg-[var(--primary-color)]">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-sm text-white "
                  />
                </div>
                <a
                  href="mailto:info@thglobaltravel.com"
                  // className="text-[var(--primary-color)]"
                >
                  info@thglobaltravel.com
                </a>
              </div>
              <p>
                <span className="">Business License:</span> 0110524158
              </p>

              {/* <div className="flex mb-2">
                <div className="w-[25px] h-[25px] mr-2 rounded-full flex items-center justify-center bg-[var(--primary-color)]">
                  <FontAwesomeIcon
                    icon={faSkype}
                    className="text-sm text-white "
                  />
                </div>
                <a href="" className="text-[var(--primary-color)]">
                  adventure.tours
                </a>
              </div> */}
            </div>
            <div className="pt-2">
              <p className="text-[var(--primary-color)] block font-bold text-sm mb-2">
                Office Admin
              </p>
              <div className="flex mb-2">
                <div className="w-[25px] h-[25px] mr-2 rounded-full flex items-center justify-center bg-[var(--primary-color)]">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-sm text-white "
                  />
                </div>
                <a
                  href="mailto:info@thglobaltravel.com"
                  // className="text-[var(--primary-color)]"
                >
                  info@thglobaltravel.com
                </a>
              </div>
            </div>
            <div className="pt-2">
              <h3 className="text-[var(--primary-color)] block font-bold text-sm mb-2">
                Le Van Tuan
              </h3>
              <div className="flex mb-2">
                <div className="w-[25px] h-[25px] mr-2 rounded-full flex items-center justify-center bg-[var(--primary-color)]">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-sm text-white "
                  />
                </div>
                <a
                  href="mailto:tuan.sales@thglobaltravel.com"
                  // className="text-[var(--primary-color)]"
                >
                  tuan.sales@thglobaltravel.com
                </a>
              </div>
              <div className="flex mb-2">
                <div className="w-[25px] h-[25px] mr-2 rounded-full flex items-center justify-center bg-[var(--primary-color)]">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-sm text-white "
                  />
                </div>
                <a
                  href="tel:+0912689730"
                  // className="text-[var(--primary-color)]"
                >
                  0912689730
                </a>
              </div>
            </div>
            <div className="pt-2">
              <h3 className="text-[var(--primary-color)] block font-bold text-sm mb-2">
                Kyle Cannon
              </h3>
              <div className="flex mb-2">
                <div className="w-[25px] h-[25px] mr-2 rounded-full flex items-center justify-center bg-[var(--primary-color)]">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-sm text-white "
                  />
                </div>
                <a
                  href="mailto:kyle.sales@thglobaltravel.com"
                  // className="text-[var(--primary-color)]"
                >
                  kyle.sales@thglobaltravel.com
                </a>
              </div>
              <div className="flex mb-2">
                <div className="w-[25px] h-[25px] mr-2 rounded-full flex items-center justify-center bg-[var(--primary-color)]">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-sm text-white "
                  />
                </div>
                <a
                  href="tel:+84912689730"
                  // className="text-[var(--primary-color)]"
                >
                  +84912689730
                </a>
              </div>
            </div>
          </div>
          <div className="text-black">
            <div className="mb-[30px]">
              <span className="mb-[10px]">Have a question?</span>
              <h2 className="uppercase text-3xl font-semibold">Get in touch</h2>
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const dataSend = {
                  otherRequest,
                  fullName,
                  email,
                  subject,
                  phone: "",
                };

                const res = await sendMailHome(dataSend);
                if (res.data) {
                  router.push("/");
                }
              }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="col-span-1">
                <input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className="bg-white border-[1px] px-3 py-2 w-full outline-none"
                />
              </div>
              <div className="col-span-1">
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  name="name"
                  placeholder="Your name"
                  className="bg-white border-[1px] px-3 py-2 w-full outline-none"
                />
              </div>
              <div className="col-span-2">
                <input
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  name="subject"
                  className="bg-white border-[1px] px-3 py-2 w-full outline-none"
                />
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="Message"
                  value={otherRequest}
                  onChange={(e) => setOtherRequest(e.target.value)}
                  className="min-h-[160px] bg-white border-[1px] px-3 py-2 w-full outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-fit py-2 px-6 text-white flex items-center bg-[var(--primary-color)]"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
