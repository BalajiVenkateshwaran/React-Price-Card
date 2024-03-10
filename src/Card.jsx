import React from "react";
import { TiTick } from "react-icons/ti";

function Card({ item, index }) {
  return (
    <div className="col-4">
      <div class="card mb-4   text-center">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal text-muted">{item.planName}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            ${item.price}
            <small>/mo</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            {item.features.map((feature, index) => {
              return (
                <div>
                  <li key={index}>{feature.planName}</li>
                  <li key={index}>{feature.userData}</li>
                  <li key={index}>{feature.storage}</li>
                  <li key={index}>{feature.support}</li>
                  <li key={index}>{feature.accessType}</li>
                  <li key={index}>{feature.projects}</li>
                  <li key={index}>{feature.phoneSupport}</li>
                  <li key={index}>{feature.subdomainDetails}</li>
                  <li key={index}>{feature.statusReport}</li>
                </div>
              );
            })}
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-primary">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
