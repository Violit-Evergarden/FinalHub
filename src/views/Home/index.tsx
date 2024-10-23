'use client';
import { useEffect, useState } from "react";
import Header from "@/src/components/Header";
import WebsiteCard from './components/WebsiteCard';
import type { WebsiteItem } from "@/src/types";

interface HomeProps {
  categoryList: WebsiteItem[];
}

function Home({ categoryList }: HomeProps) {
  const [categoryId, setCategoryId] = useState<string | null>('');
  const btn_class = 'active:bg-btn_active text-text_color font-medium transition py-8 px-15 bg-btn_bg hover:bg-btn_hover_bg cursor-pointer text-sm ';
  console.log('categoryList', categoryList)
  return (
    <div>
      <Header />
      <div className="p-20 box-border">
        <div>
          <button className={btn_class+`${categoryId === '' ? 'bg-btn_hover_bg' : ''}`} onClick={() => setCategoryId('')}>全部</button>
          {categoryList.map((category) => (<button className={btn_class+`${categoryId === category.id ? 'bg-btn_hover_bg' : ''}`} onClick={() => setCategoryId(category.id)} key={category.id}>{category.name}</button>))}
        </div>
        <div className="flex flex-wrap">
          {categoryList.length !== 0 && categoryList.map(item => <WebsiteCard key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  )
}

export default Home;
