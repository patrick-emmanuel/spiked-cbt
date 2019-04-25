import { expect } from "chai";

import * as testApi from "./fixtures";
import { prisma } from "../../generated/prisma-client";
import "../helper";

describe("test", function() {
  this.timeout(0);
  this.slow(1000);

  describe("createTest: Test", () => {
    it("Create a new test", async () => {
      const { data } = await testApi.createTest({
        data: {
          name: "Patrick Test",
          questions: {
            create: [
              {
                multipleChoice: true,
                options: {
                  create: [
                    {
                      value: "Kill",
                      correctOption: false
                    }
                  ]
                }
              }
            ]
          }
        }
      });

      expect(data.data.createTest.id).to.be.a("string");
    });
  });
});
