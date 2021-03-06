var config = {
  lang: 'nl',
  time: {
    timeFormat: 12
  },
  weather: {
    //change weather params here:
    //units: metric or imperial
    params: {
      q: 'Baarn,Netherlands',
      units: 'metric',
      // if you want a different lang for the weather that what is set above, change it here
      lang: 'nl',
      APPID: 'YOUR_FREE_OPENWEATHER_API_KEY'
    }
  },
  calendar: {
    maximumEntries: 10,
    url: "https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M"
  },
  news: {
    feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
  }
};
