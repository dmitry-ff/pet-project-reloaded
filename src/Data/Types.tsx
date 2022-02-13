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
  data:
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
    }
  }[]
}

export type TResponse = {
  location: {
    name: string,
    region: string,
    country: string,
    lat: number,
    lon: number,
    tz_id: string,
    localtime_epoch: number,
    localtime: string
  }
  current: {
    condition: {},
    uv: number
  },
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
      astro: {},
      hour: {
        condition: {}
      }[],

    }[]
  }
}