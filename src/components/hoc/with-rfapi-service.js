import React from "react";
import {RfapiServiceConsumer} from "../rfapi-service-context";

const WithRfapiService = () => (Wrapped) => {
  return (props) => {
    return (
      <RfapiServiceConsumer>
        {
          (rfapiService) => {
            return <Wrapped {...props} rfapiService={rfapiService} />
          }
        }
      </RfapiServiceConsumer>
    )
  }
};

export default WithRfapiService;