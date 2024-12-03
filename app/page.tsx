import Content from '@/src/views/Home';

async function getCategoryList() {
  const result = await fetch('https://dream-site.cn/api/categorys?current=1&pageSize=999').then(res => res.json())
  return result?.data?.list || []
}

// async function getWebsiteList() {
//   const result = await fetch('https://dream-site.cn/api/websites?current=1&pageSize=999').then(res => res.json())
//   console.log('websiteList', result)
//   return result?.data?.list || []
// }

export default async function Home() {
  const categoryList = await getCategoryList();
  const props = {
    categoryList
  }
  return <Content {...props} />;
}
