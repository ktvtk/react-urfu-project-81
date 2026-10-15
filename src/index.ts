import Tag from "./tag";

type FormOptions = {
  url?: string;
};

type FormCallback = (form: unknown) => void;

const HexletCode = {
  formFor(
    _template: Record<string, unknown>,
    options: FormOptions = {},
    _callback?: FormCallback,
  ): string {
    const attributes = {
      action: options.url ?? "#",
      method: "post",
    };

    return new Tag("form", attributes).toString();
  },
};

export default HexletCode;
