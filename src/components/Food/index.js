import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';
import api from '../../services/api';

const Food = ({ food, handleDelete, handleEditFood, updateFood, openEditModal }) => {
  const [isAvailable, setIsAvailable] = useState(food.available);

  async function toggleAvailable() {
    // TODO UPDATE STATUS (available)

    // Updating the available status in the API using patch method
    try {
      let newAvailableStatus = !isAvailable;
      api.patch(`/foods/${food.id}/`, ({available: newAvailableStatus})).then(() => {
        setIsAvailable(!isAvailable)

        // Calling the updateFood function to update the food plate in the Dashboard foods state
        food.available = newAvailableStatus;
        updateFood(food);
      });
    } catch(err) {
      console.log(err);
    }
  }

  function setEditingFood() {
    // TODO - SET THE ID OF THE CURRENT ITEM TO THE EDITING FOOD AND OPEN MODAL
    handleEditFood(food);
    openEditModal();
  }

  return (
    <Container available={isAvailable}>
      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          R$ <b>{food.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => setEditingFood()}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(food.id)}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};

export default Food;
