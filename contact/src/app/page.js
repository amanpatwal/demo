import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-100 h-100">
        <div className="grid md:grid-cols-2 ">
          <div>
            <h1 className="text-[#E62E2D] font-bold ">// CONTACT US</h1>
            <p className="text-5xl text-[#171B2A] font-bold">
              HAVE LEGAL QUERIES? LEAVE THEM TO US.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              Aliquam in hendrerit urna
            </p>
            <div className="flex">
              <MapPin />
              <p>Address</p>
              <p>S</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
