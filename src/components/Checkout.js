import React, { useState } from "react";
import { RandomCart } from "./RandomCart";
import {
  validateCompleted,
  validateEmail,
  validateTele,
  validateLuhn,
} from "./FormValidation";
import "./Checkout.css";

const Checkout = () => {
  //randomized cart
  const [cart, setCart] = useState(RandomCart());

  //billing field states
  const [fNameInputVal, setFNameInputVal] = useState("");
  const [lNameInputVal, setLNameInputVal] = useState("");
  const [emailInputVal, setEmailInputVal] = useState("");
  const [teleInputVal, setTeleInputVal] = useState("");
  const [address1InputVal, setAddress1InputVal] = useState("");
  // eslint-disable-next-line
  const [address2InputVal, setAddress2InputVal] = useState("");
  const [cityInputVal, setCityInputVal] = useState("");
  const [stateInputVal, setStateInputVal] = useState("");
  const [zipInputVal, setZipInputVal] = useState("");

  //card field states
  const [cardNameInputVal, setCardNameInputVal] = useState("");
  const [cardInputVal, setCardInputVal] = useState("");
  const [CVVInputVal, setCVVInputVal] = useState("");
  const [yearInputVal, setYearInputVal] = useState("");
  const [monthInputVal, setMonthInputVal] = useState("");

  //billing field error states
  // eslint-disable-next-line
  const [fNameError, setFNameError] = useState("");
  // eslint-disable-next-line
  const [lNameError, setLNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [teleError, setTeleError] = useState("");
  // eslint-disable-next-line
  const [address1Error, setAddress1Error] = useState("");
  //const [address2Error, setAddress2Error] = useState("");
  // eslint-disable-next-line
  const [cityError, setCityError] = useState("");
  // eslint-disable-next-line
  const [stateError, setStateError] = useState("");
  // eslint-disable-next-line
  const [zipError, setZipError] = useState("");

  //card field error states
  // eslint-disable-next-line
  const [cardNameError, setCardNameError] = useState("");
  const [cardError, setCardError] = useState("");
  // eslint-disable-next-line
  const [CVVError, setCVVError] = useState("");
  // eslint-disable-next-line
  const [yearError, setYearError] = useState("");
  // eslint-disable-next-line
  const [monthError, setMonthError] = useState("");

  // eslint-disable-next-line
  const [completedError, setCompletedError] = useState("");

  const requiredStates = [
    fNameInputVal,
    lNameInputVal,
    emailInputVal,
    teleInputVal,
    address1InputVal,
    cityInputVal,
    stateInputVal,
    zipInputVal,
    cardNameInputVal,
    cardInputVal,
    CVVInputVal,
    yearInputVal,
    monthInputVal,
  ];

  const requiredErrors = [
    setFNameError,
    setLNameError,
    setEmailError,
    setTeleError,
    setAddress1Error,
    setCityError,
    setStateError,
    setZipError,
    setCardNameError,
    setCardError,
    setCVVError,
    setYearError,
    setMonthError,
  ];

  const onSubmit = (e) => {
    //To Do: add completed call with all field states
    e.preventDefault();
    if (!validateCompleted(requiredStates, requiredErrors, setCompletedError)) {
      //do some big error here
    } else if (
      validateLuhn(cardInputVal, setCardError) &
      validateTele(teleInputVal, setTeleError) &
      validateEmail(emailInputVal, setEmailError)
    ) {
      setCart(RandomCart());
    }
  };

  return (
    <>
      <div class="row">
        <div class="col-75">
          <div class="container">
            <div class="row">
              <div class="col-50">
                <form id="billing" name="billing">
                  <h3>Billing Address:</h3>
                  <div class="row">
                    <div class="col-50">
                      <label for="fname">
                        First Name<span class="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="John"
                        required
                        onInput={(e) => {
                          setFNameInputVal(e.target.value);
                        }}
                      />
                    </div>
                    <div class="col-50">
                      <label for="lname">
                        Last Name<span class="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Doe"
                        required
                        onInput={(e) => {
                          setLNameInputVal(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <label for="email">
                    Email<span class="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    value={emailInputVal}
                    onInput={(e) => {
                      setEmailInputVal(e.target.value);
                      validateEmail(e.target.value, setEmailError);
                    }}
                  />
                  <small class="required">{emailError}</small>
                  <label for="phone">
                    Phone Number<span class="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(111) 222-3333"
                    maxlength="14"
                    required
                    value={teleInputVal}
                    onInput={(e) => {
                      setTeleInputVal(e.target.value);
                      validateTele(e.target.value, setTeleError);
                    }}
                  />
                  <small class="required">{teleError}</small>
                  <label for="adr">
                    Address 1<span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="555 Post Street"
                    required
                    onInput={(e) => {
                      setAddress1InputVal(e.target.value);
                    }}
                  />
                  <label for="adr2">Address 2</label>
                  <input
                    type="text"
                    id="adr2"
                    name="address2"
                    placeholder="50 Acacia Avenue"
                    onInput={(e) => {
                      setAddress2InputVal(e.target.value);
                    }}
                  />
                  <label for="city">
                    City<span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="San Francisco"
                    required
                    onInput={(e) => {
                      setCityInputVal(e.target.value);
                    }}
                  />

                  <div class="row">
                    <div class="col-50">
                      <label for="state">
                        State<span class="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="CA"
                        required
                        onInput={(e) => {
                          setStateInputVal(e.target.value);
                        }}
                      />
                    </div>
                    <div class="col-50">
                      <label for="zip">
                        Postal Code<span class="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="94109"
                        minlength="5"
                        maxlength="8"
                        required
                        value={zipInputVal}
                        onInput={(e) =>
                          setZipInputVal(
                            e.target.value
                              .replace(/[^0-9.]/g, "")
                              .replace(/(\..*)\./g, "$1")
                          )
                        }
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div class="col-50">
                <form id="payment" name="payment">
                  <h3>Payment:</h3>
                  <label for="cname">
                    Name on Card<span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="cname"
                    name="cname"
                    placeholder="John M. Doe"
                    required
                    onInput={(e) => {
                      setCardNameInputVal(e.target.value);
                    }}
                  />
                  <small>Full name as shown on card.</small>
                  <div class="row">
                    <div class="col-50">
                      <label for="cnum">
                        Card Number<span class="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="cnum"
                        name="cnum"
                        placeholder="1111-2222-3333-4444"
                        maxlength="19"
                        required
                        value={cardInputVal}
                        onInput={(e) => {
                          setCardInputVal(e.target.value);
                          validateLuhn(e.target.value, setCardError);
                        }}
                      />
                      <small class="required">{cardError}</small>
                    </div>
                    <div class="col-50">
                      <label for="cvv">
                        CVV<span class="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        minlength="3"
                        maxlength="3"
                        required
                        value={CVVInputVal}
                        onInput={(e) =>
                          setCVVInputVal(
                            e.target.value
                              .replace(/[^0-9.]/g, "")
                              .replace(/(\..*)\./g, "$1")
                          )
                        }
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-50">
                      <label for="expyear">
                        Exp. Year<span class="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2021"
                        minlength="4"
                        maxlength="4"
                        required
                        value={yearInputVal}
                        onInput={(e) =>
                          setYearInputVal(
                            e.target.value
                              .replace(/[^0-9.]/g, "")
                              .replace(/(\..*)\./g, "$1")
                          )
                        }
                      />
                    </div>
                    <div class="col-50">
                      <label for="expmonth">
                        Exp. Month<span class="required">*</span>
                      </label>
                      <select
                        type="text"
                        id="expmonth"
                        name="expmonth"
                        placeholder="January"
                        required
                        onInput={(e) => {
                          setMonthInputVal(e.target.value);
                          validateCompleted([]);
                        }}
                      >
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <form id="options" name="options">
              <label>
                <input type="checkbox" name="sameadr" />
                Shipping address same as billing
              </label>
              <label>
                <input type="checkbox" name="saveinfo" />
                Save info for next time
              </label>
            </form>
            <div
              class="invalidFeedback"
              id="invalidFeedback"
              name="invalidFeedback"
            ></div>
            <input
              type="button"
              value="Continue to checkout"
              id="checkout"
              class="btn"
              onClick={(e) => onSubmit(e)}
            />
          </div>
        </div>
        <div class="col-25">
          <div class="container">
            <h4>
              Cart:
              <span class="price" styles={{ color: "black" }}>
                <i class="fa fa-shopping-cart"></i>{" "}
                <b id="cartnum" name="cartnum">
                  {cart.numItems}
                </b>
              </span>
            </h4>
            <hr />
            <ul
              id="cart"
              name="cart"
              dangerouslySetInnerHTML={{ __html: cart.itemString }}
            ></ul>
            <hr />
            <p>
              Tax:
              <span class="price">
                $
                <b id="tax" name="tax">
                  {cart.tax}
                </b>
              </span>
            </p>
            <p>
              Fees:
              <span class="price">
                $
                <b id="fees" name="fees">
                  {cart.fees}
                </b>
              </span>
            </p>
            <hr />
            <p>
              Total:
              <span class="price" styles={{ color: "black" }}>
                $
                <b id="total" name="total">
                  {cart.total}
                </b>
              </span>
            </p>
          </div>
        </div>
        <p id="message"></p>
      </div>
    </>
  );
};

export default Checkout;
