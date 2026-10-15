import Tag from "./tag";

type AttributeValue = string | number;

type InputOptions = {
  as?: "input" | "textarea";
  [key: string]: AttributeValue | undefined;
};

type FormOptions = {
  url?: string;
  method?: string;
};

type Template = Record<string, unknown>;

class FormBuilder {
  private fields: string[] = [];

  constructor(private template: Template) {}

  input(name: string, options: InputOptions = {}): void {
    if (!Object.prototype.hasOwnProperty.call(this.template, name)) {
      throw new Error(`Field '${name}' does not exist in the template.`);
    }

    const value = this.template[name];

    const { as = "input", ...attributes } = options;

    if (as === "textarea") {
      const textareaAttributes: Record<string, AttributeValue> = {
        cols: 20,
        rows: 40,
        name,
        ...attributes,
      };

      this.fields.push(new Tag("textarea", textareaAttributes, String(value)).toString());

      return;
    }

    const inputAttributes: Record<string, AttributeValue> = {
      name,
      type: "text",
      value: String(value),
      ...attributes,
    };

    this.fields.push(new Tag("input", inputAttributes).toString());
  }

  toString(): string {
    return this.fields.join("");
  }
}

const HexletCode = {
  formFor(
    template: Template,
    options: FormOptions = {},
    callback?: (form: FormBuilder) => void,
  ): string {
    const attributes: Record<string, AttributeValue> = {
      action: options.url ?? "#",
      method: options.method ?? "post",
    };

    const form = new FormBuilder(template);

    callback?.(form);

    return new Tag("form", attributes, form.toString()).toString();
  },
};

export default HexletCode;
