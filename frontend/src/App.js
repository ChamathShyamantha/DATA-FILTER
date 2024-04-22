import React,{ useEffect,useState } from 'react'
import axios from 'axios';

const App = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/getData");
    setData(response.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>{data}</div>
  )
}

export default App
