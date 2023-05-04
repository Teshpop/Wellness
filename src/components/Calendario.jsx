import { useEffect, useState } from "react";
import { getDataRequest } from "../api/datas.api.js";

function Calendario() {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    async function loadData() {
      const result = await getDataRequest();
      setDates(result.data);
    }
    loadData();
  }, []);

  return (
    <>
      <div>
        {dates.map((date) => (
          <div key={date.id}>
            <p>{date.date}</p>
            <p>{date.time}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Calendario;
