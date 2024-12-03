import Image from "next/image";
import { isValidImageUrl } from "@/src/utils/check";
import type { WebsiteList } from "@/src/types";

function WebsiteCard({ data }: { data: WebsiteList }) {
  return (
    <div onClick={()=> window.open(data.url)} className="relative min-w-260 cursor-pointer p-20 box-border rounded bg-card_bg border border-card_border transition-shadow hover:shadow-card_light">
      <div className="flex items-center">
        {/* {isValidImageUrl(data.logo) ? <Image width={40} height={40} src={data.logo} alt="" /> : <div className="w-40 h-40 bg-slate-400" />} */}
        <img src={data.logo} className="w-40 h-40" alt="" />
        <div className="ml-8 flex flex-col justify-between">
          <p className="">{data.name}</p>
          <div className="text-xs text-slate-400 font-thin flex items-center">
            {data.tags.map((tag:string, idx:number) => (<div className="flex items-center" key={tag}>
              <span className="line-clamp-1">{tag}</span>
              {idx !== data.tags.length - 1 && <span className="bg-slate-400 w-1 mx-6 h-12 opacity-50" />}
            </div>))}
          </div>
        </div>
      </div>
      <p className="mt-12 text-sm text-slate-500 font-medium line-clamp-2">{data.desc}</p>
      <div className="absolute top-1 right-1.5 flex text-xs gap-1">
        {data.pinned && <span className="rounded px-9 py-3 border bg-tip_bg_green border-tip_border_green text-tip_text_green">置顶</span>}
        {data.recommend && <span className="rounded px-9 py-3 border bg-tip_bg_info border-tip_border_info text-tip_text_info">推荐</span>}
      </div>
    </div>
  );
}

export default WebsiteCard;
