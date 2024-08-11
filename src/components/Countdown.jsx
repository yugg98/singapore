import React, { useEffect, useState } from "react";
const Countdown = () => {
  function monthsToDays(months) {
    const millisecondsInDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

    // Get the current date
    const currentDate = new Date();

    // Calculate the future date by adding the specified number of months
    const futureDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + months,
      currentDate.getDate()
    );

    // Calculate the difference in milliseconds between the future date and the current date
    const timeDifference = futureDate - currentDate;

    // Convert the time difference to days
    const days = Math.floor(timeDifference / millisecondsInDay);

    return days;
  }
  const calculateRemainingTime = () => {
    const now = new Date();
    var targetDate = new Date("December 4, 2023 08:00:00");

    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
      const months = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24 * 365)) /
          (1000 * 60 * 60 * 24 * 30)
      );
      const weeks = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24 * 30)) /
          (1000 * 60 * 60 * 24 * 7)
      );
      const days = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      var one_day = 1000 * 60 * 60 * 24;
      var present_date = new Date();
      if (present_date.getMonth() == 11 && present_date.getdate() > 25)
        targetDate.setFullYear(targetDate.getFullYear() + 1);
      var Result =
        Math.round(targetDate.getTime() - present_date.getTime()) / one_day;
      var Final_Result = Result.toFixed(0);
      setRemainingTime({
        years: Final_Result,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds,
      });
    } else {
      setRemainingTime({
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  };

  const [remainingTime, setRemainingTime] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    calculateRemainingTime();

    const interval = setInterval(() => {
      calculateRemainingTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="grid grid-cols-4 gap-2 text-center md:gap-6">
      <Cricular text="Days" time={remainingTime.years} style={"px-6 py-4"} />
      <Cricular text="Hours" time={remainingTime.hours} style={"px-6 py-4"} />
      <Cricular
        text="Minutes"
        time={remainingTime.minutes}
        style={"px-4 py-4"}
      />
      <Cricular
        text="Seconds"
        time={remainingTime.seconds}
        style={"px-4 py-4"}
      />
    </div>
  );
};

const Cricular = ({ text, time, style }) => {
  return (
    <div className="flex flex-col p-2.5 sm:p-3 bg-white md:p-4 rounded-2xl text-neutral-content">
      <span className="text-3xl font-bold md:text-6xl">
        <span style={{ "--value": 15 }}>{time}</span>
      </span>
      <p className="text-xs text-gray-600 sm:text-sm">{text}</p>
    </div>
  );
};
export default Countdown;