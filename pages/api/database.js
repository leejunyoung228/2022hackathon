var admin = require("firebase-admin");
const serviceAccount = {
  type: "service_account",
  project_id: "hackathon-e7b0e",
  private_key_id: "d4d0b6042b04ab567d169728254664c21169d674",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7e7oVh3AYzc0A\neZC2KzMaUpC7sSufmw/70zwa2HxMTIU84ktDxBGFzEc287/5/7CQwniqpQV2EJL1\nuFC7GGmcWTgt4TDUXSHD43eJwZ7gA1I42IZhdHbLOkfRGFrUhGW+2YWTvzVABaRI\nddDyThfP/gt8qoXOcNk4Pszm8vFJQCqzzw6Xlic2vWzP7s0IgDemdAjOn2nkoPXb\nIgVnhQR+/NoxnHqDrd7CdB6UsBjZcaZgWSjh7XvzgTVyHa/jpm40YI+Mj6z2kgSU\n0/+/gyrueC7Td4IfUPTk3wBNHempUkwkeL+XvCPahb6NyPmSZ/vWrcdrgkJHqDSw\nHp8lkhGvAgMBAAECggEAIno6WkMx5h3SmUfByP5gw3Jzk1CdiRhm9BSAdR9inFVm\nGzAyTx/7aPOMFRr2Lu9KdRSORDNcsb2SiQWAMyfmJA50OluzMxp9Xxyxmu+0W9XA\nhRusereEMRNiqZ0k9vfyDgrKecUr8b4X3AtuhWC/GEzLp/1j5fbyu1kxLTd4D9Qf\n90GRHQXvJPsMHde/PNEOQ9SSorsNjOUMS5VlRl8gRwN87duvQZUAorzMynz0ndhx\n5+tO6FHWr5IA7VpGI5oSXHq/V5t/2Lj+FnrP4agEtEC16LGYVhwo8FJgVTOIfsIw\n/UXMoB3WxNf7i2qYDWqbMeAw/owpdlWxvuxQjGglwQKBgQD0YGbEZRDv7dI5h8RW\n51SFUE05Rs248iwXXZIhQ3dQF8bp1VmFF+PziW4PlFOFMQQSXhqiXVLvzMGdU5NO\nMnUSr2QXxDRKZlF948UMv0EdfGS9VyO47qbaFItRzvXpfw+gJFAv2CA47LpEpGbg\nxQ+ImwkWyWPFdo6XshUsebdiiQKBgQDEZpOy/UR4DSRGClBq/LbjmPV6fsblCCcE\nCBq0vDe0yFSyj+hG9e/EJPD/TEiLRZdNI91Zqg63SKKGi5FcC2vbVnyZYPqfDdAO\nu2ewCdx4EjSIprxFalhjcuE4OvOgRpTsamP/LpstOsy+EQQ4v7HSCznpq/NTNz7/\nB2ydDbgkdwKBgQCN0oyRmd3UgH6qqKJHlQU2QT4v6Wlm1hTEkqdF6rOJpeLovcqw\nNQczxSQ8omY+PA4S4s4uQF7rkDclKOWqUhojd+ps6I84Rl0w5EjtdulBRXnpcHLo\n1oe6tIWOOr/4fKcC11A6FAHPR4NqZsbV10eGjgMeWE4wwPdMDiu/nfvRkQKBgHak\nmLjZspDrL2x4MphOzZS0BCbZiwE0aY1P8AIaaXR2SGQN9v1W+F5/Cm7PAEvR4FKj\nRcYyqu0hnby1dzwpUiCQIHjvUrbeuz8LCtoXOu314XJjdvxf/8Ej1tYHFsFNog0n\nP/0ZhHhQOvregLRfaOZADd4RF86/Yvjg3UYK0aCFAoGAFhn+hpu3fTHEfyJFCO/S\nGmK0ctj/f70Ld3JFn6//QeRe3pyiQkOZDbosaBWhMS6121u5ioEDCUzb92ABS6GC\nW9RNt8xHykI3MPZBDVQlwooXSRU1N7TUdYNC9NrgesQ0Kuku9UuiO8pLAwQ/6CO3\nPcI0CN1Ist4TIW0g96uiJgc=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-9a5a5@hackathon-e7b0e.iam.gserviceaccount.com",
  client_id: "117563752739070245446",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9a5a5%40hackathon-e7b0e.iam.gserviceaccount.com",
};
const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hackathon-e7b0e-default-rtdb.firebaseio.com",
};
if (!admin.apps.length) {
  admin.initializeApp(firebaseConfig);
}
export default async function handler(req, res) {
  const database = admin.database();
  let sensor = database.ref("sensor");
  let data = await sensor.get();
  console.info(data);
  res.json(data);
}
