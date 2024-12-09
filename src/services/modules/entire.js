import request from "../request";

export function getEntireRoomList(offset = 0, size = 20) {
  return request.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}