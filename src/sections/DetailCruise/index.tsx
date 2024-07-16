"use client";
import { mapServiceIcons } from "@/constants";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleUp,
  faStar,
  faBed,
  faBolt,
  faBookmark,
  faClock,
  faThumbsUp,
  faHeart as faHeartSolid,
  faSortDown,
  faCalendarDays,
  faXmark,
  faEye,
  faArrowsUpDownLeftRight,
  faUser,
  faSubtract,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import styles from "./styles.module.scss";
import { DatePickerCustomer } from "@/uiCore";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { TypeRoomCruiseItem } from "@/components/cruiseDetail/TypeRoomItem";

const cruiseDetail = {
  name: "Ambassador Signature Cruise",
  timeLaunched: 2023,
  travelerLove: [
    "Style: Modern Luxurious",
    " Feature 39 opulent cabins, each with a private balcony and en-suite bathroom",
    " Ambassador New Menu Launch: Michelin-style À La Carte Dinner and Upgraded Vietnamese Seafood Buffet Lunch",
    " High-class service with highlights of premium Asian - European cuisine",
    " Diverse entertainment options on board: live music, spa, squid fishing, …",
    " Visit unique and famous scenic spots on the bay: Viet Hai Fishing Village, Dark and Bright Cave",
    " 5-star overnight cruise in Lan Ha Bay  ",
    " 5-star overnight cruise in Lan Ha Bay  ",
    " 5-star overnight cruise in Lan Ha Bay  ",
  ],
  totalStar: 5,
  isFlashSale: true,
  discount: 22,
  images: [
    "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/ambassador-signature-cruise-Ambassador%20Signature%20Cruise-1717584285.jpg",
    "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/ambassador-signature-cruise-Ambassador%20Signature%20Cruise-1717584285.jpg",
    "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/ambassador-signature-cruise-Ambassador%20Signature%20Cruise-1717584285.jpg",
    "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/ambassador-signature-cruise-Ambassador%20Signature%20Cruise-1717584285.jpg",
    "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/ambassador-signature-cruise-Ambassador%20Signature%20Cruise-1717584285.jpg",
    "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/ambassador-signature-cruise-Ambassador%20Signature%20Cruise-1717584285.jpg",
  ],
  isAllMeals: true,
  services: [
    {
      name: "All Meals Include",
      slug: "allMeals",
    },
  ],
  price: 300,
  styleCruise: "Modern",
  totalRoms: 100,
  content: `<p class="para-cruise" style="overflow: visible; height: auto;">Step on board the elegant and opulent Ambassador Signature Cruise for an unforgettable journey as you discover Lan Ha Bay's magnificence. With 39 trendy and modern cabins and a capacity for 120 guests, this 5-star floating hotel has everything you need for a feel-at-home journey in the middle of the sea: air conditioning, private balconies, en-suite bathrooms, and bathtubs. Along with first-rate accommodation, Ambassador Signature also offers a premium Asian – European cuisine experience as well as a complete complement of modern facilities, including a luxury spa on board, a piano lounge, and a restaurant &amp; bar.</p>`,
  serviceSpecial: [
    {
      name: "COMPLIMENTARY COOKING DEMONSTRATION",
      content: `<div class="content" style="width: 100%;">The best way to learn about a culture is through its culture. Join us for a cooking class onboard with our chef. You will learn how to prepare the delectable traditional Vietnamese dishes and explore more Vietnamese culinary culture.<br><br><b>Conditions:</b><br>- Applied for all booking.</div>`,
    },
    {
      name: "COMPLIMENTARY COOKING DEMONSTRATION",
      content: `<div class="content" style="width: 100%;">The best way to learn about a culture is through its culture. Join us for a cooking class onboard with our chef. You will learn how to prepare the delectable traditional Vietnamese dishes and explore more Vietnamese culinary culture.<br><br><b>Conditions:</b><br>- Applied for all booking.</div>`,
    },
    {
      name: "COMPLIMENTARY COOKING DEMONSTRATION",
      content: `<div class="content" style="width: 100%;">The best way to learn about a culture is through its culture. Join us for a cooking class onboard with our chef. You will learn how to prepare the delectable traditional Vietnamese dishes and explore more Vietnamese culinary culture.<br><br><b>Conditions:</b><br>- Applied for all booking.</div>`,
    },
    {
      name: "COMPLIMENTARY COOKING DEMONSTRATION",
      content: `<div class="content" style="width: 100%;">The best way to learn about a culture is through its culture. Join us for a cooking class onboard with our chef. You will learn how to prepare the delectable traditional Vietnamese dishes and explore more Vietnamese culinary culture.<br><br><b>Conditions:</b><br>- Applied for all booking.</div>`,
    },
  ],
  typeRooms: [
    {
      name: "Ambassador Balcony",
      maxPerson: 4,
      totalRooms: 12,
      isViewOcean: true,
      typeBed: "Double/twin",
      acreage: 22,
      location: "First Desk",
      specialService: ["Room with balcony", "Connecting room"],
      amenities: [
        "Non Smoking Rooms",
        "Air Conditioning",
        "Desk",
        "Telephone",
        "Seating Area",
        "In Room Safe",
        "Toiletries",
        "Hair Dryer",
        "Shower",
        "Bathrobes",
        "Balcony",
      ],
      images: [
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambas%20Bal650-388.jpg",
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambas%20Bal650-388.jpg",
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambas%20Bal650-388.jpg",
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dlx650-388.jpg",
      ],
      content:
        "Located on the upper deck, 17 Executive Ambassador Balcony cabins serve you a relaxing stay in luxurious comfort. All 28 sqm rooms feature large windows and a private furnished balcony for the marvelous views of Lan Ha Bay. Connecting rooms are available.",
    },
    {
      name: "Ambassador Balcony",
      maxPerson: 3,
      totalRooms: 12,
      isViewOcean: true,
      typeBed: "Double/twin",
      acreage: 22,
      location: "First Desk",
      specialService: ["Room with balcony", "Connecting room"],
      amenities: [
        "Non Smoking Rooms",
        "Air Conditioning",
        "Desk",
        "Telephone",
        "Seating Area",
        "In Room Safe",
        "Toiletries",
        "Hair Dryer",
        "Shower",
        "Bathrobes",
        "Balcony",
      ],
      images: [
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambas%20Bal650-388.jpg",
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dlx650-388.jpg",
      ],
      content:
        "Located on the upper deck, 17 Executive Ambassador Balcony cabins serve you a relaxing stay in luxurious comfort. All 28 sqm rooms feature large windows and a private furnished balcony for the marvelous views of Lan Ha Bay. Connecting rooms are available.",
    },
    {
      name: "Ambassador Balcony",
      maxPerson: 2,
      totalRooms: 12,
      isViewOcean: true,
      typeBed: "Double/twin",
      acreage: 22,
      location: "First Desk",
      specialService: ["Room with balcony", "Connecting room"],
      amenities: [
        "Non Smoking Rooms",
        "Air Conditioning",
        "Desk",
        "Telephone",
        "Seating Area",
        "In Room Safe",
        "Toiletries",
        "Hair Dryer",
        "Shower",
        "Bathrobes",
        "Balcony",
      ],
      images: [
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambas%20Bal650-388.jpg",
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dlx650-388.jpg",
      ],
      content:
        "Located on the upper deck, 17 Executive Ambassador Balcony cabins serve you a relaxing stay in luxurious comfort. All 28 sqm rooms feature large windows and a private furnished balcony for the marvelous views of Lan Ha Bay. Connecting rooms are available.",
    },
    {
      name: "Ambassador Balcony",
      maxPerson: 4,
      totalRooms: 12,
      isViewOcean: true,
      typeBed: "Double/twin",
      acreage: 22,
      location: "First Desk",
      specialService: ["Room with balcony", "Connecting room"],
      amenities: [
        "Non Smoking Rooms",
        "Air Conditioning",
        "Desk",
        "Telephone",
        "Seating Area",
        "In Room Safe",
        "Toiletries",
        "Hair Dryer",
        "Shower",
        "Bathrobes",
        "Balcony",
      ],
      images: [
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambas%20Bal650-388.jpg",
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dlx650-388.jpg",
      ],
      content:
        "Located on the upper deck, 17 Executive Ambassador Balcony cabins serve you a relaxing stay in luxurious comfort. All 28 sqm rooms feature large windows and a private furnished balcony for the marvelous views of Lan Ha Bay. Connecting rooms are available.",
    },
    {
      name: "Ambassador Balcony",
      maxPerson: 4,
      totalRooms: 12,
      isViewOcean: true,
      typeBed: "Double/twin",
      acreage: 22,
      location: "First Desk",
      specialService: ["Room with balcony", "Connecting room"],
      amenities: [
        "Non Smoking Rooms",
        "Air Conditioning",
        "Desk",
        "Telephone",
        "Seating Area",
        "In Room Safe",
        "Toiletries",
        "Hair Dryer",
        "Shower",
        "Bathrobes",
        "Balcony",
      ],
      images: [
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambas%20Bal650-388.jpg",
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dlx650-388.jpg",
      ],
      content:
        "Located on the upper deck, 17 Executive Ambassador Balcony cabins serve you a relaxing stay in luxurious comfort. All 28 sqm rooms feature large windows and a private furnished balcony for the marvelous views of Lan Ha Bay. Connecting rooms are available.",
    },
    {
      name: "Ambassador Balcony",
      maxPerson: 4,
      totalRooms: 12,
      isViewOcean: true,
      typeBed: "Double/twin",
      acreage: 22,
      location: "First Desk",
      specialService: ["Room with balcony", "Connecting room"],
      amenities: [
        "Non Smoking Rooms",
        "Air Conditioning",
        "Desk",
        "Telephone",
        "Seating Area",
        "In Room Safe",
        "Toiletries",
        "Hair Dryer",
        "Shower",
        "Bathrobes",
        "Balcony",
      ],
      images: [
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambas%20Bal650-388.jpg",
        "https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dlx650-388.jpg",
      ],
      content:
        "Located on the upper deck, 17 Executive Ambassador Balcony cabins serve you a relaxing stay in luxurious comfort. All 28 sqm rooms feature large windows and a private furnished balcony for the marvelous views of Lan Ha Bay. Connecting rooms are available.",
    },
  ],
  itineraries: [
    {
      totalDay: 2,
      title: "Ambassador Signature Cruise 2 Days 1 Night",
      route:
        " Hanoi → Lan Ha bay → Viet Hai Fishing Village → Dark and Bright Cave → Hanoi",
      content: `<div id="tab21767" class="tour-itinerary" style="text-align: center;"><!--tab-pane fade--> <div class="panel-group no-margin" id="accordion1"> <div class="panel"> <div class="panel-heading" id="heading1"> <br>                                        <h4 class="panel-title"> <a id="coll" class="accordion-toggle title_days " data-toggle="collapse" data-parent="#accordion" href="javascript:;"> <!--#collapse$s+2--> <small>Day 1:</small>Hanoi - Lan Ha bay - Viet Hai Fishing Village                                            </a> </h4> </div> <div id="collapse2" class="panel-collapse detail_days collapse in " aria-labelledby="heading1"> <div class="panel-body no-padding"> <div class="row"> <div class="col-lg-8 optional-list"> <ul> <li class="tran"> <i class="fa fa-exchange"></i> <span>Transfer:</span> <a href="javascript:;" style="float: left;text-indent: initial;" title="Drive from Hanoi to Halong around 2.5 hours " data-toggle="tooltip"><span class="fa fa-car"></span></a> <a href="javascript:;" style="float: left;text-indent: initial;" title="Transfer from pier to Paradise Grand Cruise by tender " data-toggle="tooltip"></a> <a href="javascript:;" style="float: left;text-indent: initial;" title="Cruising in Lan Ha" data-toggle="tooltip"><span class="fa fa-ship"></span></a> </li> <li class="activities-s"> <i class="fa fa-university icon_meals"></i> <span>Activities:</span> <p>Transfer from Hanoi Old Quarter to Ambassador lounge, check in, transfer to ship, Welcome drink in Ambassador Signature Cruises, Enjoy delicious lunch while the cruise is sailing into Halong Bay, Visit Viet Hai Fishing Village, explore features of the locals' daily life, enjoy canapes on the twin sundeck, Dinner served in restaurant, night activities</p> </li> </ul> <div id="txt-tour"> <p></p><div><b>10:00 – 11:30</b> Check in at Ambassador's Lounge (1st Floor, Terminal - Halong International Cruise Port, Bai Chay Ward, Halong City).</div><div><b><br>11:45 – 12:30 </b>Passengers are transferred to <b>Ambassador Signature Cruise</b> (in Gia Luan Pier) by speedboat.</div><div><b><br>12:30 – 12:45 </b>A short welcoming briefing will be held at the Piano Lounge or at the restaurant, whilst you are sipping our special welcome drink.</div><div><b><br>12:45 – 14:00</b> <b>Savor a delicious lunch</b> whilst enjoying the majestic views of Lan Ha Bay’s islands and islets.</div><div><b><br>15:00 – 16:45</b> Your first excursion is <b>Viet Hai Fishing Village</b> - a primitive and tranquil location with precious traditional cultural values. You will have <b>a chance to explore features of the locals’ daily life</b>, <b>visit fish lakes, bee houses, ancient houses, or experience fish foot massage.</b></div><div><b><br>15:45 – 16:15</b> For guests who are not participating in the excursion, we will <b>serve home-made cakes</b> at the Piano Lounge. Guests can also stay onboard and opt for an afternoon of pampering at Spa* or relaxing on the Sundeck whilst admiring the magnificent scenery of Lan Ha Bay.</div><div><b><br>17:30 – 18:30</b> At sundown, <b>Ambassador Signature Cruise</b> will anchor overnight.</div><div>This is the perfect time for you to <b>enjoy cooking class </b>or <b>Happy Hour* and Canapes at the Piano Lounge</b> or on the Sundeck (depends on weather conditions).</div><div><b><br>19:00</b> Savor a <b>premium dinner at the restaurant</b>.</div><div>(Dress code: formal/semi formal/smart casual)</div><div><b><br>21:00 – 23:00</b> After dinner, indulge in drinks* and <b>enjoy live music at the Piano Lounge</b>, <b>squid fishing, a spa treatment*, or movies at your cabin. (Note: Live music is not available on Monday)&nbsp;</b></div><p></p> </div> <!--Experience--> <!-- end experience --> <ul> <li class="meals"> <i class="fa fa-cutlery icon_meals"></i> <span>Meals:</span> <p> Lunch, Dinner                                                            </p> </li> </ul> </div> <div class="col-lg-4"> <div class="slide-photo"> <div class="mix-grid"> <div class="mix mix-slide"> <div class="thumbnail"> </div> </div> </div> </div> <div class="option-hotel"> <div class="panel"> <div class="panel-heading" id="heading-hotel2403"> <h4 class="panel-title"> <a id="coll" class="accordion-toggle  collapsed" data-toggle="collapse" data-parent="#accordion-hotel2403" href="#collapse-hotel240301767" aria-expanded="false"> <small class="title-hotel"><i class="pull-left fa fa-bed"></i>Accommodation</small> <span class="icon hotel fa fa-plus"></span> </a> </h4> </div> <div id="collapse-hotel240301767" class="panel-collapse collapse" aria-labelledby="heading-hotel2403" aria-expanded="false" style="height: 0px;"> <div class="panel-body option-hotel-body" style="padding:0;"> <div class="suplier-tour-map-tour"> <div class="mix-grid"> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Overview 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> <img class="image-slide" src="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Overview 3650-388.jpg" alt=""> <span class="count-img">58</span> <i class="fa fa-expand fa-search-plus zoom"></i> <span class="location"><i class="fa fa-map-marker"></i> Halong Bay</span> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/9650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/8650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/10650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/6650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/5650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/7650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Soup650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Main Course 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Main Course 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Main Course 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dessert 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Main Course 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dessert 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Appetizer 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Appetizer 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Sundeck 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Spa 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Spa 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Restaurant 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Restaurant 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Restaurant 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Restaurant 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Piano Lounge 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Piano Lounge 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/executive650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/executive room650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/executive cabin650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/exe650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Captain650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/capatain650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Captain650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cap650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Capt650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Cap650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Suite Am650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Suite cabin650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Suite650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Suite650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Amba Suite650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Dlx650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dlx650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass 1st650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambas Bal650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 5650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 6650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> </div> <a class="img" href="https://www.halongbaycruises.com/cruise/ambassador-signature-cruise.html" rel="nofollow" target="_blank"> <span class="name-hotel-option"> Ambassador Signature Cruise<br> <span class="start-tour"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </span> </span> </a> </div> <p>STYLE <br> Modern</p> <p>NO. ROOM <br> 39</p> <p>FEATURES <br> All Meals Included, spa, cooking class</p> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div>`,
    },
    {
      totalDay: 3,
      title: "Ambassador Signature Cruise 2 Days 1 Night",
      route:
        " Hanoi → Lan Ha bay → Viet Hai Fishing Village → Dark and Bright Cave → Hanoi",
      content: `<div id="tab21767" class="tour-itinerary" style="text-align: center;"><!--tab-pane fade--> <div class="panel-group no-margin" id="accordion1"> <div class="panel"> <div class="panel-heading" id="heading1"> <br>                                        <h4 class="panel-title"> <a id="coll" class="accordion-toggle title_days " data-toggle="collapse" data-parent="#accordion" href="javascript:;"> <!--#collapse$s+2--> <small>Day 1:</small>Hanoi - Lan Ha bay - Viet Hai Fishing Village                                            </a> </h4> </div> <div id="collapse2" class="panel-collapse detail_days collapse in " aria-labelledby="heading1"> <div class="panel-body no-padding"> <div class="row"> <div class="col-lg-8 optional-list"> <ul> <li class="tran"> <i class="fa fa-exchange"></i> <span>Transfer:</span> <a href="javascript:;" style="float: left;text-indent: initial;" title="Drive from Hanoi to Halong around 2.5 hours " data-toggle="tooltip"><span class="fa fa-car"></span></a> <a href="javascript:;" style="float: left;text-indent: initial;" title="Transfer from pier to Paradise Grand Cruise by tender " data-toggle="tooltip"></a> <a href="javascript:;" style="float: left;text-indent: initial;" title="Cruising in Lan Ha" data-toggle="tooltip"><span class="fa fa-ship"></span></a> </li> <li class="activities-s"> <i class="fa fa-university icon_meals"></i> <span>Activities:</span> <p>Transfer from Hanoi Old Quarter to Ambassador lounge, check in, transfer to ship, Welcome drink in Ambassador Signature Cruises, Enjoy delicious lunch while the cruise is sailing into Halong Bay, Visit Viet Hai Fishing Village, explore features of the locals' daily life, enjoy canapes on the twin sundeck, Dinner served in restaurant, night activities</p> </li> </ul> <div id="txt-tour"> <p></p><div><b>10:00 – 11:30</b> Check in at Ambassador's Lounge (1st Floor, Terminal - Halong International Cruise Port, Bai Chay Ward, Halong City).</div><div><b><br>11:45 – 12:30 </b>Passengers are transferred to <b>Ambassador Signature Cruise</b> (in Gia Luan Pier) by speedboat.</div><div><b><br>12:30 – 12:45 </b>A short welcoming briefing will be held at the Piano Lounge or at the restaurant, whilst you are sipping our special welcome drink.</div><div><b><br>12:45 – 14:00</b> <b>Savor a delicious lunch</b> whilst enjoying the majestic views of Lan Ha Bay’s islands and islets.</div><div><b><br>15:00 – 16:45</b> Your first excursion is <b>Viet Hai Fishing Village</b> - a primitive and tranquil location with precious traditional cultural values. You will have <b>a chance to explore features of the locals’ daily life</b>, <b>visit fish lakes, bee houses, ancient houses, or experience fish foot massage.</b></div><div><b><br>15:45 – 16:15</b> For guests who are not participating in the excursion, we will <b>serve home-made cakes</b> at the Piano Lounge. Guests can also stay onboard and opt for an afternoon of pampering at Spa* or relaxing on the Sundeck whilst admiring the magnificent scenery of Lan Ha Bay.</div><div><b><br>17:30 – 18:30</b> At sundown, <b>Ambassador Signature Cruise</b> will anchor overnight.</div><div>This is the perfect time for you to <b>enjoy cooking class </b>or <b>Happy Hour* and Canapes at the Piano Lounge</b> or on the Sundeck (depends on weather conditions).</div><div><b><br>19:00</b> Savor a <b>premium dinner at the restaurant</b>.</div><div>(Dress code: formal/semi formal/smart casual)</div><div><b><br>21:00 – 23:00</b> After dinner, indulge in drinks* and <b>enjoy live music at the Piano Lounge</b>, <b>squid fishing, a spa treatment*, or movies at your cabin. (Note: Live music is not available on Monday)&nbsp;</b></div><p></p> </div> <!--Experience--> <!-- end experience --> <ul> <li class="meals"> <i class="fa fa-cutlery icon_meals"></i> <span>Meals:</span> <p> Lunch, Dinner                                                            </p> </li> </ul> </div> <div class="col-lg-4"> <div class="slide-photo"> <div class="mix-grid"> <div class="mix mix-slide"> <div class="thumbnail"> </div> </div> </div> </div> <div class="option-hotel"> <div class="panel"> <div class="panel-heading" id="heading-hotel2403"> <h4 class="panel-title"> <a id="coll" class="accordion-toggle  collapsed" data-toggle="collapse" data-parent="#accordion-hotel2403" href="#collapse-hotel240301767" aria-expanded="false"> <small class="title-hotel"><i class="pull-left fa fa-bed"></i>Accommodation</small> <span class="icon hotel fa fa-plus"></span> </a> </h4> </div> <div id="collapse-hotel240301767" class="panel-collapse collapse" aria-labelledby="heading-hotel2403" aria-expanded="false" style="height: 0px;"> <div class="panel-body option-hotel-body" style="padding:0;"> <div class="suplier-tour-map-tour"> <div class="mix-grid"> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Overview 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> <img class="image-slide" src="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Overview 3650-388.jpg" alt=""> <span class="count-img">58</span> <i class="fa fa-expand fa-search-plus zoom"></i> <span class="location"><i class="fa fa-map-marker"></i> Halong Bay</span> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/9650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/8650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/10650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/6650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/5650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/7650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Soup650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Main Course 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Main Course 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Main Course 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dessert 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Main Course 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dessert 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Appetizer 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Appetizer 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Sundeck 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Spa 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Spa 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Restaurant 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Restaurant 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Restaurant 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Restaurant 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Piano Lounge 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Piano Lounge 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/executive650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/executive room650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/executive cabin650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/exe650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Captain650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/capatain650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Captain650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cap650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Capt650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Cap650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Suite Am650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Suite cabin650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Suite650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Suite650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Amba Suite650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Dlx650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dlx650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass 1st650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambas Bal650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 5650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 6650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> </div> <a class="img" href="https://www.halongbaycruises.com/cruise/ambassador-signature-cruise.html" rel="nofollow" target="_blank"> <span class="name-hotel-option"> Ambassador Signature Cruise<br> <span class="start-tour"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </span> </span> </a> </div> <p>STYLE <br> Modern</p> <p>NO. ROOM <br> 39</p> <p>FEATURES <br> All Meals Included, spa, cooking class</p> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div>`,
    },
    {
      totalDay: 4,
      title: "Ambassador Signature Cruise 2 Days 1 Night",
      route:
        " Hanoi → Lan Ha bay → Viet Hai Fishing Village → Dark and Bright Cave → Hanoi",
      content: `<div id="tab21767" class="tour-itinerary" style="text-align: center;"><!--tab-pane fade--> <div class="panel-group no-margin" id="accordion1"> <div class="panel"> <div class="panel-heading" id="heading1"> <br>                                        <h4 class="panel-title"> <a id="coll" class="accordion-toggle title_days " data-toggle="collapse" data-parent="#accordion" href="javascript:;"> <!--#collapse$s+2--> <small>Day 1:</small>Hanoi - Lan Ha bay - Viet Hai Fishing Village                                            </a> </h4> </div> <div id="collapse2" class="panel-collapse detail_days collapse in " aria-labelledby="heading1"> <div class="panel-body no-padding"> <div class="row"> <div class="col-lg-8 optional-list"> <ul> <li class="tran"> <i class="fa fa-exchange"></i> <span>Transfer:</span> <a href="javascript:;" style="float: left;text-indent: initial;" title="Drive from Hanoi to Halong around 2.5 hours " data-toggle="tooltip"><span class="fa fa-car"></span></a> <a href="javascript:;" style="float: left;text-indent: initial;" title="Transfer from pier to Paradise Grand Cruise by tender " data-toggle="tooltip"></a> <a href="javascript:;" style="float: left;text-indent: initial;" title="Cruising in Lan Ha" data-toggle="tooltip"><span class="fa fa-ship"></span></a> </li> <li class="activities-s"> <i class="fa fa-university icon_meals"></i> <span>Activities:</span> <p>Transfer from Hanoi Old Quarter to Ambassador lounge, check in, transfer to ship, Welcome drink in Ambassador Signature Cruises, Enjoy delicious lunch while the cruise is sailing into Halong Bay, Visit Viet Hai Fishing Village, explore features of the locals' daily life, enjoy canapes on the twin sundeck, Dinner served in restaurant, night activities</p> </li> </ul> <div id="txt-tour"> <p></p><div><b>10:00 – 11:30</b> Check in at Ambassador's Lounge (1st Floor, Terminal - Halong International Cruise Port, Bai Chay Ward, Halong City).</div><div><b><br>11:45 – 12:30 </b>Passengers are transferred to <b>Ambassador Signature Cruise</b> (in Gia Luan Pier) by speedboat.</div><div><b><br>12:30 – 12:45 </b>A short welcoming briefing will be held at the Piano Lounge or at the restaurant, whilst you are sipping our special welcome drink.</div><div><b><br>12:45 – 14:00</b> <b>Savor a delicious lunch</b> whilst enjoying the majestic views of Lan Ha Bay’s islands and islets.</div><div><b><br>15:00 – 16:45</b> Your first excursion is <b>Viet Hai Fishing Village</b> - a primitive and tranquil location with precious traditional cultural values. You will have <b>a chance to explore features of the locals’ daily life</b>, <b>visit fish lakes, bee houses, ancient houses, or experience fish foot massage.</b></div><div><b><br>15:45 – 16:15</b> For guests who are not participating in the excursion, we will <b>serve home-made cakes</b> at the Piano Lounge. Guests can also stay onboard and opt for an afternoon of pampering at Spa* or relaxing on the Sundeck whilst admiring the magnificent scenery of Lan Ha Bay.</div><div><b><br>17:30 – 18:30</b> At sundown, <b>Ambassador Signature Cruise</b> will anchor overnight.</div><div>This is the perfect time for you to <b>enjoy cooking class </b>or <b>Happy Hour* and Canapes at the Piano Lounge</b> or on the Sundeck (depends on weather conditions).</div><div><b><br>19:00</b> Savor a <b>premium dinner at the restaurant</b>.</div><div>(Dress code: formal/semi formal/smart casual)</div><div><b><br>21:00 – 23:00</b> After dinner, indulge in drinks* and <b>enjoy live music at the Piano Lounge</b>, <b>squid fishing, a spa treatment*, or movies at your cabin. (Note: Live music is not available on Monday)&nbsp;</b></div><p></p> </div> <!--Experience--> <!-- end experience --> <ul> <li class="meals"> <i class="fa fa-cutlery icon_meals"></i> <span>Meals:</span> <p> Lunch, Dinner                                                            </p> </li> </ul> </div> <div class="col-lg-4"> <div class="slide-photo"> <div class="mix-grid"> <div class="mix mix-slide"> <div class="thumbnail"> </div> </div> </div> </div> <div class="option-hotel"> <div class="panel"> <div class="panel-heading" id="heading-hotel2403"> <h4 class="panel-title"> <a id="coll" class="accordion-toggle  collapsed" data-toggle="collapse" data-parent="#accordion-hotel2403" href="#collapse-hotel240301767" aria-expanded="false"> <small class="title-hotel"><i class="pull-left fa fa-bed"></i>Accommodation</small> <span class="icon hotel fa fa-plus"></span> </a> </h4> </div> <div id="collapse-hotel240301767" class="panel-collapse collapse" aria-labelledby="heading-hotel2403" aria-expanded="false" style="height: 0px;"> <div class="panel-body option-hotel-body" style="padding:0;"> <div class="suplier-tour-map-tour"> <div class="mix-grid"> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Overview 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> <img class="image-slide" src="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Overview 3650-388.jpg" alt=""> <span class="count-img">58</span> <i class="fa fa-expand fa-search-plus zoom"></i> <span class="location"><i class="fa fa-map-marker"></i> Halong Bay</span> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/9650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/8650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/10650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/6650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/5650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/7650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Soup650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Main Course 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Main Course 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Main Course 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dessert 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Main Course 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dessert 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Appetizer 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Appetizer 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Sundeck 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Spa 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Spa 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Restaurant 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Restaurant 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Restaurant 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Restaurant 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Piano Lounge 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Piano Lounge 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Lobby 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/executive650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/executive room650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/executive cabin650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/exe650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Captain650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/capatain650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Captain650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cap650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Capt650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Cap650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Suite Am650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Suite cabin650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Suite650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Suite650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Amba Suite650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass Dlx650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Dlx650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambass 1st650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Ambas Bal650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 4650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 2650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 1650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 3650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 5650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> <div class="mix mix-slide"> <div class="thumbnail"> <a href="https://d1k2oi80tv211b.cloudfront.net/uploads/photo-e/cruises/Ambassador-Signature/Cabin 6650-388.jpg" data-lightbox="image-map-suppliertour0" data-title="Ambassador Signature Cruise" class="mix-zoom"> </a> </div> </div> </div> <a class="img" href="https://www.halongbaycruises.com/cruise/ambassador-signature-cruise.html" rel="nofollow" target="_blank"> <span class="name-hotel-option"> Ambassador Signature Cruise<br> <span class="start-tour"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </span> </span> </a> </div> <p>STYLE <br> Modern</p> <p>NO. ROOM <br> 39</p> <p>FEATURES <br> All Meals Included, spa, cooking class</p> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div>`,
    },
  ],
};

const cx = classNames.bind(styles);

export function DetailCruise({}: { slug: string }): JSX.Element {
  const [showSpecialOffer, setShowSpecialOffer] = useState(false);
  const [showDetailSpecial, setShowDetailSpecial] = useState<number[]>([]);
  const [mountLike, setMountLike] = useState(false);
  const [showTravelerLove, setShowTravelerLove] = useState(false);

  // Room box
  const [showSelectRoom, setShowSelectRoom] = useState(false);
  const boxSelectRoomRef = useRef<HTMLDivElement>(null);
  const [totalRoom, setTotalRoom] = useState(1);
  const [totalAdult, setTotalAdult] = useState<{ [key: string]: number }[]>([
    {
      room1: 1,
    },
  ]);

  const [totalChildren, setTotalChildren] = useState<
    { [key: string]: number }[]
  >([
    {
      room1: 0,
    },
  ]);
  const [totalInfant, setTotalInfant] = useState<{ [key: string]: number }[]>([
    {
      room1: 0,
    },
  ]);

  // Date Box
  const [date, setDate] = useState("");
  const [showSelectDate, setShowSelectDate] = useState(false);
  const boxSelectDateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (e.target && boxSelectRoomRef?.current) {
        if (!boxSelectRoomRef.current.contains(e.target as Node)) {
          setShowSelectRoom(false);
        }
      }
      if (e.target && boxSelectDateRef?.current) {
        if (!boxSelectDateRef.current.contains(e.target as Node)) {
          setShowSelectDate(false);
        }
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Type Room
  const [roomTypeActive, setRoomTypeActive] = useState<number>();

  // Itineraries
  const [itinerariesActive, setItinerariesActive] = useState<number[]>([]);

  return (
    <div className="bg-[var(--bg-container-color)]">
      <div className="container">
        <section className="">
          <div className="py-3 border-b-[1px] border-dotted">
            <Image
              alt=""
              src={"/detailCruise/hat_save_dt_2.jpg"}
              width={1170}
              height={162}
              className="w-full object-contain"
            />
            <div className="flex justify-between pt-3">
              <div>
                <h1 className="text-[var(--text-hover-default)] font-bold text-2xl">
                  {cruiseDetail.name}
                </h1>
                <div className="flex items-center my-2">
                  {Array.from(
                    { length: cruiseDetail.totalStar },
                    (v, i) => i + 1
                  ).map((i, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="mr-1 text-[orange] text-xs"
                    />
                  ))}
                  <div className="text-[var(--text-hover-default)] flex items-center text-sm">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className="p-1 rounded-full border-[1px]"
                    />
                    <span className="font-bold mr-1">Excellent</span>
                    <span className="hover:underline cursor-pointer">
                      - 34 Review
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  alt="flash sale"
                  src={"/detailCruise/flash_text.png"}
                  width={90}
                  height={65}
                  className="mr-4"
                />
                <Image
                  alt="best price"
                  src={"/detailCruise/best-price-3.png"}
                  width={120}
                  height={65}
                  className="mr-4"
                />
                <div className="">
                  <span className="ml-auto text-xs">Only From</span>
                  <div className="flex items-end">
                    <del className="text-base font-bold text-[var(--text-hover-default)] mr-2">
                      {cruiseDetail.price}
                    </del>
                    <span className="text-2xl text-[#FF9900] font-bold">
                      {Math.floor(
                        cruiseDetail.price -
                          (cruiseDetail.price * cruiseDetail.discount) / 100
                      )}
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => setShowSpecialOffer((pre) => !pre)}
                  className="bg-[url(/detailCruise/iconspecialoffer.svg)] flex items-center justify-center bg-no-repeat h-[35px] w-[170px] text-center text-[red] hover:text-[var(--text-hover-default)] cursor-pointer"
                >
                  <span className="text-sm ml-6 font-bold">
                    {"Special Offers »"}
                  </span>
                </div>
              </div>
            </div>

            <ul
              className={cx({
                hidden: !showSpecialOffer,
                block: showSpecialOffer,
              })}
            >
              {cruiseDetail.serviceSpecial.map((item, index) => (
                <li key={index}>
                  <div
                    onClick={() =>
                      setShowDetailSpecial((pre) =>
                        pre.includes(index)
                          ? pre.filter((i) => i != index)
                          : [...pre, index]
                      )
                    }
                    className={cx(
                      "flex justify-between items-end p-1 border-dotted cursor-pointer bg-white mb-2",
                      {
                        "border-b-[2px]": !showDetailSpecial.includes(index),
                      }
                    )}
                  >
                    <label className="flex text-[red] font-bold text-sm">
                      <span className="bg-[url(/home/top10Cruise/iconprice.svg)] bg-contain w-4 h-4 block relative top-1 mr-2"></span>
                      {index + 1}.{item.name}
                    </label>
                    <FontAwesomeIcon
                      icon={faAngleUp}
                      className={cx("mr-1 text-[var(--text-hover-default)]", {
                        "rotate-180": !showDetailSpecial.includes(index),
                      })}
                    />
                  </div>
                  <div
                    className={cx("border-[1px] bg-[#F9F9F9] mb-3 p-[10px]", {
                      hidden: !showDetailSpecial.includes(index),
                    })}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex my-3">
            <div className="flex items-center text-[#888888] text-[13px]">
              <div className="flex mr-2">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="relative top-[2px] mr-1"
                />
                <span>Style:{cruiseDetail.styleCruise}</span>
              </div>
              <div className="flex mr-2">
                <FontAwesomeIcon
                  icon={faClock}
                  className="relative top-[2px] mr-1"
                />
                <span>Launched:{cruiseDetail.timeLaunched}</span>
              </div>
              <div className="flex mr-2">
                <FontAwesomeIcon
                  icon={faBed}
                  className="relative top-[2px] mr-1"
                />
                <span>Rooms:{cruiseDetail.totalRoms}</span>
              </div>
            </div>
            <div className="flex">
              {cruiseDetail.services.map((service, index) => (
                <div key={index}>
                  <FontAwesomeIcon
                    icon={mapServiceIcons[service.slug]}
                    data-tooltip-id={`tooltip-service-${service.slug}`}
                    data-tooltip-content={service.name}
                    data-tooltip-place="top"
                    className="text-[#333] text-xs p-2 rounded-full border-[1px] border-[#ddd] mx-1"
                  />
                  <Tooltip id={`tooltip-service-${service.slug}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Image */}
        <section>
          <div className="grid grid-cols-5 gap-2 max-h-[376px] overflow-hidden">
            <div className="col-span-3 overflow-hidden relative h-full">
              <Image
                alt="aaaa"
                src={cruiseDetail.images[0]}
                width={820}
                height={440}
                className="object-contain hover:scale-[1.2] transition-all duration-500"
              />
              <div
                className={cx(
                  "absolute top-2 left-2 flex text-xs font-bold text-white bg-[#ff5722] py-1 px-2 rounded-sm",
                  {
                    hidden: !cruiseDetail.isFlashSale && !cruiseDetail.discount,
                  }
                )}
              >
                <div
                  className={cx("flex", {
                    hidden: !cruiseDetail.isFlashSale,
                  })}
                >
                  <FontAwesomeIcon icon={faBolt} />
                  <span className="">Flash Sale</span>
                </div>
                <span>-{cruiseDetail.discount}%</span>
              </div>

              <div
                onMouseEnter={() => setMountLike(true)}
                onMouseLeave={() => setMountLike(false)}
                className="group/like absolute top-2 right-2 text-white"
              >
                <FontAwesomeIcon
                  icon={mountLike ? faHeartSolid : faHeart}
                  className="text-2xl"
                />
              </div>

              <div
                className={cx(
                  "absolute bottom-2 left-0 px-2 py-1 text-white text-xs text-center bg-[#390]",
                  {
                    hidden: !cruiseDetail.isAllMeals,
                  }
                )}
              >
                <p>All Meals Included</p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col max-h-full">
              <div className="col-span-1 overflow-hidden relative basis-[39%] pb-1 ">
                <Image
                  alt="aaaa"
                  src={cruiseDetail.images[1]}
                  width={820}
                  height={440}
                  className="object-cover h-full hover:scale-[1.2] transition-all duration-500"
                />
              </div>
              <div className="col-span-1 overflow-hidden basis-[39%] pt-1">
                <Image
                  alt="aaaa"
                  src={cruiseDetail.images[2]}
                  width={820}
                  height={440}
                  className="object-cover h-full hover:scale-[1.2] transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Intro */}
        <section className="border-b-[1px] pb-4 border-dotted grid grid-cols-4 gap-5">
          <div className="col-span-3">
            <div className="border-b-[1px] border-dotted border-[#ddd] flex items-center py-4">
              <FontAwesomeIcon
                icon={faHeartSolid}
                className="text-[#59c45a] mr-2"
              />
              <h2 className="text-[var(--secondary-color)] text-[22px] font-bold">
                What travelers love about {cruiseDetail.name}
              </h2>
            </div>

            <div>
              <ul
                className={cx({
                  "h-[200px] overflow-hidden": !showTravelerLove,
                  "h-auto": showTravelerLove,
                })}
              >
                {cruiseDetail.travelerLove.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-sm text-[var(--text-hover-default)] mr-1 py-2"
                    />
                    <p className="text-[#666] text-[13px] font-semibold">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <span
                onClick={() => setShowTravelerLove((pre) => !pre)}
                className={cx(
                  "cursor-pointer text-sm w-full flex items-center text-[var(--text-hover-default)] pt-3 mb-4",
                  {
                    "shadow-[0px_-15px_15px_#fff]": !showTravelerLove,
                  }
                )}
              >
                {showTravelerLove ? "Show less" : "Show More"}
                <FontAwesomeIcon icon={faSortDown} className="text-xs" />
              </span>
              <div className="h-[2px] w-6 bg-[#BBBBBB] mt-4 rounded-md"></div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col py-3 items-center">
            <div className="w-28 h-28">
              <Image
                alt=""
                src={
                  "https://d1k2oi80tv211b.cloudfront.net/uploads/review/cus-70921-414104168250-250.jpg"
                }
                width={90}
                height={90}
                className="w-full rounded-full border-[1px] p-2 border-[#dfdfdf]"
              />
            </div>
            <div className="flex items-center my-2 text-[var(--text-hover-default)]">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="p-1 text-xs rounded-full border-[1px]"
              />
              {Array.from({ length: 5 }, (v, i) => i + 1).map((i, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="mr-1 w-[10px]"
                />
              ))}
            </div>
            <p className="text-center text-[#666] text-sm">
              <i className="text-4xl font-[Aria] font-bold">“</i>
              Rosie from Inside travel Vietnam was great organising our Renea
              Cruise to Bai Tu Long Bay in Vietnam. Everything was excellent,
              highly recommend.
              <span className="font-bold block">
                Bai Tu Long Bay Cruise organised by Rosie from Inside Travel
                Vietnam -
              </span>
              Australia
            </p>
            <span className="text-[var(--text-hover-default)] text-xs">
              Read more...
            </span>
          </div>
        </section>
        {/* Type Room */}
        <section className="py-4">
          <form
            className="bg-[var(--secondary1-color)] rounded-xl grid grid-cols-4 gap-8 p-3 font-bold"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="px-2 mb-3 w-full lg:mb-0 p3 flex flex-col lg:flex-row items-center font-bold  h-full ">
              <select
                className={cx(
                  "cursor-pointer w-full bg-transparent outline-none text-white border-b-[1px] border-b-[#fff] border-dashed flex items-center justify-between"
                )}
              >
                <option className="text-black font-bold">1 night</option>
                <option className="text-black font-bold">2 night</option>
              </select>
            </div>

            <div
              className={cx(
                "px-2 mb-3 lg:mb-0 w-full h-full  border-[#e6e6e6] relative"
              )}
            >
              <label
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSelectDate((pre) => !pre);
                  setShowSelectRoom(false);
                }}
                htmlFor="select"
                className="cursor-pointer p-2 w-full text-white border-[2px] border-[#fdd872] border-dashed flex items-center justify-between"
              >
                {date ? date : "Departure"}
                <FontAwesomeIcon icon={faCalendarDays} />
              </label>

              {showSelectDate ? (
                <div
                  ref={boxSelectDateRef}
                  className={cx("absolute z-10 top-[calc(100%+20px)]")}
                >
                  <DatePickerCustomer
                    onChangePicker={(date) => setDate(date)}
                    selectsRange={false}
                    dateFormat="YYYY/MM/DD"
                    showDate={false}
                    minDate={new Date()}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
            <div
              className={cx(
                "mb-3 lg:mb-0 bg-white  w-full lg:w-[290px] relative h-full  border-[#e6e6e6]"
              )}
            >
              <label
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSelectRoom((pre) => !pre);
                  setShowSelectDate(false);
                }}
                htmlFor="select"
                className="cursor-pointer w-full h-full p-2 text-[var(--text-hover-default)] border-[1px] border-[#4da981] border-dashed flex items-center justify-between"
              >
                {totalRoom} Room(s),
                {totalAdult.reduce(
                  (pre, item, index) => (pre += item[`room${index + 1}`]),
                  0
                )}
                Adult(s),
                {totalChildren.reduce(
                  (pre, item, index) => (pre += item[`room${index + 1}`]),
                  0
                ) +
                  totalInfant.reduce(
                    (pre, item, index) => (pre += item[`room${index + 1}`]),
                    0
                  )}
                Children
              </label>

              <div
                ref={boxSelectRoomRef}
                className={cx(
                  "absolute z-50 top-[calc(100%+20px)] max-w-[calc(100%+32px)] lg:max-w-max lg:w-[415px] left-0 p-3 pb-8 bg-white shadow-[0_6px_13px_-4px_#1816184d] border-[1px] border-[#ccc] rounded-md",
                  {
                    hidden: !showSelectRoom,
                  }
                )}
              >
                <FontAwesomeIcon
                  onClick={() => setShowSelectRoom(false)}
                  icon={faXmark}
                  className="absolute right-2 bottom-1 cursor-pointer p-2"
                />
                <div>
                  <p className="text-[#888]">No, Rooms</p>
                  <select
                    className="outline-none cursor-pointer border-[1px] border-[#d7d7d7] py-1 pl-1 pr-3 font-thin"
                    onChange={(e) => setTotalRoom(+e.target.value)}
                  >
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"4"}>4</option>
                  </select>
                </div>
                {Array.from({ length: totalRoom }, (v, i) => i + 1).map(
                  (i, index) => (
                    <div key={index} className="py-2">
                      <p className="text-white">Room {i}</p>
                      <div className="flex font-thin flex-wrap lg:flex-nowrap items-center">
                        <div className="mr-3">
                          <label
                            className="text-[#888] text-xs block my-1"
                            id={`option-type-${i}`}
                          >
                            Type
                          </label>
                          <select className="outline-none cursor-pointer border-[1px] border-[#d7d7d7] py-1 pl-1 pr-3">
                            <option value={"Double"}>Double</option>
                            <option value={"Twin"}>Twin</option>
                            <option value={"Single"}>Single</option>
                          </select>
                        </div>
                        <div className="mr-3">
                          <label
                            className="text-[#888] text-xs block my-1 "
                            id={`option-adult-${i}`}
                          >
                            {"Adult(>10)"}
                          </label>
                          <select
                            className="outline-none min-w-[60px] cursor-pointer border-[1px] border-[#d7d7d7] py-1 pl-1 pr-3 w-full"
                            onChange={(e) => {
                              setTotalAdult((pre) => {
                                const newData = [...pre];
                                const nameRoom = `room${i}`;
                                const dataRom = newData.find(
                                  (r) => r[nameRoom] >= 0
                                );
                                if (dataRom) {
                                  dataRom[nameRoom] = +e.target.value;
                                } else {
                                  newData.push({
                                    [nameRoom]: +e.target.value,
                                  });
                                }
                                return newData;
                              });
                            }}
                          >
                            <option value={"0"}>0</option>
                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                            <option value={"3"}>3</option>
                            <option value={"4"}>4</option>
                          </select>
                        </div>
                        <div className="mr-3">
                          <label
                            className="text-[#888] text-xs block my-1 "
                            id={`option-child-${i}`}
                          >
                            {"Child(4 - 10)"}
                          </label>
                          <select
                            className="outline-none min-w-[60px] cursor-pointer border-[1px] border-[#d7d7d7] py-1 pl-1 pr-3 w-full"
                            onChange={(e) => {
                              setTotalChildren((pre) => {
                                const newData = [...pre];
                                const nameRoom = `room${i}`;
                                const dataRom = newData.find(
                                  (r) => r[nameRoom] >= 0
                                );
                                if (dataRom) {
                                  dataRom[nameRoom] = +e.target.value;
                                } else {
                                  newData.push({
                                    [nameRoom]: +e.target.value,
                                  });
                                }
                                return newData;
                              });
                            }}
                          >
                            <option value={"0"}>0</option>
                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                          </select>
                        </div>
                        <div className="mr-3">
                          <label
                            className="text-[#888] text-xs block my-1 "
                            id={`option-child-${i}`}
                          >
                            {"Child(0 - 3)"}
                          </label>
                          <select
                            className="outline-none min-w-[60px] cursor-pointer border-[1px] border-[#d7d7d7] py-1 pl-1 pr-3 w-full"
                            onChange={(e) => {
                              setTotalInfant((pre) => {
                                const newData = [...pre];
                                const nameRoom = `room${i}`;
                                const dataRom = newData.find(
                                  (r) => r[nameRoom] >= 0
                                );
                                if (dataRom) {
                                  dataRom[nameRoom] = +e.target.value;
                                } else {
                                  newData.push({
                                    [nameRoom]: +e.target.value,
                                  });
                                }
                                return newData;
                              });
                            }}
                          >
                            <option value={"0"}>0</option>
                            <option value={"1"}>1</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <button
              className={cx(
                "submit_search",
                "mx-2 rounded-xl w-full p-3 uppercase text-white bg-[#d0720b]"
              )}
            >
              Search Cruises
            </button>
          </form>

          <div className="shadow-sm bg-white mt-5 p-10">
            <div className="grid grid-cols-6 border-b-[1px] border-dotted text-[var(--text-color-default)]">
              <div className="col-span-4 pb-2 ">
                <span className="font-bold">Room Types</span>
              </div>
              <div className="col-span-1 pb-2 px-3">
                <span className="font-bold block text-end">Max</span>
              </div>
              <div className="col-span-1 pb-2 ">
                <span className="font-bold block text-end">Rate</span>
              </div>
            </div>
            {cruiseDetail.typeRooms.map((room, index) => (
              <div
                key={index}
                className={cx("py-3 border-dotted grid grid-cols-6", {
                  "border-b-[1px]": cruiseDetail.typeRooms.length - 1 != index,
                })}
              >
                <div className="col-span-4 flex">
                  <figure className="w-[40%]">
                    <Image
                      alt="image room"
                      src={room.images[0]}
                      width={650}
                      height={388}
                      className="w-full object-contain hover:opacity-90"
                    />
                    <span
                      onClick={() => setRoomTypeActive(index)}
                      className="block cursor-pointer text-[13px] text-[var(--text-color-default)] mt-3"
                    >
                      More info »
                    </span>
                  </figure>
                  <div className="ml-5">
                    <h3
                      onClick={() => setRoomTypeActive(index)}
                      className="hover:underline cursor-pointer text-[var(--text-hover-default)] text-xl font-semibold"
                    >
                      {room.name}
                    </h3>
                    <div className="flex">
                      {room.specialService.map((item, index) => (
                        <span
                          key={index}
                          className="block mr-2 rounded-sm bg-[#DDD] text-[10px] text-[var(--text-color-default)] py-1 px-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <ul className="text-[var(--text-color-default)] text-xs">
                      <li className="my-1">{room.totalRooms} Rooms</li>
                      <li
                        className={cx("flex items-center my-1", {
                          hidden: !room.isViewOcean,
                        })}
                      >
                        <FontAwesomeIcon className="mr-2" icon={faEye} />
                        <span>Ocean View</span>
                      </li>
                      <li className="flex items-center my-1">
                        <FontAwesomeIcon className="mr-2" icon={faBed} />
                        <span>{room.typeBed}</span>
                      </li>
                      <li className="flex items-center my-1">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faArrowsUpDownLeftRight}
                        />
                        <span>{room.acreage}m²</span>
                      </li>
                      <li className="flex items-center my-1">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faLocationDot}
                        />
                        <span>{room.location}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-1 px-3 flex items-end justify-end my-auto">
                  {Array.from({ length: room.maxPerson }, (v, i) => i + 1).map(
                    (i, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faUser}
                        className={cx("text-[#aaa] mr-[1px]", {
                          "text-xs": index < 2,
                          "text-[10px]": index >= 2,
                        })}
                      />
                    )
                  )}
                </div>
                <div className="col-span-1 my-auto ml-auto">
                  <Image
                    alt="flash sale"
                    src={"/detailCruise/flash_text.png"}
                    width={90}
                    height={65}
                    className="object-contain"
                  />
                  <span className="block mt-1 text-[#ffa500] text-xs font-semibold text-end">
                    Available
                  </span>
                </div>
              </div>
            ))}
            {roomTypeActive != undefined ? (
              <TypeRoomCruiseItem
                {...cruiseDetail.typeRooms[roomTypeActive]}
                onClose={() => setRoomTypeActive(undefined)}
              />
            ) : (
              <></>
            )}
          </div>
        </section>
        {/* Itineraries & Routes */}
        <section className="py-3">
          <h2 className="text-[var(--secondary-color)] font-bold text-[22px] border-b-[2px] border-dotted pb-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mr-2 text-[var(--text-hover-default)]"
            />
            {cruiseDetail.name}: Itineraries & Routes
          </h2>

          <div className="py-5">
            {cruiseDetail.itineraries.map((itinerary, index) => (
              <div key={index} className="mb-5">
                <div
                  onClick={() =>
                    setItinerariesActive((pre) => {
                      if (pre.includes(index))
                        return pre.filter((i) => i != index);
                      return [...pre, index];
                    })
                  }
                  className="flex group/header hover:bg-[#F9F9F9] cursor-pointer border-[1px] border-[#EEE] bg-white rounded-lg"
                >
                  <div className="text-[var(--text-hover-default)] border-r-[1px] p-3 px-4 font-bold text-center">
                    <span className="block">{itinerary.totalDay}</span>
                    <span className="block">Days</span>
                  </div>
                  <div className="flex-1 flex px-5 justify-between p-3 items-center">
                    <div>
                      <h2 className="text-lg text-[var(--text-hover-default)] font-bold mb-1">
                        {itinerary.title}
                      </h2>
                      <div className="flex items-center text-[#333] text-[13px]">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="mr-1 text-xs"
                        />
                        <p>{itinerary.route}</p>
                      </div>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faSubtract}
                        className={cx(
                          "text-2xl text-[#aaa] group-hover/header:text-[var(--text-hover-default)] cursor-pointer",
                          {
                            hidden: itinerariesActive.includes(index),
                          }
                        )}
                      />
                      <FontAwesomeIcon
                        icon={faPlus}
                        className={cx(
                          "text-2xl text-[#aaa] group-hover/header:text-[var(--text-hover-default)] cursor-pointer",
                          {
                            hidden: !itinerariesActive.includes(index),
                          }
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={cx("p-3 bg-white", {
                    hidden: !itinerariesActive.includes(index),
                  })}
                  dangerouslySetInnerHTML={{ __html: itinerary.content }}
                ></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
