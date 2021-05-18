import { shallow } from "enzyme";
import Input from "./input";

describe("components/Input", () => {
  let input: { find: (arg0: string) => { (): any; new(): any; text: { (): any; new(): any; }; }; };
  const error = true;
  const errorText = "Error";

  it("Компонент должнен отрендериться", () => {
    input = shallow(
      Input({ title: "Полученный код" })
    );
  });

  it("Компонент должен отображать текст", () => {
    const title = input.find("Title");
    expect(title.text()).toBe("Полученный код");
  });

  it("При ошибке компонент должен отображать текст ErrorText", () => {
    input = shallow(
      Input({title: "Полученный код", error: error, errorText: errorText})
    );

    expect(input.find("Error").text()).toBe(errorText);
  })
});
