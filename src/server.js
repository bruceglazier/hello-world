import { createServer, Model } from "miragejs";

export function makeServer() {
  const server = createServer({
    routes() {
      this.urlPrefix = "http://dummy.restapiexample.com/api/v1";
      this.get("/employee/1", () => ({
        status: "success",
        data: {
          id: 1,
          employee_name: "Mock User",
          employee_salary: 344420800,
          employee_age: 33,
          profile_image: "",
        },
        message: "Successfully! Record has been fetched.",
      }));
    },
    models: {
      searchResult: Model,
    },
  });

  server.logging = true;
  return server;
}
