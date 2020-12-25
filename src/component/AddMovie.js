
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import'../css-component/Add-Movie.css';

const AddMovie = ({handleAdd}) => {

const [modal, setModal] = useState(false);
const [nestedModal, setNestedModal] = useState(false);
const [closeAll, setCloseAll] = useState(false);

const toggle = () => setModal(!modal);
const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
}

const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
}
const [title,setTitle]=useState('')
const [rate,setRate]=useState(0)
const [posterUrl,setPosterUrl]=useState('')
const [description,setDescription]=useState('')

const newMovie={
title,
rate,
posterUrl,
description,
}
const Add=()=>{
handleAdd(newMovie);
toggle();}
return (
    <div className="Add-btn-container">
      <Button color="danger" onClick={toggle}>Add-Movie</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <label>Movie-Title</label> 
                <input type='text' onChange={(e)=>setTitle(e.target.value)} /> <br/>
            <label>Movie-Rate</label>  
                <input type='number' onChange={(e)=>setRate(e.target.value)}/> <br/>
            <label>Movie-PosterUrl</label>
                <input type='text' onChange={(e)=>setPosterUrl(e.target.value)}/> <br/>
            <label>Movie-Description</label>
                <input type='text' onChange={(e)=>setDescription(e.target.value)}/> <br />
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
            
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Add}>Add-Movie</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddMovie;