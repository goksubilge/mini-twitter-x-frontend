import React from "react";

const Date = () => {
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    today = new Date(),
    // default targetDate is christmas
    targetDate = new Date(today.getFullYear(), 11, 25);

  setDate(targetDate);
  setYears(50); // set the next five years in dropdown

  "#select-month".change(function () {
    var monthIndex = "#select-month".val();
    setDays(monthIndex);
  });

  function setDate(date) {
    setDays(date.getMonth());
    "#select-day".val(date.getDate());
    "#select-month".val(date.getMonth());
    "#select-year".val(date.getFullYear());
  }

  // make sure the number of days correspond with the selected month
  function setDays(monthIndex) {
    var optionCount = "#select-day option".length,
      daysCount = daysInMonth[monthIndex];

    if (optionCount < daysCount) {
      for (var i = optionCount; i < daysCount; i++) {
        "#select-day".append(
          "<option></option>".attr("value", i + 1).text(i + 1)
        );
      }
    } else {
      for (var x = daysCount; x < optionCount; x++) {
        var optionItem = "#select-day option[value=" + (x + 1) + "]";
        optionItem.remove();
      }
    }
  }

  function setYears(val) {
    var year = today.getFullYear();
    for (var i = 0; i < val; i++) {
      "#select-year".append(
        "<option></option>".attr("value", year - i).text(year - i)
      );
    }
  }
  return (
    <div>
      <div class="select-date">
        <select id="select-day"></select>
        <select id="select-month">
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
        <select id="select-year"></select>
      </div>
    </div>
  );
};

export default Date;
