import { markAsRead, setNotificationFilter } from "./notificationActionCreators";


describe("notificationActionCreators", () => {
  it("confirm markAsRead returns correct object", () => {
    const index = 1;
    const expectedAction = {
      type: "MARK_AS_READ",
      index,
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });
  it("confirm setNotificationFilter returns correct object", () => {
    const filter = "DEFAULT";
    const expectedAction = {
      type: "SET_TYPE_FILTER",
      filter,
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
