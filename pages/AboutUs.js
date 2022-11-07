import Image from "next/image";
export default function AboutUs() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-my-green  font-semibold text-2xl    md:font-bold md:text-6xl my-16  ">
        About Us
      </h1>
      <div className="text-my-blue">
      <div className=" md:flex justify-center md:justify-between md:px-24 py-6">
        <div className="mx-28 md:mx-0">
          <Image
            src="/home/born.jpg"
            height={300}
            width={450}
            objectFit="contain"
            alt="/"
          />
        </div>
        <div className="">
          <h2 className="font-semibold mt-10 text-3xl text-center   ">
            The Born Story of Joy Makers{" "}
          </h2>
          <p className="md:max-w-lg mt-6 text-lg font-light text-center px-20 md:text-start  ">
            Joy Makers foundation came into being when a group of like minded
            intellectuals joined hands and became a team,thought to bring
            happiness and joy in life of people who suffer due to multiple
            hardships of life.
          </p>
        </div>
      </div>
      <div className="text-center">
        <h2 className="font-semibold mt-10 text-3xl  ">
          What is our objective behind TJMF?{" "}
        </h2>
        <p className=" mt-6 text-lg font-light px-20  ">
          The objective is to make the vulnerable’s life better by giving them a
          little happiness. Our aim is to spread awareness and want to make
          people realise that humanity is the real strength. By focusing and
          striving to achieve these deeds and activities, we create kind and
          loving environment around ourselves and around the world as well.
        </p>
      </div>
      <div className=" md:flex justify-center md:justify-between md:px-24 my-16  ">
        <div className="">
          <h2 className="font-semibold  text-3xl text-center md:text-start ">
            Who are we?{" "}
          </h2>
          <p className="md:max-w-lg mt-6 text-lg font-light px-20 md:px-0 text-center md:text-start ">
            Cheering young minds with age tags of 25-30. Our volunteers include
            young, middle aged and some old people as well. We are glad to say
            that we have 80 above volunteers in our team and their valuable
            contribution keeps us going. We have our core team as well who works
            harder each day behind this foundation. We have website designers,
            content writers and people who handle social media platforms. We all
            work together to keep this foundation go well.
          </p>
        </div>
        <div className="mt-10 mx-28 md:mx-0 ">
          <Image
            src="/home/born.jpg"
            height={300}
            width={450}
            objectFit="contain"
            alt="/"
          />
        </div>
      </div>
      <div className="text-center">
        <h2 className="font-semibold mt-10 text-3xl  ">How do we work? </h2>
        <p className=" mt-6 text-lg font-light px-20  ">
          The objective is to make the vulnerable’s life better by giving them a
          little happiness. Our aim is to spread awareness and want to make
          people realise that humanity is the real strength. By focusing and
          striving to achieve these deeds and activities, we create kind and
          loving environment around ourselves and around the world as well.
        </p>
      </div>
      </div>
    </div>
  );
}
