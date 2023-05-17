var AWS = require("aws-sdk");
AWS.config.update({
    region: "ap-northeast-2"
});
var jwt = require('jsonwebtoken');
exports.handler = async function (event, context) {

    const issuer = "dinoh";
    const subject = "dinohsubject";
    let expiresIn = 60 * 24 * 7;

    let request = event.queryStringParameters;

    let rank = 1;
    if (request.user_id == "dinoh") {
        rank = 10;
    }

    let payload = {
        user_id: request.user_id,
        name: request.name,
        rank: rank

    };

    const token = jwt.sign({
        data: payload
    }, process.env.key, {
        algorithm: "HS512",
        expiresIn: expiresIn,
        header: {
            "alg": "HS512",
            "typ": "JWT"
        },
        issuer: issuer,
        subject: subject,
    });

    let response = {
        isBase64Encoded: true,
        statusCode: 200,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Expose-Headers": "*",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ token: token })
    };
    return response
}
