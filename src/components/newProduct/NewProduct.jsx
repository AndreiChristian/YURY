import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { caseItemsActions } from "../../store/caseItems";
import classes from "./NewProduct.module.css";

const NewProduct = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const priceRef = useRef();
  const probabilityRef = useRef();
  const addItem = caseItemsActions;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random(),
      name: nameRef.current.value,
      //   we will get the number from the input field as a number
      price: +priceRef.current.value,
      //   we will get the number from the input field as a number
      probability: +probabilityRef.current.value,
    };
    console.log(typeof newItem.probability, typeof newItem.price);
    dispatch(caseItemsActions.addCaseItem(newItem));
  };

  return (
    <div className={classes.container}>
      <form>
        <input ref={nameRef} type="text" placeholder="Name" />
        <input ref={priceRef} type="text" placeholder="Price" />
        <input ref={probabilityRef} type="text" placeholder="Probability" />
        <button type="submit" onClick={handleSubmit}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
