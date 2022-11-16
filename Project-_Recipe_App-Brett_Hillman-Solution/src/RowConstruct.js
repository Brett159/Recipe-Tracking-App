import React from "react";

const RowConstruct = ({ recipes, handleDelete }) => {
  return (
    <React.Fragment>
      {recipes.map((recipe, index) => (
        <tr key={index}>
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td>
            <img src={recipe.photo} alt="mmm... food" />
          </td>
          <td className="content_td">
            <p>{recipe.ingredients}</p>
          </td>
          <td className="content_td">
            <p>{recipe.preparation}</p>
          </td>
          <td>
            <button name="delete" onClick={() => handleDelete(recipe.name)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};

export default RowConstruct;
/***

*/