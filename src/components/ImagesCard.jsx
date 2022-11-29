import React from "react";

const ImagesCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-[#e2a9bf]">
      <img
        src={image.webformatURL}
        alt=""
        className="w-full transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-500 duration-300"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-[#a65d77] text-xl mb-2">
          Photo by {image.user}
        </div>

        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>

          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>

          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>

      <div className="px-6 py-4">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ImagesCard;
