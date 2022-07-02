import { string } from "prop-types";

(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }
  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;
    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSetting {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    public email;
    public role;
    public name;
    public gender;
    public birthdate;
    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSetting) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
      this.email = email;
      this.role = role;
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "fernando@google.com",
    role: "Admin",
    name: "Fernando",
    gender: "M",
    birthdate: new Date("1985-10-21"),
  });

  console.log({ userSettings });
})();
