import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getDogs,
  getByName,
  getTemperaments,
  getOrigins,
} from "../../redux/actions";

import NavBar from "../../components/navBar/NavBar";
import Cards from "../../components/cards/Cards";
import Pagination from "../../components/pagination/Pagination";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const temperaments = useSelector((state) => state.temperaments);
  const origins = useSelector((state) => state.origins);
  const [searchStr, setSearchStr] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTemperament, setSelectedTemperament] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedSortDirection, setSelectedSortDirection] = useState("");
  const [selectedSortWeightDirection, setSelectedSortWeightDirection] = useState("")
  const dogsPerPage = 8;

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.type === "search") {
      setSearchStr(target.value.toLowerCase());
    } else if (target.type === "select-one") {
      if (target.name === "temperament") {
        setSelectedTemperament(target.value);
      } else if (target.name === "origin") {
        setSelectedOrigin(target.value);
      } else if (target.name === "sort") {
        setSelectedSortDirection(target.value);
      } else if (target.name === "sortWeight") {
        setSelectedSortWeightDirection(target.value);
      }
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;
  
  const filteredDogs = allDogs.filter((dog) => {
    const matchingTemperament = selectedTemperament
      ? dog?.temperament?.split(", ").includes(selectedTemperament)
      : true;

    const matchingOrigin = selectedOrigin
      ? dog?.origin?.split(", ").includes(selectedOrigin)
      : true;

    const matchesSearchStr = dog.name.toLowerCase().includes(searchStr);

    return matchingTemperament && matchingOrigin && matchesSearchStr;
  })
  .sort((a, b) => {
    if (selectedSortDirection === "asc") {
      return a.name.localeCompare(b.name);
    } else if (selectedSortDirection === "desc") {
      return b.name.localeCompare(a.name);
    } else if (selectedSortWeightDirection === "asc") {
      return (
        parseFloat(a.weight.metric.split(" - ")[0]) -
        parseFloat(b.weight.metric.split(" - ")[0])
      );
    } else if (selectedSortWeightDirection === "desc") {
      return (
        parseFloat(b.weight.metric.split(" - ")[0]) -
        parseFloat(a.weight.metric.split(" - ")[0])
      );
    }
    return 0;
  });

  const dogsToDisplay = filteredDogs.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredDogs.length / dogsPerPage);

  const handleFind = (event) => {
    event.preventDefault();
    dispatch(getByName(searchStr));
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
    dispatch(getOrigins());
  }, [dispatch]);

  return (
    <div className="home-container">
      <NavBar
        handleChange={handleChange}
        handleFind={handleFind}
        setSelectedTemperament={setSelectedTemperament}
        setSelectedOrigin={setSelectedOrigin}
        setSelectedSortDirection={setSelectedSortDirection}
        setSelectedSortWeightDirection={setSelectedSortWeightDirection}
        temperaments={temperaments}
        origins={origins}
      />
      <Cards allDogs={dogsToDisplay} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
