import { ContactUsSection } from "@/sections/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - TH Global Travel",
  description:
    "Get in touch with TH Global Travel for any travel inquiries, bookings, or customer support. We're here to assist you with all your travel needs.",
  openGraph: {
    title: "Contact Us - TH Global Travel",
    description:
      "Reach out to TH Global Travel for any travel-related questions, bookings, or support. Our team is ready to help make your travel experience smooth and unforgettable.",
    url: "https://thglobaltravel.com/contact-us",
    images: [
      {
        url: "https://yourwebsite.com/images/contact-us.jpg",
        alt: "Contact TH Global Travel",
      },
    ],
  },
  twitter: {
    title: "Contact Us - TH Global Travel",
    description:
      "Contact TH Global Travel today for personalized travel assistance, bookings, and support. Let us help you plan the journey of a lifetime!",
  },
};

export default function ContactPage(): JSX.Element {
  return <ContactUsSection />;
}
