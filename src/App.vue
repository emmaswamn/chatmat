<script setup lang="ts">
// import * as echarts from 'echarts/core';
// import { GridComponent, GridComponentOption } from 'echarts/components';
// import { BarChart, BarSeriesOption } from 'echarts/charts';
// import { CanvasRenderer } from 'echarts/renderers';


// echarts.use([GridComponent, BarChart, CanvasRenderer]);

// type EChartsOption = echarts.ComposeOption<
//   GridComponentOption | BarSeriesOption
// >;

// onMounted(()=>{

//   var chartDom = document.getElementById('main')!;
//   var myChart = echarts.init(chartDom);
//   var option: EChartsOption;
  
//   option = {
//     xAxis: {
//       type: 'category',
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//       axisLine: {
//         show:false
//       },
//       axisTick: {
//         show: false
//       },
//       axisLabel: {
//         show: false
//       },
//     },
//     yAxis: {
//       type: 'value',
//       splitLine: {
//         show:false
//       },
//       axisLabel: {
//         show: false
//       },
//     },
//     series: [
//       {
//         data: [120, 200, 150, 80, 70, 110, 130, 150, 80, 70, 110, 130],
//         type: 'bar',
//         silent: true,
//         selectedMode: false
//       }
//     ],
//     // grid: {
//     //   top:0,
//     //   left: 10
//     // }
//   };
  
//   option && myChart.setOption(option);
// })
import Highcharts from 'highcharts'
import {Chart as highchart} from 'highcharts-vue'
// import type { Chart } from 'highcharts-vue'
import { ref } from 'vue';
import exporting from 'highcharts/modules/exporting'
// import { updateProject } from './utils/fetchData'
// import { addProject } from './utils/fetchData'
// import { deleteProject } from './utils/fetchData'
// import { getSingleProject } from './utils/fetchData'
// import { getAllProjects } from './utils/fetchData'
// import { changeProjectsName } from './utils/fetchData'
// import { getCityName } from './utils/fetchData'
import useDomDownload from './hooks/useDomDownload';

const { downloadDom } = useDomDownload()

exporting(Highcharts)
// getCityName(87.76279844505257, 46.2409102796008)

// addProject()
// getSingleProject()
// getAllProject()
// deleteProject()
// changeProjectsName()
// changeProjectsStatus()


const chartOptions = {
  accessibility:{
    enabled:false
  },
  chart: {
    type: 'column',
    // backgroundColor: 'rgb(183, 5, 32)', //back ground color
    margin: 0, //removes all margin
    // borderWidth: 0
  },
  title: undefined,
  yAxis: {
    min: 0,
    lineWidth: 0,
    gridLineWidth: 0,
    lineColor: 'transparent',
    minorTickLength: 0,
    tickLength: 0,
    title: {
      enabled: false
    },
    labels:{
      enabled:false
    }
  },
  plotOptions:{
    enableMouseTracking: false,
    series: {
      states: {
          hover: {
              enabled: false
          }
      }
    },
    column: {
        pointPadding: 0,
        borderWidth: 0
    }
  },
  credits:{
    enabled:false //隐藏 highcharts.com
  },
  legend: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xAxis: {
    labels:{
      enabled:false
    },
    lineWidth: 0, //removes axis line
    gridLineWidth: 0, //removes charts background line
    lineColor: 'transparent',
    minorTickLength: 0, //removes minor axis ticks 
    tickLength: 0, //removes  axis ticks 
    title: {
      enabled: false
    },
  },
  series: [
    {
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 57177, 69658, 97031, 119931]
    }
  ],
  exporting: {
    enable: true,
  }   
}
// colors:
// 太阳和气象，每月统计
// GHI+DIF '#316fb3','#8fd5fb'
// DNI '#daa346'
// D2G '#8fd5fb'
// PREC '#316fb3'
// SNOWD '#b0c9ea'

// 折线图
// colors:
// 太阳和气象，每月统计
// TEMP '#784898'
// WS '#418f63'
// CDD '#b0c9ea'
// HDD '#e6a5c5'
// ALB '#d26836'
const curUnit = '[kWh/m²每天]'
const curTempUnit = '华氏度'

// watch curUnit变化，然后改变ghiUnit的值

interface DefaultConfig {
  [propname: string]: {
    colors: string[],
    unit?: string,
    chartType: 'column' | 'line'
  }
}

const chartConfig: DefaultConfig = {
  'GHI+DIF' : {
    colors : ['#316fb3','#8fd5fb'],
    unit : curUnit,
    chartType: 'column'
  },
  'DNI' : {
    colors : ['#daa346'],
    unit: curUnit,
    chartType: 'column'
  },
  'D2G':{ 
    colors : ['#8fd5fb'], // 如果没有unit isEnabled= false
    chartType: 'column'
  },
  'PREC': {
    colors : ['#316fb3'],
    unit : 'mm',
    chartType: 'column'
  },
  'PWAT' :{
    colors: ['#316fb3'],
    unit: 'kg/m²',
    chartType: 'column'
  },
  'SNOWD' : {
    colors: ['#b0c9ea'],
    unit : 'mm',
    chartType: 'column'
  },
  'TEMP' : {
    colors : ['#784898'],
    unit : curTempUnit,
    chartType: 'line'
  },
  'WS' : {
    colors : ['#418f63'],
    unit : 'm/s',
    chartType: 'line'
  },
  'CDD' : {
    colors : ['#b0c9ea'],
    unit : '日度差',
    chartType: 'line'
  },
  'HDD' : {
    colors : ['#e6a5c5'],
    unit : '日度差',
    chartType: 'line'
  },
  'ALB' : {
    colors : ['#d26836'],
    chartType: 'line'
  },
  'RH' : {
    colors : ['#8acbcc'],
    unit: '%',
    chartType: 'line'
  },
}

// const charttype = 'line'
const curParam = 'D2G'

// const ghiUnit = 'kWh/m²每天'
// const ghiUnit2 = 'kWh/m²'
const isEnabled = chartConfig[curParam].unit ? true : false
// const seriesData = [{
//     name: 'GHI',
//     data: [1, 2, 3, 4, 5, 4, 3, 2, 1,
//         1, 2, 3]

// }, {
//     name: 'DIF',
//     data: [3, 2, 1, 1, 2, 3, 4, 5, 4, 3, 2, 1]

// }]

const seriesData2 = [{      
  name: 'D2G',
  data: [1, 2, 3, 4, 5, 4, 3, 2, 1,
      1, 2, 3]
}]

// const seriesData3 = [{
//     name: 'GHI',
//     data: [1, 2, 3, 4, 5, 4, 3, 2, 1,
//         1, 2, 3]

// }, {
//     name: 'DNI',
//     data: [3, 2, 1, 1, 2, 3, 4, 5, 4, 3, 2, 1]

// }, {
//     name: 'DIF',
//     data: [3, 2, 1, 1, 2, 3, 4, 5, 4, 3, 2, 1]

// }]

const chartOptions1 = {
  colors: chartConfig[curParam].colors,
  accessibility:{
    enabled:false
  },
  chart: {
    type: chartConfig[curParam].chartType,
  },
  title: undefined,
  xAxis: {
      categories: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
        text: `[${chartConfig[curParam]?.unit}]`,
        enabled: isEnabled
      },
      labels: {
        step: 1
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px"></span><table>',
      pointFormat: '<tr><td style="padding:0">{series.name}: </td>' +
          `<td style="padding:0"><b>{point.y:.1f} ${chartConfig[curParam]?.unit}</b></td></tr>`,
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: seriesData2,
  credits:{
    enabled:false //隐藏 highcharts.com
  },
  legend: {
    enabled: false
  },   
}

const chartOptions2 = {
  accessibility:{
    enabled:false
  },
  colors:['#316fb3','#daa346','#8fd5fb'],
  plotOptions: {
    series: {
      grouping: false,
      events: {
        legendItemClick: function() {
          return false;
        }
      }
    }
  },
  legend: {
    padding: 0,
    margin: 0,
    verticalAlign: 'middle',
    maxHeight: 200
  },
  title: {
    text: null
  },
  xAxis: {
    //categories: categories,
    //labels: { style: { fontWeight: 'bold' } }
    visible:false,
  },
  yAxis: {
    visible:false,
  },
  series: [{
    name: 'GHI',
    data:[]
  }, {
    name: 'DNI',
    data:[]
  }, {
    name: 'DIF',
    data:[]
  }],
  credits:{
    enabled:false //隐藏 highcharts.com
  },
}

const now = Date.now()
console.log(now);
// const getYMDHMS = (timestamp: number) => {
//   let time = new Date(timestamp)
//   let year = time.getFullYear()
//   let month = time.getMonth() + 1
//   let date = time.getDate()

//   let monthT: string = String(month), dateT:string = String(date)

//   if (month < 10) { monthT = '0' + month }
//   if (date < 10) { dateT = '0' + date }

//   return year + '-' + monthT + '-' + dateT
// }

// const past = now - 3*30*24*60*60*1000
// console.log(getYMDHMS(1597912557138));
// console.log(getYMDHMS(past));


const chartOptions3 = {
  accessibility:{
    enabled:false
  },
  title: {
        text: 'Export button texts'
    },

    credits: {
        enabled: false
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0,
            135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }],
}

const chart = ref()


const getCapture = () => {
  downloadDom(document.querySelector("#capture") as HTMLElement)
  // html2canvas(document.querySelector("#capture") as HTMLElement).then(canvas => {
  //   document.body.appendChild(canvas)
// });
}

// const chartOptions4 = {
//   accessibility:{
//     enabled:false
//   },
//   colors:['#4aa4ec','#777777','#777777'],
//   title: {
//         text: '双y轴'
//     },

//   credits: {
//       enabled: false
//   },
//   chart: {
//     alignTicks: false
//   },
// 	xAxis: [{
//     gridLineWidth: 1,
// 		categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
//     plotLines: [{
//       color: '#777777',
//       width: 1,
//       value: 2.24,
//       zIndex: 10,
//       label: {
//         text: '春分',
//         rotation: 270,
//         align: 'right',
//         x: -5,
//         y: 150,
//         style: {
//           color: '#bc261a',
//         },
//       },
//     }, {
//       color: '#777777',
//       width: 1,
//       value: 5.24,
//       zIndex: 10,
//       label: {
//         text: '夏至',
//         rotation: 270,
//         align: 'right',
//         x: -5,
//         y: 150,
//         style: {
//           color: '#bc261a',
//         },
//       },
//     }, {
//       color: '#777777',
//       width: 1,
//       value: 8.24,
//       zIndex: 10,
//       label: {
//         text: '秋分',
//         rotation: 270,
//         align: 'right',
//         x: -5,
//         y: 150,
//         style: {
//           color: '#bc261a',
//         },
//       },
//     }, {
//       color: '#777777',
//       width: 1,
//       value: 11.24,
//       zIndex: 10,
//       label: {
//         text: '冬至',
//         rotation: 270,
//         align: 'right',
//         x: -5,
//         y: 150,
//         style: {
//           color: '#bc261a',
//         },
//       },
//     }]
// 	},],
// 	yAxis: [{ // Primary yAxis
// 		labels: {
// 			// format: '{value} °C',
// 			style: {
// 				color: ['#777777'],
// 			}
// 		},

//     min: 0,
//     max: 24,
//     tickInterval: 2,
// 		title: {
// 			text: '日长[小时]',
// 			style: {
// 				color: ['#777777']
// 			}
// 		}
// 	}, { // Secondary yAxis
// 		title: {
// 			text: '最小天顶角[°]',
// 			style: {
// 				color: ['#4aa4ec']
// 			}
// 		},
//     min: 0,
//     max: 60,
//     tickInterval: 5,
// 		labels: {
// 			style: {
// 				color: ['#4aa4ec']
// 			}
// 		},
// 		opposite: true
// 	}],
// 	tooltip: {
// 		crosshairs: true,
// 		animation: true,
// 		shared: true,
// 		formatter: function() {
// 			return this.x + '<br>'
// 			+ this.points[0].series.name + ': ' + this.points[0].y + '<br>'
// 			+ this.points[1].series.name + ': ' + this.points[1].y + '<br>'
// 			+ this.points[2].series.name + ': ' + this.points[2].y;
// 		}
// 	},
// 	series: [{
//     marker: {
//       enabled: false,
//     },
// 		name: '最小天顶角[°]',
// 		type: 'spline',
// 		yAxis: 1,
// 		data: [50, 45, 40, 35, 30, 25, 20, 6, 20, 30, 40, 54.4],
// 		// tooltip: {
// 		// 	pointFormat: '<div><span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b style="color: {series.color}">{point.y:.1f}</b></div>',
//     //   footerFormat: '</table>',
// 		// }
// 	}, {
//     marker: {
//       enabled: false,
//     },
// 		name: '日长，地平线校正[小时]',
// 		type: 'spline',
// 		data: [10,11, 12, 13, 14, 14, 14, 13, 12, 12, 10, 9],
// 		// tooltip: {
// 		// 	pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}</b>'
// 		// },
  
//     dashStyle: 'Dash' 
    
// 	}, {
//     marker: {
//       enabled: false,
//     },
// 		name: '日长[小时]',
// 		type: 'spline',
// 		data: [11,12, 13, 14.5, 15, 15, 15, 14, 13, 13, 11, 10],
// 		// tooltip: {
// 		// 	pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}</b> '
// 		// }
// 	}]
// }

// 原生导出图片方法，太慢了
// import Highcharts from 'highcharts'
// exporting(Highcharts)
// const exportPNG = (type: string) => {
//   // console.log(chart.value.chart.exportChart)
//   if (chart.value) {
//     chart.value.chart.exportChart({ type })
//   }
//   // chart.value.chart.exportChart('image/png')
//   // 'image/svg+xml' 'application/pdf'
// }

// const tryString = 'a,b,,c'
// console.log(tryString.split(','));

const color1 = 'BED2C1';
// const color2 = 'ECF4B2';
const color3 = 'FDE7A0';
const ratio = 0.7;
const hex = function(x: any) {
    x = x.toString(16);
    return (x.length == 1) ? '0' + x : x;
};

const r = Math.ceil(parseInt(color1.substring(0,2), 16) * ratio + parseInt(color3.substring(0,2), 16) * (1-ratio));
const g = Math.ceil(parseInt(color1.substring(2,4), 16) * ratio + parseInt(color3.substring(2,4), 16) * (1-ratio));
const b = Math.ceil(parseInt(color1.substring(4,6), 16) * ratio + parseInt(color3.substring(4,6), 16) * (1-ratio));

const middle = `#${hex(r)}${hex(g)}${hex(b)}`;


// 保留三位小数后 验证经度
const longrg = /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/;
const longitude = 123.123;
if(!longrg.test(String(longitude))){
  console.log("经度整数部分为0-180,小数部分为0到6位!");
}

// 保留三位小数后 验证纬度
const latreg = /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/;
const latitude =-89.22;
if(!latreg.test(String(latitude))){
  console.log("纬度整数部分为0-90,小数部分为0到6位!");
}

// 提取浮点数包括正负
const patrn = /(\-|\+)?[0-9]+\.?[0-9]*/g;
const inputeText = ' 12.234E   23.24N '
const inputTrim = inputeText.trim().replace(/\s+/g, ',')
// 提取带度或者带方向的完整格式，把所有空格也好，分号也好，换成这个
const direaction = /^(\-|\+)?[0-9]+\.?[0-9]*\°?[N]?[\,\;\s](\-|\+)?[0-9]+\.?[0-9]*\°?[E]?$/g
console.log(inputeText.match(patrn));
console.log(inputTrim.match(direaction));

// 1.提取有空格，逗号，分号的所有带度或者带NE的所有字符，匹配不到就返回输入错误
// 2.提取数字部分，默认纬度，经度。有负数，返回错误
// 3.取三位小数，分别放入经纬度验证中，有错误，返回错误
// 4.向高德求取结果

</script>

<template>
  <highchart :options="chartOptions" class="highcharts-container small-chart"></highchart>
  <div id="capture">
    <div class="hidden">隐藏部分</div>
    <highchart :options="chartOptions1" class="highcharts-container large-chart"></highchart>
  </div>
  <highchart :options="chartOptions2" class="highcharts-container legend-chart"></highchart>
  <highchart :options="chartOptions3" class="highcharts-container large-chart" ref="chart"></highchart>
  <svg-icon iconName="earth" iconSize="25"></svg-icon>
  <button @click="getCapture">下载截图</button>
  <!-- <highcharts :options="chartOptions4" class="highcharts-container large-chart" ref="chart"></highcharts> -->
  <div :style="{backgroundColor: middle, width: '20px', height: '20px'}"></div>
  <div :style="{backgroundColor: '#' + color1, width: '20px', height: '20px'}"></div>
  <div :style="{backgroundColor: '#' + color3, width: '20px', height: '20px'}"></div>
</template>

<style scoped>
.small-chart{
  width: 60px;
  height: 20px;
}

#capture{
  position: relative;
  padding: 2rem;
  background-color: white;
}

.hidden{
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.legend-chart{
  width: 640px;
  height: 200px;
}

.large-chart {
  width: 526px; 
  height: 320px;
}

.highcharts-container {
  margin: auto;
  border: none;
}
</style>
