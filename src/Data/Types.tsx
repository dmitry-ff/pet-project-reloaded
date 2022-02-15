export type TUserData = {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: CanvasPattern[];
      borderColor: string[];
      borderWidth: number;
      hoverOffset: number;
    }[];
  }
};
export type TLineData = {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  }
};

export type TLoading = {
  loading: boolean;

};

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
    }
  }
}

export type TResponse = {
  forecast: {
    forecastday:
    {
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
        }
      },
    }[]
  }
}