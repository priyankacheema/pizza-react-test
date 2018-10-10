import { expect } from "code";
import sinon from "sinon";
import { fetchPizzasList } from "../../api/pizza";

describe("Given our pizza api", () => {
  let fetchStub;
  beforeEach(() => {
    fetchStub = sinon.stub(window, "fetch");
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("When fetchPizzasList() is called", () => {
    describe("Then the call is successful", () => {
      let mockValue;
      beforeEach(() => {
        mockValue = [{}];
        const json = sinon.stub().returns(mockValue);

        fetchStub.resolves({ json });
      });

      it("should return the mock values", () => {
        fetchPizzasList().then(repos => {
          expect(repos).to.equal(mockValue);
        });
      });
    });
    describe("Then the call is unsuccessful", () => {
      beforeEach(() => {
        fetchStub.rejects({ message: "Sorry." });
      });

      it("should throw the error", () => {
        fetchPizzasList()
          .then(() => {
            expect(true).to.be.false();
          })
          .catch(e => {
            expect(e.message).to.equal("Sorry.");
          });
      });
    });
  });
});
