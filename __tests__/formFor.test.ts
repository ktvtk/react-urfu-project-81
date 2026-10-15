import { describe, expect, it } from "vitest";
import HexletCode from "../src/index";

describe("formFor", () => {
  const template = {
    name: "rob",
    job: "hexlet",
    gender: "m",
  };

  it("generates an empty form with default URL", () => {
    const form = HexletCode.formFor(template, {}, () => {});

    expect(form).toBe('<form action="#" method="post"></form>');
  });

  it("uses the provided URL", () => {
    const form = HexletCode.formFor(template, { url: "/users" }, () => {});

    expect(form).toBe('<form action="/users" method="post"></form>');
  });

  it("generates input fields", () => {
    const form = HexletCode.formFor(template, {}, (f) => {
      f.input("name");
      f.input("job");
    });

    expect(form).toBe(
      '<form action="#" method="post"><input name="name" type="text" value="rob"><input name="job" type="text" value="hexlet"></form>',
    );
  });

  it("generates a textarea", () => {
    const form = HexletCode.formFor(template, {}, (f) => {
      f.input("job", { as: "textarea" });
    });

    expect(form).toBe(
      '<form action="#" method="post"><textarea cols="20" rows="40" name="job">hexlet</textarea></form>',
    );
  });

  it("supports additional attributes", () => {
    const form = HexletCode.formFor(template, {}, (f) => {
      f.input("name", { class: "user-input" });
    });

    expect(form).toBe(
      '<form action="#" method="post"><input name="name" type="text" value="rob" class="user-input"></form>',
    );
  });

  it("overrides textarea defaults", () => {
    const form = HexletCode.formFor(template, {}, (f) => {
      f.input("job", { as: "textarea", rows: 50, cols: 50 });
    });

    expect(form).toBe(
      '<form action="#" method="post"><textarea cols="50" rows="50" name="job">hexlet</textarea></form>',
    );
  });

  it("throws an error for a missing field", () => {
    expect(() =>
      HexletCode.formFor(template, {}, (f) => {
        f.input("age");
      }),
    ).toThrow("Field 'age' does not exist in the template.");
  });
});
