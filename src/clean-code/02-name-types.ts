(() => {
  const temperturesCelsius = [33.6, 12.34];

  const serverIp = "123.123.123.123";

  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  const usersEmails = users.map((user) => user.email);

  const canJump = false;
  const canRun = true;
  const hasItems = true;
  const isLoading = false;

  const startTime = new Date().getTime();

  const endTiem = new Date().getTime() - startTime;

  function getBooks() {
    throw new Error("Function not implemented.");
  }

  function getBooksByUrl(url: string): string {
    throw new Error("Function not implemented.");
  }

  function getSquareArea(side: number): string {
    throw new Error("Function not implemented.");
  }

  function printJob(): string {
    throw new Error("Function not implemented.");
  }
})();
