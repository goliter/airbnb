import request from "../request";

// 获取高性价比数据
export function getHomeGoodPriceData() {
  return request.get({
    url: "/home/goodprice"
  })
}

// 获取高评分数据
export function getHomeHighScoreData() {
  return request.get({
    url: "/home/highscore"
  })
}

// 获取折扣数据
export function getHomeDiscountData() {
  return request.get({
    url: "/home/discount"
  })
}

// 获取热门推荐数据
export function getHomeHotRecommendData() {
  return request.get({
    url: "/home/hotrecommenddest"
  })
}

// 获取向往数据
export function getHomeLongforData() {
  return request.get({
    url: "/home/longfor"
  })
}

// plus数据
export function getHomePlusData() {
  return request.get({
    url: "/home/plus"
  })
}
