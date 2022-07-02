(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }
  interface SettingsProp {
    lastOpenFolder: string;
    workingDirectory: string;
  }
  class SettingsProps {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProp) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  class UserSettigs {
    public person: Person;
    public user: User;
    public settings: SettingsProp;
    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastOpenFolder,
    }: SettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new SettingsProps({ workingDirectory, lastOpenFolder });
    }
  }

  const userSettings = new UserSettigs({
    birthdate: new Date("1985-10-21"),
    email: "fernando@google.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Fernando",
    role: "Admin",
    workingDirectory: "/usr/home",
  });

  console.log({ userSettings });
})();
