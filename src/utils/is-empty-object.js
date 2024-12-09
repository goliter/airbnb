export function isEmptyO(obj) {
  // !! 把后面内容转为布尔类型
  return !!Object.keys(obj).length
}