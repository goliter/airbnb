import { getEntireRoomList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchEntireDataAction = createAsyncThunk("fetchdata", (payload, {dispatch,getState}) => {
  // 修改currentpage
  dispatch(changeCurrentPageAction(payload))
  const currentPage = getState().entire.currentPage
  // 是否加载-加载则显示蒙版
  dispatch(changeIsLoadingAction(true))
  // 根据页码获取最新的数据
  getEntireRoomList(currentPage * 20).then(res => {
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
    dispatch(changeIsLoadingAction(false))
  })
})

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0, //当前页码
    roomList: [] , //房间列表
    totalCount: 0 ,//总数据个数

    isLoading: false //是否在加载
  },
  reducers: {
    changeCurrentPageAction(state, {payload}) {
      state.currentPage = payload
    },
    changeRoomListAction(state, {payload}) {
      state.roomList = payload
    },
    changeTotalCountAction(state, {payload}) {
      state.totalCount = payload
    },
    changeIsLoadingAction(state, {payload}) {
      state.isLoading = payload
    }
  }
})
export const {
  changeCurrentPageAction,
  changeRoomListAction,
  changeTotalCountAction,
  changeIsLoadingAction
} = entireSlice.actions
export default entireSlice.reducer