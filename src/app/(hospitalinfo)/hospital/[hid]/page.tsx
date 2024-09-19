"use client";

import { MOCK_HOSPITALS } from "@/components/CardPanel";
import { useParams } from "next/navigation";

const HospitalDetailPage = ({ params }: { params: { hid: string } }) => {
  const hospital = MOCK_HOSPITALS.find(
    (hospital) => hospital.hid === params.hid
  );

  return (
    <div className="flex flex-row gap-2 p-5">
      <img src={hospital?.imgSrc} alt={hospital?.name} className="w-1/2" />
      <div className="flex flex-col gap-2 text-black">
        <h1>{hospital?.name}</h1>
        <p>description</p>
      </div>
    </div>
  );
};

export default HospitalDetailPage;
