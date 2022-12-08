import React, { useState, useEffect } from "react";
import ImagesCard from "./components/ImagesCard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=31351354-d61ceca7ca610290e1ab79007&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <SearchBar searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>) : (
        <div className= "grid grid-cols-1 ml-[15px] sm:grid-cols-1 sm:ml-[130px] md:grid-cols-2 md:ml-[20px] mr-[20px] lg:grid-cols-3 lg:ml-6 xl:grid-cols-3 gap-4 ">
          {images.map((image, index) => {
            return <ImagesCard key={index} image={image} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
