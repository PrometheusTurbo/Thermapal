exports.handler = function(event, context) {
  if (event["httpMethod"] === "POST") {
    console.log(event["body"])
  }
}
