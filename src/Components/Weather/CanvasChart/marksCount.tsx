import _ from "lodash";
import { TDataTemperature } from './CanvasChart'

export function marksCount(dataTemperatures: TDataTemperature) {
  let marksArr: number[] = [];


  for (let i = _.min(dataTemperatures.minT)!; i <= _.max(dataTemperatures.maxT)! + 1; i++) {
    marksArr.push(i);
  }

  return _.reverse(marksArr);
};
