
/**
 * @description: 分类列表
 */
export type CategoryItem = {
  id: string // uuid
  name: string // 分类名称
  desc: string // 分类描述
  icon: string // 分类图标
  user_id: string // 用户 id
  email: string // 用户邮箱
  sort: number // 排序
  created_at: Date // 创建时间
  updated_at: Date // 更新时间
  ds_websites?: WebsiteList[] // 分类下的站点列表
}

/**
 * @description: 站点列表
 */
export type WebsiteList = {
  id: string // uuid
  category_id: string // 所属分类
  name: string // 站点名称
  desc: string // 站点描述
  url: string // 站点 url
  logo: string // logo url
  color: string // 图标颜色
  tags: string[] // 站点标签
  pinned: boolean // 是否置顶
  vpn: boolean // 是否需要 vpn
  recommend: boolean // 是否推荐
  user_id: string // 用户 id
  email: string // 用户邮箱
  sort: number // 排序
  created_at: Date // 创建时间
  updated_at: Date // 更新时间
}
