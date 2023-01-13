import React, { useState } from 'react';
import * as Styled from '@styles/common/Clock.style';

const Clock = () => {
  const [currDate, setCurrDate] = useState('');
  const [currTime, setCurrTime] = useState('');

  const getTimeStrAddedZero = (timeNum: number) => {
    return timeNum < 10 ? `0${timeNum}` : `${timeNum}`;
  };

  const changeCurrTimeBySecond = () => {
    const dateObj = new Date();

    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const date = dateObj.getDate();
    setCurrDate(`${year}년 ${month + 1}월 ${date}일`);

    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();
    const second = dateObj.getSeconds();
    setCurrTime(
      `${getTimeStrAddedZero(hour)} : ${getTimeStrAddedZero(
        minute,
      )} : ${getTimeStrAddedZero(second)}`,
    );
  };

  setInterval(changeCurrTimeBySecond, 1000);

  return (
    <Styled.Layout>
      <Styled.DateConatiner>{currDate}</Styled.DateConatiner>
      <Styled.TimeContainer>{currTime}</Styled.TimeContainer>
    </Styled.Layout>
  );
};

export default Clock;
