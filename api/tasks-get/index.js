module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const tasks = [
        {
            id: 1,
            label: "🍔 Eat",
            status: ""
        },
        {
            id: 2,
            label: "🛏 Sleep",
            status: ""
        },
        {
            id: 3,
            label: "</> Code",
            status: ""
        }
    ];
    const responseMessage = tasks
        ? "Hello, " + tasks + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}