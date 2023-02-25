import React from "react";
import SearchBar from "./../SearchBar/SearchBar";

const Banner = ({ handleSearch }) => {
  return (
    <div className="banner text-center mb-5">
      <h2 className="banner-title">Download High Quality Images by creators</h2>
      <p className="banner-details">
        Over 2.4 million+ stock Images by our talented community
      </p>
      {/* search bar */}
      <div className="w-50 align-items-center m-auto">
        <SearchBar
          handleSearch={handleSearch}
          placeholder="Search high resolution Images, categories, wallpapers"
        />
      </div>
    </div>
  );
};

export default Banner;
