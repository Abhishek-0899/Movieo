import React from "react";
import { useParams } from "react-router-dom";

const ExplorePage = () => {
  const params = useParams();
  console.log(params.explore);
  return <div>Explore page</div>;
};

export default ExplorePage;
