// CGV 상영정보 만들어보기

const movie = {
  ageLimit: 15,
  title: "롱레그스",
  isShowing: true,
  genre: ["호러", "스릴러"],
  runningtime: "101분",
  date: "2024.10.30개봉",
  theather: [
    {
      movieType: "2D",
      theatherNumber: "6",
      theatherfloor: 6,
      availableSeats: 92,
      showTimes: [{ startTime: "19:00", remainSeat: 91 }],
    },
    {
      movieType: "2D",
      theatherNumber: "8",
      theatherfloor: 6,
      availableSeats: 142,
      showTimes: [{ startTime: "22:10", remainSeat: 142 }],
    },
  ],
};
