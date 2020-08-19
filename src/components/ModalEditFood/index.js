import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

const ModalEditFood = ({
  isOpen,
  setIsOpen,
  editingFood,
  getFoodById,
  handleUpdateFood,
}) => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    // TODO EDIT A FOOD PLATE AND CLOSE THE MODAL

    // Adding the food id info into our data object
    data['id'] = editingFood;

    let currentEditingFood = getFoodById(editingFood);
    // Adding the available status info into our data object
    data['available'] = currentEditingFood.available;

    handleUpdateFood(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <Input name="quantity" placeholder="Quantidade" />
        <Input name="timeToCook" placeholder="Tempo para cozinhar" />

        <button type="submit">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
