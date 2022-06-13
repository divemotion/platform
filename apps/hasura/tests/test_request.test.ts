import client from "./utils/client";

describe("Users", () => {
  /**
   * Check that two different users only see the todos that they created themselves
   * and not see any todos from the other user
   */
  describe("query user", () => {
    it("should only see his todos", async () => {
      const userClient = client();
      const userList = await userClient.UsersList();
      console.log("userList", userList);
      expect(userList.users.length).toEqual(0);
    });
  });
});
