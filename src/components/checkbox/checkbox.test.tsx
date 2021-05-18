import React from "react";
import { mount } from "enzyme";
import Checkbox from "./checkbox";

describe("components/Checkbox", () => {
  let checkbox;
  const MOCK_TEXT = "Запомнить меня";
  let checked = true;
  const toggleCallback = () => {
    return checked = !checked;
  }

  it("Компонент должен рендериться", () => {
    checkbox = mount(
      <Checkbox
        title={MOCK_TEXT}
        isChecked={checked}
        onChange={toggleCallback}
      />
    );
  });

  it("Компонент должен отрабатывать клик", () => {
    // Тестирование работы функции
    expect(toggleCallback()).toEqual(false);

    // Тестирование чекбокса с пропсом isChecked = true
    checkbox.find(`CheckBox`).simulate('click', checkbox.setProps({isChecked: true}));
    expect(checkbox.find(`CheckBox`).prop("checked")).toBe(true);

    // Тестирование чекбокса с пропсом isChecked = false
    checkbox.find(`CheckBox`).simulate('click', checkbox.setProps({isChecked: false}));
    expect(checkbox.find(`CheckBox`).prop("checked")).toBe(false);
  });

  it("Компонент должен отрисовывать текст", () => {
    expect(checkbox.find("p").text()).toBe(MOCK_TEXT);
  });
});