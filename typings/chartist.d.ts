declare module Chartist {
  interface LineChartOptions {
    areaBase: number,
    chartPadding: { top: number, right: number, bottom: number, left: number },
    fullWidth: boolean,
    height: number|undefined,
    high: number|undefined,
    lineSmooth: boolean,
    low: number|undefined,
    plugins: any[],
    reverseData: boolean,
    showArea: boolean,
    showGridBackground: boolean,
    showLine: boolean,
    showPoint: boolean,
    width: number|undefined
    axisX: { showLabel: boolean, showGrid: boolean },
    axisY: { showLabel: boolean, showGrid: boolean }
  }
  interface LineChartData {
    labels: string[],
    series: number[][]
  }

  export class Line {
    constructor(name: string|Node, data: Partial<LineChartData>, options: Partial<LineChartOptions>);

    public options: LineChartOptions;
    public data: LineChartData;

    public update(data?: Partial<LineChartData>, options?: Partial<LineChartOptions>, override?: boolean): Line;
  }

  export type Plugin = (lineChart: Chartist.Line) => void;
  
  // export as inteface to allow other files to extend by adding plugins
  export interface PluginsInterface {
  }

  export var plugins: PluginsInterface;
}
