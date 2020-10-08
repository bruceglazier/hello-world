import { createServer, Model, Response } from "miragejs";

export function makeServer() {
  const server = createServer({
    routes() {
      this.urlPrefix = "http://dummy.restapiexample.com";
      this.namespace = "api/v1"
      this.get(
        "employee/1",
        () =>
          new Response({
            code: 200,
            body: {
              status: "success",
              data: {
                id: 1,
                employee_name: "Mock User",
                employee_salary: 344420800,
                employee_age: 33,
                profile_image: "",
              },
              message: "Successfully! Record has been fetched.",
            },
          })
      );
    },
    models: {
      searchResult: Model,
    },
  });

  server.logging = true;
  return server;
}
