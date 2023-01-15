import React, { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import "./keepUpdated.scss";
import { FormattedMessage } from "react-intl";

const KeepUpdated = () => {
  const [email2, setEmail2] = useState("");

  return (
    <div className="keep-updated">
      <div className="text">
        <h1>
          <FormattedMessage
            id="KeepUpdated"
            defaultMessage="Keep Updated & Get Unlimited Discount"
          />
        </h1>
        <br></br>
        <div className="email-container">
          <span>
            <BiEnvelope />
          </span>
          <input
            type="email"
            id="email2"
            name="email2"
            value={email2}
            onChange={(e) => setEmail2(e.target.value)}
            placeholder="Enter email address..."
          />
          <button>
            <FormattedMessage id="subscribe" defaultMessage="Subscribe" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeepUpdated;
