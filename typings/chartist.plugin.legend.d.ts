declare module Chartist {
    export interface LegendOpts {
        className: '',
        width: number,
        classNames: string[],
        removeAll: boolean,
        legendNames: string[]|false,
        clickable: boolean,
        onClick: null|((chart:HTMLElement, e:Event) => void),
        position: 'top'|'bottom'|HTMLElement
    }

    export interface PluginsInterface {
      legend(opts: Partial<LegendOpts>): Plugin;
    }
  }
  