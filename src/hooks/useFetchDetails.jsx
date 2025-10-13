import axios from "axios";
import { useEffect, useState } from "react"; // no need for React import here

const useFetchDetails = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(endpoint);
      setLoading(false);
      setData(response.data);
    } catch (e) {
      setLoading(false);
      console.log("error while fetching now playing movies", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading };
};

export default useFetchDetails;
