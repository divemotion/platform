/* eslint-disable camelcase */
import clearDb, { closeConnection } from "./utils/clear_db";
import { AdminClient } from "./utils/client";

describe("Users", () => {
  beforeEach(clearDb);
  afterAll(closeConnection);
  /**
   * Check that two different users only see the todos that they created themselves
   * and not see any todos from the other user
   */
  describe("create user", () => {
    it("should have 1 user", async () => {
      const adminClient = AdminClient({
        userId: "e2aae540-1486-4b53-b669-261a13bc12ae",
      });
      const newUser = await adminClient.AddUser({
        user: {
          id: "e2aae540-1486-4b53-b669-261a13bc12ae",
          first_name: "first",
          last_name: "last",
          email: "email@mail.com",
        },
      });
      const userList = await adminClient.UsersList();
      expect(newUser.insert_users_one?.first_name).toEqual("first");
      expect(userList.users.length).toEqual(1);
    });
  });
});
