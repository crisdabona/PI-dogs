import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTemperaments, createDog } from "../../redux/actions";
import axios from "axios";


import "./create.css";

const Create = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife: "",
    maxLife: "",
    temperaments: [],
  });

  const [error, setError] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife: "",
    maxLife: "",
    temperaments: '',
  });

  const validate = (input) => {
    let newErrors = {
      name: "",
      minHeight: "",
      maxHeight: "",
      minWeight: "",
      maxWeight: "",
      minLife: "",
      maxLife: "",
    };

    if (!/^[A-Za-z]{4,30}$/.test(input.name)) {
      newErrors.name = "Debe contener de 4 a 30 caracteres y solo letras";
    }

    if (
      !/^\d+(\.\d+)?$/.test(input.minHeight) ||
      !/^\d+(\.\d+)?$/.test(input.maxHeight)
    ) {
      newErrors.minHeight = "La altura debe ser un número";
      newErrors.maxHeight = "La altura debe ser un número";
    } else if (parseFloat(input.minHeight) > parseFloat(input.maxHeight)) {
      newErrors.minHeight =
        "La altura mínima no puede ser mayor que la máxima";
      newErrors.maxHeight =
        "La altura máxima no puede ser menor que la mínima";
    }

    if (
      !/^\d+(\.\d+)?$/.test(input.minWeight) ||
      !/^\d+(\.\d+)?$/.test(input.maxWeight)
    ) {
      newErrors.minWeight = "El peso debe ser un número";
      newErrors.maxWeight = "El peso debe ser un número";
    } else if (parseFloat(input.minWeight) > parseFloat(input.maxWeight)) {
      newErrors.minWeight =
        "El peso mínimo no puede ser mayor que el máximo";
      newErrors.maxWeight =
        "El peso máximo no puede ser menor que el mínimo";
    }

    if (
      !/^\d+(\.\d+)?$/.test(input.minLife) ||
      !/^\d+(\.\d+)?$/.test(input.maxLife)
    ) {
      newErrors.minLife = "La vida útil debe ser un número";
      newErrors.maxLife = "La vida útil debe ser un número";
    } else if (parseFloat(input.minLife) > parseFloat(input.maxLife)) {
      newErrors.minLife =
        "La vida mínima no puede ser mayor que la máxima";
      newErrors.maxLife =
        "La vida máxima no puede ser menor que la mínima";
    }

    setError(newErrors);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validate({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formatedData = {
      ...formData,
      height: `${formData.minHeight || ''} - ${formData.maxHeight || ''}`,
      weight: `${formData.minWeight || ''} - ${formData.maxWeight || ''}`,
      lifespan: `${formData.minLife || ''} - ${formData.maxLife || ''}`,
      temperament: selectedTemperaments.join(',')
    }
    console.log(formatedData);
    for (const key in error) {
      if (error[key] !== "") {
        return;
      }
    }
    try {
      await dispatch(createDog(formatedData))
      
    } catch (error) {
      console.log('DATA', error.message);
    }

  }


  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    setSelectedTemperaments([...selectedTemperaments, selectedValue]);
  };

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Dog</h1>
      <div className="name">
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <span className="error">{error.name}</span>
      </div>
      <div className="altura">
        <div>
          <p>Altura:</p>
          <label htmlFor="minHeight"></label>
          <input
            className="min"
            type="number"
            id="minHeight"
            name="minHeight"
            value={formData.minHeight}
            onChange={handleChange}
            placeholder="Min"
            required
          />
          <label htmlFor="maxHeight"></label>
          <input
            className="max"
            type="number"
            id="maxHeight"
            name="maxHeight"
            value={formData.maxHeight}
            onChange={handleChange}
            placeholder="Max"
            required
          />
        </div>
        <div className="altura-errors">
          <span className="error">{error.minHeight}</span>
          <span className="error">{error.maxHeight}</span>
        </div>
      </div>
      <div className="peso">
        <div>
        <p>Peso: </p>
        <label htmlFor="minWeight"></label>
        <input
          className="min"
          type="number"
          id="minWeight"
          name="minWeight"
          value={formData.minWeight}
          onChange={handleChange}
          placeholder="Min"
          required
        />
        <label htmlFor="maxWeight"></label>
        <input
          className="max"
          type="number"
          id="maxWeight"
          name="maxWeight"
          value={formData.maxWeight}
          onChange={handleChange}
          placeholder="Max"
          required
        />
        </div>
        <div className="peso-errors">
        <span className="error">{error.minWeight}</span>
        <span className="error">{error.maxWeight}</span>
        </div>
      </div>
      <div className="vida">
        <div>
          <p>Vida Útil</p>
          <label htmlFor="minLife"></label>
          <input
            className="min"
            placeholder="Min"
            type="number"
            id="minLife"
            name="minLife"
            value={formData.minLife}
            onChange={handleChange}
            required
          />
          <label htmlFor="maxLife"></label>
          <input
            className="min"
            placeholder="Min"
            type="number"
            id="maxLife"
            name="maxLife"
            value={formData.maxLife}
            onChange={handleChange}
            required
          />
        </div>
        <div className="vida-errors">
          <span className="error">{error.minLife}</span>
          <span className="error">{error.maxLife}</span>
        </div>
      </div>

      <div className="temperament">
        <label htmlFor="temperaments"></label>
        <textarea
          id="temperaments"
          name="temperaments"
          rows="2"
          cols="40"
          value={selectedTemperaments.join(", ")}
          onChange={handleChange}
        ></textarea>

        <div className="filters">
        <button type="button" onClick={() => setSelectedTemperaments([])}>
          Clean
        </button>

        <select
          id="temperaments"
          name="temperaments"
          onChange={handleSelectChange}
        >
          <option value="">Temperaments</option>
          {temperaments.map((temperament) => {
            return (
              <option key={temperament} value={temperament}>
                {temperament}
              </option>
            );
          })}
        </select>
        </div>
      </div>

      <div>
        <button className="submit" type="submit">Create</button>
      </div>
    </form>
  );
};

export default Create;
