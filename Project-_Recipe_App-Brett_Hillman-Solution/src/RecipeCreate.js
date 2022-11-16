import React, { useState, useEffect } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const formInit = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState(formInit);
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });

    
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    setRecipes(recipes => [...recipes, formData]);
    setFormData(formInit);
  };


  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                id="cuisine"
                placeholder="Cuisine"
                value={formData.cuisine}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="photo"
                type="url"
                id="photo"
                placeholder="Photo"
                value={formData.photo}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                type="text"
                id="ingredients"
                placeholder="Ingredients"
                value={formData.ingredients}
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                type="text"
                id="preparation"
                placeholder="Preparation"
                value={formData.preparation}
                onChange={handleChange}
              ></textarea>
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;