const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://www.ctulocal1.org',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
}
exports.handler = async (event, context) => {
  const Email = event.queryStringParameters.email;
  if (!Email) {
    return {
      statusCode: 400,
      body: "Your request must include a CPS email address.",
    }
  }
  const data = getData ();
  let hits = data.filter(recipient => {
    return recipient.Email.toLowerCase() === Email.toLowerCase()
  }) 

  // if (hits.length > 0) {
  if (1 > 0) {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://www.ctulocal1.org',
        'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hits) ,
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify(hits),
      headers: {
        'Access-Control-Allow-Origin': 'https://www.ctulocal1.org',
        'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json',
      },
    }
  }
};
function getData () {
  const data = [
    {
      "LastName": "Abdallah",
      "FirstName": "Nemeh",
      "Email": "nabdallah1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "abeja",
      "FirstName": "oralia",
      "Email": "oabeja@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Abioro",
      "FirstName": "Elizabeth",
      "Email": "eaabioro@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Aburto",
      "FirstName": "Presiliana",
      "Email": "paburto@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Acosta",
      "FirstName": "Alicia",
      "Email": "aaacosta6@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Adair Anderson",
      "FirstName": "Shirley",
      "Email": "sadairvickers@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Adamik",
      "FirstName": "Gina",
      "Email": "gmlaporta@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Adamo",
      "FirstName": "Kristena",
      "Email": "ksadamo1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Adams",
      "FirstName": "Alicia",
      "Email": "aadams60@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Adams",
      "FirstName": "Marta",
      "Email": "mdadams5@cps.edu",
      "Title": "Teacher-Citywide",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Adams Mckenzie",
      "FirstName": "Deonna",
      "Email": "dadamsmckenzie@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Adams-Golden",
      "FirstName": "Shirlice",
      "Email": "saadams@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Adolphus",
      "FirstName": "Florence",
      "Email": "fradolphus@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Adrianzen",
      "FirstName": "Urbano",
      "Email": "uadrianzen@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Affatato",
      "FirstName": "Alese",
      "Email": "aaffatato@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Agosta",
      "FirstName": "Rachel",
      "Email": "ragosta@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Agostinelli",
      "FirstName": "Anne",
      "Email": "aeagostinelli@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Aguilar",
      "FirstName": "Jeannette",
      "Email": "jaguilar122@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Aguirre",
      "FirstName": "Laura",
      "Email": "llaguirre1@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Aguirre",
      "FirstName": "Karyn",
      "Email": "klaguirre@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Agyapong",
      "FirstName": "Ellen",
      "Email": "eaagyapong1@cps.edu",
      "Title": "Health Service Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Aiken",
      "FirstName": "Danielle",
      "Email": "dysmith-aike@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Aillon",
      "FirstName": "Mary",
      "Email": "mcaillon@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Akram",
      "FirstName": "Deidra",
      "Email": "ddakram@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Alabi",
      "FirstName": "Moyosore",
      "Email": "malabi1@cps.edu",
      "Title": "Health Service Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Alba",
      "FirstName": "Silvia",
      "Email": "salba3@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Alcocer",
      "FirstName": "Celina",
      "Email": "calcocer1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Alderson",
      "FirstName": "Deloris",
      "Email": "daalderson@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Alderson",
      "FirstName": "Marcus",
      "Email": "mwalderson@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Alexander",
      "FirstName": "Candice",
      "Email": "calexander11@cps.edu",
      "Title": "Day-To-Day Sub Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Alfonsi",
      "FirstName": "Alisa",
      "Email": "avalfonsi@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Alfred",
      "FirstName": "Jeanette",
      "Email": "jjattisso@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Allebach",
      "FirstName": "Beverly",
      "Email": "bcallebach@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Allen",
      "FirstName": "Davina",
      "Email": "dtallen@cps.edu",
      "Title": "Curriculum And Instruct Coach",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Allen",
      "FirstName": "Shanteau",
      "Email": "saallen2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Allison-Billingslea",
      "FirstName": "Alicia",
      "Email": "ajallisonbillingslea@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Almanza",
      "FirstName": "Josefina",
      "Email": "jalmanza@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Almer",
      "FirstName": "Jay",
      "Email": "jaalmer@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Alonso",
      "FirstName": "marina",
      "Email": "malonso1@cps.edu",
      "Title": "School Community Representive",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Alper",
      "FirstName": "Jennifer",
      "Email": "jlalper@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Altinay",
      "FirstName": "Sara",
      "Email": "saaltinay@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Alunan",
      "FirstName": "Jacquelyn",
      "Email": "jalunan@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Alvarado",
      "FirstName": "Pablo",
      "Email": "pmalvarado@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Alvares",
      "FirstName": "Eugenie",
      "Email": "edalvares@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Alvarez",
      "FirstName": "Maria",
      "Email": "mmalvarez6@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Alvarez",
      "FirstName": "Giselle",
      "Email": "galvarez55@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Amato",
      "FirstName": "Christina",
      "Email": "cgaguilera@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Amaya",
      "FirstName": "Angelina",
      "Email": "apronobis@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ambre",
      "FirstName": "Maria",
      "Email": "mlambre@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Amezqueta-Martinez",
      "FirstName": "Eduardo",
      "Email": "eamezqueta-@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Amon",
      "FirstName": "Connie",
      "Email": "clamon@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Amro",
      "FirstName": "Nadia",
      "Email": "niamro@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Missing certificate",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Anaya",
      "FirstName": "Carina",
      "Email": "cplascencia@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Missing certificate",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Anders",
      "FirstName": "Andrea",
      "Email": "aganders@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Anderson",
      "FirstName": "Amy",
      "Email": "aranderson4@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Anderson",
      "FirstName": "Lindsey",
      "Email": "ldanderson7@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Anderson",
      "FirstName": "Rosemary",
      "Email": "randerson41@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Andrade",
      "FirstName": "Humberto",
      "Email": "handrade@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Andrade",
      "FirstName": "Victoria",
      "Email": "vandrade9@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Anest",
      "FirstName": "Patricia",
      "Email": "pehowe@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Angelle",
      "FirstName": "Jordan",
      "Email": "jbangelle@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Annunzio",
      "FirstName": "Rebecca",
      "Email": "rcannunzio@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Anthony",
      "FirstName": "Jesse",
      "Email": "jpanthony@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Apey",
      "FirstName": "Susan",
      "Email": "saapey@cps.edu",
      "Title": "Part-Time Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Archie",
      "FirstName": "Myra",
      "Email": "mmarchie@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Arechar",
      "FirstName": "Patricia",
      "Email": "parechar@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Arevalo",
      "FirstName": "Nereida",
      "Email": "narevalo@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Armstrong",
      "FirstName": "Marcus",
      "Email": "mtarmstrong@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Armstrong",
      "FirstName": "Kimberly",
      "Email": "karmstrong@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Armstrong-Shaffer",
      "FirstName": "Denita",
      "Email": "dnshaffer@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Arnold",
      "FirstName": "Harold",
      "Email": "hcarnold@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Arriazola",
      "FirstName": "Alina",
      "Email": "aarriazola@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Arrington",
      "FirstName": "LaJule",
      "Email": "luarrington@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Arroyo",
      "FirstName": "Judith",
      "Email": "jarroyo4@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Arroyo",
      "FirstName": "Patricia",
      "Email": "parroyo@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Arroyo",
      "FirstName": "Ivis",
      "Email": "irodriguez74@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Arroyo-Perez",
      "FirstName": "Diana",
      "Email": "darroyo-perez@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ashfaq",
      "FirstName": "Sana",
      "Email": "sashfaq@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Askuvich",
      "FirstName": "Andrew",
      "Email": "aeaskuvich@cps.edu",
      "Title": "Day-To-Day Sub Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Athanas",
      "FirstName": "Christine",
      "Email": "clpoczik@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Atias",
      "FirstName": "Matthew",
      "Email": "maatias1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Atkins",
      "FirstName": "Rhonda",
      "Email": "rmatkins@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Aucutt",
      "FirstName": "David",
      "Email": "daucutt@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Augustyn",
      "FirstName": "Garrett",
      "Email": "glaugustyn1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Aukstik",
      "FirstName": "Danielle",
      "Email": "dlaukstik@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Austin",
      "FirstName": "Dawn",
      "Email": "daustin14@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Avers",
      "FirstName": "Jenna",
      "Email": "javers@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Aviles",
      "FirstName": "Alicia",
      "Email": "aaviles41@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ayele",
      "FirstName": "Hana",
      "Email": "hayele@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Baar-Ledford",
      "FirstName": "Sara",
      "Email": "sdbaar@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Bach",
      "FirstName": "Barbara",
      "Email": "babach@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Baez",
      "FirstName": "Bianca",
      "Email": "bbaez6@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Baeza",
      "FirstName": "Esperanza",
      "Email": "esbaeza@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Baggio",
      "FirstName": "Emily",
      "Email": "ebaggio@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Bahena",
      "FirstName": "Evelin",
      "Email": "ebahena56@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bailey",
      "FirstName": "Shaneshia",
      "Email": "smbailey@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bailey",
      "FirstName": "Leslie",
      "Email": "ljbailey@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Baker",
      "FirstName": "Chantay",
      "Email": "crbaker@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Baker",
      "FirstName": "Gynette",
      "Email": "gcpearsonbaker@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Baker",
      "FirstName": "Glinda",
      "Email": "gyphinisee@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Balas",
      "FirstName": "Hannah",
      "Email": "hdruckmiller@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Balestri",
      "FirstName": "Kelsey",
      "Email": "kmbalestri@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ball",
      "FirstName": "Brittney",
      "Email": "bmball@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Banda",
      "FirstName": "Lilia",
      "Email": "lbanda@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Banks",
      "FirstName": "Lindsey",
      "Email": "llbanks@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Banks-Lincoln",
      "FirstName": "Dalanda",
      "Email": "dvbanks@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bannon",
      "FirstName": "Lucy",
      "Email": "lbbannon@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Banos",
      "FirstName": "Milagros",
      "Email": "mibanos@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Barge",
      "FirstName": "Jacqueline",
      "Email": "jcbarge@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Barginear",
      "FirstName": "Michelle",
      "Email": "msbarginear@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Barkoo",
      "FirstName": "Jacquelyn",
      "Email": "jabarkoo@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Barnes",
      "FirstName": "LaTis",
      "Email": "lpbarnes@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Barnes",
      "FirstName": "Joyce",
      "Email": "jkeith@cps.edu",
      "Title": "School Counseling Office Asst",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Barnes",
      "FirstName": "Deborah",
      "Email": "dabarnes1@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Barr",
      "FirstName": "Brandon",
      "Email": "bmbarr@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Barraza",
      "FirstName": "Anita",
      "Email": "abarraza@cps.edu",
      "Title": "Occupational Therapist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Barrera",
      "FirstName": "Luis",
      "Email": "lebarrera@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Barrera",
      "FirstName": "lmbarrera2@cps.edu",
      "Email": "lmbarrera2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Barrins",
      "FirstName": "Eileen",
      "Email": "emoconnor2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Barron",
      "FirstName": "Bridget",
      "Email": "babarron@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Barry",
      "FirstName": "Fatoumata",
      "Email": "fdbarry@cps.edu",
      "Title": "Health Service Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bartell",
      "FirstName": "Robin",
      "Email": "rebartell1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bartlett",
      "FirstName": "Emily",
      "Email": "eabartlett1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Bastek",
      "FirstName": "Kirk",
      "Email": "kjbastek@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Batres",
      "FirstName": "Reynalda",
      "Email": "rbatres1@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Bauer",
      "FirstName": "Grace",
      "Email": "gebauer@cps.edu",
      "Title": "Part-Time Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bawany",
      "FirstName": "Mueze",
      "Email": "mbawany1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Baygood",
      "FirstName": "Jennifer",
      "Email": "jsbaygood@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bayliss",
      "FirstName": "Dara",
      "Email": "dgsklare@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Beach",
      "FirstName": "Justin",
      "Email": "jbeach@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Beal",
      "FirstName": "Danielle",
      "Email": "dlbeal@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "beasley",
      "FirstName": "letrice",
      "Email": "lmbeasley1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Beaton",
      "FirstName": "Nicole",
      "Email": "nbeaton@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Beaubien",
      "FirstName": "Patricia",
      "Email": "pbeaubien@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Beckom",
      "FirstName": "Denise",
      "Email": "drbeckom@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bell",
      "FirstName": "Wilma",
      "Email": "wzbell@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bell",
      "FirstName": "Sally",
      "Email": "sbell30@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bell",
      "FirstName": "Christine",
      "Email": "cmcius@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bell",
      "FirstName": "Cinnamon",
      "Email": "cmbell@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bencel",
      "FirstName": "Caitlin",
      "Email": "cmbencel@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bending",
      "FirstName": "Susan",
      "Email": "sbending@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Benjamin",
      "FirstName": "Susan",
      "Email": "smbenjamin@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bennett",
      "FirstName": "Chelsea",
      "Email": "cbennett22@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Beranek",
      "FirstName": "Kimberly",
      "Email": "klberanek@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Berger",
      "FirstName": "Jacqueline",
      "Email": "jmberger@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Berghoff",
      "FirstName": "Sally",
      "Email": "saberghoff@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bergstrom",
      "FirstName": "Zoe",
      "Email": "zcbergstrom@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bermes",
      "FirstName": "Emily",
      "Email": "ebermes1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Bernabe",
      "FirstName": "Deanna",
      "Email": "dbernabe3@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Beverly-Bass",
      "FirstName": "Carrene",
      "Email": "cbeverly-bass@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bianchi",
      "FirstName": "Lauren",
      "Email": "lmbianchi@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Biddle-White",
      "FirstName": "Jebba",
      "Email": "jlbiddle-white@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bienaime",
      "FirstName": "Makenson",
      "Email": "mbienaime@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Binion",
      "FirstName": "Pamela",
      "Email": "pewillis@cps.edu",
      "Title": "Teacher-Citywide",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bishop",
      "FirstName": "Deborah",
      "Email": "doakinwale@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bitto",
      "FirstName": "Jaclyn",
      "Email": "jlbitto@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bizon",
      "FirstName": "Allison",
      "Email": "abizon2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Black-Jordan",
      "FirstName": "Teresa",
      "Email": "tblack-jord@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Blackmon",
      "FirstName": "Anisha",
      "Email": "ablackmon1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Blackshire",
      "FirstName": "Brenda",
      "Email": "bablackshire@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Blanchard",
      "FirstName": "Alyssa",
      "Email": "alblanchard@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Boatman",
      "FirstName": "Wendy",
      "Email": "wmboatman@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Boddie",
      "FirstName": "Leticia",
      "Email": "lboddie@cps.edu",
      "Title": "Teacher Asst-Montessori Prm",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bolger",
      "FirstName": "Donna",
      "Email": "dlbolger@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bonds",
      "FirstName": "Brittany",
      "Email": "bbonds@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Booker",
      "FirstName": "Reagan",
      "Email": "rnbooker@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Boraz",
      "FirstName": "Michelle",
      "Email": "mcboraz@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bormes",
      "FirstName": "Deirdre",
      "Email": "decurrybormes@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Botica",
      "FirstName": "Kathleen",
      "Email": "kfcarey1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Bouye",
      "FirstName": "Brittny",
      "Email": "babouye@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Boyd",
      "FirstName": "Chermese",
      "Email": "cboyd28@cps.edu",
      "Title": "Health Service Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Boyd",
      "FirstName": "Shayna",
      "Email": "sboyd8@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Boyland",
      "FirstName": "Shirley",
      "Email": "srboyland@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Braboy",
      "FirstName": "Darlene",
      "Email": "dbraboy@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bradford",
      "FirstName": "Amber",
      "Email": "abradford8@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bradley",
      "FirstName": "Teresa",
      "Email": "tvbradley@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bradley",
      "FirstName": "Janna",
      "Email": "jsbradley@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bradley",
      "FirstName": "Deborah",
      "Email": "dlbradley@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "BRADLEY",
      "FirstName": "LAMESHIA",
      "Email": "lbradley2@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brady",
      "FirstName": "Marcus",
      "Email": "mdbrady2@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bramble",
      "FirstName": "Ritamarie",
      "Email": "rdempsey-bramble@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Branch",
      "FirstName": "Lisa",
      "Email": "llbranch@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Breland",
      "FirstName": "Marian",
      "Email": "mbreland@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bridges",
      "FirstName": "Devonia",
      "Email": "dmbrown1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bridges",
      "FirstName": "Phyllis",
      "Email": "pbridges@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Bridges",
      "FirstName": "Angela",
      "Email": "ambridges@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brill",
      "FirstName": "August",
      "Email": "adbrill@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bringer",
      "FirstName": "Laura",
      "Email": "ldbringer@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Briseno",
      "FirstName": "Araceli",
      "Email": "abriseno8@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Britt-Freeman",
      "FirstName": "Lori",
      "Email": "lybritt-freeman@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Broadway",
      "FirstName": "Lottie",
      "Email": "lbroadway@cps.edu",
      "Title": "Health Service Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brogan",
      "FirstName": "Deborah",
      "Email": "dmbrogan@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brookd",
      "FirstName": "Jason",
      "Email": "jbrooks50@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Brooks",
      "FirstName": "Kevin",
      "Email": "kjbrooks4@cps.edu",
      "Title": "College/Career Coach",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Brooks",
      "FirstName": "Marcia",
      "Email": "mebrooks2@cps.edu",
      "Title": "Health Service Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brooks",
      "FirstName": "Calia",
      "Email": "cbrooks25@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Sandra",
      "Email": "sbrown13@cps.edu",
      "Title": "Cadre Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Jamal",
      "Email": "jrbrown1@cps.edu",
      "Title": "Computer Technician",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Earlene",
      "Email": "etbrown7@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Sandra",
      "Email": "sabrown6@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Crystal",
      "Email": "cmdavis1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Karen",
      "Email": "kabrown2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Christeen",
      "Email": "clbrown2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Chenier",
      "Email": "cdlewis@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Dionne",
      "Email": "dcbrown@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Jenna",
      "Email": "jmbrown57@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Milicia",
      "Email": "mlbrown45@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Shelita",
      "Email": "slbrown3@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "brown",
      "FirstName": "oliver",
      "Email": "opbrown1@cps.edu",
      "Title": "STLS Advocate",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "brown",
      "FirstName": "Brianna",
      "Email": "brbrown3@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Shunnetta",
      "Email": "sbrown164@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown",
      "FirstName": "Sylvia",
      "Email": "stbrown1@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "BROWNER",
      "FirstName": "CHIQUITA",
      "Email": "cbrowner2@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Browning",
      "FirstName": "Blondyne",
      "Email": "bsbrowning@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown-Murray",
      "FirstName": "Adrienne",
      "Email": "ajbrown-murray@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brownridge",
      "FirstName": "Tiffany",
      "Email": "tnbrownridge@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Brown-Sutton",
      "FirstName": "Jereece",
      "Email": "jmbrown-sutton@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown-Williams",
      "FirstName": "Camilla",
      "Email": "clbrown@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Brown-williams",
      "FirstName": "Jameelah",
      "Email": "jbrown-will@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Broy",
      "FirstName": "Jamal",
      "Email": "jybroy1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Bruehl",
      "FirstName": "Steven",
      "Email": "scbruehl@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Bryant",
      "FirstName": "Vernice",
      "Email": "vbryant@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bryant-Holmes",
      "FirstName": "Yuvonne",
      "Email": "ybryantholmes@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bucholtz",
      "FirstName": "Michael",
      "Email": "mrbucholtz@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Buckley",
      "FirstName": "Claire",
      "Email": "cfbuckley@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bueno",
      "FirstName": "Sandra",
      "Email": "sbueno@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Bullock",
      "FirstName": "Darrell",
      "Email": "dbullock5@cps.edu",
      "Title": "Student Special Svc Advocate",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Bulls",
      "FirstName": "Michelle",
      "Email": "mabills@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bulluck",
      "FirstName": "Veda",
      "Email": "vrbulluck@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bunker",
      "FirstName": "Natalie",
      "Email": "nbunker@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Burchett",
      "FirstName": "Audrey",
      "Email": "alburchett@cps.edu",
      "Title": "School Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Burford",
      "FirstName": "Albert",
      "Email": "auburford@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Burgos",
      "FirstName": "Cynthia",
      "Email": "cburgos3@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Burgos",
      "FirstName": "Lillian",
      "Email": "lrivera3@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Burke",
      "FirstName": "Niamh",
      "Email": "nburke@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Burke",
      "FirstName": "Nancy",
      "Email": "neburke@cps.edu",
      "Title": "Teacher-Citywide",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Burnett",
      "FirstName": "Ryan",
      "Email": "ryburnett@cps.edu",
      "Title": "Lead Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Burrell",
      "FirstName": "Michelle",
      "Email": "mrburrell@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Burt",
      "FirstName": "Burma",
      "Email": "baburt@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Burton",
      "FirstName": "Amaziah",
      "Email": "apburton1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bush",
      "FirstName": "Nicole",
      "Email": "nbush@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Butler",
      "FirstName": "Marissa",
      "Email": "mdbutler1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Bynum",
      "FirstName": "Kandyce",
      "Email": "kkbynum@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "BYRD",
      "FirstName": "DARLENE",
      "Email": "dmbyrd@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cabacungan",
      "FirstName": "Ronalyn",
      "Email": "racabacungan@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cabrera",
      "FirstName": "Selina",
      "Email": "scabrera@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cachor",
      "FirstName": "Jamie",
      "Email": "jmknapstein@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Caffarella",
      "FirstName": "Lauren",
      "Email": "lcaffarella@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cain",
      "FirstName": "Brittanei",
      "Email": "bcain2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Caise-Fitzpatrick",
      "FirstName": "Deborah",
      "Email": "dcaise-fitzpatri@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Calafeteanu",
      "FirstName": "Mihaela",
      "Email": "mcvaduva@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Calbert",
      "FirstName": "Maureen",
      "Email": "mcalbert@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Caldwell",
      "FirstName": "Victoria",
      "Email": "vlcaldwell@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Callaghan",
      "FirstName": "Bridget",
      "Email": "bccallaghan@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Calloway",
      "FirstName": "Breana",
      "Email": "bcalloway1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Camacho",
      "FirstName": "David",
      "Email": "dcamacho19@cps.edu",
      "Title": "Cadre Substitute Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Camacho",
      "FirstName": "Nancy",
      "Email": "ncamacho10@cps.edu",
      "Title": "School Counseling Office Asst",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cameron",
      "FirstName": "Karen",
      "Email": "kycameron@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Campbell-Grant",
      "FirstName": "Quiana",
      "Email": "qtcampbell-g@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Campe",
      "FirstName": "Constance",
      "Email": "cscampe@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Canada",
      "FirstName": "Christine",
      "Email": "cvcanada@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Canizales",
      "FirstName": "Rosario",
      "Email": "rcanizales@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cannon-Crossley",
      "FirstName": "VaLette",
      "Email": "vdcannon-crossley@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cano",
      "FirstName": "Sandy",
      "Email": "scano@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Caponigro",
      "FirstName": "Virginia",
      "Email": "vmcaponigro@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Carabez",
      "FirstName": "Yesenia",
      "Email": "ymcarabez@cps.edu",
      "Title": "Teacher Assistant Bilingual",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Carapia",
      "FirstName": "Yesenia",
      "Email": "yrcarapia@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cardenas",
      "FirstName": "Elsie L",
      "Email": "elcardenas@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cardenas",
      "FirstName": "Griselda",
      "Email": "gcardenas@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Carothers",
      "FirstName": "Kimberly",
      "Email": "kdcarothers@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Carpenter",
      "FirstName": "Shavon",
      "Email": "skcarpenter1@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Carr",
      "FirstName": "Shannon",
      "Email": "slcarr@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Carr",
      "FirstName": "Trecole",
      "Email": "tlcarr3@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Carreno",
      "FirstName": "Maricela",
      "Email": "mcarreno@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Carreon",
      "FirstName": "Francisco J",
      "Email": "fjcarreon@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Carrethers",
      "FirstName": "Loreal",
      "Email": "lscarrethers@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Carrillo",
      "FirstName": "Alicia",
      "Email": "acarrillo@cps.edu",
      "Title": "Teacher Asst Bil Spanish",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Carro",
      "FirstName": "Kaitlyn",
      "Email": "kcarro2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Carro",
      "FirstName": "Lynn",
      "Email": "lcarro@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Carroll",
      "FirstName": "Tasha",
      "Email": "tlcarroll@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Carter-Hampton",
      "FirstName": "Felicia",
      "Email": "fcarter5@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "casas",
      "FirstName": "carina",
      "Email": "ccasas1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Casas-Trejo",
      "FirstName": "Manuela",
      "Email": "mcasas-trejo@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Casey",
      "FirstName": "John",
      "Email": "jgcasey@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Casey Feltes",
      "FirstName": "Michelle",
      "Email": "mcasey2@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cashman",
      "FirstName": "Sheila",
      "Email": "smcashman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cassidy",
      "FirstName": "Siobhann",
      "Email": "smcassidy@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cassillo",
      "FirstName": "Kieran",
      "Email": "klcassillo@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Castaneda",
      "FirstName": "Ariagna",
      "Email": "aecastaneda1@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Castaneda",
      "FirstName": "Evelyn",
      "Email": "ecastaneda1@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Castellanos",
      "FirstName": "Darcy",
      "Email": "dahajduk@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Castillo",
      "FirstName": "Jaime",
      "Email": "jdcastillo6@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Castro",
      "FirstName": "Maribel",
      "Email": "mcastro@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Catala-Walsh",
      "FirstName": "Anais",
      "Email": "aacatala@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Catledge",
      "FirstName": "Lisa",
      "Email": "lacatledge@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Caulton",
      "FirstName": "Monique",
      "Email": "mscaulton@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Centeno",
      "FirstName": "Cynthia",
      "Email": "ccenteno6@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cervantes",
      "FirstName": "Margarita",
      "Email": "mcervantes1@cps.edu",
      "Title": "Cadre Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cervantes",
      "FirstName": "Alicia",
      "Email": "amcervantes5@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Chacon",
      "FirstName": "Erika",
      "Email": "echacon6@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Chada",
      "FirstName": "Robert",
      "Email": "rmchada@cps.edu",
      "Title": "Teacher-Citywide",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Chambers",
      "FirstName": "Lonnie",
      "Email": "lhchambers@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Champion",
      "FirstName": "Kianti",
      "Email": "kchampion4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Chandler",
      "FirstName": "Erica",
      "Email": "ejchandler@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Chatman-Walls",
      "FirstName": "Carolyn",
      "Email": "cdchatman-walls@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Chavez",
      "FirstName": "Margarita",
      "Email": "mchavez22@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cheatem",
      "FirstName": "Joyce",
      "Email": "jcheatem@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Chen",
      "FirstName": "Qiong",
      "Email": "qchen8@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Chestleigh",
      "FirstName": "Arielle",
      "Email": "abchestleigh@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cheung",
      "FirstName": "May",
      "Email": "mcheung@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Chevas",
      "FirstName": "Leticia",
      "Email": "lschevas@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Chia",
      "FirstName": "Karen",
      "Email": "kchia2@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Chilenski",
      "FirstName": "Amanda",
      "Email": "acchilenski@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Chlebowski",
      "FirstName": "Cassie",
      "Email": "clchlebowski@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Choi",
      "FirstName": "Andrew",
      "Email": "achoi4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cholod",
      "FirstName": "Amy",
      "Email": "amcholod@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Christian",
      "FirstName": "Linda",
      "Email": "ligreene@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Christman",
      "FirstName": "Corinna",
      "Email": "cchristman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Chudzinski",
      "FirstName": "Jennifer",
      "Email": "jlchudzinski@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ciciora",
      "FirstName": "Julia",
      "Email": "jaciciora@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ciciora",
      "FirstName": "Nancy",
      "Email": "nmciciora@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cienfuegos",
      "FirstName": "Maria",
      "Email": "mcienfuegos@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cieslik",
      "FirstName": "Daniel",
      "Email": "djcieslik@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cintron",
      "FirstName": "Aide",
      "Email": "acintron@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cipriani",
      "FirstName": "Gina",
      "Email": "gacipriani@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Claiborne",
      "FirstName": "Kisha",
      "Email": "klclaiborne@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Clancy",
      "FirstName": "Lauren",
      "Email": "lmclancy@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Clark",
      "FirstName": "Sierra",
      "Email": "stclark5@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cleary",
      "FirstName": "Laura",
      "Email": "lrcleary@cps.edu",
      "Title": "School Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Clemmons",
      "FirstName": "Antoinette",
      "Email": "aoleary-cle@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Clemons",
      "FirstName": "Marcus",
      "Email": "mtclemons@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Clemons",
      "FirstName": "Timeka",
      "Email": "tclemons8@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Clifton",
      "FirstName": "Markel",
      "Email": "mrclifton@cps.edu",
      "Title": "STLS Advocate",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Clinton",
      "FirstName": "Justin",
      "Email": "jtclinton@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cloyd",
      "FirstName": "Erin",
      "Email": "encloyd@cps.edu",
      "Title": "Teacher-Citywide",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "coats",
      "FirstName": "janice",
      "Email": "jcoats@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Coble",
      "FirstName": "Bryan",
      "Email": "bmcoble@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cochran",
      "FirstName": "Tarchinana",
      "Email": "tmccrary@cps.edu",
      "Title": "School Counseling Office Asst",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cochran",
      "FirstName": "Eric",
      "Email": "ejcochran@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Coffey",
      "FirstName": "Carlin",
      "Email": "ccoffey2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Coglianese",
      "FirstName": "Stacy",
      "Email": "scoglianese@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cohan",
      "FirstName": "Amy",
      "Email": "atcohan@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Colclasure",
      "FirstName": "Susan",
      "Email": "smcolclasure@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Coleman",
      "FirstName": "Nakeyta",
      "Email": "nmcoleman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Coleman",
      "FirstName": "Angela",
      "Email": "akcoleman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Coleman",
      "FirstName": "Veronica",
      "Email": "vcoleman2@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "COLEMAN",
      "FirstName": "SHAVON",
      "Email": "slcoleman1@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Collazo",
      "FirstName": "Isabel",
      "Email": "iscollazo@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Collins",
      "FirstName": "Shantil",
      "Email": "socollins@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Collins",
      "FirstName": "Kathleen",
      "Email": "kcollins39@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Collins",
      "FirstName": "Lynn",
      "Email": "lmcollins@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Collins",
      "FirstName": "Andranice",
      "Email": "accollins8@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Collins-Gonzalez",
      "FirstName": "Jessica",
      "Email": "jcollins64@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Collum",
      "FirstName": "Tiara",
      "Email": "tccollum@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Colvin",
      "FirstName": "Kisha",
      "Email": "kcolvin1@cps.edu",
      "Title": "",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Combs",
      "FirstName": "Kristy",
      "Email": "kacombs@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Compton",
      "FirstName": "Sarah",
      "Email": "sdcompton1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Conde",
      "FirstName": "Karla",
      "Email": "kconde@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Conde",
      "FirstName": "Christina",
      "Email": "cconde@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Conley",
      "FirstName": "Caitlin",
      "Email": "cdconley@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Connelly",
      "FirstName": "Bert",
      "Email": "beconnelly@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Conner",
      "FirstName": "Rebecca",
      "Email": "rrconner@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Connolly",
      "FirstName": "Jaton",
      "Email": "jmconnolly@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Connor",
      "FirstName": "Mary",
      "Email": "mpconnor@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Constantine",
      "FirstName": "Nikki",
      "Email": "nconstantin@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Contreras",
      "FirstName": "Persida",
      "Email": "privera1@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Conway",
      "FirstName": "Emily",
      "Email": "elgriffin2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Conway",
      "FirstName": "Venita",
      "Email": "vconway1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cook",
      "FirstName": "Sydney",
      "Email": "smcook6@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cooksey",
      "FirstName": "Tricy",
      "Email": "tlcooksey@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Coonley",
      "FirstName": "Jessica",
      "Email": "jjcoonley@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cooper",
      "FirstName": "Shaniquia",
      "Email": "scooper23@cps.edu",
      "Title": "",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cooper",
      "FirstName": "Arielle",
      "Email": "ajcooper8@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cooper",
      "FirstName": "Kelly",
      "Email": "kcooper23@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cooper",
      "FirstName": "NaTanya",
      "Email": "nmnewell@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cooper",
      "FirstName": "Jasmine",
      "Email": "jcooper51@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cooper",
      "FirstName": "Veda",
      "Email": "vcooper@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Coppola",
      "FirstName": "Rick",
      "Email": "rjcoppola@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cordero",
      "FirstName": "Jorge",
      "Email": "jgcordero@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cordova",
      "FirstName": "Ashley",
      "Email": "aacordova3@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "cornejo",
      "FirstName": "Lydia",
      "Email": "lacornejo@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cornejo",
      "FirstName": "Veronica",
      "Email": "vcornejo@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Coronel",
      "FirstName": "Maria Isabel",
      "Email": "micoronel@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Correa",
      "FirstName": "Juan",
      "Email": "jpcorrea@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cortes",
      "FirstName": "Miguel Angel",
      "Email": "macorteslopez@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cortes",
      "FirstName": "Damaris",
      "Email": "acortes52@cps.edu",
      "Title": "Student Special Svc Advocate",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cortez",
      "FirstName": "Ruben",
      "Email": "rcortez1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cortez-Tafolla",
      "FirstName": "Maria",
      "Email": "mmcortez-taf@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cortright",
      "FirstName": "Michael",
      "Email": "mecortright@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cosby",
      "FirstName": "Kassandra",
      "Email": "kjcosby@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cosentino",
      "FirstName": "Wenjie",
      "Email": "wzcosentino@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cosme",
      "FirstName": "Catarina",
      "Email": "cacosme2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cotledge",
      "FirstName": "Crystal",
      "Email": "cccotledge@cps.edu",
      "Title": "School Counseling Office Asst",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Coval",
      "FirstName": "Lauren",
      "Email": "lwolkhamer@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cox",
      "FirstName": "Victoria",
      "Email": "vcox2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cox",
      "FirstName": "Keith",
      "Email": "kwcox@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cox",
      "FirstName": "Antonise",
      "Email": "acox16@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Craft",
      "FirstName": "Bridgette",
      "Email": "blcraft-roach@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Crawford",
      "FirstName": "Dianne",
      "Email": "dcrawford@cps.edu",
      "Title": "Day-To-Day Sub Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Crawford",
      "FirstName": "Monica",
      "Email": "mcrawford25@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Crawford",
      "FirstName": "Geneen",
      "Email": "grcrawford@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Creighton",
      "FirstName": "Kathleen",
      "Email": "kcreighton1@cps.edu",
      "Title": "Health Service Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Crespo",
      "FirstName": "Sophia",
      "Email": "sncrespo@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Cristobal",
      "FirstName": "Elizabeth",
      "Email": "ecristobal@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Crites-Morris",
      "FirstName": "Monica",
      "Email": "mcritesmorris@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Crosby",
      "FirstName": "Olivia",
      "Email": "ocrosby1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Crowder",
      "FirstName": "Nikki",
      "Email": "ncrowder2@cps.edu",
      "Title": "School Counseling Office Asst",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Crowder",
      "FirstName": "Lisa",
      "Email": "lcrowder4@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Crump",
      "FirstName": "Vitalia",
      "Email": "vcrump@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cruz",
      "FirstName": "Lissette",
      "Email": "lccruz@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cruz",
      "FirstName": "Militzie",
      "Email": "mcruz1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cummings",
      "FirstName": "Megan",
      "Email": "mmcummings@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Cunningham",
      "FirstName": "Allene",
      "Email": "acunningham@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Currie",
      "FirstName": "Andrew",
      "Email": "arcurrie@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "currie",
      "FirstName": "eric",
      "Email": "eccurrie@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Curtis",
      "FirstName": "Deborah",
      "Email": "dcurtis15@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Czabala",
      "FirstName": "Caroline",
      "Email": "cczabala@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Czochara",
      "FirstName": "Lauren",
      "Email": "laczochara@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Daboin",
      "FirstName": "Vanessa",
      "Email": "vdaboin@cps.edu",
      "Title": "Teacher Assistant Bilingual",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dalton-Patterson",
      "FirstName": "Kimberly",
      "Email": "kndalton-pat@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Damiani",
      "FirstName": "Barb",
      "Email": "badamiani@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Damore Klein",
      "FirstName": "Danielle",
      "Email": "dmdamore@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dandridge",
      "FirstName": "Pamela",
      "Email": "pdandridge@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Daniels",
      "FirstName": "Tonji",
      "Email": "tdaniels17@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Darensbourg",
      "FirstName": "Zameya",
      "Email": "zpruitt1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "darling",
      "FirstName": "angela",
      "Email": "amdarling@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Darrah",
      "FirstName": "Jennifer",
      "Email": "jadarrah@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dasenbrook",
      "FirstName": "Megan",
      "Email": "mmgordon1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Davenport",
      "FirstName": "Adam",
      "Email": "adavenport16@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Davenport",
      "FirstName": "Blakeley",
      "Email": "bdavenport3@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "David",
      "FirstName": "Amal",
      "Email": "adavid@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Davis",
      "FirstName": "Toi",
      "Email": "tkdavis@cps.edu",
      "Title": "Occupational Therapist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Davis",
      "FirstName": "Alexis",
      "Email": "adavis83@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Davis",
      "FirstName": "Tamarium",
      "Email": "tldavis35@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Davis",
      "FirstName": "Dara",
      "Email": "didavis8@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Davis",
      "FirstName": "Schmicka",
      "Email": "srdavis5@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Davis",
      "FirstName": "Dalicia",
      "Email": "dcdavis@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Davis",
      "FirstName": "Dominique",
      "Email": "dmlocascio@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "DAVIS",
      "FirstName": "FERRARI",
      "Email": "fdavis20@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Davis",
      "FirstName": "Lolita",
      "Email": "lddavis1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Davis",
      "FirstName": "Catrina",
      "Email": "cdavis147@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Davis",
      "FirstName": "Shauna",
      "Email": "smdavis@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Davis",
      "FirstName": "Deanna",
      "Email": "dldavis31@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Davis",
      "FirstName": "Aliyah",
      "Email": "amdavis50@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dawkins",
      "FirstName": "Mary",
      "Email": "mkdawkins@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Day",
      "FirstName": "Dalton",
      "Email": "dsday@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "De Arcos",
      "FirstName": "Maria",
      "Email": "mcdearcos@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "De Bruyn",
      "FirstName": "Christopher",
      "Email": "cjdebruyn@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "de Guzman",
      "FirstName": "Gladys Joy",
      "Email": "gjdeguzman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "De Guzman",
      "FirstName": "Kimberlyn",
      "Email": "kkdeguzman@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "De Jesus",
      "FirstName": "Angelique",
      "Email": "afranquidejesus@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "De Vries",
      "FirstName": "Maria Carolina",
      "Email": "mcdevries@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dean",
      "FirstName": "Meredith",
      "Email": "mdean3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dease",
      "FirstName": "Carla",
      "Email": "csdease@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "DeBoer",
      "FirstName": "Allison",
      "Email": "adeboer@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Decatus",
      "FirstName": "Christine",
      "Email": "crdecatus@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "DeDonder",
      "FirstName": "Jaclyn",
      "Email": "jmdedonder@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Deering",
      "FirstName": "Joshua",
      "Email": "jwdeering@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "deering",
      "FirstName": "Erin",
      "Email": "ecdeering@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "DeJesus",
      "FirstName": "Tamiko",
      "Email": "tddejesus@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Delgado",
      "FirstName": "Alma",
      "Email": "adelgado231@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "DeLisle",
      "FirstName": "Katherine",
      "Email": "kjdelisle@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "DeLlano",
      "FirstName": "Graciela",
      "Email": "ggonzalez6@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Denne",
      "FirstName": "Pamela",
      "Email": "pcdenne@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Denton",
      "FirstName": "Crystal",
      "Email": "cmdenton@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Diaz",
      "FirstName": "Alexandra",
      "Email": "adiaz398@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Diaz",
      "FirstName": "Alyssa",
      "Email": "afdiaz3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "diaz",
      "FirstName": "melissa",
      "Email": "mddiaz12@cps.edu",
      "Title": "School Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Diaz",
      "FirstName": "Melissa",
      "Email": "majans@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Diaz",
      "FirstName": "Jessica",
      "Email": "jjdiaz23@cps.edu",
      "Title": "School Community Representive",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Diaz",
      "FirstName": "David",
      "Email": "ddiaz2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dillon",
      "FirstName": "Angela",
      "Email": "amdillon@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ding",
      "FirstName": "Xinjie",
      "Email": "xding@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dippel",
      "FirstName": "Melissa",
      "Email": "mcdippel1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ditkowsky",
      "FirstName": "Deborah",
      "Email": "djditkowsky@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dixon",
      "FirstName": "Portia",
      "Email": "pdixon7@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dixson",
      "FirstName": "Jacquelyn",
      "Email": "jndixson@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Djurakov",
      "FirstName": "Ljiljana",
      "Email": "ldjurakov@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dobda",
      "FirstName": "Sarah",
      "Email": "sadobda@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dockery",
      "FirstName": "Tasia",
      "Email": "tadockery@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dockery",
      "FirstName": "DeShawn",
      "Email": "ddockery7@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Doman",
      "FirstName": "Moira",
      "Email": "mdoman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "DOMINGUEZ",
      "FirstName": "CYNTHIA",
      "Email": "cadominguez@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dominguez",
      "FirstName": "Hilario",
      "Email": "hfdominguez1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Donahue",
      "FirstName": "Amy",
      "Email": "ahdonahue@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dongas",
      "FirstName": "Gina",
      "Email": "emaglaris@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Donigan",
      "FirstName": "Abigail",
      "Email": "akdonigan@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Donkoh",
      "FirstName": "Beatrice",
      "Email": "bdonkoh@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Donley",
      "FirstName": "Mariah",
      "Email": "mpdonley@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Donlin",
      "FirstName": "Mark",
      "Email": "mdonlin1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Donnelly",
      "FirstName": "Nicole",
      "Email": "nmdonnelly@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Donovan",
      "FirstName": "Ann",
      "Email": "amferguson@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Donson",
      "FirstName": "Kimberly",
      "Email": "kcox-gray@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Dorado",
      "FirstName": "Veronica",
      "Email": "vmojica@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Doran",
      "FirstName": "Aoife",
      "Email": "apdoran@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dorrell",
      "FirstName": "James",
      "Email": "jpdorrell@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dortch",
      "FirstName": "Diamond",
      "Email": "ddortch7@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dortch",
      "FirstName": "Justin",
      "Email": "jadortch3@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Dougherty",
      "FirstName": "Ariel",
      "Email": "adougherty@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Douglas",
      "FirstName": "Alexis",
      "Email": "aedouglas@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Doyle",
      "FirstName": "Thomas",
      "Email": "tdoyle6@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Doyle",
      "FirstName": "Bridget",
      "Email": "bmdoyle1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Doyle",
      "FirstName": "Kathryn",
      "Email": "kjdoyle@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Drew",
      "FirstName": "Andrea",
      "Email": "aldrew@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Drommerhausen",
      "FirstName": "Katherine",
      "Email": "kdrommerhausen@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Duckworth",
      "FirstName": "Sarah",
      "Email": "dduckworth1@cps.edu",
      "Title": "Teacher Asst-Montessori Prm",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Dumalski",
      "FirstName": "Brynn",
      "Email": "bkdumalski@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Duncan",
      "FirstName": "Arlena",
      "Email": "ahrodgers@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dunlap",
      "FirstName": "James",
      "Email": "jadunlap2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dunn",
      "FirstName": "Alexa",
      "Email": "adunn15@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dunn",
      "FirstName": "Tilden",
      "Email": "tjdunn@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "DuPree",
      "FirstName": "Kimmy",
      "Email": "ksdupree@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Duran",
      "FirstName": "Amalfi",
      "Email": "aduran@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Duran",
      "FirstName": "Rachel",
      "Email": "rduran18@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Durham",
      "FirstName": "Tiffany",
      "Email": "tndurham@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Dusek",
      "FirstName": "Grace",
      "Email": "gsturtz@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Dwarica",
      "FirstName": "Khadija",
      "Email": "kkdwarica@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Earls",
      "FirstName": "Lynnette",
      "Email": "learls@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Echevarria",
      "FirstName": "Daiana",
      "Email": "diechevarria@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Echeverry",
      "FirstName": "Olga",
      "Email": "oecheverry@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Edmunds-Diez",
      "FirstName": "Eve",
      "Email": "eedmundsdiez@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Edwards",
      "FirstName": "Laura",
      "Email": "lmedwards4@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Edwards",
      "FirstName": "Kimberly",
      "Email": "kledwards@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Edwards-Anderson",
      "FirstName": "Kim",
      "Email": "kgedwards@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Edwards-Hill",
      "FirstName": "Barbara",
      "Email": "bnedwards-hi@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Eggener",
      "FirstName": "Jennifer",
      "Email": "jleggener@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Eichhorn",
      "FirstName": "Alison",
      "Email": "ameichhorn1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Elkins",
      "FirstName": "Phillip",
      "Email": "pelkins@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Elliott",
      "FirstName": "Jessica",
      "Email": "jelliott15@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ellis",
      "FirstName": "Porscha",
      "Email": "pellis7@cps.edu",
      "Title": "School Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ellis",
      "FirstName": "Alocia",
      "Email": "anellis@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ellison",
      "FirstName": "Katrina",
      "Email": "kmellison@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ellison",
      "FirstName": "Melinet",
      "Email": "mmellison@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ellison",
      "FirstName": "Khybrette",
      "Email": "krowlett@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ellison",
      "FirstName": "Samantha",
      "Email": "smellison@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ellsworth",
      "FirstName": "Katie",
      "Email": "kgellsworth@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Epinger",
      "FirstName": "Chanel",
      "Email": "cpepinger@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Episcopo",
      "FirstName": "Natalie",
      "Email": "nbepiscopo@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Erinolu",
      "FirstName": "Omoniyi",
      "Email": "oierinolu@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ernvall",
      "FirstName": "Stacey",
      "Email": "slernvall@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ervin-Avery",
      "FirstName": "Mylin",
      "Email": "mervinavery@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Escarpita",
      "FirstName": "Adriana",
      "Email": "aescarpita@cps.edu",
      "Title": "Occupational Therapist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Escobar",
      "FirstName": "Lesley",
      "Email": "lsescobar@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Escude-Jesus",
      "FirstName": "Marta",
      "Email": "mescude-jesus@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Esguerra",
      "FirstName": "Misty",
      "Email": "mesguerra@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Espinosa",
      "FirstName": "Michael",
      "Email": "maespinosa4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Estela",
      "FirstName": "Glorianna",
      "Email": "gestela@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Estka-Rychetsky",
      "FirstName": "Selena",
      "Email": "scestka@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Evans",
      "FirstName": "Jennifer",
      "Email": "jagricus@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Evans",
      "FirstName": "Rochelle",
      "Email": "revans15@cps.edu",
      "Title": "School Community Representive",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Evans",
      "FirstName": "Reed",
      "Email": "revans27@cps.edu",
      "Title": "Teacher-Citywide",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Everett",
      "FirstName": "Colleen",
      "Email": "ceverett@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ewing",
      "FirstName": "Dawn",
      "Email": "daewing@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Fagan",
      "FirstName": "Kelsey",
      "Email": "kfagan@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fahy",
      "FirstName": "Kathleen",
      "Email": "kfahy@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fairley-Hall",
      "FirstName": "DaJuanda",
      "Email": "drfairley@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Farmer",
      "FirstName": "Rasha",
      "Email": "rkfarmer@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Farmer",
      "FirstName": "Yvette",
      "Email": "yfarmer1@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fedrick",
      "FirstName": "Dee",
      "Email": "ddfedrick@cps.edu",
      "Title": "Teacher-Citywide",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Felton",
      "FirstName": "Delorse",
      "Email": "dyfelton@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ferguson",
      "FirstName": "Joshua",
      "Email": "jeferguson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ferguson",
      "FirstName": "Myrna",
      "Email": "mlferguson2@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ferguson",
      "FirstName": "William",
      "Email": "wmferguson@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fernandez",
      "FirstName": "Susana",
      "Email": "sfernandezmoreno@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fernandez",
      "FirstName": "Blanca",
      "Email": "bafernandez@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fernandez",
      "FirstName": "Yezmin",
      "Email": "ysalgado4@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fernandez",
      "FirstName": "Bianca",
      "Email": "brfernandez1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Fernandini",
      "FirstName": "Leticia",
      "Email": "lfernandini@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fields",
      "FirstName": "Patricia",
      "Email": "pdfields@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fields",
      "FirstName": "Helena",
      "Email": "hfields1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "FINKLEA",
      "FirstName": "AARYN",
      "Email": "amfinklea1@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Finley",
      "FirstName": "LeeAnn",
      "Email": "lfinley@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fiore",
      "FirstName": "Alicia",
      "Email": "amfiore@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fisher",
      "FirstName": "Angela",
      "Email": "adfisher@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fisher",
      "FirstName": "Eddett",
      "Email": "egfisher@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fisher",
      "FirstName": "Tasha",
      "Email": "tmfisher@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fitzgerald",
      "FirstName": "Jean",
      "Email": "jfitzgerald4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Fitzgibbons",
      "FirstName": "Jensine",
      "Email": "jmfitzgibbon@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Fitzsimons",
      "FirstName": "Cathleen",
      "Email": "cafitzsimons@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Flanagan",
      "FirstName": "Donna",
      "Email": "dflanagan@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Flannery",
      "FirstName": "Kerrigan",
      "Email": "kflannery1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fleming",
      "FirstName": "Meegan",
      "Email": "mlfleming1@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fleming-smith",
      "FirstName": "Valencia",
      "Email": "vjfleming-smith@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fletcher",
      "FirstName": "Jennifer",
      "Email": "jmfletcher@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Flex",
      "FirstName": "Kimsha",
      "Email": "kflex@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Flood",
      "FirstName": "Katelyn",
      "Email": "kflood2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Florell",
      "FirstName": "Natthan",
      "Email": "njflorell@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Flores",
      "FirstName": "MariaLouisa",
      "Email": "mflores@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Flores",
      "FirstName": "Rocio",
      "Email": "rflores94@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Flores",
      "FirstName": "Maryclare",
      "Email": "moflores@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Flores",
      "FirstName": "Lucy",
      "Email": "lflores80@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Flores",
      "FirstName": "Sonia",
      "Email": "sflores70@cps.edu",
      "Title": "Teacher Assistant Bilingual",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Flowers",
      "FirstName": "Kelly",
      "Email": "krflowers@cps.edu",
      "Title": "Curriculum And Instruct Coach",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Flowers",
      "FirstName": "Carla",
      "Email": "clflowers5@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Floyd",
      "FirstName": "Jasmine",
      "Email": "jgfloyd1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Flygt",
      "FirstName": "Austin",
      "Email": "aflygt@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Foley",
      "FirstName": "Monica",
      "Email": "mrfoley@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fonseca",
      "FirstName": "Adrian",
      "Email": "aafonseca1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ford",
      "FirstName": "Katherine",
      "Email": "kford19@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Forgue",
      "FirstName": "Alex",
      "Email": "arforgue@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Foss",
      "FirstName": "Brynn",
      "Email": "bdfoss@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Foster",
      "FirstName": "Cicely",
      "Email": "cmfoster1@cps.edu",
      "Title": "Community Relations Rep II",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Foster",
      "FirstName": "Andrea",
      "Email": "amfoster@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Foster",
      "FirstName": "LeKicia",
      "Email": "lfoster@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Foucher",
      "FirstName": "Pearl",
      "Email": "pfoucher@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Foust",
      "FirstName": "Randi",
      "Email": "rlfoust@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Frackiel",
      "FirstName": "Thomas",
      "Email": "tfrackiel@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Fragoso",
      "FirstName": "Miguel",
      "Email": "mfragoso@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Franco",
      "FirstName": "Jocelyn",
      "Email": "jfranco45@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Franklin",
      "FirstName": "Angela",
      "Email": "asfranklin2@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Frazin",
      "FirstName": "Malka",
      "Email": "mzfrazin@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Frigo",
      "FirstName": "Nicole",
      "Email": "nagiaimo@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fuentes",
      "FirstName": "Monica",
      "Email": "mfuentes11@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fuhrmann",
      "FirstName": "Shannon",
      "Email": "sfuhrmann@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fujisawa",
      "FirstName": "Taylor",
      "Email": "tjfujisawa@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Fulton",
      "FirstName": "Scott",
      "Email": "safulton@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gadelhak",
      "FirstName": "Zaynab",
      "Email": "zgadelhak@cps.edu",
      "Title": "School Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gaffen",
      "FirstName": "Brian",
      "Email": "bgaffen@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gaiser",
      "FirstName": "Jacqueline",
      "Email": "jmboyer@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gaither",
      "FirstName": "Arttice",
      "Email": "ahill-gaither@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Galie",
      "FirstName": "Rachael",
      "Email": "rgalie@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Galimore",
      "FirstName": "Karen",
      "Email": "kgalimore@cps.edu",
      "Title": "Health Service Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gall",
      "FirstName": "Kathleen",
      "Email": "kagall@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Galligan",
      "FirstName": "Mary",
      "Email": "mvgalligan@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Galvez",
      "FirstName": "Monica",
      "Email": "magalvez1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gamble",
      "FirstName": "Alicia",
      "Email": "agamble4@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gandhi",
      "FirstName": "Alyssa",
      "Email": "asgandhi@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gangi",
      "FirstName": "Christina",
      "Email": "cgangi@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gant",
      "FirstName": "Elizabeth",
      "Email": "edgant@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garcia",
      "FirstName": "Maria",
      "Email": "msgarcia@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garcia",
      "FirstName": "Beatriz",
      "Email": "bgarcia3@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garcia",
      "FirstName": "Sergio",
      "Email": "sgarcia278@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "GARCIA",
      "FirstName": "DESIREE",
      "Email": "dagarcia47@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garcia",
      "FirstName": "Cristina",
      "Email": "cgarcia7@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garcia",
      "FirstName": "Ricardo",
      "Email": "rjgarcia7@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garcia",
      "FirstName": "Saul",
      "Email": "sagarcia39@cps.edu",
      "Title": "Teacher Asst Bil Spanish",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garg",
      "FirstName": "Neerja",
      "Email": "ngarg@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garner",
      "FirstName": "Carina",
      "Email": "cgarner2@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garrett",
      "FirstName": "LaToya",
      "Email": "legarrett2@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garrett",
      "FirstName": "Rashida",
      "Email": "rmgarrett@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garrett-Loury",
      "FirstName": "Donna",
      "Email": "dlgarrett@cps.edu",
      "Title": "School Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garrity",
      "FirstName": "Norma",
      "Email": "ncgarrity@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gartzman",
      "FirstName": "Samuel",
      "Email": "sgartzman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gary",
      "FirstName": "Charlese",
      "Email": "cmgary@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Garza",
      "FirstName": "Cynthia",
      "Email": "cpgarza@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gaspar",
      "FirstName": "Albina",
      "Email": "agaspar@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gatlin",
      "FirstName": "Catherine",
      "Email": "cdgatlin@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gatz",
      "FirstName": "Monica",
      "Email": "mgatz1@cps.edu",
      "Title": "Health Service Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gavin",
      "FirstName": "Tiffany",
      "Email": "tgavin6@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Gent",
      "FirstName": "Kendall",
      "Email": "krgent@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "GERCONE",
      "FirstName": "KELLEY",
      "Email": "kngercone@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gerena",
      "FirstName": "Edwin",
      "Email": "egerena1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gerhardt",
      "FirstName": "Jinny",
      "Email": "jlcrawford@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Getzendanner",
      "FirstName": "Sandy",
      "Email": "sgetzendanner@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Geyer",
      "FirstName": "Jessica",
      "Email": "jgeyer1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gianakopoulos",
      "FirstName": "Georgine",
      "Email": "ggianakopou@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Giannakopoulos",
      "FirstName": "Kodilo",
      "Email": "kgiannakopoulos@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Giannopoulos",
      "FirstName": "Andronike",
      "Email": "ajgiannopoul2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Giannopoulos",
      "FirstName": "Alexandra",
      "Email": "ajgiannopoul@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gibson",
      "FirstName": "Kimberly",
      "Email": "kygibson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gibson",
      "FirstName": "Whitney",
      "Email": "wgibson2@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gidcumb",
      "FirstName": "Brianne",
      "Email": "bmgidcumb@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gikas",
      "FirstName": "Angeliki (Angela)",
      "Email": "aogikas@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gilchrist",
      "FirstName": "chanelle",
      "Email": "clgilchrist1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Gilliam",
      "FirstName": "Angela",
      "Email": "algilliam@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gillogly",
      "FirstName": "Paige",
      "Email": "plgillogly@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gilmore",
      "FirstName": "Michelle",
      "Email": "magilmore@cps.edu",
      "Title": "Community Relations Rep",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Giorgi",
      "FirstName": "Maria",
      "Email": "mjgiorgi@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Givhan",
      "FirstName": "Rose",
      "Email": "rmgivhan@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Glasbrenner",
      "FirstName": "Amanda",
      "Email": "alglasbrenne@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gleason",
      "FirstName": "Amanda",
      "Email": "amgleason@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "GODBOLD",
      "FirstName": "STACI",
      "Email": "sgodbold1@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Godinez",
      "FirstName": "Edna",
      "Email": "egodinez6@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Gokal",
      "FirstName": "Zehra",
      "Email": "zagokal1@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Golden",
      "FirstName": "Jenna",
      "Email": "jgolden8@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Goldman",
      "FirstName": "Shelby",
      "Email": "sgoldman4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Goldsborough",
      "FirstName": "Erika",
      "Email": "elgoldsborough@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gomez",
      "FirstName": "Rigoberto",
      "Email": "rgomez68@cps.edu",
      "Title": "Community Relations Rep II",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gomez",
      "FirstName": "Sarah",
      "Email": "smgomez@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gomez",
      "FirstName": "Katharine",
      "Email": "ktgomez1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gomez",
      "FirstName": "Damaris",
      "Email": "dgomez105@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gomez",
      "FirstName": "Maria B",
      "Email": "mbgomez@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gonzalez",
      "FirstName": "Tzeittle",
      "Email": "tmgonzalez@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gonzalez",
      "FirstName": "Vilmarie",
      "Email": "vegonzalez2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Gonzalez",
      "FirstName": "Mindy",
      "Email": "msgonzalez6@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gonzalez",
      "FirstName": "Catalina",
      "Email": "cgonzalez239@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gonzalez",
      "FirstName": "Adrian",
      "Email": "agonzalez354@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gonzalez",
      "FirstName": "Viviana",
      "Email": "vpina3@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gonzalez",
      "FirstName": "Juan",
      "Email": "jmgonzalez46@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gonzalez-Guerrero",
      "FirstName": "Mariluz",
      "Email": "mgonzalez22@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Goodman",
      "FirstName": "Gregory",
      "Email": "ggoodman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Goodman",
      "FirstName": "Cynthia",
      "Email": "cgoodman2@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Goodman",
      "FirstName": "Luiza",
      "Email": "lgoodman5@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gordon",
      "FirstName": "LaTonya",
      "Email": "llgordon@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gordon",
      "FirstName": "Vanessa",
      "Email": "vpatterson@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gothelf",
      "FirstName": "Samantha",
      "Email": "slgothelf@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Goutos",
      "FirstName": "Maria Elena",
      "Email": "mgoutos@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Govea",
      "FirstName": "Allen",
      "Email": "agovea4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "GRAHAM",
      "FirstName": "CARMEN",
      "Email": "cegraham@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Graham",
      "FirstName": "Jasmin",
      "Email": "jgraham12@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gramatis",
      "FirstName": "Deanna",
      "Email": "dkgramatis@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Graney",
      "FirstName": "Lauren",
      "Email": "llevar@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Grate",
      "FirstName": "Wendi",
      "Email": "wpgrate@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "GRAY",
      "FirstName": "MOJISOLA",
      "Email": "mjgray2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gray",
      "FirstName": "Daniell",
      "Email": "dgray25@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Grayer",
      "FirstName": "Barbara",
      "Email": "bagrayer@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Greco",
      "FirstName": "Roseann",
      "Email": "rfspecialle@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Green",
      "FirstName": "Burma",
      "Email": "bsgreen@cps.edu",
      "Title": "Cadre Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Green",
      "FirstName": "Tiffany",
      "Email": "tgreen63@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Greene",
      "FirstName": "Deanna",
      "Email": "dgreene6@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Greene",
      "FirstName": "Madeleine",
      "Email": "mdgreene1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Greenwell",
      "FirstName": "James",
      "Email": "jrgreenwell@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Greetis",
      "FirstName": "Marcus",
      "Email": "mgreetis@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Groziy",
      "FirstName": "Susan",
      "Email": "smgroziak@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "GRUBICH",
      "FirstName": "Mary",
      "Email": "mmgrubich@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Gruodis",
      "FirstName": "Paul",
      "Email": "pjgruodis@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Guerra",
      "FirstName": "Wendy",
      "Email": "wguerra@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Guerra",
      "FirstName": "Caroline",
      "Email": "cguerra2@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Guiragossian",
      "FirstName": "Betsy",
      "Email": "bguiragossian@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gulley",
      "FirstName": "Mary",
      "Email": "mgulley3@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gutierrez",
      "FirstName": "Joanne",
      "Email": "jyum@cps.edu",
      "Title": "Occupational Therapist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gutierrez",
      "FirstName": "Marcie",
      "Email": "mggutierrez@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gutierrez",
      "FirstName": "Eunice",
      "Email": "eramirez-me@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gutierrez",
      "FirstName": "Erika",
      "Email": "egutierrez32@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Gutierrez",
      "FirstName": "Jose",
      "Email": "jagutierrez36@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Gutknecht",
      "FirstName": "Karoline",
      "Email": "knmacias@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Guzman",
      "FirstName": "Yezenia",
      "Email": "yguzman6@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Guzman",
      "FirstName": "Johanan",
      "Email": "jguzman177@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Haas",
      "FirstName": "Olivia",
      "Email": "ohaas@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Habetler",
      "FirstName": "Deidre",
      "Email": "dhabetler@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Haddad",
      "FirstName": "Mary",
      "Email": "mahaddad@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hadley",
      "FirstName": "Kathaleen",
      "Email": "khadley@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hadnott",
      "FirstName": "Angelic",
      "Email": "athadnott@cps.edu",
      "Title": "STLS Advocate",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hafer",
      "FirstName": "Alexandra",
      "Email": "ahafer@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hahn",
      "FirstName": "Laura",
      "Email": "lhahn@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hainfurther",
      "FirstName": "Sara",
      "Email": "sahainsfurth@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Haley",
      "FirstName": "Susan",
      "Email": "sjhaley@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hall",
      "FirstName": "Ashley",
      "Email": "aeweber1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hall",
      "FirstName": "Carlotta",
      "Email": "cmhall5@cps.edu",
      "Title": "Teacher-Citywide",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hamang",
      "FirstName": "Mariah",
      "Email": "mkhamang@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hamel",
      "FirstName": "Mark",
      "Email": "mhamel@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "hamel",
      "FirstName": "jessica",
      "Email": "jsherwin@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hammel",
      "FirstName": "Danielle",
      "Email": "dhammel@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hanafee",
      "FirstName": "Mark",
      "Email": "mdhanafee@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hansen",
      "FirstName": "Donna",
      "Email": "djjacyna@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hardaway",
      "FirstName": "Sheree",
      "Email": "swhardaway@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harden",
      "FirstName": "Henry",
      "Email": "hlharden@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hardy",
      "FirstName": "Chaniqua",
      "Email": "crhardy1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harlan",
      "FirstName": "Mark",
      "Email": "mjharlan@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harmon",
      "FirstName": "Jen",
      "Email": "jcharmon@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harper",
      "FirstName": "Janice",
      "Email": "jdharper@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harrell",
      "FirstName": "Lucinda",
      "Email": "lpharrell@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harrington",
      "FirstName": "Shakia",
      "Email": "svharrington@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "harris",
      "FirstName": "enrica",
      "Email": "eharris48@cps.edu",
      "Title": "",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harris",
      "FirstName": "James",
      "Email": "jcharris2@cps.edu",
      "Title": "Curriculum And Instruct Coach",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harris",
      "FirstName": "Melissa",
      "Email": "mharris4@cps.edu",
      "Title": "Occupational Therapist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "harris",
      "FirstName": "Kadisha",
      "Email": "kmoore3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harris",
      "FirstName": "Angela",
      "Email": "acharris1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harris",
      "FirstName": "Ashley",
      "Email": "aharris223@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harris",
      "FirstName": "Danielle",
      "Email": "deharris@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harris",
      "FirstName": "Tanesha",
      "Email": "tnharris7@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harris",
      "FirstName": "Monique",
      "Email": "miharris2@cps.edu",
      "Title": "School Counseling Office Asst",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harris",
      "FirstName": "KarenK",
      "Email": "klharris@cps.edu",
      "Title": "School Counseling Office Asst",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harris",
      "FirstName": "Todd",
      "Email": "tfharris3@cps.edu",
      "Title": "Student Special Svc Advocate",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Harris",
      "FirstName": "Lewis",
      "Email": "lnharris6@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "HARRISON",
      "FirstName": "KAREN",
      "Email": "kharrison4@cps.edu",
      "Title": "",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harrison",
      "FirstName": "Erika",
      "Email": "eharrison2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hart",
      "FirstName": "Carol",
      "Email": "chart2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Harty",
      "FirstName": "Sarah",
      "Email": "sharty@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Harvey",
      "FirstName": "Linda",
      "Email": "lmharvey@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hasan",
      "FirstName": "Nayla",
      "Email": "nmhasan@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Haskin",
      "FirstName": "Chauntina",
      "Email": "clhaskin1@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hatchett",
      "FirstName": "Simone",
      "Email": "skhatchett@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hatfield",
      "FirstName": "Paula",
      "Email": "plhatfield@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hathaway",
      "FirstName": "Ida",
      "Email": "imhathaway@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hatzell",
      "FirstName": "Mary",
      "Email": "mkrohrbach@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hauser",
      "FirstName": "Nicole",
      "Email": "nhauser1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hawkins",
      "FirstName": "Regina",
      "Email": "rghawkins@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hayes",
      "FirstName": "Brian",
      "Email": "bthayes@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hayes",
      "FirstName": "Paula",
      "Email": "pehayes@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hayes",
      "FirstName": "Marina",
      "Email": "mghayes1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Haywood",
      "FirstName": "Jemil",
      "Email": "jlhaywood@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Haywood",
      "FirstName": "Kamiko",
      "Email": "khaywood2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Head",
      "FirstName": "Adrienne",
      "Email": "aahead1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Healy",
      "FirstName": "Susan",
      "Email": "smhealy@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Heberling",
      "FirstName": "Kyle",
      "Email": "kjheberling@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Heffernan",
      "FirstName": "John",
      "Email": "jkheffernan@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Heggaton",
      "FirstName": "Rhea",
      "Email": "rlheggaton@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Heider",
      "FirstName": "Serena",
      "Email": "smheider@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Henclewski",
      "FirstName": "Roman",
      "Email": "rjhenclewski@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Henderson",
      "FirstName": "Freda",
      "Email": "fnhenderson@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hernandez",
      "FirstName": "Carmina",
      "Email": "caguirre4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hernandez",
      "FirstName": "Elizabeth",
      "Email": "ehernandez55@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hernandez",
      "FirstName": "Karen",
      "Email": "knhernandezgutierrez@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hernandez",
      "FirstName": "Leticia",
      "Email": "lhernandez156@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hernandez",
      "FirstName": "Ana",
      "Email": "alhernandez23@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hernandez",
      "FirstName": "Alexis",
      "Email": "ahernandez970@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hernandez",
      "FirstName": "Deborah",
      "Email": "djsayles@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hernandez",
      "FirstName": "Leticia",
      "Email": "lhernandez66@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Herrera",
      "FirstName": "Monserrate",
      "Email": "mherrera65@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Herrera",
      "FirstName": "Adriana",
      "Email": "aherrera205@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Heveran",
      "FirstName": "Amy",
      "Email": "amheveran@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hickman",
      "FirstName": "Anya",
      "Email": "anhickman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hicks",
      "FirstName": "Gari",
      "Email": "glhicks@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hicks",
      "FirstName": "Constance",
      "Email": "cehicks@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hicks",
      "FirstName": "Karen",
      "Email": "khicks@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hidalgo",
      "FirstName": "Stephanie",
      "Email": "smhidalgo@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Higgins",
      "FirstName": "Tenesha",
      "Email": "trhiggins@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hikl",
      "FirstName": "Tecoma",
      "Email": "thill63@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hilburger",
      "FirstName": "Katie",
      "Email": "kehilburger@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hill",
      "FirstName": "Sarah",
      "Email": "skhill1@cps.edu",
      "Title": "Curriculum And Instruct Coach",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hill",
      "FirstName": "Molly",
      "Email": "mdhill6@cps.edu",
      "Title": "Part-Time Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hill",
      "FirstName": "Zachary",
      "Email": "zhill15@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hill",
      "FirstName": "LaShawn",
      "Email": "lkhill@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hill",
      "FirstName": "Serena",
      "Email": "shill11@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hill",
      "FirstName": "LaDwonda",
      "Email": "lchill@cps.edu",
      "Title": "Teacher-Citywide",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hill Holmon",
      "FirstName": "Cynthia",
      "Email": "cmhill1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hiller",
      "FirstName": "Brenda",
      "Email": "bhiller1@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hinkle",
      "FirstName": "Niven",
      "Email": "nhinkle@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hock",
      "FirstName": "Julia",
      "Email": "jahock@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hoffman",
      "FirstName": "John",
      "Email": "jehoffman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hogan",
      "FirstName": "Jacki",
      "Email": "jlhogan1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hogan",
      "FirstName": "Sandy",
      "Email": "srreed1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hollyfield",
      "FirstName": "Jade",
      "Email": "jhollyfield1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Holmea",
      "FirstName": "Tiffany",
      "Email": "tmholmes@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Holmes",
      "FirstName": "Deborah",
      "Email": "dlholmes@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Holmes",
      "FirstName": "Paulette",
      "Email": "pholmes1@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Holzman",
      "FirstName": "Elizabeth",
      "Email": "eholzman@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Homan",
      "FirstName": "Shelley",
      "Email": "skwymer@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hooker",
      "FirstName": "James",
      "Email": "jhooker@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hopkins",
      "FirstName": "Artina M",
      "Email": "amwillis@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hopper",
      "FirstName": "Brandi",
      "Email": "bhopper@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hopps",
      "FirstName": "Tim",
      "Email": "thopps1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hopps",
      "FirstName": "Kelly",
      "Email": "kahopps@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Horton",
      "FirstName": "Tiffany",
      "Email": "trhorton@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hoskin",
      "FirstName": "Brittany",
      "Email": "blhoskin@cps.edu",
      "Title": "College/Career Coach",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "House",
      "FirstName": "Lakisha",
      "Email": "lrhouse@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Houston",
      "FirstName": "Mackenzie",
      "Email": "mjhouston3@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Howard",
      "FirstName": "LaVoris",
      "Email": "lhoward1@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Howard",
      "FirstName": "Deloris",
      "Email": "dhoward77@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Howard",
      "FirstName": "Vanessa",
      "Email": "vhoward@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Howard",
      "FirstName": "Mikayla",
      "Email": "mhoward59@cps.edu",
      "Title": "School Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Howard",
      "FirstName": "Faye",
      "Email": "fhoward1@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Howell",
      "FirstName": "Yvonne",
      "Email": "ymarlow@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Howse",
      "FirstName": "Tracey",
      "Email": "tyhowse@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hoye",
      "FirstName": "Janice",
      "Email": "jhoye@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Hsieh",
      "FirstName": "Mallorie",
      "Email": "mhsieh@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Huang",
      "FirstName": "Lixin",
      "Email": "lhuang@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hudson",
      "FirstName": "Theia",
      "Email": "tehudson@cps.edu",
      "Title": "Head Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hudson",
      "FirstName": "Carolyn",
      "Email": "chudson1@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hudson",
      "FirstName": "Adrienne",
      "Email": "ahudson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hudson",
      "FirstName": "Anthony",
      "Email": "ajhudson4@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hudson-Lucas",
      "FirstName": "Nicole",
      "Email": "nchudson-lucas@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hughes",
      "FirstName": "Brianna",
      "Email": "bhughes5@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hunigan",
      "FirstName": "Tanya",
      "Email": "tlhunigan@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hunt",
      "FirstName": "Tarah",
      "Email": "thunt9@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hunter",
      "FirstName": "April",
      "Email": "amhunter@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Hunter",
      "FirstName": "Kayla",
      "Email": "kihunter1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Huynh",
      "FirstName": "Anna",
      "Email": "ajhuynh@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Iem",
      "FirstName": "Madeline",
      "Email": "miem@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ilkanic",
      "FirstName": "Rebecca",
      "Email": "railkanic@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Illig",
      "FirstName": "Emily",
      "Email": "eillig1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Iman",
      "FirstName": "Jennifer",
      "Email": "jiman4@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ingram-Holmon",
      "FirstName": "Michelle",
      "Email": "mingram-holmon@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Irizarry-López",
      "FirstName": "Daynisse",
      "Email": "dirizarry-lopez@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Isaac",
      "FirstName": "Ghada",
      "Email": "gisaac1@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Iselin",
      "FirstName": "Gabriella",
      "Email": "gfonzetti@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Iselin",
      "FirstName": "Peter",
      "Email": "pjiselin@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Israel",
      "FirstName": "Nirayl",
      "Email": "nisrael1@cps.edu",
      "Title": "",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "ISREAL",
      "FirstName": "AISHA",
      "Email": "aaruther@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "issen",
      "FirstName": "michelle",
      "Email": "missen@cps.edu",
      "Title": "",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ivory",
      "FirstName": "Sean",
      "Email": "sivory5@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Izzo",
      "FirstName": "Daniel",
      "Email": "dizzo@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jaber",
      "FirstName": "issam",
      "Email": "ijaber@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jackson",
      "FirstName": "Dionta",
      "Email": "dsharris1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jackson",
      "FirstName": "Anthony",
      "Email": "arjackson3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Jackson",
      "FirstName": "LaJuana",
      "Email": "lljackson4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jackson",
      "FirstName": "LeTroy",
      "Email": "ljackson6@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jackson",
      "FirstName": "Angelique",
      "Email": "asjackson1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jackson-Purnell",
      "FirstName": "Ona",
      "Email": "ojjackson-purnell@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jacobson",
      "FirstName": "Sarah",
      "Email": "sjacobson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jacox",
      "FirstName": "Sarah",
      "Email": "sljacox@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Jaeger",
      "FirstName": "Bailey",
      "Email": "bajaeger@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jamaica",
      "FirstName": "Sandra",
      "Email": "sjamaica@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "James",
      "FirstName": "Christine",
      "Email": "cejames4@cps.edu",
      "Title": "Occupational Therapist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "James",
      "FirstName": "Bruce",
      "Email": "bajames@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "James",
      "FirstName": "Michelle",
      "Email": "mjames37@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jankowski",
      "FirstName": "Helena",
      "Email": "hejankowski@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jardeleza",
      "FirstName": "Maria",
      "Email": "mljardeleza@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jarka",
      "FirstName": "Shannon",
      "Email": "sjarka1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jasinski",
      "FirstName": "Karen",
      "Email": "kdjasinski@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jay",
      "FirstName": "Elexis",
      "Email": "elpersino@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Jedry",
      "FirstName": "Mary",
      "Email": "mkjedry@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jefferies",
      "FirstName": "Lauren",
      "Email": "lbell11@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jennings",
      "FirstName": "Brigid",
      "Email": "bcjennings@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jennings Mihuc",
      "FirstName": "Shalynn",
      "Email": "smjennings@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jesionowski",
      "FirstName": "Amy",
      "Email": "aljesionowski@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jimenez",
      "FirstName": "Froylan",
      "Email": "fijimenez1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jimenez",
      "FirstName": "Jesus",
      "Email": "jjimenez3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Myra",
      "Email": "mdjohnson1@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Annaya",
      "Email": "ajohnson506@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Edward",
      "Email": "esjohnson15@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Levora",
      "Email": "ljjohnson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Barbara",
      "Email": "bjjohnson4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Robbin",
      "Email": "rbjohnson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Marta",
      "Email": "msjohnson14@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Nicole",
      "Email": "najohnson5@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Melissa",
      "Email": "mjjohnson8@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Tammi",
      "Email": "trwhite-johnson@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Theresa",
      "Email": "tajohnson15@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Marissa",
      "Email": "mljohnson53@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Letitia",
      "Email": "lsjohnson22@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Erica",
      "Email": "eljohnson1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Artria",
      "Email": "ajohnson518@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "JOHNSON",
      "FirstName": "COURTNEY",
      "Email": "cjohnson292@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Velma",
      "Email": "vjohnson3@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson",
      "FirstName": "Tonya",
      "Email": "tljohnson42@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Johnson-Jones",
      "FirstName": "Delia",
      "Email": "dejohnson@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Joiner-Feazell",
      "FirstName": "Nonenitt",
      "Email": "njoiner-feazell@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jolly",
      "FirstName": "Veronica",
      "Email": "vjolly@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Jones",
      "FirstName": "Toni",
      "Email": "tcjones17@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jones",
      "FirstName": "Tamara",
      "Email": "tdjones37@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jones",
      "FirstName": "Marlon",
      "Email": "mgjones1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Jones",
      "FirstName": "Jessica",
      "Email": "jjones406@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jones",
      "FirstName": "Kristin",
      "Email": "kmjones31@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jones",
      "FirstName": "Chante",
      "Email": "cjones240@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jones",
      "FirstName": "Tracy",
      "Email": "tljones7@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Jones",
      "FirstName": "Derek",
      "Email": "djjones30@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jones-Stewart",
      "FirstName": "Shemen",
      "Email": "sajones6@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Jonez",
      "FirstName": "Eddie",
      "Email": "eljones3@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Joplin",
      "FirstName": "Areal",
      "Email": "acjoplin1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jordan",
      "FirstName": "Vashon",
      "Email": "vtjordan@cps.edu",
      "Title": "Community Relations Rep",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Jordan",
      "FirstName": "Dajana-Jana",
      "Email": "djordan45@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jordan",
      "FirstName": "Deani",
      "Email": "dcjordan@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Jorgensen",
      "FirstName": "Travis",
      "Email": "tjorgensen@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "JOSEPH",
      "FirstName": "MARIE",
      "Email": "mjoseph5@cps.edu",
      "Title": "Occupational Therapist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Joseph",
      "FirstName": "Nicole",
      "Email": "njoseph3@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Josephs",
      "FirstName": "Donyielle",
      "Email": "dajosephs@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Joyce",
      "FirstName": "Abigail",
      "Email": "ajoyce2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Joyner",
      "FirstName": "LA Keenya",
      "Email": "ljjoyner2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Jugenitz",
      "FirstName": "Carly",
      "Email": "cjjugenitz@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Julun",
      "FirstName": "Regina",
      "Email": "rmjulun@cps.edu",
      "Title": "Day-To-Day Sub Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kaddatz",
      "FirstName": "Megan",
      "Email": "mneperud@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Kadiani",
      "FirstName": "Hamed",
      "Email": "hkadiani1@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kadison",
      "FirstName": "Mary Clare",
      "Email": "mkadison@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kal",
      "FirstName": "Mandy",
      "Email": "mkal@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kalb",
      "FirstName": "Alyssa",
      "Email": "akalb@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kalinsky",
      "FirstName": "Keri",
      "Email": "kakalinsky@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Kanakaraj",
      "FirstName": "Rupa",
      "Email": "rbkanakaraj@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Kane",
      "FirstName": "Michelle",
      "Email": "mlkane@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Karalus",
      "FirstName": "James",
      "Email": "jskaralus@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Karsten",
      "FirstName": "Sheela",
      "Email": "skartari@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kawesch",
      "FirstName": "Stephanie",
      "Email": "skawesch@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Keller",
      "FirstName": "Najette",
      "Email": "nmkeller@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Kelley",
      "FirstName": "Megan",
      "Email": "mmkelley@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kelly",
      "FirstName": "Patrick",
      "Email": "pmkelly@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kelly",
      "FirstName": "Deautria",
      "Email": "dlkelly6@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kesselring",
      "FirstName": "John",
      "Email": "jnkesselring@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ketelsen",
      "FirstName": "Loren",
      "Email": "lketelsen@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ketnet",
      "FirstName": "Rossalin",
      "Email": "rketnet@cps.edu",
      "Title": "Teacher Asst-Montessori Prm",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kiddle",
      "FirstName": "Ashley",
      "Email": "arkiddle@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Kightlinger",
      "FirstName": "Mikayla",
      "Email": "mkightlinger@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Kiley",
      "FirstName": "Stephanie",
      "Email": "skiley@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Killingsworth",
      "FirstName": "Yevette",
      "Email": "yekillingsworth@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Kim",
      "FirstName": "Jemimah",
      "Email": "jkim19@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kim",
      "FirstName": "Gina",
      "Email": "gykim@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kimbrough",
      "FirstName": "Ruth",
      "Email": "rtkimbrough@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kinasz",
      "FirstName": "Sarah",
      "Email": "skinasz@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "KING",
      "FirstName": "JESSICA",
      "Email": "jbking3@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "King",
      "FirstName": "Chay",
      "Email": "cdking4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "King-Papadopoulos",
      "FirstName": "Jacqueline",
      "Email": "jrkingpapadopoulos@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kingsbury",
      "FirstName": "John",
      "Email": "jwkingsbury@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Kist",
      "FirstName": "Stephanie",
      "Email": "skist@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kittleson",
      "FirstName": "Michelle",
      "Email": "mlkittleson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kizart",
      "FirstName": "Camille",
      "Email": "cakizart@cps.edu",
      "Title": "Teacher-Citywide",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kleinhubert",
      "FirstName": "MaryPat",
      "Email": "mpkleinhubert@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Klock",
      "FirstName": "James",
      "Email": "jpklock@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Klonsky",
      "FirstName": "Jennifer",
      "Email": "jklonsky@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Klyce",
      "FirstName": "Sharnetta",
      "Email": "sgklyce@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Knaub",
      "FirstName": "Elise",
      "Email": "edknaub@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kneller",
      "FirstName": "Kaitlin",
      "Email": "kalang1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Knighten",
      "FirstName": "Christian",
      "Email": "cdknighten1@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Knowles",
      "FirstName": "Taylor",
      "Email": "trknowles@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Knox",
      "FirstName": "Jenifer",
      "Email": "jknox10@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Knox",
      "FirstName": "Kourtney",
      "Email": "klknox1@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Knuerr",
      "FirstName": "Mary",
      "Email": "mmknuerr@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Kolakowski",
      "FirstName": "Caitlyn",
      "Email": "ckolakowski@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kolarik",
      "FirstName": "Christine",
      "Email": "ckkolarik@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kolda",
      "FirstName": "Kari",
      "Email": "kkolda@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kolovos",
      "FirstName": "Nectaria",
      "Email": "natsiaousis@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kondos",
      "FirstName": "Irene",
      "Email": "ikondos@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Koran",
      "FirstName": "Debra",
      "Email": "dmkoran@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kortchmar",
      "FirstName": "Sophia",
      "Email": "sskortchmar@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kosner",
      "FirstName": "Meghan",
      "Email": "mkosner@cps.edu",
      "Title": "Ed Sign Language Interpreter",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kosuth",
      "FirstName": "Dennis",
      "Email": "dkosuth@cps.edu",
      "Title": "School Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kowalkowski",
      "FirstName": "Lauren",
      "Email": "lakowalkowsk@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kozlov",
      "FirstName": "Isabelle",
      "Email": "ikozlov@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kramer",
      "FirstName": "Andrew",
      "Email": "ackramer1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Krichbaum",
      "FirstName": "Jennifer",
      "Email": "jakrichbaum@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Krizka",
      "FirstName": "Nicole",
      "Email": "nkrizka@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Krone",
      "FirstName": "Kaitlyn",
      "Email": "kakrone@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Krueger",
      "FirstName": "Rachel",
      "Email": "rkrueger@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Krupp",
      "FirstName": "Keri",
      "Email": "kbkrupp@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kuchar",
      "FirstName": "Marcella",
      "Email": "mrkuchar@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Kuenster",
      "FirstName": "Ann",
      "Email": "afkuenster@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kulanda",
      "FirstName": "Robert",
      "Email": "rjkulanda1@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kullman",
      "FirstName": "Lauren",
      "Email": "lekullman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Kumm",
      "FirstName": "Joshua",
      "Email": "jkumm@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kunc",
      "FirstName": "Lori",
      "Email": "lkunc@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kurilko",
      "FirstName": "Julie",
      "Email": "jekurilko@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kutz",
      "FirstName": "Erik",
      "Email": "edkutz@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Kuzmanovski",
      "FirstName": "Mia",
      "Email": "mrasketic-d@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lacey",
      "FirstName": "Karen",
      "Email": "krlacey@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ladin",
      "FirstName": "Paula",
      "Email": "psladin@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lafontant",
      "FirstName": "Dylan",
      "Email": "dlafontant@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lamb",
      "FirstName": "Donzelle",
      "Email": "djlamb@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lampton",
      "FirstName": "Jennifer",
      "Email": "jlampton@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Landeros",
      "FirstName": "America",
      "Email": "aolanderos@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Landrum",
      "FirstName": "Sarah",
      "Email": "salandrum@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lane",
      "FirstName": "Shana",
      "Email": "slane9@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lang",
      "FirstName": "Terrence",
      "Email": "tllang@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lang",
      "FirstName": "Krusten",
      "Email": "klang4@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Missing certificate",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Langer",
      "FirstName": "Madeline",
      "Email": "mlanger1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Larsen",
      "FirstName": "AnneElyse",
      "Email": "alarsen1@cps.edu",
      "Title": "Physical Therapist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Laurel",
      "FirstName": "Nydia",
      "Email": "nalaurel@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lawrence",
      "FirstName": "Kristyn",
      "Email": "kllawrence@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Leanos",
      "FirstName": "Graciela",
      "Email": "gleanos@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "LEAVY",
      "FirstName": "LATECIA",
      "Email": "lsleavy@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lee",
      "FirstName": "Angelee",
      "Email": "avlee@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lee",
      "FirstName": "Nakisha",
      "Email": "nplee@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lee",
      "FirstName": "Elizabeth",
      "Email": "ellee1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lee",
      "FirstName": "Madeline",
      "Email": "mlee36@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lee",
      "FirstName": "Territha",
      "Email": "tlee14@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lee-Troche",
      "FirstName": "Madeline",
      "Email": "mlee@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lekas",
      "FirstName": "Madeleine",
      "Email": "mmlekas@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lent",
      "FirstName": "Sheila",
      "Email": "salent@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Leon",
      "FirstName": "Alexa",
      "Email": "aleon75@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Levinson",
      "FirstName": "Jesse",
      "Email": "jlevinson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Levites",
      "FirstName": "Lauren",
      "Email": "lelevites@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Levy",
      "FirstName": "Jonathan",
      "Email": "jhlevy@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lewandowski",
      "FirstName": "Kevin",
      "Email": "kblewandowski@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lewis",
      "FirstName": "Christilyn",
      "Email": "clewis76@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lewis",
      "FirstName": "Keisha",
      "Email": "kllewis13@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lewis",
      "FirstName": "Monique",
      "Email": "mllewis16@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lewis",
      "FirstName": "Lashanda",
      "Email": "llewis2@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lewis",
      "FirstName": "Katelyn",
      "Email": "kwlewis2@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lewis-Bey",
      "FirstName": "Jarve",
      "Email": "jlewis-bey@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Li",
      "FirstName": "Eva",
      "Email": "eli16@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lim",
      "FirstName": "Jae yoon",
      "Email": "jlim8@cps.edu",
      "Title": "Occupational Therapist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lindgren",
      "FirstName": "Candace",
      "Email": "cslindgren@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lindsey",
      "FirstName": "Ellis",
      "Email": "lellis20@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Linhart",
      "FirstName": "Kelley",
      "Email": "kmlinhart@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "LINTON",
      "FirstName": "WANDA",
      "Email": "wflinton@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lisenby",
      "FirstName": "Brenda",
      "Email": "bklisenby@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lively-Greene",
      "FirstName": "Joi",
      "Email": "jlively-greene@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Llanes",
      "FirstName": "Cynthia",
      "Email": "cllanes@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Llorens",
      "FirstName": "Ana",
      "Email": "arllorens@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lloyd",
      "FirstName": "Rita",
      "Email": "rrlloyd@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Loades",
      "FirstName": "Dorothy",
      "Email": "dmloades@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lobato",
      "FirstName": "Tomas",
      "Email": "tlobato@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "LoConte",
      "FirstName": "Kelly",
      "Email": "klloconte@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Loggins",
      "FirstName": "Aldina",
      "Email": "arloggins@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Logli",
      "FirstName": "Liliana",
      "Email": "llogli@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Loh",
      "FirstName": "Michelle",
      "Email": "mmendez50@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lomax",
      "FirstName": "Lauren",
      "Email": "llomax4@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lomeli",
      "FirstName": "Leticia",
      "Email": "lascencio@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Looby",
      "FirstName": "Catherine",
      "Email": "clooby2@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lopez",
      "FirstName": "Jeanette",
      "Email": "jguzman32@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lopez",
      "FirstName": "Nancy",
      "Email": "nalopez@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lopez",
      "FirstName": "Laura",
      "Email": "llopez143@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lopez",
      "FirstName": "Elizabeth",
      "Email": "elopez213@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lopez",
      "FirstName": "Patricia",
      "Email": "pflores26@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lopez",
      "FirstName": "Olivia",
      "Email": "otrejo1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lopez",
      "FirstName": "Juliana",
      "Email": "jlopez433@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lopez",
      "FirstName": "Sonia",
      "Email": "slopez189@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lopez",
      "FirstName": "Marixsa",
      "Email": "mlopez195@cps.edu",
      "Title": "Teacher Assistant Bilingual",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Love",
      "FirstName": "Tina",
      "Email": "trlove@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Love",
      "FirstName": "Karen",
      "Email": "krlove@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Loveless",
      "FirstName": "Yolanda",
      "Email": "ymloveless@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Loving",
      "FirstName": "Helen",
      "Email": "hploving1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Loyd",
      "FirstName": "Sonya",
      "Email": "sjloyd@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "lozada",
      "FirstName": "shardei",
      "Email": "selozada@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lu",
      "FirstName": "Jinlan",
      "Email": "jlu7@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lucas",
      "FirstName": "Francis",
      "Email": "fjlucas@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Luces",
      "FirstName": "Frenzy",
      "Email": "fvluces@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Luczak",
      "FirstName": "Maureen",
      "Email": "mpluczak@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Luellen",
      "FirstName": "Kimberly",
      "Email": "kwluellen@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lugo",
      "FirstName": "Rocio",
      "Email": "rlugo8@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lujan",
      "FirstName": "Jaime",
      "Email": "jlujan@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Luna",
      "FirstName": "Rosa M",
      "Email": "rmluna@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lundgren",
      "FirstName": "Elizabeth",
      "Email": "eamendoza2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lundy",
      "FirstName": "Maggie",
      "Email": "mlundy@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Luque Macías",
      "FirstName": "Federico",
      "Email": "fluquemacia@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lux",
      "FirstName": "Patricia",
      "Email": "pmlux@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lynch",
      "FirstName": "Marie",
      "Email": "melynch@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lynch",
      "FirstName": "Marykay",
      "Email": "mlynch@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lynch",
      "FirstName": "Brighid",
      "Email": "blynch@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Lynch",
      "FirstName": "Kathleen",
      "Email": "klynch8@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Lyons",
      "FirstName": "Jessica",
      "Email": "jlyons22@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "M OMalley",
      "FirstName": "Judy",
      "Email": "jmomalley@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Maali",
      "FirstName": "Jennifer",
      "Email": "jemaali@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Macias",
      "FirstName": "Christina",
      "Email": "ccmiller5@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Maciasz",
      "FirstName": "Michael",
      "Email": "mmaciasz@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Missing certificate",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "MACKIE",
      "FirstName": "THOMAS",
      "Email": "temackie@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Macri",
      "FirstName": "Lisa",
      "Email": "ltmacri@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Madkins",
      "FirstName": "Latrice",
      "Email": "lmcfarland@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Maeda",
      "FirstName": "Ann",
      "Email": "atmaeda@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "MAGALLANES",
      "FirstName": "LUCERO",
      "Email": "lmagallanes@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Magallanes",
      "FirstName": "Cynthia",
      "Email": "cgmagallanes@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Magallanez",
      "FirstName": "Amanda",
      "Email": "awilliams329@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Magarian",
      "FirstName": "Collin",
      "Email": "cjmagarian@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Magee",
      "FirstName": "Angela",
      "Email": "asmagee@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Magers",
      "FirstName": "Tia",
      "Email": "tmmagers@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Maglasang",
      "FirstName": "Angeline",
      "Email": "amaglasang@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mahoney",
      "FirstName": "Elizabeth",
      "Email": "emahoney@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mains",
      "FirstName": "Cai",
      "Email": "cmains@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Makris",
      "FirstName": "Katina",
      "Email": "kdmakris@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Maldonado",
      "FirstName": "Suleiny",
      "Email": "smaldonado28@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Maldonado",
      "FirstName": "Cristina",
      "Email": "cahernandez27@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mallory",
      "FirstName": "Crystal",
      "Email": "clmallory@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Malo",
      "FirstName": "Lori",
      "Email": "lamalo@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Malone",
      "FirstName": "Lynn",
      "Email": "lcmalone@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Maloy",
      "FirstName": "Kerry",
      "Email": "kabergl@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mangrum",
      "FirstName": "Dadrian",
      "Email": "ddmangrum1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Manning",
      "FirstName": "Emma",
      "Email": "emanning1@cps.edu",
      "Title": "School Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Maples",
      "FirstName": "Steven",
      "Email": "samaples@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Marcus",
      "FirstName": "Allyson",
      "Email": "ahmarcus@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Marek",
      "FirstName": "Keith",
      "Email": "kmarek2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Markese",
      "FirstName": "Nicholas",
      "Email": "njmarkese@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Markham",
      "FirstName": "Catherine",
      "Email": "camarkham@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "MARKS",
      "FirstName": "Sara",
      "Email": "slmarks@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Marks",
      "FirstName": "Evelyn",
      "Email": "ejmarks@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Marquez",
      "FirstName": "Juanita",
      "Email": "jemarquez7@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Marren obrien",
      "FirstName": "Dawn",
      "Email": "dmarren@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Martin",
      "FirstName": "Sheila",
      "Email": "smmartin2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Martin",
      "FirstName": "Natasha",
      "Email": "ntmartin@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Martinez",
      "FirstName": "Elizabeth",
      "Email": "eherrera29@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Martinez",
      "FirstName": "Victor",
      "Email": "vhmartinez@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Martinez",
      "FirstName": "Claudia",
      "Email": "cmartinez1@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Martinez",
      "FirstName": "Maribel",
      "Email": "mmartinez15@cps.edu",
      "Title": "School Community Representive",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Martinez",
      "FirstName": "Teresa",
      "Email": "tmartinez36@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Martinez",
      "FirstName": "Lindsey",
      "Email": "lmmartinez27@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Martinsek",
      "FirstName": "Ellen",
      "Email": "esmartinsek@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mashni",
      "FirstName": "Diana",
      "Email": "dpina7@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "mason",
      "FirstName": "Danielle",
      "Email": "dmason30@cps.edu",
      "Title": "Health Service Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mason",
      "FirstName": "James",
      "Email": "jjmason@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mason",
      "FirstName": "Katrina",
      "Email": "kmmason@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mason",
      "FirstName": "Jessica",
      "Email": "jmmason1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mata",
      "FirstName": "Nicholas",
      "Email": "ncmata@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mathews",
      "FirstName": "Darlene",
      "Email": "dsbell@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mathis",
      "FirstName": "Felicia",
      "Email": "fmathis1@cps.edu",
      "Title": "College/Career Coach",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mathis",
      "FirstName": "Alma",
      "Email": "almathis@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Matteson",
      "FirstName": "Amanda",
      "Email": "ajmatteson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Matthews",
      "FirstName": "Danielle",
      "Email": "dymatthews@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Matthews",
      "FirstName": "DeJanaie",
      "Email": "dmmatthews5@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Matthews-Whitfield",
      "FirstName": "Gerri",
      "Email": "gamatthews-whitfi@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Maurello",
      "FirstName": "Rosemary",
      "Email": "rsmaurello@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "May",
      "FirstName": "Mary",
      "Email": "mmmay@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McAdoo",
      "FirstName": "Jesse",
      "Email": "jnmcadoo@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mcallister",
      "FirstName": "TraDonna",
      "Email": "tmbrown2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McAlphine",
      "FirstName": "Simone",
      "Email": "somcalphine@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mcalpin",
      "FirstName": "Nina",
      "Email": "nmcalpin@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McCarthy",
      "FirstName": "Keeley",
      "Email": "kamccarthy1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McCaster-Baker",
      "FirstName": "Sonya",
      "Email": "scmccaster-b@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McCauslin",
      "FirstName": "Eden",
      "Email": "ecmccauslin@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McCord",
      "FirstName": "Adam",
      "Email": "atmccord@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McCormick",
      "FirstName": "John",
      "Email": "jjmccormick@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McCreedy",
      "FirstName": "Marion",
      "Email": "mkmccreedy@cps.edu",
      "Title": "School Library Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McCright",
      "FirstName": "Mary",
      "Email": "mbmccright@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mccune",
      "FirstName": "Jacqueline",
      "Email": "jpmccune@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McCurrie",
      "FirstName": "Jeannette",
      "Email": "jlmccurrie@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McDaniel",
      "FirstName": "Veronica",
      "Email": "vmcdaniel@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mcdevitt",
      "FirstName": "Julie",
      "Email": "jamcdevitt@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "McDonald",
      "FirstName": "Charletta",
      "Email": "cmcdonald10@cps.edu",
      "Title": "School Community Representive",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McDonald",
      "FirstName": "Kennita",
      "Email": "kmmorris1@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "McDonough",
      "FirstName": "Colleen",
      "Email": "camcdonough@cps.edu",
      "Title": "Literacy Intervention Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McEachran",
      "FirstName": "Timothy",
      "Email": "tmceachran@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McElligott",
      "FirstName": "Jamie",
      "Email": "jmmcelligott@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "MCEVOY",
      "FirstName": "SHERYL",
      "Email": "slmcevoy@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "McFadden",
      "FirstName": "Talitha",
      "Email": "tcmcfadden@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "McGinnis",
      "FirstName": "John",
      "Email": "jtmcginnis@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McGrane",
      "FirstName": "Lindsay",
      "Email": "lecarlson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McGuire",
      "FirstName": "Sarah",
      "Email": "swpeters1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McGuire",
      "FirstName": "James",
      "Email": "jrmcguire@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mckinnie",
      "FirstName": "Juanitta",
      "Email": "jdmckinnie1@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McLean",
      "FirstName": "Kristine",
      "Email": "kfmcguire@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McLeod",
      "FirstName": "Caitlin",
      "Email": "cnoonan@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McNally",
      "FirstName": "Rebecca",
      "Email": "rmkohler@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "McQuillan",
      "FirstName": "Kimberly",
      "Email": "kamcquillan@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Medina",
      "FirstName": "Blanca",
      "Email": "bmedina36@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Meek",
      "FirstName": "Paula",
      "Email": "pmeek@cps.edu",
      "Title": "School Counseling Office Asst",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Meeks",
      "FirstName": "Melissa",
      "Email": "mavenn@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mejias",
      "FirstName": "Jonathan",
      "Email": "jmejias3@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Melendez",
      "FirstName": "Maria",
      "Email": "mlmelendez@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Melendez",
      "FirstName": "Solelena",
      "Email": "smelendez11@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Melero",
      "FirstName": "Juanita",
      "Email": "jmelero@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Melger",
      "FirstName": "Jessica",
      "Email": "jghockaday@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mendez",
      "FirstName": "Jessica",
      "Email": "jmendez105@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mendez",
      "FirstName": "Iliana",
      "Email": "iamendez2@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mendez",
      "FirstName": "Dolores",
      "Email": "dmendez2@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mendez",
      "FirstName": "Angelina",
      "Email": "amendez81@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mendez",
      "FirstName": "Yolanda",
      "Email": "ymendez@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mendoza",
      "FirstName": "Juanita",
      "Email": "jmendoza147@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mendoza",
      "FirstName": "Julissa",
      "Email": "jlopez3@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mendoza",
      "FirstName": "Diana",
      "Email": "dmendoza53@cps.edu",
      "Title": "Student Special Svc Advocate",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mendoza-Ramirez",
      "FirstName": "Mary",
      "Email": "mmendozaramirez@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Meraz",
      "FirstName": "Cristina",
      "Email": "cmeraz@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Meraz",
      "FirstName": "Cindy",
      "Email": "cmeraz4@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Meyer",
      "FirstName": "Dawn",
      "Email": "dmmeyer@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Meyers",
      "FirstName": "Timothy",
      "Email": "tjmeyers1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Miceli",
      "FirstName": "William",
      "Email": "wmiceli@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mielnicki",
      "FirstName": "Amy",
      "Email": "amzahorick@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Miggins",
      "FirstName": "Samantha",
      "Email": "smiggins2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Milam",
      "FirstName": "Suekina",
      "Email": "slmilam@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Milan",
      "FirstName": "Kumberly",
      "Email": "kmilan1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Miller",
      "FirstName": "Meghan",
      "Email": "mmmiller11@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Miller",
      "FirstName": "Jon",
      "Email": "jrmiller5@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Miller-Jones",
      "FirstName": "Charesse",
      "Email": "cmiller@cps.edu",
      "Title": "Teacher Asst-Montessori Prm",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Milroy",
      "FirstName": "Kori",
      "Email": "ksmilroy@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Minisee-Barber",
      "FirstName": "Morgan",
      "Email": "mminiseebarber@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Minter",
      "FirstName": "Toni",
      "Email": "tmhood@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mirkiewicz",
      "FirstName": "Brittany",
      "Email": "bemirkiewicz@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Miro",
      "FirstName": "Elizabeth",
      "Email": "ekmiro@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Miroballi",
      "FirstName": "Jordan",
      "Email": "jlmiroballi@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mitchell",
      "FirstName": "Darneshia",
      "Email": "drmitchell6@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mitchell",
      "FirstName": "Shavonah",
      "Email": "smitchell50@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mitchell",
      "FirstName": "Kavonah",
      "Email": "kmitchell56@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mitchell",
      "FirstName": "Ellina",
      "Email": "ephale@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mitchell",
      "FirstName": "Kate",
      "Email": "kpmitchell@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mitchell",
      "FirstName": "Jaliyah",
      "Email": "jamitchell19@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mizener",
      "FirstName": "Sara",
      "Email": "sgmizener@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mohammed",
      "FirstName": "Suriya",
      "Email": "smohammed@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mojarro",
      "FirstName": "Jorge",
      "Email": "jmojarro@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Molenhouse",
      "FirstName": "Kathleen",
      "Email": "kmmolenhouse@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Molina",
      "FirstName": "Gerardo",
      "Email": "gmolina1@cps.edu",
      "Title": "School Counseling Office Asst",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Monarrez",
      "FirstName": "Jamie",
      "Email": "jmonarrez8@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Montalvo",
      "FirstName": "Maribel",
      "Email": "mmontalvo@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Montes",
      "FirstName": "Judith",
      "Email": "jmontes6@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Montesdeoca",
      "FirstName": "Vanessa",
      "Email": "vmontesdeoca1@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Montoya",
      "FirstName": "Erica",
      "Email": "emmontoya@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moody",
      "FirstName": "Geraldine",
      "Email": "gbmoody@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mooney",
      "FirstName": "Alicia",
      "Email": "agmooney@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moore",
      "FirstName": "Thalia",
      "Email": "tmoore2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moore",
      "FirstName": "Cherece",
      "Email": "clmoore6@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moore",
      "FirstName": "Melissa",
      "Email": "mhmoore@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moore",
      "FirstName": "Mary Ann",
      "Email": "mmoore2@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moore",
      "FirstName": "Stephanie",
      "Email": "symoore@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moore",
      "FirstName": "Morgan",
      "Email": "mmmoore18@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moorman",
      "FirstName": "Victoria",
      "Email": "vlmoorman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mora",
      "FirstName": "Irma",
      "Email": "icmora@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "morato",
      "FirstName": "veronica",
      "Email": "vmoratoarguelles@cps.edu",
      "Title": "",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moreno",
      "FirstName": "Maria",
      "Email": "mpmoreno@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moreno",
      "FirstName": "Nia",
      "Email": "namoreno7@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moreno",
      "FirstName": "Luis",
      "Email": "lemoreno1@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Moreno-Greer",
      "FirstName": "Angela",
      "Email": "aimoreno-gre@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Morgan",
      "FirstName": "Allison",
      "Email": "amorgan28@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Morgan",
      "FirstName": "Robin",
      "Email": "rsmorgan2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Morgan",
      "FirstName": "Robert",
      "Email": "rgmorgan@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Morgan",
      "FirstName": "Isaly",
      "Email": "imorgan4@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Morris",
      "FirstName": "Sheila",
      "Email": "samorris1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Morris",
      "FirstName": "LaNita",
      "Email": "lbmorris@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Morrison",
      "FirstName": "Michael",
      "Email": "mamorrison3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moseley",
      "FirstName": "Tameka",
      "Email": "tjmoseley@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moseley-Cannon",
      "FirstName": "Kimberley",
      "Email": "kdmoseley-ca@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Moss",
      "FirstName": "Sylvia",
      "Email": "samoss@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mottram",
      "FirstName": "Michelle",
      "Email": "mcmottram-du@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Moya",
      "FirstName": "Joanna",
      "Email": "jmoya5@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moyes",
      "FirstName": "Michelle",
      "Email": "mamoyes@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Moy-Lai",
      "FirstName": "Sandra",
      "Email": "smoylai@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mueller",
      "FirstName": "Lindsay",
      "Email": "ljyounts@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mueller",
      "FirstName": "George",
      "Email": "gmmueller@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Muhammad",
      "FirstName": "Khalilah",
      "Email": "kmuhammad20@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Muhammad",
      "FirstName": "Cherneecia",
      "Email": "cberdell@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Muhammad",
      "FirstName": "Lateefah",
      "Email": "lmuhammad-hill@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Muhammad",
      "FirstName": "Aqueelah",
      "Email": "acmuhammad@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Muhlberger",
      "FirstName": "Ruth",
      "Email": "ramuhlberger1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mulchrone",
      "FirstName": "Patricia",
      "Email": "pamulchrone@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Mulligan",
      "FirstName": "Kelly",
      "Email": "kadecker@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Munoz",
      "FirstName": "Joel",
      "Email": "jdmunoz7@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Munoz",
      "FirstName": "Sandra",
      "Email": "slmunoz@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Munoz",
      "FirstName": "Kimberly",
      "Email": "kawetter@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Murphy",
      "FirstName": "Erin",
      "Email": "eamurphy1@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Murphy",
      "FirstName": "Sean",
      "Email": "sjmurphy@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Murphy",
      "FirstName": "Deborah",
      "Email": "drmurphy@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Murphy",
      "FirstName": "Michael",
      "Email": "msmurphy@cps.edu",
      "Title": "Teacher - Librarian",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Murphy",
      "FirstName": "Erin",
      "Email": "ecmurphy4@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Murray",
      "FirstName": "Alana",
      "Email": "afmurray1@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Musolf",
      "FirstName": "Vicki",
      "Email": "vmmusolf@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Mutlu",
      "FirstName": "Allison",
      "Email": "asmutlu@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Muzzy",
      "FirstName": "Lindsay",
      "Email": "lbmuzzy@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Nach",
      "FirstName": "Tracy",
      "Email": "tncarlson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Nakis",
      "FirstName": "Siohban",
      "Email": "sbermeo@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Naliwajko",
      "FirstName": "Liena",
      "Email": "lnaliwajko@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Natale",
      "FirstName": "Renee",
      "Email": "rcnatale@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Naughton",
      "FirstName": "MichelleN",
      "Email": "mmjauregui@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Neal",
      "FirstName": "Chasitie",
      "Email": "caneal4@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Neely",
      "FirstName": "Brittany",
      "Email": "bneely@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Neely",
      "FirstName": "Jayla",
      "Email": "janeely2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Neely",
      "FirstName": "Nathan",
      "Email": "nlneely@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Nelson",
      "FirstName": "Bridget",
      "Email": "bcnelson@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Nelson",
      "FirstName": "Jennifer",
      "Email": "jnelson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Neris",
      "FirstName": "Gloriby",
      "Email": "gneris@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Netter",
      "FirstName": "Tracy",
      "Email": "tmnetter@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Nevarez",
      "FirstName": "Sandra",
      "Email": "snevarez6@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Newburn",
      "FirstName": "Monique",
      "Email": "mpnewburn@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Nguyen",
      "FirstName": "Rosa",
      "Email": "rnguyen6@cps.edu",
      "Title": "Disp Full Time Basis Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Nguyen",
      "FirstName": "Hung",
      "Email": "hanguyen2@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Nichols",
      "FirstName": "Karen",
      "Email": "kmnichols@cps.edu",
      "Title": "Day-To-Day Sub Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Nichols",
      "FirstName": "Meredith",
      "Email": "maparker3@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Nichols",
      "FirstName": "Abigail",
      "Email": "anichols15@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Nicholson",
      "FirstName": "Carolyn",
      "Email": "cmwilliams2@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Nides",
      "FirstName": "Courtnie",
      "Email": "clscharf1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Nishi",
      "FirstName": "Dona",
      "Email": "denishi@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Nixon",
      "FirstName": "Nykela",
      "Email": "nnixon@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Nobile",
      "FirstName": "Robert",
      "Email": "rjnobile@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Noha",
      "FirstName": "Colleen",
      "Email": "cenoha@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Noriega",
      "FirstName": "Norma",
      "Email": "nnoriega3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Northrop",
      "FirstName": "Jazan",
      "Email": "jnorthrop@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Novoa",
      "FirstName": "Sandra",
      "Email": "spnovoa@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Nunez",
      "FirstName": "Perla",
      "Email": "pcnunez@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "O’Donnell",
      "FirstName": "James",
      "Email": "jmodonnell@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "O’Neal",
      "FirstName": "Chelita",
      "Email": "clharris@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "O’shaughnessey",
      "FirstName": "Erin",
      "Email": "emoshaughnessey@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Obmann",
      "FirstName": "Heather",
      "Email": "hlobmann@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "O'Brien",
      "FirstName": "Maureen",
      "Email": "mgobrien@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "O'Brien",
      "FirstName": "Julie",
      "Email": "jaobrien@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ocampo-Nunez",
      "FirstName": "Alma",
      "Email": "alocampo@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ochoa",
      "FirstName": "Jeanine",
      "Email": "jmwaters@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ochoa",
      "FirstName": "Pablo",
      "Email": "pfochoa@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "OConnor",
      "FirstName": "Elizabeth",
      "Email": "eaoconnor@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Odeneal",
      "FirstName": "Deborah",
      "Email": "dmodeneal@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "OKELLY",
      "FirstName": "Mary",
      "Email": "mcschlee@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Oliva",
      "FirstName": "Liza",
      "Email": "loliva3@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Oliveira",
      "FirstName": "Jeff",
      "Email": "jsoliveira@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Olivier",
      "FirstName": "Marcia",
      "Email": "meolivier@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Olson",
      "FirstName": "Kristina",
      "Email": "kmolson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Olvera",
      "FirstName": "Ana",
      "Email": "aholvera@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "O'Malley",
      "FirstName": "Jordan",
      "Email": "jromalley1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Omoware",
      "FirstName": "Jerrica",
      "Email": "jesmith10@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Onuselogu",
      "FirstName": "Lizzy",
      "Email": "lnonuselogu@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Opio",
      "FirstName": "David",
      "Email": "dopio@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Orange-Coenic",
      "FirstName": "Rhonda",
      "Email": "rrorange@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Orlow",
      "FirstName": "Whitney",
      "Email": "wbdetterbeck@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ortega",
      "FirstName": "Francisco",
      "Email": "faortega@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ortiz",
      "FirstName": "Carmita",
      "Email": "csortiz@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ortiz",
      "FirstName": "Leticia",
      "Email": "lortiz2@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ortiz",
      "FirstName": "Claudia",
      "Email": "cmortiz8@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ortiz",
      "FirstName": "Betsaida",
      "Email": "bortiz53@cps.edu",
      "Title": "School Counseling Office Asst",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ortiz",
      "FirstName": "Monica",
      "Email": "mcortiz@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ortuzar",
      "FirstName": "Miriam",
      "Email": "mortuzar@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "OsborneSimmons",
      "FirstName": "Lynn",
      "Email": "ldosborne-simmons@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Osideko",
      "FirstName": "Stacy",
      "Email": "soosideko@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ostrum",
      "FirstName": "Shoshana",
      "Email": "sostrum@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Overturf",
      "FirstName": "Alyssa",
      "Email": "aroverturf@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Oviedo",
      "FirstName": "Gina",
      "Email": "gloviedo@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Owens",
      "FirstName": "Rachael",
      "Email": "rpowens@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Owens",
      "FirstName": "Jeannine",
      "Email": "jowens2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Owusu",
      "FirstName": "Edward",
      "Email": "eaowusu@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "PACHECO",
      "FirstName": "Natasha",
      "Email": "npacheco@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Padilla",
      "FirstName": "Laura",
      "Email": "lkpadilla@cps.edu",
      "Title": "College/Career Coach",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Page",
      "FirstName": "Kimberly",
      "Email": "krpage@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Page",
      "FirstName": "jammie",
      "Email": "jlpage3@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Page",
      "FirstName": "Michelle",
      "Email": "mdpage2@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Palmer-Holmes",
      "FirstName": "Angela",
      "Email": "appalmer-holmes@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Palomares",
      "FirstName": "Cynthia",
      "Email": "cdpalomares@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Panozzo",
      "FirstName": "Mike",
      "Email": "mpanozzo@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Papadakis",
      "FirstName": "Diane",
      "Email": "dmpapadakis@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Pappas",
      "FirstName": "Kayla",
      "Email": "kpappas@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Paramore",
      "FirstName": "Betty",
      "Email": "bsparamore@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Paramore",
      "FirstName": "Michelle",
      "Email": "miparamore@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pardo",
      "FirstName": "Jonathan",
      "Email": "jmpardo2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Park",
      "FirstName": "Josh",
      "Email": "jpark19@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Parker",
      "FirstName": "Andrea",
      "Email": "asparker@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Parker",
      "FirstName": "Cynthia",
      "Email": "cparker34@cps.edu",
      "Title": "School Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Parks",
      "FirstName": "Evelyn",
      "Email": "elparks1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Patel",
      "FirstName": "Jaimin",
      "Email": "jvpatel@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Patterson",
      "FirstName": "Rose",
      "Email": "rrpatterson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Patterson",
      "FirstName": "Hilary",
      "Email": "hlpatterson1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Patterson",
      "FirstName": "Annette",
      "Email": "apatterson@cps.edu",
      "Title": "School Counseling Office Asst",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Patterson",
      "FirstName": "Ivory",
      "Email": "ipatterson2@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Patterson",
      "FirstName": "Michal",
      "Email": "mjpatterson3@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Patula",
      "FirstName": "Timothy",
      "Email": "tpatula@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Payne",
      "FirstName": "Christopher",
      "Email": "cpayne9@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Payton",
      "FirstName": "Keyonna",
      "Email": "klowe-willi@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Paz",
      "FirstName": "Juliana",
      "Email": "jpaz@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Paz",
      "FirstName": "Emma",
      "Email": "epaz9@cps.edu",
      "Title": "Teacher Asst Bil Spanish",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Peachey",
      "FirstName": "Benjamin",
      "Email": "bpeachey2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pearsall",
      "FirstName": "Tina",
      "Email": "tlpearsall@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pearse",
      "FirstName": "Danielle",
      "Email": "dapearse@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Pearson",
      "FirstName": "Maraguerite",
      "Email": "mlpearson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Pearson-Hinkle",
      "FirstName": "Rosha",
      "Email": "rpearson1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pease",
      "FirstName": "Brandon",
      "Email": "bpease@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pecoraro",
      "FirstName": "Victoria",
      "Email": "vmpecoraro@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pedroza",
      "FirstName": "Aimee",
      "Email": "acpedroza1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Pedroza",
      "FirstName": "Victoria",
      "Email": "vhpedroza@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Peete",
      "FirstName": "Linda M",
      "Email": "lmpeete@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Pena",
      "FirstName": "Angelica",
      "Email": "acpena@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pereyra-Navarro",
      "FirstName": "Edith",
      "Email": "espereyra-navarro@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Perez",
      "FirstName": "Cristina",
      "Email": "crodriguez1@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Perez",
      "FirstName": "Salvador",
      "Email": "sperez@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Perez",
      "FirstName": "Lucy",
      "Email": "lperez1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Perez",
      "FirstName": "Dalila",
      "Email": "dperez212@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Perez",
      "FirstName": "Alfonso",
      "Email": "aperez10@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Perez",
      "FirstName": "Hector",
      "Email": "hsperez2@cps.edu",
      "Title": "STLS Advocate",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Perez",
      "FirstName": "Ashley",
      "Email": "aaperezrosa@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Perfect",
      "FirstName": "Kyle",
      "Email": "ktperfect@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Perlman",
      "FirstName": "Alison",
      "Email": "amperlman@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pernell",
      "FirstName": "Asia",
      "Email": "alpernell@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Perry",
      "FirstName": "Kytrah",
      "Email": "klperry@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Peters",
      "FirstName": "Bryan",
      "Email": "bcpeters@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Peters",
      "FirstName": "Phoebe",
      "Email": "pspeters@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Peters",
      "FirstName": "Derrill",
      "Email": "dspeters@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Petersen",
      "FirstName": "Victoria",
      "Email": "vjpetersen@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Petersen",
      "FirstName": "Phoebe",
      "Email": "pdpetersen1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Peterson",
      "FirstName": "Heidi",
      "Email": "hjpeterson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Peterson",
      "FirstName": "Karen",
      "Email": "kapeterson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Petrizzo",
      "FirstName": "Danielle",
      "Email": "dkpetrizzo@cps.edu",
      "Title": "Lead Coach",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pfeiffer",
      "FirstName": "Kelli",
      "Email": "klpfeiffer@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pfeiffer",
      "FirstName": "Ashton",
      "Email": "apfeiffer1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Phillips",
      "FirstName": "Justina",
      "Email": "jphillips51@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Phillips",
      "FirstName": "Darcy",
      "Email": "dfphillips@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Phipps",
      "FirstName": "Towanda Michelle",
      "Email": "tmphipps@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Pickens",
      "FirstName": "Ekeshia",
      "Email": "epickens4@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pietrus",
      "FirstName": "Debra",
      "Email": "dapietrus@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Pike",
      "FirstName": "Tammy",
      "Email": "tepike@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pineda",
      "FirstName": "Arcelia",
      "Email": "apineda29@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pineda",
      "FirstName": "Leticia",
      "Email": "lapineda@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pineda",
      "FirstName": "Emily",
      "Email": "ejmannakee@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Pineda",
      "FirstName": "Eduardo",
      "Email": "empineda@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "pinto",
      "FirstName": "juan carlos",
      "Email": "jcpinto@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Pipes",
      "FirstName": "Ashley",
      "Email": "adpipes1@cps.edu",
      "Title": "STLS Advocate",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Pizza",
      "FirstName": "Elizabeth",
      "Email": "eapizza@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Placha",
      "FirstName": "Katherine",
      "Email": "kplacha@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Platt",
      "FirstName": "Diana",
      "Email": "dmcampagni@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Pluchar",
      "FirstName": "Anne",
      "Email": "apluchar@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Pohlad",
      "FirstName": "Teresa",
      "Email": "tpohlad@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Polk",
      "FirstName": "Jelisa",
      "Email": "jpolk15@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "polley",
      "FirstName": "daniel",
      "Email": "djpolley@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ponce",
      "FirstName": "Felix",
      "Email": "fponce6@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Popowich",
      "FirstName": "Jonathan",
      "Email": "jrpopowich@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Popowich",
      "FirstName": "Sarah",
      "Email": "snpopowich@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Porrata",
      "FirstName": "Janice",
      "Email": "jiporrata@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Porstner",
      "FirstName": "Jessy",
      "Email": "jkrawczyk1@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Porter",
      "FirstName": "KoSombia",
      "Email": "kwilson3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "porter",
      "FirstName": "yolanda",
      "Email": "yporter2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Potratz",
      "FirstName": "Julie",
      "Email": "jepotratz@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Potts",
      "FirstName": "Dominique",
      "Email": "dkpotts1@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Powell",
      "FirstName": "James",
      "Email": "jcpowell4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Preciado",
      "FirstName": "Diana",
      "Email": "dpreciado@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Prendergast",
      "FirstName": "Anne",
      "Email": "acprendergast@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Preston",
      "FirstName": "Mia",
      "Email": "mrpreston@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Price",
      "FirstName": "Renee",
      "Email": "rlprice@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Prochaska",
      "FirstName": "Taylor",
      "Email": "tcprochaska@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Puchowitz",
      "FirstName": "Maxine",
      "Email": "mgpuchowitz@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Pulliam",
      "FirstName": "Patricia",
      "Email": "plpulliam@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Qazi",
      "FirstName": "Sumaiya",
      "Email": "sqazi3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Quinn Ulmer",
      "FirstName": "Kaylin",
      "Email": "krquinn@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Quinones",
      "FirstName": "Julissa",
      "Email": "jcarrasco10@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rachel-Graham",
      "FirstName": "Vicki",
      "Email": "vyrachel-gra@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Radomski",
      "FirstName": "Katie",
      "Email": "kmquinn@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Raman",
      "FirstName": "Jeremy",
      "Email": "jsraman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ramirez",
      "FirstName": "Sandra",
      "Email": "suramirez@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "ramirez",
      "FirstName": "melissa",
      "Email": "mramirez135@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ramirez",
      "FirstName": "Mariangie",
      "Email": "maramirez4@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ramirez",
      "FirstName": "Blanca",
      "Email": "bramirez82@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ramirez Lona",
      "FirstName": "Allan",
      "Email": "aramirezlona@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ramirez-Howard",
      "FirstName": "Juana",
      "Email": "jramirezhoward@cps.edu",
      "Title": "School Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ramos",
      "FirstName": "Nilda",
      "Email": "ngarza@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ramos",
      "FirstName": "Nancy",
      "Email": "nramos1@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ramovic",
      "FirstName": "Celeste",
      "Email": "cramovic@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ramovic",
      "FirstName": "Edin",
      "Email": "eramovic1@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rapp",
      "FirstName": "Maggie",
      "Email": "merapp@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rasmussen",
      "FirstName": "Molly",
      "Email": "msrasmussen@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "raufmann",
      "FirstName": "barbra (bobbi)",
      "Email": "bjraufmann@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Raya",
      "FirstName": "Cynthia",
      "Email": "caraya1@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rayburn",
      "FirstName": "Tracie",
      "Email": "trayburn@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rayside",
      "FirstName": "Salena",
      "Email": "smrayside@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Razo",
      "FirstName": "Edith",
      "Email": "erazo9@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Redding",
      "FirstName": "Largenette",
      "Email": "lhawkins2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Redding",
      "FirstName": "Gloria",
      "Email": "gtredding@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Redding",
      "FirstName": "Ashley",
      "Email": "awredding@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Redmon Land",
      "FirstName": "Tracy",
      "Email": "tredmonland@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Redmond",
      "FirstName": "Donna",
      "Email": "dcredmond@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Redmond",
      "FirstName": "Johnetta",
      "Email": "jgredmond@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Redmond",
      "FirstName": "Norma",
      "Email": "njredmond@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Reed",
      "FirstName": "William",
      "Email": "wgreed@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Reed",
      "FirstName": "Ericka",
      "Email": "edreed@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Reed",
      "FirstName": "Elizabeth",
      "Email": "eareed@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "reed",
      "FirstName": "anne",
      "Email": "acreed@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Regan",
      "FirstName": "Abigale",
      "Email": "aregan@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Reid",
      "FirstName": "Brian",
      "Email": "bjreid1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Reidel",
      "FirstName": "Mark",
      "Email": "mreidel@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Reis",
      "FirstName": "Jamie",
      "Email": "jljohnson5@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Reisner",
      "FirstName": "Jennifer",
      "Email": "jclozier@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rendleman",
      "FirstName": "Hillarey",
      "Email": "hlwoods1@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Respress",
      "FirstName": "April",
      "Email": "amrespress@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rettke",
      "FirstName": "Gloria",
      "Email": "grettke@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Reyes",
      "FirstName": "Blanca",
      "Email": "bareyes@cps.edu",
      "Title": "Audio And Vision Screen Tech",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Reyes",
      "FirstName": "Javier",
      "Email": "jreyes249@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Reyes",
      "FirstName": "Diane",
      "Email": "dreyes@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Reyna",
      "FirstName": "Alexis",
      "Email": "areyna15@cps.edu",
      "Title": "School Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Reynolds",
      "FirstName": "Kimberly",
      "Email": "kreynolds11@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rice",
      "FirstName": "Yolanda",
      "Email": "yrice@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rice Irvin",
      "FirstName": "Paula",
      "Email": "perice-irvin@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Richards",
      "FirstName": "Kaitlyn",
      "Email": "krichards12@cps.edu",
      "Title": "Physical Therapist",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Richardson",
      "FirstName": "Andrea",
      "Email": "arichardson3@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Richter",
      "FirstName": "Abby",
      "Email": "aemiller3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ricks",
      "FirstName": "Andrew",
      "Email": "ajricks@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ricks",
      "FirstName": "Shastidy",
      "Email": "sricks1@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Riddle",
      "FirstName": "Deborah",
      "Email": "driddle2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rimington",
      "FirstName": "Kristin",
      "Email": "kbrimington@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "rinella",
      "FirstName": "liz",
      "Email": "erinella@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rios",
      "FirstName": "Lyzetth",
      "Email": "lrios33@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rios",
      "FirstName": "Kristen",
      "Email": "kkrios@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ritts",
      "FirstName": "Kaitlyn",
      "Email": "keritts@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rivera",
      "FirstName": "Nohemi",
      "Email": "nrivera77@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rivera",
      "FirstName": "Lysandra",
      "Email": "lsantiago2@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rivera",
      "FirstName": "Angelo",
      "Email": "aarivera18@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rivers",
      "FirstName": "Jennifer",
      "Email": "jlfeazellrivers@cps.edu",
      "Title": "School Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rizzo",
      "FirstName": "Gina",
      "Email": "gmrizzo@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Roberson",
      "FirstName": "Kimberly",
      "Email": "krroberson@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Roberts",
      "FirstName": "Shaune",
      "Email": "slroberts3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Roberts",
      "FirstName": "Leigh",
      "Email": "ldroberts4@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Robinson",
      "FirstName": "Thelma",
      "Email": "trobinson@cps.edu",
      "Title": "",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Robinson",
      "FirstName": "Tonette",
      "Email": "trobinson124@cps.edu",
      "Title": "",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Robinson",
      "FirstName": "Donovan",
      "Email": "drrobinson8@cps.edu",
      "Title": "Community Relations Rep II",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Robinson",
      "FirstName": "Ronisha",
      "Email": "rlrobinson9@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Robinson",
      "FirstName": "Ronelle",
      "Email": "rlrobinson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Robinson",
      "FirstName": "Patricia",
      "Email": "parobinson1@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Robinson",
      "FirstName": "Ian",
      "Email": "icrobinson2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Robinson",
      "FirstName": "Latasha",
      "Email": "lsrobinson10@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rocchio",
      "FirstName": "Katie",
      "Email": "kmrocchio@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rocco",
      "FirstName": "Linda",
      "Email": "lmrocco@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rocque",
      "FirstName": "Jennifer",
      "Email": "jarocque@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodak",
      "FirstName": "Maureen",
      "Email": "mrodak@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Lisa",
      "Email": "lmrodriguez18@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Yesenia",
      "Email": "yrodriguez4@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Elaine",
      "Email": "erodriguez365@cps.edu",
      "Title": "Physical Therapist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Vanessa",
      "Email": "vrodriguez92@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Melitza",
      "Email": "mrodriguez17@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Gabriella",
      "Email": "grodriguez4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Adriana",
      "Email": "arodriguez451@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "rodriguez",
      "FirstName": "rita",
      "Email": "rmrodriguez@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Erika",
      "Email": "erodriguez422@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Jose",
      "Email": "jrodriguez63@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Estefania",
      "Email": "erodriguez227@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Elizabeth",
      "Email": "erodriguez278@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Maribel",
      "Email": "mrodriguez388@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Jessica",
      "Email": "jrodriguez556@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Maria",
      "Email": "mgrodriguez17@cps.edu",
      "Title": "School Community Representive",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Alyssa",
      "Email": "arodriguez701@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Denise",
      "Email": "dmrodriguez6@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rodriguez",
      "FirstName": "Melissa",
      "Email": "mrodriguez56@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rodriguez ramirez",
      "FirstName": "Rosa",
      "Email": "rrodriguez-ramir@cps.edu",
      "Title": "Teacher Asst Bil Spanish",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rodríguez-Encarnación",
      "FirstName": "Taína",
      "Email": "rodriguez-encar@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Roe",
      "FirstName": "Elizabeth",
      "Email": "earoe1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Roelle",
      "FirstName": "Mary",
      "Email": "mtroelle@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rogers",
      "FirstName": "Robyn",
      "Email": "rlrogers4@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rogers",
      "FirstName": "Teneisha",
      "Email": "tsrogers3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rogers",
      "FirstName": "Penny",
      "Email": "progers9@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Roland",
      "FirstName": "Genevieve",
      "Email": "grroland@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rollins",
      "FirstName": "Rebecca",
      "Email": "rfsimon@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rolston",
      "FirstName": "Gretchen",
      "Email": "ggrolston@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Roman",
      "FirstName": "Maria",
      "Email": "meroman5@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Roman",
      "FirstName": "Iliana",
      "Email": "imroman@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Romayne",
      "FirstName": "Tamika",
      "Email": "tromayne1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Romero",
      "FirstName": "Violeta",
      "Email": "vromero30@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Romo",
      "FirstName": "Yazmin",
      "Email": "yromo@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Romo",
      "FirstName": "Elizabeth",
      "Email": "eromo13@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rosado",
      "FirstName": "Debra",
      "Email": "drosado5@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rose",
      "FirstName": "Linsey",
      "Email": "lrrose@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rose",
      "FirstName": "Madeline",
      "Email": "mrose13@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rosenberg",
      "FirstName": "Joyce",
      "Email": "jcrosenberg@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rossi",
      "FirstName": "Cynthia",
      "Email": "clrossi@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rostro",
      "FirstName": "Claudia",
      "Email": "crostro@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rotibi",
      "FirstName": "Oluwatoyin",
      "Email": "orotibi@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Rottenberg",
      "FirstName": "Elsa",
      "Email": "erottenberg@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rowe",
      "FirstName": "Julia",
      "Email": "jrrowe@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rozo",
      "FirstName": "Liana",
      "Email": "lrrozo@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rubio",
      "FirstName": "Marisa",
      "Email": "mdubauskas@cps.edu",
      "Title": "Cadre Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rubio",
      "FirstName": "Rose",
      "Email": "rmrubio@cps.edu",
      "Title": "Teacher Asst Bil Spanish",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ruffin",
      "FirstName": "Tiffany",
      "Email": "tcpaul@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ruiz",
      "FirstName": "Evangelina",
      "Email": "emruiz4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ruiz",
      "FirstName": "Maritza",
      "Email": "mruiz24@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rushing-Jones",
      "FirstName": "Kimberly",
      "Email": "kprushing@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ruttenberg",
      "FirstName": "Madeleine",
      "Email": "mruttenberg1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Rux",
      "FirstName": "Margaret",
      "Email": "mmrux@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ryder",
      "FirstName": "Ali",
      "Email": "anryder@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Safinski",
      "FirstName": "Kamila",
      "Email": "ksafinski@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Salas",
      "FirstName": "Janet",
      "Email": "jmsalas@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Salas",
      "FirstName": "Lilliana",
      "Email": "lsalas14@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Saldivar",
      "FirstName": "Gladys",
      "Email": "gsaldivar6@cps.edu",
      "Title": "School Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Salgado",
      "FirstName": "Dorina",
      "Email": "dsalgado102@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Salinas",
      "FirstName": "Maria",
      "Email": "mdsalinas-pe@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Salvana",
      "FirstName": "Maria",
      "Email": "mmsalvana@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Samartino",
      "FirstName": "Ms. Lynn",
      "Email": "lmsamartino@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sampson",
      "FirstName": "Katherine",
      "Email": "ksampson3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "San Juan",
      "FirstName": "Erin",
      "Email": "emillen@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sanchez",
      "FirstName": "Hector",
      "Email": "hsanchez34@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sanchez",
      "FirstName": "Karen",
      "Email": "ksanchez90@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sanchez Rivera",
      "FirstName": "Livia",
      "Email": "lsanchezrivera@cps.edu",
      "Title": "School Community Representive",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sanders",
      "FirstName": "Sheneice",
      "Email": "slsanders@cps.edu",
      "Title": "Family Engagement Coordinator",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sanders",
      "FirstName": "Toya",
      "Email": "tcwashington9@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sanders",
      "FirstName": "Ricarda",
      "Email": "rcsanders@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "sanders",
      "FirstName": "carter",
      "Email": "cesanders@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sanders",
      "FirstName": "Mamie",
      "Email": "mlsanders1@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sanders",
      "FirstName": "Brian",
      "Email": "bsanders11@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sandstrom",
      "FirstName": "Erika",
      "Email": "ejsandstrom@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Santana",
      "FirstName": "Tatiana",
      "Email": "tsantana@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Santiago-O’Shea",
      "FirstName": "Jill",
      "Email": "jmsantiago@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Santos",
      "FirstName": "Luisa",
      "Email": "lvsantos@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Santoyo",
      "FirstName": "Rebekka",
      "Email": "rjmartin3@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sarauw",
      "FirstName": "Rachel",
      "Email": "rlsarauw@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sarich",
      "FirstName": "Michelle",
      "Email": "mlsarich@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "SARTIN",
      "FirstName": "SAMANTHA",
      "Email": "snsartin@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Satalino",
      "FirstName": "Stephen",
      "Email": "sesatalino@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Satoh",
      "FirstName": "Carolyn",
      "Email": "cmsatoh1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sauna",
      "FirstName": "Khushnum",
      "Email": "ksauna@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sbarra",
      "FirstName": "Elizabeth",
      "Email": "esbarra@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Scaife",
      "FirstName": "Rosalind",
      "Email": "rascaife@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Scalise",
      "FirstName": "Matthew",
      "Email": "mscalise2@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Scanlan",
      "FirstName": "Thomas",
      "Email": "tpscanlan@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Scanlon",
      "FirstName": "Carmen",
      "Email": "cscanlon@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Schachman",
      "FirstName": "Amy",
      "Email": "aschachman1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Scheda",
      "FirstName": "Jean",
      "Email": "jscheda@cps.edu",
      "Title": "Teacher - Librarian",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Scheiber",
      "FirstName": "Linda",
      "Email": "lscheiber@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Schenck",
      "FirstName": "Tim",
      "Email": "taschenck@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "schneller",
      "FirstName": "franz",
      "Email": "fjschneller@cps.edu",
      "Title": "Health Service Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Schoenhofer",
      "FirstName": "Emily",
      "Email": "eeschoenhofer@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Schoffstall",
      "FirstName": "Jamie",
      "Email": "jlschoffstal@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Schultz",
      "FirstName": "Kathleen",
      "Email": "kaschultz@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Schumacher",
      "FirstName": "Emily",
      "Email": "eeschumacher@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "scofield",
      "FirstName": "michael",
      "Email": "mscofield@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Scotese",
      "FirstName": "Anita",
      "Email": "altaylor@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Scott",
      "FirstName": "Shereen",
      "Email": "sescott@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Scott",
      "FirstName": "Veronica",
      "Email": "vtscott@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Scott",
      "FirstName": "Kezia",
      "Email": "kcscott@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Scott",
      "FirstName": "Dionne",
      "Email": "ddscott@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "sCOTT",
      "FirstName": "Wynne",
      "Email": "wmscott1@cps.edu",
      "Title": "School Community Representive",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Scott",
      "FirstName": "Ikyta",
      "Email": "ijscott@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Seaberry",
      "FirstName": "Cheyenne",
      "Email": "cseaberry1@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Seals",
      "FirstName": "Ariana",
      "Email": "aaseals@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sechrist",
      "FirstName": "Chris",
      "Email": "csechrist1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sefton",
      "FirstName": "Katherine",
      "Email": "klhenehan@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Seifert",
      "FirstName": "Alexander",
      "Email": "adseifert@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Seitelman",
      "FirstName": "Brielle",
      "Email": "bcseitelman@cps.edu",
      "Title": "Occupational Therapist",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Seitz",
      "FirstName": "Sara",
      "Email": "sseitz@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Senn",
      "FirstName": "Meredith",
      "Email": "masenn@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sepulveda",
      "FirstName": "Migdalia",
      "Email": "msepulveda@cps.edu",
      "Title": "Teacher Asst Bil Spanish",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Serrano",
      "FirstName": "Edith",
      "Email": "eserrano57@cps.edu",
      "Title": "Occupational Therapist",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sevilla",
      "FirstName": "Stephanie",
      "Email": "ssevilla3@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Shabica",
      "FirstName": "Dana",
      "Email": "dvshabica@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Shami",
      "FirstName": "Nabaa",
      "Email": "nkshami@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Shanahan",
      "FirstName": "Katherine",
      "Email": "kashanahan1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Shannon",
      "FirstName": "Marissa",
      "Email": "mkhenderson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sharp",
      "FirstName": "Nicole",
      "Email": "nsharp4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sharpe",
      "FirstName": "Michelle",
      "Email": "mesharpe@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Shavers",
      "FirstName": "Jazzmine",
      "Email": "jcshavers@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Shaw",
      "FirstName": "Shantelle",
      "Email": "snshaw1@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Shaw",
      "FirstName": "Brooke",
      "Email": "brshaw1@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Shaw",
      "FirstName": "Erika",
      "Email": "eshaw4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sheehan",
      "FirstName": "Erin",
      "Email": "ekmulheron@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sheeran",
      "FirstName": "Eileen",
      "Email": "esheeran@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Shehan",
      "FirstName": "Samantha",
      "Email": "sshehan@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Shelton",
      "FirstName": "Vivian",
      "Email": "vwshelton@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sherbin",
      "FirstName": "Liza",
      "Email": "lrsherbin@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "SHERLEY",
      "FirstName": "PAMELA",
      "Email": "pdsherley@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sherr",
      "FirstName": "Jamie",
      "Email": "jsherr2@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sherry",
      "FirstName": "Adrianna",
      "Email": "amlares1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Shields-Nelson",
      "FirstName": "Bernadette",
      "Email": "bshields@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Shine",
      "FirstName": "LaToya",
      "Email": "lnshine@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Shipman",
      "FirstName": "Kristina",
      "Email": "kjshipman@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Shoemaker",
      "FirstName": "Katie",
      "Email": "kshoemaker@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Shorter",
      "FirstName": "Darlene",
      "Email": "dmlyons-shorter@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Shukla",
      "FirstName": "Aneesh",
      "Email": "ashukla@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Shultz",
      "FirstName": "Paul",
      "Email": "ptshultz@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Shydlowski",
      "FirstName": "Lauren",
      "Email": "lshydlowski@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sible",
      "FirstName": "Brandon",
      "Email": "bsible@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Siebert / Holzman",
      "FirstName": "Liz",
      "Email": "esiebert1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Siegel",
      "FirstName": "Todd",
      "Email": "tosiegel@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sigel",
      "FirstName": "Susan",
      "Email": "smkane1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Silva",
      "FirstName": "Rocio",
      "Email": "resilva@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Silveri",
      "FirstName": "Noah",
      "Email": "njsilveri@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Simanskey",
      "FirstName": "Sarah",
      "Email": "sesimanskey@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Simmons",
      "FirstName": "Marlene",
      "Email": "msimmons2@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Simmons",
      "FirstName": "Elexcia",
      "Email": "esimmons19@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Simmons",
      "FirstName": "Lynda",
      "Email": "lasimmons@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Simms",
      "FirstName": "Keishonda",
      "Email": "kmsimms@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Simon",
      "FirstName": "Courtney",
      "Email": "cesimon1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Simon",
      "FirstName": "Katherine",
      "Email": "ksimon@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sims",
      "FirstName": "Carol",
      "Email": "crsims@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sims",
      "FirstName": "JaToya",
      "Email": "jlsims6@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sineni",
      "FirstName": "Kimberly",
      "Email": "ktsineni@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Singleton",
      "FirstName": "Cariesha",
      "Email": "ccsingleton@cps.edu",
      "Title": "Teacher Asst Bil Spanish",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sisco",
      "FirstName": "David",
      "Email": "dsisco1@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sisto",
      "FirstName": "Joseph",
      "Email": "jgsisto@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Skipper",
      "FirstName": "Tyieashia",
      "Email": "tpskipper@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sliwicka",
      "FirstName": "Linda",
      "Email": "lasliwicka@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Smallwood",
      "FirstName": "Kathleen",
      "Email": "ksmallwood6@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Smetters",
      "FirstName": "Justin",
      "Email": "jsmetters@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Rochelle",
      "Email": "rrsmith11@cps.edu",
      "Title": "Occupational Therapist",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Melissa",
      "Email": "mssmith26@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Abigail",
      "Email": "asmith420@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Tasha",
      "Email": "tlsmith56@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Christina",
      "Email": "csmith207@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Brad",
      "Email": "bmsmith30@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Cassandra",
      "Email": "cjsmith4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Jazell",
      "Email": "jmsmith6@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Harold",
      "Email": "hesmith@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Carol",
      "Email": "casmith@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Madison",
      "Email": "msmith279@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Ayana",
      "Email": "aksmith@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Edie",
      "Email": "emsmith1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Tiffany",
      "Email": "tmsmith9@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Ayana",
      "Email": "acsmith29@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Latonya",
      "Email": "lcsmith2@cps.edu",
      "Title": "School Community Representive",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Shatondra",
      "Email": "snsmith16@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Eunice",
      "Email": "emarce@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Micki",
      "Email": "masmith74@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Cetrina",
      "Email": "ccole14@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Smith",
      "FirstName": "Eileen",
      "Email": "earyan-walkowski@cps.edu",
      "Title": "Teacher-Speech Pathologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Snyder",
      "FirstName": "Christine",
      "Email": "cbomalley@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sobolewski",
      "FirstName": "Pamela",
      "Email": "psobolewski1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Soeding",
      "FirstName": "Mary",
      "Email": "mesoeding@cps.edu",
      "Title": "School Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sokolow",
      "FirstName": "Laura",
      "Email": "lhsokolow@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sokolowska",
      "FirstName": "Grace",
      "Email": "gsokolowska@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Solis",
      "FirstName": "Grace",
      "Email": "gisolis1@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Solka",
      "FirstName": "Deborah",
      "Email": "dlsolka@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Solms",
      "FirstName": "Andrea",
      "Email": "aksolms@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Soltis",
      "FirstName": "Mark",
      "Email": "mrsoltis@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sonnentag",
      "FirstName": "Brian",
      "Email": "bsonnentag@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sontag",
      "FirstName": "Paula",
      "Email": "prburnett@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sopavanich",
      "FirstName": "neeti",
      "Email": "nsopavanich@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Southall",
      "FirstName": "Nick",
      "Email": "nwsouthall@cps.edu",
      "Title": "Disp Full Time Basis Cadre",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Spann",
      "FirstName": "Valerie",
      "Email": "vspann@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Spear",
      "FirstName": "Tyler",
      "Email": "tspear1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Spears",
      "FirstName": "Phylicia",
      "Email": "plspears@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Spells",
      "FirstName": "Monique",
      "Email": "maspells@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Spencer",
      "FirstName": "Lauren",
      "Email": "ltspencer1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Spencer",
      "FirstName": "Ashley",
      "Email": "aespencer@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Spight",
      "FirstName": "Marissa",
      "Email": "mmspight@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Spooner Gibney",
      "FirstName": "Maresa",
      "Email": "mspooner@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Spraggins",
      "FirstName": "Bernice",
      "Email": "bspraggins@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stalla",
      "FirstName": "Lisa",
      "Email": "lmstalla@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stalling",
      "FirstName": "Ruth",
      "Email": "restalling@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Stallworth",
      "FirstName": "Melinda",
      "Email": "mstallworth5@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Stanciel-Thompson",
      "FirstName": "Elizabeth",
      "Email": "esthompson@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stanton",
      "FirstName": "Brenda",
      "Email": "bbmcgeever@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Stapleton",
      "FirstName": "Patricia",
      "Email": "paharvey@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Starr",
      "FirstName": "Kristen",
      "Email": "kjstarr@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Staswick",
      "FirstName": "Eric",
      "Email": "estaswick@cps.edu",
      "Title": "Conflict Resolution Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Steber",
      "FirstName": "Maggie",
      "Email": "msteber@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stefanski",
      "FirstName": "David",
      "Email": "djstefanski@cps.edu",
      "Title": "Health Service Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "steffens",
      "FirstName": "greg",
      "Email": "gjsteffens@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Stehley",
      "FirstName": "Benjamin",
      "Email": "bstehley@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Steier",
      "FirstName": "Miranda",
      "Email": "msteier@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Steigerwald",
      "FirstName": "Mary Beth",
      "Email": "msteigerwal@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Steinmetz-Silber",
      "FirstName": "Gavriel",
      "Email": "gssteinmetzsilber@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Stepanek",
      "FirstName": "Kaitlin",
      "Email": "kastepanek1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Stephanos",
      "FirstName": "Peter",
      "Email": "pstephanos@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Stephens",
      "FirstName": "Chanise",
      "Email": "clstephens@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Stevens",
      "FirstName": "Anna",
      "Email": "astevens12@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stewart",
      "FirstName": "Theresa",
      "Email": "tastewart@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Stewart",
      "FirstName": "Lida",
      "Email": "llstewart@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stewart",
      "FirstName": "Adrianna",
      "Email": "adstewart@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stewart",
      "FirstName": "Ariel",
      "Email": "asstewart2@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stewart-Davis",
      "FirstName": "Andrea",
      "Email": "adstewart-davis@cps.edu",
      "Title": "Program Option Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stewin",
      "FirstName": "Michelle",
      "Email": "mmstewin@cps.edu",
      "Title": "Head Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Stockdale",
      "FirstName": "Myrtlean",
      "Email": "mkstockdale@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stokowski",
      "FirstName": "Christoph",
      "Email": "cmstokowski@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Storey",
      "FirstName": "Yvonne",
      "Email": "ystorey@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Story",
      "FirstName": "Abena",
      "Email": "adwalker@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Story",
      "FirstName": "Kalyn",
      "Email": "kstory1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stovitz",
      "FirstName": "Samuel",
      "Email": "sstovitz@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Strand",
      "FirstName": "Joshua",
      "Email": "jrstrand@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Strange",
      "FirstName": "Brenda",
      "Email": "bkstrange@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Streeter",
      "FirstName": "Sean",
      "Email": "sstreeter1@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stroczkowski",
      "FirstName": "Alison",
      "Email": "astroczkowski@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Strong",
      "FirstName": "Karintha",
      "Email": "kastrong1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Stroud-Johnson",
      "FirstName": "Kiniece",
      "Email": "klstroud@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Strum",
      "FirstName": "Melissa",
      "Email": "mstrum@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Strunin",
      "FirstName": "Sarah",
      "Email": "skstrunin@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stuckel",
      "FirstName": "Sarah",
      "Email": "sstuckel@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Stuckert",
      "FirstName": "Kirsten",
      "Email": "kstuckert@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Suarez",
      "FirstName": "Miriam",
      "Email": "mllopez10@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Suarez",
      "FirstName": "Ricardi",
      "Email": "risuarez@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Suarez de Duran",
      "FirstName": "Esmeralda",
      "Email": "essuarezdeduran@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sudduth",
      "FirstName": "Linda",
      "Email": "llsudduth@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sugrue",
      "FirstName": "Eileen",
      "Email": "etohara@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Suh",
      "FirstName": "Edward",
      "Email": "esuh1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Suh",
      "FirstName": "Kelli",
      "Email": "krsuh@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sullivan",
      "FirstName": "Nora",
      "Email": "ndsullivan1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Sullivan",
      "FirstName": "Elizabeth",
      "Email": "esullivan2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sunshine",
      "FirstName": "Genevieve",
      "Email": "galukosavich1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Sutton",
      "FirstName": "Dr. Lisa",
      "Email": "lasutton@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Svoboda",
      "FirstName": "Katie",
      "Email": "ksvoboda@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Swain",
      "FirstName": "Jolanda",
      "Email": "jlclark@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "sykes",
      "FirstName": "diane",
      "Email": "dmsykes@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Szabla",
      "FirstName": "Carrie",
      "Email": "caszabla@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Szpur",
      "FirstName": "Andrew",
      "Email": "apszpur@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Szyman",
      "FirstName": "Marie",
      "Email": "mbszyman@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Szyska",
      "FirstName": "Christine",
      "Email": "cstanton2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tagtmeier",
      "FirstName": "Ralene",
      "Email": "rmrosa1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Taitt-Guillory",
      "FirstName": "Cynthia",
      "Email": "cmtaitt@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "tamez",
      "FirstName": "david",
      "Email": "dtamez@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tancinco",
      "FirstName": "Mary Jane",
      "Email": "matancinco@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Tanco",
      "FirstName": "Milton",
      "Email": "mmtanco@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tapia",
      "FirstName": "Evelyn",
      "Email": "ectapiasamaniego@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tapia",
      "FirstName": "Annabell",
      "Email": "actapia1@cps.edu",
      "Title": "Teacher Asst-Montessori Prm",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tapia",
      "FirstName": "Steven",
      "Email": "stapia21@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Taylor",
      "FirstName": "Margaret",
      "Email": "mstaylor5@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Taylor",
      "FirstName": "LaTia",
      "Email": "ljtaylor4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Taylor",
      "FirstName": "Shauntai",
      "Email": "sptaylor@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Taylor",
      "FirstName": "Nicole",
      "Email": "nmdoup@cps.edu",
      "Title": "School Psychologist",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Taylor",
      "FirstName": "Addison",
      "Email": "ajtaylor19@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Taylor-Young",
      "FirstName": "Genesis",
      "Email": "gctaylor@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Tedaldi",
      "FirstName": "Grant",
      "Email": "gtedaldi@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tellez",
      "FirstName": "Maria",
      "Email": "mtellez@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Temple",
      "FirstName": "Kesha",
      "Email": "kltemple1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Terhune",
      "FirstName": "Mary",
      "Email": "materhune@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Terrill",
      "FirstName": "Lindsey",
      "Email": "lkterrill@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Teruel",
      "FirstName": "David",
      "Email": "dteruelnaval@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Texin",
      "FirstName": "Melissa",
      "Email": "mtexin1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Theodosis",
      "FirstName": "Grace",
      "Email": "gtheodosis1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Thigpen",
      "FirstName": "Jeff",
      "Email": "jathigpen@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Thomas",
      "FirstName": "Brittany",
      "Email": "bthomas43@cps.edu",
      "Title": "Ed Sign Language Interpreter",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Thomas",
      "FirstName": "Brittany",
      "Email": "bthomas27@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Thomas",
      "FirstName": "Sharon",
      "Email": "sythomas@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Thomas",
      "FirstName": "Veronica",
      "Email": "vlthomas1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Thomas",
      "FirstName": "Kierra",
      "Email": "kthomas135@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Thomas-Holmes",
      "FirstName": "Tiffany",
      "Email": "tnthomas1@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Thompson",
      "FirstName": "Jeremiah",
      "Email": "jthompson44@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "thompson",
      "FirstName": "raymond",
      "Email": "rethompson3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Thompson",
      "FirstName": "Amy",
      "Email": "alfranklin6@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Thompson",
      "FirstName": "Katie",
      "Email": "kaderman@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Thompson",
      "FirstName": "Veronica",
      "Email": "vthompson3@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Thompson",
      "FirstName": "Patrice",
      "Email": "pbperry@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Thorn",
      "FirstName": "Lauren",
      "Email": "lmfassler@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Thornton-Franklin",
      "FirstName": "Trina",
      "Email": "tjthornton-f@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Threewitt",
      "FirstName": "Derek",
      "Email": "dbthreewitt@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Timmons",
      "FirstName": "Amanda",
      "Email": "atimmons1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Timur",
      "FirstName": "Erin",
      "Email": "etimur@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tirado",
      "FirstName": "christine",
      "Email": "crkrilich@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tobiason",
      "FirstName": "Suzanne",
      "Email": "srtobiason@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Tobin",
      "FirstName": "Kimberly",
      "Email": "kltobin@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tobin",
      "FirstName": "Connor",
      "Email": "ctobin@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Tolentino",
      "FirstName": "Jacqueline",
      "Email": "jmtolentino@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Toler",
      "FirstName": "Siobhan",
      "Email": "stoler@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ton",
      "FirstName": "Nancy",
      "Email": "npton1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Toney",
      "FirstName": "Charlene",
      "Email": "cytoney@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Topel",
      "FirstName": "Ellen",
      "Email": "etopel@cps.edu",
      "Title": "School Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Topel",
      "FirstName": "Jennifer",
      "Email": "jacoen@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Torres",
      "FirstName": "Julie",
      "Email": "jtorres308@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Torres",
      "FirstName": "Adrienne",
      "Email": "adtorres12@cps.edu",
      "Title": "Hospital Licensed Prac Nurse",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Torres",
      "FirstName": "Miguel",
      "Email": "mtorres140@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Touras-Andrikopoulos",
      "FirstName": "Pamela",
      "Email": "pctouras-andrikop@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Toussaint",
      "FirstName": "Alicia",
      "Email": "artoussaint@cps.edu",
      "Title": "Physical Therapist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tovar",
      "FirstName": "Laura",
      "Email": "ltovar2@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Towns-Bell",
      "FirstName": "Felicia",
      "Email": "fdtowns-bell@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Townsend",
      "FirstName": "Tanjra",
      "Email": "ttownsend4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Traywick-Glover",
      "FirstName": "Kanika",
      "Email": "kstraywick@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Trejo",
      "FirstName": "Stephanie",
      "Email": "sberryhill1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Trentham",
      "FirstName": "April",
      "Email": "altrentham@cps.edu",
      "Title": "Curriculum And Instruct Coach",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Trine",
      "FirstName": "Karen",
      "Email": "kmtrine@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Triplett",
      "FirstName": "LeKesha",
      "Email": "lrwilliams7@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Triplett",
      "FirstName": "Elizabeth",
      "Email": "ectriplett@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Troglia",
      "FirstName": "Julie",
      "Email": "jtroglia@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Trueba",
      "FirstName": "Patricia",
      "Email": "ptrueba@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Tseng",
      "FirstName": "Wilbur",
      "Email": "wwtseng@cps.edu",
      "Title": "Technology Coordinator",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "turcios",
      "FirstName": "sonia",
      "Email": "sicruz@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Turley",
      "FirstName": "Nikkol",
      "Email": "nturley@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "turner",
      "FirstName": "melissa",
      "Email": "maturner@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Turner",
      "FirstName": "Myumia",
      "Email": "mlturner1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Turner",
      "FirstName": "Jenny",
      "Email": "jrturner7@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Turry",
      "FirstName": "Adam",
      "Email": "amturry@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tutein",
      "FirstName": "Doris",
      "Email": "dhenderson43@cps.edu",
      "Title": "Student Special Svc Advocate",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Tyler",
      "FirstName": "Christine",
      "Email": "ctyler2@cps.edu",
      "Title": "Day-To-Day Sub School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Tyler",
      "FirstName": "Ciera",
      "Email": "cltyler1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tyson",
      "FirstName": "Danielle",
      "Email": "dtyson1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Tyson",
      "FirstName": "Janique",
      "Email": "jrtyson@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Tyson",
      "FirstName": "Judith",
      "Email": "jtyson4@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ubides",
      "FirstName": "Juana",
      "Email": "jcrosario@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ulmer",
      "FirstName": "Corrine",
      "Email": "culmer@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Uribe",
      "FirstName": "Samantha",
      "Email": "sauribe1@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Urquiza",
      "FirstName": "Chantel",
      "Email": "curquiza1@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Usmani",
      "FirstName": "Erum",
      "Email": "eusmani@cps.edu",
      "Title": "School Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Vaccarezza-Isla",
      "FirstName": "Adrienne",
      "Email": "amvaccarezza-isla@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Vafakos",
      "FirstName": "Katrina",
      "Email": "kavafakos@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Vail",
      "FirstName": "Jim",
      "Email": "jnvail@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Valentine",
      "FirstName": "Sarah",
      "Email": "svalentine1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Vallecillo",
      "FirstName": "Aida",
      "Email": "amluna@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "VanOverbeke",
      "FirstName": "Monica",
      "Email": "mvanoverbek@cps.edu",
      "Title": "Part-Time Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "VanOverbeke",
      "FirstName": "Ryan",
      "Email": "rvanoverbek@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Vargas",
      "FirstName": "Maria",
      "Email": "mavargas@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Vasquez",
      "FirstName": "Maria",
      "Email": "mavasquez1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Vasquez",
      "FirstName": "Ana",
      "Email": "alvazquez@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Vaughn",
      "FirstName": "Quilla",
      "Email": "qrvaughn@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Vazquez",
      "FirstName": "Yvette",
      "Email": "yvazquez5@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Vazquez",
      "FirstName": "Naomi",
      "Email": "navazquez@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Veal",
      "FirstName": "Whitney",
      "Email": "wdveal@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Vega",
      "FirstName": "Pablo",
      "Email": "pjvega1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Velazquez",
      "FirstName": "Eliot",
      "Email": "edvelazquez@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Velez",
      "FirstName": "Josefa",
      "Email": "jevelez@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Venegas",
      "FirstName": "Salvador",
      "Email": "svenegas@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Villalobos",
      "FirstName": "Megan",
      "Email": "mmshea@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Villanueva",
      "FirstName": "Johanna",
      "Email": "jcovarrubia17@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Villasenor",
      "FirstName": "Magdalena",
      "Email": "mmvillasenor@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Vincenty",
      "FirstName": "Keren",
      "Email": "kcvincenty@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Vinson",
      "FirstName": "Tammie",
      "Email": "tfvinson@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "viramontes",
      "FirstName": "marcelina",
      "Email": "mgviramontes@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Vitek",
      "FirstName": "Patricia",
      "Email": "plvitek@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Vitela",
      "FirstName": "Lorena",
      "Email": "lvitela@cps.edu",
      "Title": "Teacher Assistant Bilingual",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Viteri",
      "FirstName": "Patricia",
      "Email": "pcviteri@cps.edu",
      "Title": "School Clerk (Bilin Spanish)",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Vlk",
      "FirstName": "Kimberly",
      "Email": "kavlk@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Vogenthaler",
      "FirstName": "Jamie",
      "Email": "jnvogenthale1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wade",
      "FirstName": "Jacquelyn",
      "Email": "jwade@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wade",
      "FirstName": "Laniece",
      "Email": "lmwade@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wade-Bey",
      "FirstName": "Aisha",
      "Email": "amwade-bey@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wagner",
      "FirstName": "Patricia",
      "Email": "pmwagner@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Waite",
      "FirstName": "Kyla",
      "Email": "kwaite1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Waldron",
      "FirstName": "Anna",
      "Email": "afwaldron@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Walker",
      "FirstName": "Romanetha",
      "Email": "rlooper@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Walker",
      "FirstName": "Tracey",
      "Email": "tjwalker1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "WALKER",
      "FirstName": "ANGELA",
      "Email": "adrobinson@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wallace",
      "FirstName": "Stacie",
      "Email": "swallace13@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Waller",
      "FirstName": "Ashley",
      "Email": "akwaller@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Waller",
      "FirstName": "Maxine",
      "Email": "mwaller@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Walls",
      "FirstName": "Griselda",
      "Email": "gwalls@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Walls",
      "FirstName": "Jennifer",
      "Email": "jmwalls2@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Walls Brown",
      "FirstName": "Sabrina",
      "Email": "swalls@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Walls Kirk",
      "FirstName": "Kimberly",
      "Email": "kawalls@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Walsh",
      "FirstName": "LInda",
      "Email": "lkwalsh@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Walsh",
      "FirstName": "Siobhan",
      "Email": "slwalsh2@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Walsh",
      "FirstName": "Meagan",
      "Email": "mwalsh15@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Walsh",
      "FirstName": "Kathleen",
      "Email": "ktwalsh@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Walters",
      "FirstName": "Eunice",
      "Email": "ewalters@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Walton",
      "FirstName": "Mildred",
      "Email": "mowalton@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Walton",
      "FirstName": "Yolanda",
      "Email": "ymwalton1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Walton",
      "FirstName": "Cherise",
      "Email": "clwalton2@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Waltos",
      "FirstName": "Justyna",
      "Email": "jbwaltos@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wang",
      "FirstName": "Lillian",
      "Email": "lwang4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ward",
      "FirstName": "LaTonya",
      "Email": "llward@cps.edu",
      "Title": "Curriculum And Instruct Coach",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ward",
      "FirstName": "Dominique",
      "Email": "dward1@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Washington",
      "FirstName": "Sabrina",
      "Email": "swashington56@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Washington",
      "FirstName": "Lantanya",
      "Email": "lsmoore@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Washington",
      "FirstName": "Quentin",
      "Email": "qswashington@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Washington",
      "FirstName": "Cherry",
      "Email": "cwashington7@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Washington",
      "FirstName": "Shanita",
      "Email": "smwashington16@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Waters",
      "FirstName": "LaTanya",
      "Email": "lawaters@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Watkins",
      "FirstName": "Monique",
      "Email": "mwatkins6@cps.edu",
      "Title": "Youth Intervention Specialist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Watson",
      "FirstName": "Felicia",
      "Email": "frwatson@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Watson",
      "FirstName": "Toyia",
      "Email": "tmwatson@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Watts",
      "FirstName": "Valerie",
      "Email": "vmmcewen@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Watts",
      "FirstName": "Bessie",
      "Email": "bmwatts@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Weathers",
      "FirstName": "TaNita",
      "Email": "tmweathers@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Webb",
      "FirstName": "Raymond",
      "Email": "rwebb6@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wedderburn",
      "FirstName": "Colleen",
      "Email": "cawedderburn@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Weingardt",
      "FirstName": "Dana",
      "Email": "dlweingardt@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "weinstein",
      "FirstName": "claire",
      "Email": "cmweinstein@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Weisgerber",
      "FirstName": "Anne",
      "Email": "aweisgerber@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Welch",
      "FirstName": "Alexandria",
      "Email": "awelch7@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Welch-Shareef",
      "FirstName": "Caroll",
      "Email": "cwelch1@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wells",
      "FirstName": "Michelle",
      "Email": "mywells@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wells",
      "FirstName": "Rhonda",
      "Email": "rtwells@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wells",
      "FirstName": "Cassandra",
      "Email": "cwells16@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wells",
      "FirstName": "Tarji",
      "Email": "tvwells@cps.edu",
      "Title": "Teacher-Citywide",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "werbitsky",
      "FirstName": "christine",
      "Email": "cwerbitsky@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Werner",
      "FirstName": "Mary Beth",
      "Email": "mwerner@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "West",
      "FirstName": "Lakesha",
      "Email": "lwest11@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Westby",
      "FirstName": "HIALMA",
      "Email": "hlwestby@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wheat",
      "FirstName": "Delores",
      "Email": "dsseals1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "White",
      "FirstName": "Justin",
      "Email": "jwhite153@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "WHITE",
      "FirstName": "LARNCE",
      "Email": "lwhite1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "White",
      "FirstName": "Rhonda",
      "Email": "rmwhite@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "White",
      "FirstName": "Margaret",
      "Email": "mawhite21@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "White",
      "FirstName": "Remi",
      "Email": "rnwhite@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "White",
      "FirstName": "Virginia",
      "Email": "vswhite@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "White",
      "FirstName": "Lisa",
      "Email": "lcwhite@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Whited",
      "FirstName": "Eileen",
      "Email": "elwhited@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Whitehead",
      "FirstName": "Yolanda",
      "Email": "ywhitehead@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Whiteside",
      "FirstName": "Berna",
      "Email": "bdwhiteside@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Whitfield",
      "FirstName": "Latrice",
      "Email": "lwhitfield@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Whitfield",
      "FirstName": "Lyndsay",
      "Email": "lbwhitfield1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Whitlow",
      "FirstName": "Jacinta",
      "Email": "jpwhitlow@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Whittington",
      "FirstName": "Tiffany",
      "Email": "twhittingto1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Whittington",
      "FirstName": "Michele",
      "Email": "mawhittingto@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wiegelman",
      "FirstName": "Amy",
      "Email": "acwiegelman@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wilcher",
      "FirstName": "Martin",
      "Email": "mwilcher@cps.edu",
      "Title": "Community Relations Rep",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wildeboer",
      "FirstName": "Mark",
      "Email": "mwildeboer@cps.edu",
      "Title": "Physical Therapist",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Willett",
      "FirstName": "Sarah",
      "Email": "swglynn1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "Beatrice",
      "Email": "bwilliams7@cps.edu",
      "Title": "Cadre Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "Doris",
      "Email": "dewilliams1@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "Gabrielle",
      "Email": "gwilliams39@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "janice",
      "Email": "jwilliams5@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "Felicia",
      "Email": "fcwilliams@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "Kimberly",
      "Email": "kwilliams3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "WILLIAMS",
      "FirstName": "RACHISHA",
      "Email": "rmwilliams4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "Clara",
      "Email": "cmwilliams4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "Zakiya",
      "Email": "zpwilliams2@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "Donna",
      "Email": "drwilliams6@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "Takisha",
      "Email": "tswilliams32@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "Cristal",
      "Email": "cwilliams54@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "Samantha",
      "Email": "swilliams24@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Williams",
      "FirstName": "Brenda",
      "Email": "bdwilliams17@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Williams Bey",
      "FirstName": "Delia",
      "Email": "drwilliamsbe@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Willis",
      "FirstName": "Fallon",
      "Email": "flwillis@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Willis-Holmes",
      "FirstName": "Jeanette",
      "Email": "jwillis@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wilson",
      "FirstName": "Christina",
      "Email": "cmdeleon@cps.edu",
      "Title": "Cadre Substitute Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wilson",
      "FirstName": "Sinda",
      "Email": "swilson36@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wilson",
      "FirstName": "Latrice",
      "Email": "ldwilson2@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wilson",
      "FirstName": "Cordell",
      "Email": "cawilson14@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wilson-Wearring",
      "FirstName": "Tanneshia",
      "Email": "tskilgore@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "wimberly",
      "FirstName": "pamela",
      "Email": "pwimberly@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wimberly",
      "FirstName": "Cassandra",
      "Email": "cpwimberly@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wimberly",
      "FirstName": "Nicole",
      "Email": "nowimberly@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Winans",
      "FirstName": "Lisa",
      "Email": "lmroraback@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Windom",
      "FirstName": "Shaquita",
      "Email": "swindom@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Winslow",
      "FirstName": "Eric",
      "Email": "elwinslow1@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Winston",
      "FirstName": "Lynneire",
      "Email": "ldwinston@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Winters",
      "FirstName": "Tracie",
      "Email": "tmwinters3@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wiseman",
      "FirstName": "Amy",
      "Email": "aburger@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wisniewski",
      "FirstName": "Renee",
      "Email": "rlwisniewski@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Withers",
      "FirstName": "Steven",
      "Email": "swithers@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Witherspoon",
      "FirstName": "Jonica",
      "Email": "jswitherspoo@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Witt",
      "FirstName": "Jessica",
      "Email": "jwitt@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wiviott",
      "FirstName": "Alexa",
      "Email": "awiviott1@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wiza",
      "FirstName": "Shannon",
      "Email": "smwiza@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Woehling",
      "FirstName": "Amy T.",
      "Email": "awoehling@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wolk",
      "FirstName": "Michael",
      "Email": "mjwolk@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wong",
      "FirstName": "Sheila",
      "Email": "swong@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wong",
      "FirstName": "Jasmine",
      "Email": "jwong25@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wonzer",
      "FirstName": "Sonja",
      "Email": "smwonzer@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Woodard",
      "FirstName": "April",
      "Email": "awoodard4@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Woodfork",
      "FirstName": "Maria",
      "Email": "mawoodfork@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Woodland",
      "FirstName": "La Shaun",
      "Email": "lgwoodland@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Woods",
      "FirstName": "Kanneese",
      "Email": "kwoods39@cps.edu",
      "Title": "Prov Cert Substitute Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Woods",
      "FirstName": "Jill",
      "Email": "jmwoods3@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Woods",
      "FirstName": "Kim",
      "Email": "kswoods@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Woods-Gibson",
      "FirstName": "Kalynda",
      "Email": "kjwoods@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "woodward",
      "FirstName": "kristine",
      "Email": "kmwoodward@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wooten",
      "FirstName": "Theresa",
      "Email": "tebarletto1@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wright",
      "FirstName": "Monica",
      "Email": "mwright3@cps.edu",
      "Title": "Bilingual Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "WRight",
      "FirstName": "Rabashia",
      "Email": "rwright18@cps.edu",
      "Title": "School Clerk",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wu",
      "FirstName": "Stefanie",
      "Email": "sawu@cps.edu",
      "Title": "Case Manager",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Wu",
      "FirstName": "Yiwen",
      "Email": "ykwu@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "wyatt",
      "FirstName": "PAula",
      "Email": "plwyatt@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Wyse",
      "FirstName": "Alex",
      "Email": "awyse@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Y",
      "FirstName": "Y",
      "Email": "vmwillis2@cps.edu",
      "Title": "Instructor Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Yackee",
      "FirstName": "Catherine",
      "Email": "cmyackee@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Yacobucci",
      "FirstName": "Sheila",
      "Email": "syacobucci@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "yahn",
      "FirstName": "Christine",
      "Email": "cayahn@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Yarber-Porter",
      "FirstName": "Toni",
      "Email": "tmyarber-porter@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ybarra",
      "FirstName": "Gaddys",
      "Email": "gdybarra@cps.edu",
      "Title": "Provisional Cadre",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Yesensky",
      "FirstName": "Justin",
      "Email": "jmyesensky@cps.edu",
      "Title": "International Bacl Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Yoerger",
      "FirstName": "Gabrielle",
      "Email": "gamyx@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "York",
      "FirstName": "Chelsie",
      "Email": "ckyork@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Younan",
      "FirstName": "Tabitha",
      "Email": "tkyounan@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Young",
      "FirstName": "Katherine",
      "Email": "kayoung3@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Young",
      "FirstName": "LaVerne",
      "Email": "lvyoung@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Young",
      "FirstName": "Paula",
      "Email": "pjyoung@cps.edu",
      "Title": "School Clerk Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Young",
      "FirstName": "Jacquelyn",
      "Email": "jlyoung1@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Yurick",
      "FirstName": "Kayla",
      "Email": "kyurick1@cps.edu",
      "Title": "School Social Worker",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Zachar",
      "FirstName": "Barb",
      "Email": "bjzachar@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Zackowitz",
      "FirstName": "Samantha",
      "Email": "slzackowitz@cps.edu",
      "Title": "School Nurse",
      "Hopkins": "Form Received",
      "HIPPA": "NOT Complete",
      "OSHW": "NOT Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Zapata",
      "FirstName": "Rocio",
      "Email": "rezapata@cps.edu",
      "Title": "School Counselor",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Zaper",
      "FirstName": "Jeanne",
      "Email": "jrzaper@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "NOT Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Zapien",
      "FirstName": "Gabriela",
      "Email": "gzapien@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Zaranko",
      "FirstName": "Zoe",
      "Email": "zzaranko@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Zayed",
      "FirstName": "Mazzouza",
      "Email": "mzayed@cps.edu",
      "Title": "Special Education Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Zerega",
      "FirstName": "Elise",
      "Email": "ezerega@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Zermeno",
      "FirstName": "Anthony",
      "Email": "azermeno6@cps.edu",
      "Title": "Teacher Assistant",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Zervos",
      "FirstName": "Emmanuel",
      "Email": "egzervos@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Zhu",
      "FirstName": "Jerry",
      "Email": "jzhu14@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Ziolo",
      "FirstName": "Daisy",
      "Email": "dziolo@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Ziolo",
      "FirstName": "Kevin",
      "Email": "kziolo@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    },
    {
      "LastName": "Zoccoli",
      "FirstName": "Lisa",
      "Email": "lmzoccoli@cps.edu",
      "Title": "Regular Teacher",
      "Hopkins": "Form not submitted",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "NOT Complete"
    },
    {
      "LastName": "Zughoul",
      "FirstName": "Doris",
      "Email": "dczughoul@cps.edu",
      "Title": "Day-To-Day Sub Teacher",
      "Hopkins": "Form Received",
      "HIPPA": "Complete",
      "OSHW": "Complete",
      "All": "Complete"
    }
  ];
return data;
}
