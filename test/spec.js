describe("evens", function() {
  it("should return true if indices returned are even", function() {
    expect(evens([1,2,3,4], [1,3])).toEqual(true);
    expect(evens([1,2,3,4], [1])).toEqual(true);
    expect(evens([1,2,3,4], [3])).toEqual(true);
    expect(evens([1,2,3,4], [2,4])).toEqual(false);
    expect(evens([1,2,3,4], [2])).toEqual(false);
    expect(evens([1,2,3,4], [4])).toEqual(false);

  });
});