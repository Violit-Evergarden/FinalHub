
import type { WebsiteItem } from "@/src/types";

function WebsiteCard({ data }: { data: WebsiteItem }) {
  return (
    <div className="cursor-pointer p-20 box-border rounded bg-card_bg border border-card_border">
      <div className="flex items-center">
        <img className="w-40 h-40" src={data.logo} alt="" />
        <div className="ml-8 flex flex-col justify-between">
          <p className="">{data.name}</p>
          <div></div>
        </div>
      </div>
      <p>{data.desc}</p>
      <div></div>
    </div>
  );
}

export default WebsiteCard;
