import { useEffect, useState } from "react";

const BanglaClock = () => {
  function currentTimeFind() {
    const date = new Date();
    let timeofDay = null;

    if (date.getHours() >= 4 && date.getHours() < 7) {
      timeofDay = "ভোর";
    } else if (date.getHours() >= 7 && date.getHours() < 12) {
      timeofDay = "সকাল";
    } else if (date.getHours() >= 12 && date.getHours() < 16) {
      timeofDay = "দুপুর";
    } else if (date.getHours() >= 16 && date.getHours() < 18) {
      timeofDay = "বিকাল";
    } else if (date.getHours() >= 18 && date.getHours() < 20) {
      timeofDay = "সন্ধ্যা";
    } else {
      timeofDay = "রাত";
    }

    const banglaGreetings = {
      ভোর: {
        greeting: "ভোরের শুভেচ্ছা!",
      },
      সকাল: {
        greeting: "শুভ সকাল!",
      },
      দুপুর: {
        greeting: "শুভ দুপুর!",
      },
      বিকাল: {
        greeting: "শুভ বিকাল!",
      },
      সন্ধ্যা: {
        greeting: "শুভ সন্ধ্যা!",
      },
      রাত: {
        greeting: "শুভ রাত্রি!",
      },
    };

    let hour = (date.getHours() % 12 != 0 ? date.getHours() % 12 : 12).toString().padStart(2, 0);
    let minute = date.getMinutes().toString().padStart(2, 0);
    let second = date.getSeconds().toString().padStart(2, 0);
    let currentDate = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    const banglaMonths = [
      { name: "বৈশাখ", start: [3, 14], end: [4, 14] }, // April 14 – May 14
      { name: "জ্যৈষ্ঠ", start: [4, 15], end: [5, 14] }, // May 15 – June 14
      { name: "আষাঢ়", start: [5, 15], end: [6, 15] }, // June 15 – July 15
      { name: "শ্রাবণ", start: [6, 16], end: [7, 16] }, // July 16 – August 16
      { name: "ভাদ্র", start: [7, 17], end: [8, 16] }, // August 17 – September 16
      { name: "আশ্বিন", start: [8, 17], end: [9, 17] }, // September 17 – October 17
      { name: "কার্তিক", start: [9, 18], end: [10, 16] }, // October 18 – November 16
      { name: "অগ্রহায়ণ", start: [10, 17], end: [11, 15] }, // November 17 – December 15
      { name: "পৌষ", start: [11, 16], end: [0, 14] }, // December 16 – January 14
      { name: "মাঘ", start: [0, 15], end: [1, 12] }, // January 15 – February 12
      { name: "ফাল্গুন", start: [1, 13], end: [2, 14] }, // February 13 – March 14
      { name: "চৈত্র", start: [2, 15], end: [3, 13] }, // March 15 – April 13
    ];

    const BanglaNum = {
      0: "০",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
    };

    hour = BanglaNum[hour[0]] + BanglaNum[hour[1]];
    minute = BanglaNum[minute[0]] + BanglaNum[minute[1]];
    second = BanglaNum[second[0]] + BanglaNum[second[1]];

    const dayName = getDayName(date);

    let banglaYear = (
      currentDate >= 14 && currentMonth >= 3 ? currentYear - 593 : currentYear - 594
    ).toString();
    banglaYear =
      BanglaNum[banglaYear[0]] +
      BanglaNum[banglaYear[1]] +
      BanglaNum[banglaYear[2]] +
      BanglaNum[banglaYear[3]];

    const banglaMonth = getBanglaMonth(currentDate, currentMonth);
    let banglaDate = null;

    for (let i = 0; i < banglaMonths.length; i++) {
      if (banglaMonth == banglaMonths[i].name) {
        if (currentMonth == banglaMonths[i].start[0]) {
          banglaDate = currentDate - banglaMonths[i].start[1] + 1;
        } else if (currentMonth == banglaMonths[i].end[0]) {
          banglaDate =
            new Date(currentYear, currentMonth, 0).getDate() -
            banglaMonths[i].start[1] +
            1 +
            currentDate;
        }
      }
    }
    banglaDate = banglaDate.toString().padStart(2, 0);
    banglaDate = BanglaNum[banglaDate[0]] + BanglaNum[banglaDate[1]];

    return [
      timeofDay,
      hour,
      minute,
      second,
      dayName,
      banglaDate,
      banglaMonth,
      banglaYear,
      banglaGreetings[timeofDay].greeting,
      banglaGreetings[timeofDay].message,
    ];
  }

  function getDayName(date) {
    let dayName = null;
    switch (date.getDay()) {
      case 1:
        dayName = "সোমবার";
        break;
      case 2:
        dayName = "মঙ্গলবার";
        break;
      case 3:
        dayName = "বুধবার";
        break;
      case 4:
        dayName = "বৃহস্পতিবার";
        break;
      case 5:
        dayName = "শুক্রবার";
        break;
      case 6:
        dayName = "শনিবার";
        break;
      case 0:
        dayName = "রবিবার";
        break;
    }
    return dayName;
  }

  function getBanglaMonth(currentDate, currentMonth) {
    let banglaMonth = null;
    if ((currentDate >= 14 && currentMonth == 3) || (currentDate < 15 && currentMonth == 4)) {
      banglaMonth = "বৈশাখ";
    } else if (
      (currentDate >= 15 && currentMonth == 4) ||
      (currentDate < 15 && currentMonth == 5)
    ) {
      banglaMonth = "জ্যৈষ্ঠ";
    } else if (
      (currentDate >= 15 && currentMonth == 5) ||
      (currentDate < 16 && currentMonth == 6)
    ) {
      banglaMonth = "আষাঢ়";
    } else if (
      (currentDate >= 16 && currentMonth == 6) ||
      (currentDate < 17 && currentMonth == 7)
    ) {
      banglaMonth = "শ্রাবন";
    } else if (
      (currentDate >= 17 && currentMonth == 7) ||
      (currentDate < 17 && currentMonth == 8)
    ) {
      banglaMonth = "ভাদ্র";
    } else if (
      (currentDate >= 17 && currentMonth == 8) ||
      (currentDate < 18 && currentMonth == 9)
    ) {
      banglaMonth = "আশ্বিন";
    } else if (
      (currentDate >= 18 && currentMonth == 9) ||
      (currentDate < 17 && currentMonth == 10)
    ) {
      banglaMonth = "কার্তিক";
    } else if (
      (currentDate >= 17 && currentMonth == 10) ||
      (currentDate < 16 && currentMonth == 11)
    ) {
      banglaMonth = "অগ্রহায়ণ";
    } else if (
      (currentDate >= 16 && currentMonth == 11) ||
      (currentDate < 15 && currentMonth == 0)
    ) {
      banglaMonth = "পৌষ";
    } else if (
      (currentDate >= 15 && currentMonth == 0) ||
      (currentDate < 13 && currentMonth == 1)
    ) {
      banglaMonth = "মাঘ";
    } else if (
      (currentDate >= 13 && currentMonth == 1) ||
      (currentDate < 15 && currentMonth == 2)
    ) {
      banglaMonth = "ফাল্গুন";
    } else if (
      (currentDate >= 15 && currentMonth == 2) ||
      (currentDate < 14 && currentMonth == 3)
    ) {
      banglaMonth = "চৈত্র";
    }
    return banglaMonth;
  }

  const [banglaClockState, setBanglaClockState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  let store, stores;

  useEffect(() => {
    function updateClock() {
      store = currentTimeFind();
      setBanglaClockState(store);
    }

    updateClock();

    stores = setInterval(updateClock, 1000);

    return () => {
      clearInterval(stores);
    };
  }, []);

  return (
    <>
      <div className="border-none rounded-full text-3xl backgroundGreen w-fit m-auto py-5 px-10 textShadow boxShadowright text-center">
        <h1 className="mb-2"> {banglaClockState[8]} </h1>
        <h1 className="mb-2">
          এখন {banglaClockState[0]} {banglaClockState[1]}টা বেজে {banglaClockState[2]} মিনিট{" "}
          {banglaClockState[3]} সেকেন্ড
        </h1>
        <h1>
          আজ {banglaClockState[5]} {banglaClockState[6]} {banglaClockState[7]} বঙ্গাব্দ, রোজ{" "}
          {banglaClockState[4]}
        </h1>
      </div>
    </>
  );
};

export default BanglaClock;

// Finally, it was lot, lot harder than you think. First was getting Hour, minute and second, which was easy. Then comes Bangla Year, which is less than 593 or 594 depending on the date after or before 14 april.

// Then comes bangla month. As it starts from middle of english month, hard checked it for match.

// Bangla Date suffers from this middle point. If the current month in starting month, simply substract start of the bangla month from it. If it in its end month, then it gets harder. We have to find remaining of starting month + current date.

// Now main problem happens when mounting it in react. Js was easy, simply call the setInterval. But in react, again useState and useEffect comes in. usestate updates each function call, useEffect helps run setInterval. And again clearing component is important when changing the components, else it will keep running forever.
