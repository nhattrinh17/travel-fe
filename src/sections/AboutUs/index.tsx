import { AnimatedCounter } from "@/components/AnimatedCouter";
import Image from "next/image";

const dataUser = [
  {
    image: "/about-us/user1.jpeg",
    name: "Tessane Padares",
    position: "Sale Manager",
  },
  {
    image: "/about-us/user2.jpeg",
    name: "Tessane Padares",
    position: "Sale Manager",
  },
  {
    image: "/about-us/user3.jpeg",
    name: "Tessane Padares",
    position: "CEO",
  },
  {
    image: "/about-us/user4.jpeg",
    name: "Tessane Padares",
    position: "Sale Manager",
  },
  {
    image: "/about-us/user5.jpeg",
    name: "Tessane Padares",
    position: "Marketing Manager",
  },
];

export function AboutUsSection(): JSX.Element {
  return (
    <div className="bg-[var(--bg-container-color)]">
      {/* Video Intro */}
      <section className="w-full relative overflow-hidden pb-[100%] lg:pb-[34%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full scale-[2]"
          src="https://www.youtube.com/embed/JPe2mwq96cw?autoplay=1&mute=1&loop=1&playlist=JPe2mwq96cw&controls=0&showinfo=0&modestbranding=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-xl lg:text-3xl font-bold">
              We are Grand Tour World Class Travel Agency
            </h1>
            <p className="text-sm lg:text-base">
              Trips, experiences, and places. All in one service.
            </p>
          </div>
        </div>
      </section>
      {/* Text intro */}
      <section className="py-20 bg-black">
        <div className="container text-white text-center">
          <div className="lg:px-20">
            <h2 className="text-3xl font-bold">
              This adventure isn’t about change but it seems to be an
              inevitability.
            </h2>
            <p className="py-5">
              Meh synth Schlitz, tempor duis single-origin coffee ea next level
              ethnic fingerstache fanny pack nostrud.Photo booth anim 8-bit
              hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
              flexitarian Truffaut synth art party deep v chillwave. Seitan High
              Life reprehenderit consectetur cupidatat kogi. Et leggings fanny
              pack, elit bespoke vinyl art party Pitchfork selfies master
              cleanse.
            </p>

            <div className="grid grid-cols-2">
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
        </div>
      </section>
      {/* Form */}
      <section>
        <div className="w-full h-[800px]">
          <div className="bg-[url(/about-us/bg1.jpeg)] bg-no-repeat bg-cover w-full h-full object-cover">
            <div className="container h-full flex justify-end items-center py-5">
              <form className="p-10 bg-white shadow-md rounded-md">
                <div className="mb-7">
                  {" "}
                  <h4 className="text-4xl font-bold text-black">
                    Get In Touch With Us
                  </h4>
                  <p className="text-[var(--text-color-default)]">
                    This is sample of sub title
                  </p>
                </div>
                <div className="mb-4">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
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
                    placeholder="halong@travel.com.vn"
                    className="w-full outline-none border-[1px] rounded-md p-2"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    id="phoneNumber"
                    required
                    placeholder="0334343323"
                    className="w-full outline-none border-[1px] rounded-md p-2"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="interestedIn">Interested In</label>
                  <input
                    id="interestedIn"
                    required
                    placeholder="Asia Trip"
                    className="w-full outline-none border-[1px] rounded-md p-2"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="numberPerson">Number of Person</label>
                  <input
                    id="numberPerson"
                    required
                    placeholder="Nhat Trinh"
                    className="w-full outline-none border-[1px] rounded-md p-2"
                    type="text"
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">
          {dataUser.map((user, index) => (
            <div key={index}>
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
          ))}
        </div>
      </section>
    </div>
  );
}
