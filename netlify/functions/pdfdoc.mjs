import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import {fs} from 'fs';

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
        modifyPdf (id).then((pdf) => {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://www.ctulocal1.org',
                'Access-Control-Allow-Headers':
                'Origin, X-Requested-With, Content-Type, Accept',
                'Content-Type': 'application/json',
            },
            body: pdf,
        };
        })
    };
};

async function modifyPdf(id) {
    console.log ("before rfs")
  const existingPdfBytes = fs.readFileSync("./public/assets/pdf/FAQ.pdf");

    console.log("after rfs")
    const pdfBytes = existingPdfBytes;

  // const pdfDoc = await PDFDocument.load(existingPdfBytes);
  // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // const pages = pdfDoc.getPages();
  // const firstPage = pages[0];
  // const { width, height } = firstPage.getSize();
  // firstPage.drawText(`proposals-${id}` , {
    // x: 50,
    // y: 50,
    // size: 10,
  // })

//  const pdfBytes = await pdfDoc.save();
    return pdfBytes;
}
async function getDoc () {
  let doc;
  const url = 'assets/pdf/FAQ.pdf';

  try {
    const result = await fetch(fileURL, {
      headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`
      }
    })
    doc = await result.buffer()
  } catch (error) {
    console.log('error', error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    }
  }

  return doc;
}
