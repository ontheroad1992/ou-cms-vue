<!--
 * @Description: 图标
 * @Author: ontheroad1992
 * @Date: 2020-03-06 11:41:20
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-06 12:55:20
 -->
<template>
  <a-card
    title="访问量"
    class="home-charts"
  >
    <a-row
      class="content"
      :gutter="18"
    >
      <a-col
        :lg="{span: 14}"
        :sm="{span: 24}"
      >
        <div
          class="line-chart"
          ref="linChart"
        />
      </a-col>
      <a-col
        :lg="{ span:6, offset: 4 }"
        :sm="{ span: 24 }"
      >
        <div class="progress">
          <div class="progress-item">
            <h3>月访问数</h3>
            <h4>同比上期增长</h4>
            <a-progress :percent="30" />
          </div>
          <div class="progress-item">
            <h3>月下载数</h3>
            <h4>同上期增长</h4>
            <a-progress :percent="20" />
          </div>
          <div class="progress-item">
            <h3>月收入</h3>
            <h4>同比上期增长</h4>
            <a-progress :percent="25" />
          </div>
        </div>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
import echarts from 'echarts'

export default {
  mounted() {
    this.initLineChart()
  },
  methods: {
    initLineChart() {
      const linChart = this.$refs.linChart
      const chart = echarts.init(linChart)
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['访问量', '下载量', '平均访问量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '访问量',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210, 342, 234,434,232,256]
          },
          {
            name: '下载量',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310, 210, 342, 234,434,232,256]
          },
          {
            name: '平均访问量',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320, 210, 342, 234,434,232,256]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      chart.setOption(option);
    }
  }
}
</script>

<style lang="less" scoped>
.home-charts {
  margin-top: 24px;
}
.progress {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
}
.progress-item {
  h3 {
    font-size: 20px;
  }
}
@media (min-width: 1281px) {
  .line-chart {
    width: 980px;
    height: 300px;
  }
}
@media (min-width: 1025px) and (max-width: 1280px) {
  .line-chart {
    width: 590px;
    height: 300px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) { 
  .line-chart {
    width: 650px;
    height: 300px;
  }
}
</style>