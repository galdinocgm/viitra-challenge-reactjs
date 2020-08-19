import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';

import { FoodsContainer } from './styles';

const Dashboard = () => {
  const [foods, setFoods] = useState([]);
  const [editingFood, setEditingFood] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  // Get all foods from the API
  async function fetchData(){
    let data = await api.get('/foods/').then(res => res.data);
    return data;
  }

  // Updates the foods state with the data fetched from the API
  async function updateFoodsState(){
    let data = await fetchData();
    setFoods(data);
    console.log(data);
  }

  // Using the useEffect hook to update the foods state after the component mounts
  useEffect(() => {updateFoodsState()}, []);

  async function handleAddFood(food) {
    try {

    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(food) {
    // TODO UPDATE A FOOD PLATE ON THE API
  }

  async function handleDeleteFood(id) {
    // TODO DELETE A FOOD PLATE FROM THE API
    try {
      api.delete(`/foods/${id}/`);
    } catch(err) {
      console.log(err)
    }
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food) {
    // TODO SET THE CURRENT EDITING FOOD ID IN THE STATE
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {console.log(foods)}
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
