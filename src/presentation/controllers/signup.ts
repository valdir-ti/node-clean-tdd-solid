export class SignUpController {
  handle(): any {
    return {
      statusCode: 400,
      body: new Error("Missing param: name"),
    }
  }
}
