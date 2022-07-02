interface birdsGeneralActions {
  eat(): void;
  fly(): void;
}

interface bridsRun {
  rund(): void;
}

interface bridsSwim {
  swim(): void;
}

interface bridsSpeak {
  speak(): void;
}

class Parrot implements birdsGeneralActions, bridsSpeak {
  eat() {}
  fly() {}
  speak() {}
}

class Toucan implements birdsGeneralActions {
  eat() {}
  fly() {}
}

class Ostrich implements birdsGeneralActions, bridsRun {
  eat() {}
  fly() {}
  rund() {}
}

class Penguin implements birdsGeneralActions, bridsSwim, bridsRun {
  eat() {}
  fly() {}
  swim() {}
  rund() {}
}
