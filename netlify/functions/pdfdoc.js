const CORS_HEADERS = {
    'Access-Control-Allow-Origin': 'https://members.ctulocal1.org',
    'Access-Control-Allow-Origin': 'https://members.ctunet.com',
    'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
}

exports.handler = async (event, context) => {
    const id = event.queryStringParameters.docid;
    console.log(id)
    if (!id) {
        return {
            statusCode: 400,
            body: "Your request must include an ID parameter.",
        }
    } else {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://www.ctulocal1.org',
                'Access-Control-Allow-Headers':
                'Origin, X-Requested-With, Content-Type, Accept',
                'Content-Type': 'application/json',
            },
            body: "Reply",
        };
    };
};
// async function getPDF () {
//     let pdf = await fetch ("https://ctu.ac/assets/PDF/FAQ.pdf")
//     return pdf;
// }
