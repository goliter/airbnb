import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from "@/services"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch, getState }) => {
  // 发送网络请求
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })

  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })

  getHomeHotRecommendData().then(res => {
    dispatch(changeRecommendInfoAction(res))
  })

  getHomeLongforData().then(res => {
    dispatch(changeLongforInfoAction(res))
  })

  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
  //  const res2 = await getHomeHighScoreData()
})


const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}, //高性价比数据
    highScoreInfo: {}, //高评分
    discountInfo: {}, //折扣数据
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, {payload}) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, {payload}) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, {payload}) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, {payload}) {
      state.plusInfo = payload
    }
  },
  // 把发送网络请求到的数据存储到state中
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, {payload}) => {
  //     state.goodPriceInfo = payload
  //   })
  // },

})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions
export default homeSlice.reducer