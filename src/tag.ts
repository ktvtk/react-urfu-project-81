class Tag {
    private static readonly singleTags = [
        "area", "base", "br", "col", "embed",
        "hr", "img", "input", "link", "meta",
        "param", "source", "track", "wbr"
    ];

    constructor(
        private name: string,
        private attributes: Record<string, string> = {},
        private content: string = ""
    ) {}

    toString(): string {
        const attrs = Object.entries(this.attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ");

        const openingTag = attrs
            ? `<${this.name} ${attrs}>`
            : `<${this.name}>`;

        if (Tag.singleTags.includes(this.name)) {
            return openingTag;
        }

        return `${openingTag}${this.content}</${this.name}>`;
    }
}

export default Tag;