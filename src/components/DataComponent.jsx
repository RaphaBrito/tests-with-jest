import React, { useState, useEffect } from "react";
import fetchData from "../services/api";

export default function DataComponent() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchDataAsync() {
      const response = await fetchData();
      setData(response.data);
    }

    fetchDataAsync();
  }, []);

  return <div>{data}</div>;
}
