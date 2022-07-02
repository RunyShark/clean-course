(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class Html {
    public id;
    public type;
    constructor(id: string, type: HtmlType) {
      this.id = id;
      this.type = type;
    }
  }

  class InputAttribute {
    public value;
    public placeholder;
    constructor(value: string, placeholder: string) {
      this.value = value;
      this.placeholder = placeholder;
    }
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  class InputElement {
    public htmlElement: Html;
    public inputAttributes: InputAttribute;
    public inputEvents: InputEvents;
    constructor(value: string, placeholder: string, id: string) {
      this.htmlElement = new Html(id, "input");
      this.inputAttributes = new InputAttribute(value, placeholder);
      this.inputEvents = new InputEvents();
    }
  }
  //? Idea para la nueva clase InputElement

  const nameField = new InputElement("Fernando", "Enter first name", "txtName");
  console.log({ nameField });
})();
