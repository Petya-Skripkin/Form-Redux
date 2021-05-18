import React from "react";
import { shallow } from "enzyme";

import AppRoute from "./app-route";

describe("components/AppRoute", () => {
  it("Компонент должнен отрендериться", () => {
    shallow(
      <AppRoute path="#" component={() => <p>Route</p>} name="Анатолий Петров" />
    );
  });
});
