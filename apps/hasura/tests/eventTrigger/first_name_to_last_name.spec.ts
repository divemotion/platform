/* eslint-disable camelcase */
import clearDb, { closeConnection } from "../utils/clear_db";
import { AdminClient, Client } from "../utils/client";

describe("Users", () => {
  beforeEach(() => jest.setTimeout(60000));
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
      const client = Client();

      const newUser = await adminClient.AddUser({
        user: {
          id: "e2aae540-1486-4b53-b669-261a13bc12ae",
          first_name: "first",
          last_name: "last",
          email: "email@mail.com",
        },
      });
      expect(newUser.insert_user_one?.first_name).toEqual("first");

      const expectNameChange = "name change";
      await client.request(
        `
        mutation (
          $userId: uuid!
          $input: user_set_input = {}
        ) {
          update_user_by_pk(
            pk_columns: {id: $userId },
            _set: $input
          ) {
            id
            first_name
            last_name
          }
        }
      `,
        {
          userId: newUser.insert_user_one?.id,
          input: {
            last_name: expectNameChange,
          },
        }
      );

      const updatedUser = await client.request(
        `
        query (
          $userId: uuid!
        ) {
          user_by_pk(id: $userId) {
            id
            first_name
            last_name
          }
        }
      `,
        {
          userId: newUser.insert_user_one?.id,
        }
      );

      const userList = await adminClient.UsersList();
      /* Checking that the first name of the user is equal to "first" */

      expect(userList.user.length).toEqual(1);
      expect(updatedUser.user_by_pk.last_name).toEqual(expectNameChange);
    });
  });
});
