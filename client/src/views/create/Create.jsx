import React, { useState } from "react";

const Create = () => {
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
    temperaments: [],
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
        "La altura mínima no puede ser mayor que la altura máxima";
      newErrors.maxHeight =
        "La altura máxima no puede ser menor que la altura mínima";
    }

    if (
      !/^\d+(\.\d+)?$/.test(input.minWeight) ||
      !/^\d+(\.\d+)?$/.test(input.maxWeight)
    ) {
      newErrors.minWeight = "El peso debe ser un número";
      newErrors.maxWeight = "El peso debe ser un número";
    } else if (parseFloat(input.minWeight) > parseFloat(input.maxWeight)) {
      newErrors.minWeight =
        "El peso mínimo no puede ser mayor que el peso máximo";
      newErrors.maxWeight =
        "El peso máximo no puede ser menor que el peso mínimo";
    }

    if (!/^\d+(\.\d+)?$/.test(input.lifespan)) {
      newErrors.lifespan = "La vida útil debe ser un número";
    } else if (parseFloat(input.minLife) > parseFloat(input.maxLife)) {
      newErrors.minLife =
        "La vida mínima no puede ser mayor que la vida máxima";
      newErrors.maxLife =
        "La vida máxima no puede ser menor que la vida mínima";
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

    for (const error in errors) {
      if (error[error] !== "") {
        return;
      }
    }

    const formatedData = {
      ...formData,
      height: `${minHeight} - ${maxHeight}`,
      weight: `${minWeight} - ${maxWeight}`,
      lifespan: `${minLife} - ${maxLife}`,
    };

    const sendDataToServer = async (formData) => {
      try {
        const response = await Axios.post('http://localhost:3001/dogs', formData);
        return response.data;
      } catch (error) {
        throw new Error('Error al enviar datos al servidor');
      }
    };

    try {
      const response = await sendDataToServer(formatedData);
      console.log(response);
    } catch (error) {
      console.error('Error al enviar datos al servidor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <span className="error">{error.name}</span>
      </div>
      <div>
        <p>Altura:</p>
        <label htmlFor="minHeight">Min</label>
        <input
          type="text"
          id="minHeight"
          name="minHeight"
          value={formData.minHeight}
          onChange={handleChange}
          required
        />
        <span className="error">{error.minHeight}</span>
        <label htmlFor="maxHeight">Max</label>
        <input
          type="text"
          id="maxHeight"
          name="maxHeight"
          value={formData.maxHeight}
          onChange={handleChange}
          required
        />
        <span className="error">{error.maxHeight}</span>
      </div>
      <div>
        <p>Peso: </p>
        <label htmlFor="minWeight">Min</label>
        <input
          type="text"
          id="minWeight"
          name="minWeight"
          value={formData.minWeight}
          onChange={handleChange}
          required
        />
        <span className="error">{error.minWeight}</span>
        <label htmlFor="maxWeight">Max</label>
        <input
          type="text"
          id="maxWeight"
          name="maxWeight"
          value={formData.maxWeight}
          onChange={handleChange}
          required
        />
        <span className="error">{error.maxWeight}</span>
      </div>
      <div>
        <p>Vida Útil</p>
        <label htmlFor="minLife">Min</label>
        <input
          type="text"
          id="minLife"
          name="minLife"
          value={formData.minLife}
          onChange={handleChange}
          required
        />
        <span className="error">{error.minLife}</span>
        <label htmlFor="maxLife">Max</label>
        <input
          type="text"
          id="maxLife"
          name="maxLife"
          value={formData.maxLife}
          onChange={handleChange}
          required
        />
        <span className="error">{error.maxLife}</span>
      </div>
      <div>
        <label htmlFor="temperaments">Temperamentos</label>
        <select id="temperaments" name="temperaments" multiple>
          <option value="temperament1">Temperament 1</option>
          <option value="temperament2">Temperament 2</option>
        </select>
      </div>
      <div>
        <button type="submit">Crear Raza</button>
      </div>
    </form>
  );
};

export default Create;
