import Coupon from "../../src/domain/entity/Coupon"

describe("Coupon Test", function () {
  it("Create a coupon", function () {
    const coupon = new Coupon("VALE20", 20);
    const isExpired = coupon.isExpired();
    expect(isExpired).toBeFalsy();
  });

  it("Create a coupon and calculate discount ", function () {
    const coupon = new Coupon("VALE20", 20);
    const discount = coupon.calculateDiscount(1000);
    expect(discount).toBe(200)
  });

  it("Create a expired coupon", function () {
    const coupon = new Coupon("VALE20", 20, new Date("2021-03-01T10:00:00"));
    const isExpired = coupon.isExpired(new Date("2022-03-01T10:00:00"));
    expect(isExpired).toBeTruthy()
  });
});