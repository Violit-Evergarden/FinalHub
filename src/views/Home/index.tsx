'use client';
import { useState, useMemo } from "react";
import Header from "@/src/components/Header";
import WebsiteCard from './components/WebsiteCard';
import type { CategoryItem, WebsiteList } from "@/src/types";

interface HomeProps {
  categoryList: CategoryItem[];
}

function Home({ categoryList }: HomeProps) {
  const [categoryId, setCategoryId] = useState<string | null>('');
  const btn_class = 'active:bg-btn_active text-text_color font-medium transition py-8 px-15 bg-btn_bg hover:bg-btn_hover_bg cursor-pointer text-sm ';

  const websiteList = useMemo(() => {
    let websiteList: WebsiteList[] = [];
    if (categoryId !== '') {
      websiteList = categoryList.find((item) => item.id === categoryId)?.ds_websites || [];
    }else {
      websiteList = categoryList.reduce((acc: WebsiteList[], item) => acc.concat(item?.ds_websites || []), []);
    }
    return websiteList.sort((a, b) => Number(b.pinned) - Number(a.pinned) || Number(b.recommend) - Number(a.recommend));
  } ,[categoryId, categoryList]);

  return (
    <div>
      <Header />
      <div className="p-20 box-border">
        <div>
          <button className={btn_class+`${categoryId === '' ? 'bg-btn_hover_bg' : ''}`} onClick={() => setCategoryId('')}>全部</button>
          {categoryList.map((category) => (<button className={btn_class+`${categoryId === category.id ? 'bg-btn_hover_bg' : ''}`} onClick={() => setCategoryId(category.id)} key={category.id}>{category.name}</button>))}
        </div>
        <div className="grid gap-5 w-full justify-center mt-12" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))' }}>
          {websiteList.length !== 0 && websiteList.map(item => <WebsiteCard key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  )
}

export default Home;
