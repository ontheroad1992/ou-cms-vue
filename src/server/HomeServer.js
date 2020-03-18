/*
 * @Description: 首页服务端接口
 * @Author: ontheroad1992
 * @Date: 2020-03-18 09:56:32
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-18 10:30:19
 */
import { post } from "@/plugins/request";

export default class HomeServer {
  /** 纵览设备简要信息 */
  static async getDeviceInfo() {
    const result = await post("/home/device");
    return result.data;
  }

  /** 简要充值信息 */
  static async getRechargeAmount() {
    const result = await post("/home/recharge_amount");
    return result.data;
  }

  /** 简要的消费信息 */
  static async getConsumeAmount() {
    const result = await post("/home/consume_amount");
    return result.data;
  }
}
