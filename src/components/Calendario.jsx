import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useState, useEffect } from "react";
import { getDataRequest } from "../api/datas.api.js";
import { formatLongDate } from "react-calendar/dist/cjs/shared/dateFormatter";

function Calendario() {
  useEffect(() => {
    async function loadData() {
      const result = await getDataRequest();
      console.log(result);
    }
    loadData();
  }, []);
  return <></>;
}

export default Calendario;
