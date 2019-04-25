import axios from "axios";
import { API_URL } from "../helper";

export const createTest = async variables =>
  axios.post(API_URL, {
    query: `
      mutation CreateTest($data: TestCreateInput!) {
        createTest(data: $data) {
          id
        }
      }
    `,
    variables
  });
