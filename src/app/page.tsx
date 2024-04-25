import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Regions from '../constants/regions';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <div className="text-2xl">ระบบแนะนำสถานที่ท่องเที่ยวเมืองรองในประเทศไทย</div>
      <div className="flex flex-row flex-wrap md:basis-1/2 lg:basis-1/3 w-full items-center pt-6">
        {
          Regions.RegionsData.map(region => (
            <div className="w-full md:w-1/2 lg:w-[33%] rounded-xl p-2 pb-4">
              <Link href={`/questions/${region.id}`} key={region.id} className="">
                <Image
                  src={region.image}
                  className="w-full object-cover h-[300px] rounded-xl shadow-md"
                  alt=""
                  width={1920}
                  height={505}
                />
                <div className="text-2xl text-center">{region.name}</div>
              </Link>
            </div>
          ))
        }
      </div>
      
    </main>
  );
}
