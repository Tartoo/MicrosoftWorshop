module.exports = async function (context) {
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

    context.res = {
        body: tasks
    };
}