import { coursesNormalizer } from "./courses";


describe("coursesNormalizer", () => {

  it("should return an object", () => {
    const data = [
      {
        id: 1,
        title: "Course 1",
        description: "Description 1",
        duration: 120,
        creationDate: "2020-01-01",
        authors: [1, 2],
      },
      {
        id: 2,
        title: "Course 2",
        description: "Description 2",
        duration: 120,
        creationDate: "2020-01-01",
        authors: [1, 2],
      },
    ];

    const normalizedData = coursesNormalizer(data);

    expect(typeof normalizedData).toBe("object");
  });
});
