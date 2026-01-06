"use client";

import { useState } from "react";

function BookEvent() {
  // for this component, we want to first know if this user has already submitted email or not
  // build client componenet and use 2 useState hooks for email state and submitted state
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // handle the submit with callback function below
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
      setSubmitted(true);
    }, 1000); // simulate a network request delay 1 second
  };

  return (
    <div id="book-event">
      {submitted ? (
        <p className="text-sm">Thanks you for signinig up!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email"> Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
          <button type="submit" className="button-submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default BookEvent;
