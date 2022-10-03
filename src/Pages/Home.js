import React, { useState } from 'react';
// import EmptyList from './EmptyList';
// import AddNewBlog from '../Pages/AddNewBlog';
import Header from '../Components/Header';
import SearchBar from '../Pages/SearchBar';
// import { AddNewBlog } from '../config/data';
import AddNewBlog from '../Pages/AddNewBlog';

const Home = () => {
  const [blogs, setBlogs] = useState(AddNewBlog);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = AddNewBlog;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(AddNewBlog);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)} >

      </SearchBar>

      {/* Blog List & Empty View */}

      <AddNewBlog />
    </div>
  );
};

export default Home;
