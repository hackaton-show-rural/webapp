import Link from "next/link";
import { useEffect, useState } from "react";

const Calendar = () => {
  const [calendarData, setCalendarData] = useState();

  const [cleannedData, setCleannedData] = useState();

  const getCalendar = async () => {
    /* axios
      .get(`/http://26.2.137.63:8080/coleta/`)
      .then((res) => setCalendarData(res.data)); */

    setCalendarData({
      cod: "200",
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1676030400,
          main: {
            temp: 20.63,
            feels_like: 20.86,
            temp_min: 20.63,
            temp_max: 24.9,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 933,
            humidity: 81,
            temp_kf: -4.27,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10d" },
          ],
          clouds: { all: 18 },
          wind: { speed: 1.45, deg: 48, gust: 2.54 },
          visibility: 10000,
          pop: 0.4,
          rain: { "3h": 0.22 },
          sys: { pod: "d" },
          dt_txt: "2023-02-10 12:00:00",
        },
        {
          dt: 1676041200,
          main: {
            temp: 25.85,
            feels_like: 26.06,
            temp_min: 25.85,
            temp_max: 29.53,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 933,
            humidity: 60,
            temp_kf: -3.68,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "nuvens dispersas",
              icon: "03d",
            },
          ],
          clouds: { all: 25 },
          wind: { speed: 2.61, deg: 26, gust: 2.04 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "d" },
          dt_txt: "2023-02-10 15:00:00",
        },
        {
          dt: 1676052000,
          main: {
            temp: 27.51,
            feels_like: 28.15,
            temp_min: 27.51,
            temp_max: 27.51,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 930,
            humidity: 53,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10d" },
          ],
          clouds: { all: 44 },
          wind: { speed: 1.28, deg: 319, gust: 2.47 },
          visibility: 10000,
          pop: 0.32,
          rain: { "3h": 0.26 },
          sys: { pod: "d" },
          dt_txt: "2023-02-10 18:00:00",
        },
        {
          dt: 1676062800,
          main: {
            temp: 20.15,
            feels_like: 20.6,
            temp_min: 20.15,
            temp_max: 20.15,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 929,
            humidity: 91,
            temp_kf: 0,
          },
          weather: [
            {
              id: 501,
              main: "Rain",
              description: "chuva moderada",
              icon: "10d",
            },
          ],
          clouds: { all: 90 },
          wind: { speed: 1.51, deg: 157, gust: 3.5 },
          visibility: 10000,
          pop: 0.69,
          rain: { "3h": 7.6 },
          sys: { pod: "d" },
          dt_txt: "2023-02-10 21:00:00",
        },
        {
          dt: 1676073600,
          main: {
            temp: 18.88,
            feels_like: 19.12,
            temp_min: 18.88,
            temp_max: 18.88,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 930,
            humidity: 88,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10n" },
          ],
          clouds: { all: 90 },
          wind: { speed: 1.04, deg: 74, gust: 1.17 },
          visibility: 10000,
          pop: 0.96,
          rain: { "3h": 0.32 },
          sys: { pod: "n" },
          dt_txt: "2023-02-11 00:00:00",
        },
        {
          dt: 1676084400,
          main: {
            temp: 17.65,
            feels_like: 17.9,
            temp_min: 17.65,
            temp_max: 17.65,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 931,
            humidity: 93,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10n" },
          ],
          clouds: { all: 70 },
          wind: { speed: 1.84, deg: 64, gust: 3.98 },
          visibility: 10000,
          pop: 0.52,
          rain: { "3h": 0.19 },
          sys: { pod: "n" },
          dt_txt: "2023-02-11 03:00:00",
        },
        {
          dt: 1676095200,
          main: {
            temp: 17.83,
            feels_like: 18.2,
            temp_min: 17.83,
            temp_max: 17.83,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 930,
            humidity: 97,
            temp_kf: 0,
          },
          weather: [
            { id: 803, main: "Clouds", description: "nublado", icon: "04n" },
          ],
          clouds: { all: 53 },
          wind: { speed: 2.55, deg: 62, gust: 8.02 },
          visibility: 10000,
          pop: 0.4,
          sys: { pod: "n" },
          dt_txt: "2023-02-11 06:00:00",
        },
        {
          dt: 1676106000,
          main: {
            temp: 17.1,
            feels_like: 17.32,
            temp_min: 17.1,
            temp_max: 17.1,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 930,
            humidity: 94,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "nuvens dispersas",
              icon: "03n",
            },
          ],
          clouds: { all: 50 },
          wind: { speed: 1.74, deg: 40, gust: 5 },
          visibility: 10000,
          pop: 0.08,
          sys: { pod: "n" },
          dt_txt: "2023-02-11 09:00:00",
        },
        {
          dt: 1676116800,
          main: {
            temp: 22.16,
            feels_like: 22.39,
            temp_min: 22.16,
            temp_max: 22.16,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 933,
            humidity: 75,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "nuvens dispersas",
              icon: "03d",
            },
          ],
          clouds: { all: 39 },
          wind: { speed: 2.83, deg: 45, gust: 5.07 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "d" },
          dt_txt: "2023-02-11 12:00:00",
        },
        {
          dt: 1676127600,
          main: {
            temp: 27.43,
            feels_like: 28.3,
            temp_min: 27.43,
            temp_max: 27.43,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 933,
            humidity: 56,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "céu limpo", icon: "01d" },
          ],
          clouds: { all: 1 },
          wind: { speed: 2.78, deg: 40, gust: 2.89 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "d" },
          dt_txt: "2023-02-11 15:00:00",
        },
        {
          dt: 1676138400,
          main: {
            temp: 29.74,
            feels_like: 29.98,
            temp_min: 29.74,
            temp_max: 29.74,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 931,
            humidity: 45,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10d" },
          ],
          clouds: { all: 15 },
          wind: { speed: 2.82, deg: 33, gust: 3.73 },
          visibility: 10000,
          pop: 0.27,
          rain: { "3h": 0.18 },
          sys: { pod: "d" },
          dt_txt: "2023-02-11 18:00:00",
        },
        {
          dt: 1676149200,
          main: {
            temp: 26.46,
            feels_like: 26.46,
            temp_min: 26.46,
            temp_max: 26.46,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 929,
            humidity: 66,
            temp_kf: 0,
          },
          weather: [
            { id: 803, main: "Clouds", description: "nublado", icon: "04d" },
          ],
          clouds: { all: 61 },
          wind: { speed: 2.79, deg: 20, gust: 4.79 },
          visibility: 10000,
          pop: 0.01,
          sys: { pod: "d" },
          dt_txt: "2023-02-11 21:00:00",
        },
        {
          dt: 1676160000,
          main: {
            temp: 20.55,
            feels_like: 21.12,
            temp_min: 20.55,
            temp_max: 20.55,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 929,
            humidity: 94,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "nuvens dispersas",
              icon: "03n",
            },
          ],
          clouds: { all: 45 },
          wind: { speed: 2.12, deg: 26, gust: 4.76 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "n" },
          dt_txt: "2023-02-12 00:00:00",
        },
        {
          dt: 1676170800,
          main: {
            temp: 19.73,
            feels_like: 20.27,
            temp_min: 19.73,
            temp_max: 19.73,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 929,
            humidity: 96,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "céu limpo", icon: "01n" },
          ],
          clouds: { all: 0 },
          wind: { speed: 2.25, deg: 35, gust: 6.39 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "n" },
          dt_txt: "2023-02-12 03:00:00",
        },
        {
          dt: 1676181600,
          main: {
            temp: 19.31,
            feels_like: 19.75,
            temp_min: 19.31,
            temp_max: 19.31,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 929,
            humidity: 94,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "céu limpo", icon: "01n" },
          ],
          clouds: { all: 6 },
          wind: { speed: 2.68, deg: 44, gust: 8.46 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "n" },
          dt_txt: "2023-02-12 06:00:00",
        },
        {
          dt: 1676192400,
          main: {
            temp: 18.4,
            feels_like: 18.8,
            temp_min: 18.4,
            temp_max: 18.4,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 930,
            humidity: 96,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "céu limpo", icon: "01n" },
          ],
          clouds: { all: 9 },
          wind: { speed: 2.86, deg: 45, gust: 9.58 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "n" },
          dt_txt: "2023-02-12 09:00:00",
        },
        {
          dt: 1676203200,
          main: {
            temp: 23.26,
            feels_like: 23.57,
            temp_min: 23.26,
            temp_max: 23.26,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 932,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "céu limpo", icon: "01d" },
          ],
          clouds: { all: 8 },
          wind: { speed: 4.62, deg: 39, gust: 9.04 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "d" },
          dt_txt: "2023-02-12 12:00:00",
        },
        {
          dt: 1676214000,
          main: {
            temp: 28.32,
            feels_like: 29.13,
            temp_min: 28.32,
            temp_max: 28.32,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 932,
            humidity: 53,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "céu limpo", icon: "01d" },
          ],
          clouds: { all: 0 },
          wind: { speed: 4.39, deg: 28, gust: 5.77 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "d" },
          dt_txt: "2023-02-12 15:00:00",
        },
        {
          dt: 1676224800,
          main: {
            temp: 30.2,
            feels_like: 30.44,
            temp_min: 30.2,
            temp_max: 30.2,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 930,
            humidity: 44,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "céu limpo", icon: "01d" },
          ],
          clouds: { all: 0 },
          wind: { speed: 3.58, deg: 22, gust: 3.83 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "d" },
          dt_txt: "2023-02-12 18:00:00",
        },
        {
          dt: 1676235600,
          main: {
            temp: 27.55,
            feels_like: 28.54,
            temp_min: 27.55,
            temp_max: 27.55,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 929,
            humidity: 57,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "céu limpo", icon: "01d" },
          ],
          clouds: { all: 0 },
          wind: { speed: 2.86, deg: 15, gust: 4.31 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "d" },
          dt_txt: "2023-02-12 21:00:00",
        },
        {
          dt: 1676246400,
          main: {
            temp: 20.91,
            feels_like: 21.22,
            temp_min: 20.91,
            temp_max: 20.91,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 928,
            humidity: 83,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "céu limpo", icon: "01n" },
          ],
          clouds: { all: 0 },
          wind: { speed: 2.13, deg: 12, gust: 5.86 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "n" },
          dt_txt: "2023-02-13 00:00:00",
        },
        {
          dt: 1676257200,
          main: {
            temp: 20.14,
            feels_like: 20.61,
            temp_min: 20.14,
            temp_max: 20.14,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 928,
            humidity: 92,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "céu limpo", icon: "01n" },
          ],
          clouds: { all: 0 },
          wind: { speed: 2.53, deg: 26, gust: 8.27 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "n" },
          dt_txt: "2023-02-13 03:00:00",
        },
        {
          dt: 1676268000,
          main: {
            temp: 19.37,
            feels_like: 19.87,
            temp_min: 19.37,
            temp_max: 19.37,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 928,
            humidity: 96,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "céu limpo", icon: "01n" },
          ],
          clouds: { all: 4 },
          wind: { speed: 2.77, deg: 23, gust: 9.79 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "n" },
          dt_txt: "2023-02-13 06:00:00",
        },
        {
          dt: 1676278800,
          main: {
            temp: 18.48,
            feels_like: 18.97,
            temp_min: 18.48,
            temp_max: 18.48,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 929,
            humidity: 99,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "algumas nuvens",
              icon: "02n",
            },
          ],
          clouds: { all: 21 },
          wind: { speed: 2.12, deg: 42, gust: 7.72 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "n" },
          dt_txt: "2023-02-13 09:00:00",
        },
        {
          dt: 1676289600,
          main: {
            temp: 23.61,
            feels_like: 24.06,
            temp_min: 23.61,
            temp_max: 23.61,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 932,
            humidity: 78,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "nuvens dispersas",
              icon: "03d",
            },
          ],
          clouds: { all: 25 },
          wind: { speed: 3.96, deg: 33, gust: 7.35 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "d" },
          dt_txt: "2023-02-13 12:00:00",
        },
        {
          dt: 1676300400,
          main: {
            temp: 28.7,
            feels_like: 30,
            temp_min: 28.7,
            temp_max: 28.7,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 932,
            humidity: 56,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "céu limpo", icon: "01d" },
          ],
          clouds: { all: 2 },
          wind: { speed: 4.25, deg: 13, gust: 5.45 },
          visibility: 10000,
          pop: 0,
          sys: { pod: "d" },
          dt_txt: "2023-02-13 15:00:00",
        },
        {
          dt: 1676311200,
          main: {
            temp: 28.07,
            feels_like: 29.9,
            temp_min: 28.07,
            temp_max: 28.07,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 930,
            humidity: 63,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10d" },
          ],
          clouds: { all: 16 },
          wind: { speed: 3.35, deg: 360, gust: 3.77 },
          visibility: 10000,
          pop: 0.4,
          rain: { "3h": 0.91 },
          sys: { pod: "d" },
          dt_txt: "2023-02-13 18:00:00",
        },
        {
          dt: 1676322000,
          main: {
            temp: 26.16,
            feels_like: 26.16,
            temp_min: 26.16,
            temp_max: 26.16,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 928,
            humidity: 72,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10d" },
          ],
          clouds: { all: 5 },
          wind: { speed: 3.24, deg: 17, gust: 5.05 },
          visibility: 10000,
          pop: 0.55,
          rain: { "3h": 0.79 },
          sys: { pod: "d" },
          dt_txt: "2023-02-13 21:00:00",
        },
        {
          dt: 1676332800,
          main: {
            temp: 20.9,
            feels_like: 21.55,
            temp_min: 20.9,
            temp_max: 20.9,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 929,
            humidity: 96,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10n" },
          ],
          clouds: { all: 4 },
          wind: { speed: 2.34, deg: 19, gust: 7.58 },
          visibility: 10000,
          pop: 0.59,
          rain: { "3h": 0.97 },
          sys: { pod: "n" },
          dt_txt: "2023-02-14 00:00:00",
        },
        {
          dt: 1676343600,
          main: {
            temp: 20.51,
            feels_like: 21.15,
            temp_min: 20.51,
            temp_max: 20.51,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 929,
            humidity: 97,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "nuvens dispersas",
              icon: "03n",
            },
          ],
          clouds: { all: 36 },
          wind: { speed: 2.59, deg: 31, gust: 9.06 },
          visibility: 10000,
          pop: 0.09,
          sys: { pod: "n" },
          dt_txt: "2023-02-14 03:00:00",
        },
        {
          dt: 1676354400,
          main: {
            temp: 20.01,
            feels_like: 20.6,
            temp_min: 20.01,
            temp_max: 20.01,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 928,
            humidity: 97,
            temp_kf: 0,
          },
          weather: [
            { id: 803, main: "Clouds", description: "nublado", icon: "04n" },
          ],
          clouds: { all: 68 },
          wind: { speed: 2.73, deg: 14, gust: 9.65 },
          visibility: 10000,
          pop: 0.05,
          sys: { pod: "n" },
          dt_txt: "2023-02-14 06:00:00",
        },
        {
          dt: 1676365200,
          main: {
            temp: 19.28,
            feels_like: 19.82,
            temp_min: 19.28,
            temp_max: 19.28,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 928,
            humidity: 98,
            temp_kf: 0,
          },
          weather: [
            { id: 804, main: "Clouds", description: "nublado", icon: "04n" },
          ],
          clouds: { all: 95 },
          wind: { speed: 2.26, deg: 34, gust: 8.03 },
          visibility: 10000,
          pop: 0.37,
          sys: { pod: "n" },
          dt_txt: "2023-02-14 09:00:00",
        },
        {
          dt: 1676376000,
          main: {
            temp: 23.1,
            feels_like: 23.71,
            temp_min: 23.1,
            temp_max: 23.1,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 930,
            humidity: 86,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10d" },
          ],
          clouds: { all: 97 },
          wind: { speed: 3.53, deg: 11, gust: 7.4 },
          visibility: 10000,
          pop: 0.73,
          rain: { "3h": 0.19 },
          sys: { pod: "d" },
          dt_txt: "2023-02-14 12:00:00",
        },
        {
          dt: 1676386800,
          main: {
            temp: 27.9,
            feels_like: 29.75,
            temp_min: 27.9,
            temp_max: 27.9,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 930,
            humidity: 64,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10d" },
          ],
          clouds: { all: 99 },
          wind: { speed: 4.66, deg: 355, gust: 6.76 },
          visibility: 10000,
          pop: 0.68,
          rain: { "3h": 0.84 },
          sys: { pod: "d" },
          dt_txt: "2023-02-14 15:00:00",
        },
        {
          dt: 1676397600,
          main: {
            temp: 25.92,
            feels_like: 26.73,
            temp_min: 25.92,
            temp_max: 25.92,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 929,
            humidity: 83,
            temp_kf: 0,
          },
          weather: [
            {
              id: 501,
              main: "Rain",
              description: "chuva moderada",
              icon: "10d",
            },
          ],
          clouds: { all: 94 },
          wind: { speed: 3.92, deg: 349, gust: 6.88 },
          visibility: 10000,
          pop: 0.88,
          rain: { "3h": 3.26 },
          sys: { pod: "d" },
          dt_txt: "2023-02-14 18:00:00",
        },
        {
          dt: 1676408400,
          main: {
            temp: 23.65,
            feels_like: 24.47,
            temp_min: 23.65,
            temp_max: 23.65,
            pressure: 1007,
            sea_level: 1007,
            grnd_level: 927,
            humidity: 92,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10d" },
          ],
          clouds: { all: 68 },
          wind: { speed: 3.07, deg: 10, gust: 7.65 },
          visibility: 10000,
          pop: 0.93,
          rain: { "3h": 1.41 },
          sys: { pod: "d" },
          dt_txt: "2023-02-14 21:00:00",
        },
        {
          dt: 1676419200,
          main: {
            temp: 21.25,
            feels_like: 21.88,
            temp_min: 21.25,
            temp_max: 21.25,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 927,
            humidity: 94,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10n" },
          ],
          clouds: { all: 59 },
          wind: { speed: 2.27, deg: 42, gust: 7.55 },
          visibility: 10000,
          pop: 0.89,
          rain: { "3h": 0.16 },
          sys: { pod: "n" },
          dt_txt: "2023-02-15 00:00:00",
        },
        {
          dt: 1676430000,
          main: {
            temp: 20.8,
            feels_like: 21.42,
            temp_min: 20.8,
            temp_max: 20.8,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 927,
            humidity: 95,
            temp_kf: 0,
          },
          weather: [
            { id: 803, main: "Clouds", description: "nublado", icon: "04n" },
          ],
          clouds: { all: 59 },
          wind: { speed: 2.83, deg: 20, gust: 11.01 },
          visibility: 10000,
          pop: 0.31,
          sys: { pod: "n" },
          dt_txt: "2023-02-15 03:00:00",
        },
        {
          dt: 1676440800,
          main: {
            temp: 20.57,
            feels_like: 21.16,
            temp_min: 20.57,
            temp_max: 20.57,
            pressure: 1007,
            sea_level: 1007,
            grnd_level: 926,
            humidity: 95,
            temp_kf: 0,
          },
          weather: [
            { id: 803, main: "Clouds", description: "nublado", icon: "04n" },
          ],
          clouds: { all: 66 },
          wind: { speed: 3.01, deg: 17, gust: 11.46 },
          visibility: 10000,
          pop: 0.24,
          sys: { pod: "n" },
          dt_txt: "2023-02-15 06:00:00",
        },
        {
          dt: 1676451600,
          main: {
            temp: 20.15,
            feels_like: 20.78,
            temp_min: 20.15,
            temp_max: 20.15,
            pressure: 1007,
            sea_level: 1007,
            grnd_level: 926,
            humidity: 98,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "chuva leve", icon: "10n" },
          ],
          clouds: { all: 85 },
          wind: { speed: 3.47, deg: 352, gust: 13.71 },
          visibility: 10000,
          pop: 0.99,
          rain: { "3h": 1.35 },
          sys: { pod: "n" },
          dt_txt: "2023-02-15 09:00:00",
        },
      ],
      city: {
        id: 3466779,
        name: "Cascavel",
        coord: { lat: -24.98, lon: -53.33 },
        country: "BR",
        population: 257172,
        timezone: -10800,
        sunrise: 1676020579,
        sunset: 1676067534,
      },
    });
  };

  useEffect(() => {
    getCalendar();
  }, []);

  useEffect(() => {
    if (calendarData) {
      setCleannedData(cleanData(calendarData));
    }
  }, [calendarData]);

  if (!cleannedData) return <div>Carregando...</div>;

  return (
    <div className="m-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Previsão do tempo</h1>
        <p className="ml-2 text-gray-500">Cascavel - PR</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Próximos 5 dias</h2>
        <p className="ml-2 text-gray-500">
          Previsão de temperatura, umidade e vento
        </p>
      </div>

      <div className="bg-grey-200 flex  flex-row gap-4 overflow-y-scroll p-2 shadow-lg">
        {cleannedData.daysOfWeek.map((day, index) => {
          return (
            <div className=" flex min-w-[9rem] flex-col gap-2 ">
              <p className="text-xl font-bold "> {day.dayNum} </p>
              <p className="text-md font-semibold">({day.day})</p>
              <p className="text-md font-semibold ">
                {cleannedData.temperature[index]}ºC
              </p>
              <p className="text-gray-500">
                {cleannedData.humidity[index]}
                <span className="text-gray-500">%</span>
              </p>
              <p className="text-gray-500">{cleannedData.wind[index]}km/h</p>

              <div></div>
            </div>
          );
        })}
      </div>

      <button className="container mt-2 rounded bg-green-500 p-1 text-lg text-purple-50 transition-all hover:bg-green-500">
        <Link href="/aplicador/aplicar">Ir para a aplicação</Link>
      </button>
    </div>
  );
};

const cleanData = (data) => {
  // filter the calendarData to get the days, filtering the, wind, rain, umidity, and temperature
  const days = data.list.filter((item) => {
    return item.dt_txt.includes("12:00:00");
  });

  // get the days of the week
  const daysOfWeek = days.map((item) => {
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleString("pt-BR", { weekday: "long" });
    const dayNum =
      date.toLocaleString("pt-BR", { day: "2-digit" }) +
      "/" +
      date.toLocaleString("pt-BR", { month: "2-digit" });

    return { day, dayNum };
  });

  // get the temperature
  const temperature = days.map((item) => {
    return item.main.temp;
  });

  // get the humidity
  const humidity = days.map((item) => {
    return item.main.humidity;
  });

  // get the wind
  const wind = days.map((item) => {
    return item.wind.speed;
  });

  // get the rain
  const rain = days.map((item) => {
    return item.rain?.["3h"];
  });

  // get the weather
  const weather = days.map((item) => {
    return item.weather[0].description;
  });

  return {
    daysOfWeek,
    temperature,
    humidity,
    wind,
    rain,
    weather,
  };
};

export default Calendar;
