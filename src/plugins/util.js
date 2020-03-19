/*
 * @Description: 常用工具
 * @Author: ontheroad1992
 * @Date: 2020-03-19 15:17:31
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-19 16:06:54
 */
import _ from "lodash/string";

/** 把对象转换为驼峰 */
export const changeCamelCase = args => {
  const obj = { ...args };
  const changVarName = obj => {
    const newObj = {};
    for (let item in obj) {
      let item_ = item;
      // 检测是否存在 xxx_xxx 格式的变量
      if (/^([a-z]+)(_\w|\d)+/.test(item)) {
        // 转换为驼峰命名方法
        item_ = _.camelCase(item);
      }
      // 如果对象中还存在类似数据，则迭代修改
      if (typeof obj[item] === "object") {
        obj[item] = changVarName(obj[item]);
      }
      newObj[item_] = obj[item];
    }
    return newObj;
  };
  return changVarName(obj);
};
