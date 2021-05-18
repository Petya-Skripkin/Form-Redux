import React from "react";
import { shallow } from "enzyme";

import Button from "./button";

describe("components/Button", () => {
  it("Компонент должнен отрендериться", () => {
    shallow(
      <Button
        onClick={() => null}
      >
        Отправить
      </Button>
    );
  });

  it("Кнопка должна отрабатывать клик", () => {
    const mockCallback = jest.fn();

    const button = shallow(
      <Button
        onClick={mockCallback}
      >
        Отправить
      </Button>
    );

    button.simulate("click");
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
