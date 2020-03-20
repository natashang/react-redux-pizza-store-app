import React, { useState } from "react";
import { ProgressBar, Form } from "react-bootstrap";

import PrevNextButtons from "./presentation/PrevNextButtons";
import getLinkInfo from "../utils/getLinkInfo";

// for redux
import { connect } from "react-redux";
import { addCrust } from "../redux/actions/index";

import links from "../utils/links";

// Use destructuring {} to pass in functions as a prop
const Crust = ({ addCrust }) => {
  // all possible crust options to be selected
  const crusts = [
    { id: 1, name: "regular" },
    { id: 2, name: "thin" },
    { id: 3, name: "thick" },
    { id: 4, name: "gluten-free" }
  ];

  // Hooks
  const [data, setData] = useState({
    crust: ""
  });

  const currLink = getLinkInfo(links, "Add Crust");
  const progress = currLink.progress;

  // data is the payload passed into the action creator function addCrust()
  const handleButtonClick = () => {
    // console.log('[3. Event handler] ' + data)
    addCrust(data);
  };

  /**
   * Applies the useState hook's update function on the stateful value, data
   *
   * @param {*} event
   * @returns {Object} passes the input field's value into the correct state value
   *      - data: { crust }
   */
  const handleInput = event => {
    // console.log("[HANDLE INPUT]: ", event.currentTarget.value)
    setData({
      ...data,
      [event.target.name]: event.currentTarget.value
    });
  };

  return (
    <>
      <ProgressBar animated now={progress} />

      <h1>Select a crust type</h1>

      <Form>
        {crusts.map(crust => {
          return (
            <div key={crust.id}>
              <Form.Check
                custom
                id={crust.id}
                type="radio"
                name="crust" // enables only one selected
                label={crust.name}
                value={crust.name}
                onChange={e => handleInput(e)}
              />
            </div>
          );
        })}
      </Form>

      <br />

      <PrevNextButtons
        prev={currLink.prev}
        plabel={currLink.plabel}
        next={currLink.next}
        nlabel={currLink.nlabel}
        handleButtonClick={handleButtonClick}
      />
    </>
  );
};

/**
 * Using the connect() from react-redux to select the part of the store
 * the connected component needs.
 *
 * @param {*} state - Receives the entire store state
 * @return {*} An object with data this component needs.
 *      - Destructuring: assigns to a local _order object from the order reducer
 */
const mapStateToProps = state => {
  // console.log('[1. State of the store, mapStateToProps ]', state)
  return {
    _order: state.order
  };
};

/**
 * Using the connect() from react-redux to dispatch actions to the store.
 * Triggers a state change.
 * Dispatches the result of an action creator to the store by
 * implicity forwarding arguments to the specified action creator.
 *
 * @param {*} dispatch
 * @returns {Object}  action creator addCrust()
 */
const mapDispatchToProps = dispatch => {
  // console.log('[. Dispatching to store, mapDispatchToProps ]', dispatch)
  return {
    addCrust: data => dispatch(addCrust(data))
  };
};

/**
 * React-Redux connect() function generates wrapper components
 * that handle the process of interacting with the Redux store.
 * @param {function} mapStateToProps
 * @param {function} mapDispatchToProps
 */
export default connect(mapStateToProps, mapDispatchToProps)(Crust);
