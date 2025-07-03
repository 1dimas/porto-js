import Lanyard from "@/components/Lanyard/Lanyard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A1021]">
      <div className="container border mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6"></div>
          <div className="col-span-6">
            <Lanyard  position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
