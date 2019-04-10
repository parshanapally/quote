import sinon from "sinon";
import { fetchQuotes } from "./fetchQuotes";
import Chance from "chance";

describe("Given fetchQuotes", () => {
  let fetchQuotesStub;

  beforeEach(() => {
    fetchQuotesStub = sinon.stub(window, "fetch");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should call fetch with an endpoint", () => {
    fetchQuotesStub.resolves({ json: sinon.spy() });
    const chance = new Chance();
    const quote = chance.string();

    fetchQuotes(quote).then(() => {
      sinon.assert.calledOnce(fetchQuotesStub);
      sinon.asset.calledWithExactly(
        fetchQuotesStub,
        `http://calm-everglades-77663.herokuapp.com/quote`
      );
    });
  });
});
