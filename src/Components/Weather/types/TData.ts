export type TData = {
  date: string,
  day: {
    maxtemp_c: number,
    mintemp_c: number,
    avgtemp_c: number,
    maxwind_kph: number,
    daily_chance_of_rain: number,
    daily_chance_of_snow: number,
    condition: {
      text: string,
      icon: string
    },
  },
}