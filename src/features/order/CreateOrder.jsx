/* eslint-disable */

import { useState } from "react";
import { Form } from "react-router-dom";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required className="rounded-full px-4 py-2 border border-stone-200 text-sm transition-all duration-300 placeholder: text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 w-full md:px-6 md:py-3"/>
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="w-6 h-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <button className="inline-block font-semibold rounded-full bg-yellow-400 py-3 px-4 hover:bg-yellow-300 uppercase tracking-wide text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400 cursor-not-allowed" >Order now</button>
        </div>
      </Form>
    </div>
  );        
}

export async function action({request}){
  const formData = await request.formData();
  console.log(formData);
  return null;
}

export default CreateOrder;
