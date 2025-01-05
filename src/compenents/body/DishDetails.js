import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = ({ dish, modal, toggle }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className='modal-lg'>
        <ModalHeader toggle={toggle}> <h2>Product Details</h2></ModalHeader>
        <ModalBody>
          <img src={dish.image} alt={dish.name} width={300} />
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <p className='fw-bold'>$ {dish.price}</p>
        </ModalBody>
        <ModalFooter>
           <h2 className='col-12 mb-5'>All Comments</h2>
           <LoadComments comments={dish.comments} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DishDetails;
