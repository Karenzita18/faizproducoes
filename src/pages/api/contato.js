const nodemailer = require('nodemailer');

// Função para enviar e-mail
const enviarEmail = async (dadosFormulario, destinatario, assunto, mensagem) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
  port: 587,
  secure: false, // TLS
  auth: {
    user: 'karensouza8@hotmail.com',
    pass: '35153728ka',
  },
  });

  const emailOptions = {
    from: '"Formulario Contato Toalheiro Santa Bárbara" <karenstudy17@gmail.com>',
    to: destinatario,
    replyTo: dadosFormulario.email,
    subject: assunto,
    text: mensagem,
    html: mensagem,
  };

  try {
    const info = await transporter.sendMail(emailOptions);
    console.log('E-mail enviado: %s', info.messageId);
  } catch (erro) {
    console.error('Erro ao enviar e-mail: ', erro);
  }
};

// Função principal para lidar com a requisição HTTP
export default function sendEmail(req, res) {
  console.log("aaaaaaaaaaaaaaaaaaaa");
  if (req.method !== 'POST') {
    console.log('not allowed post');
    res.status(405).json({ name: 'Method Not Allowed' });
    return;
  }

  const requiredFields = [
    'nome',
    'telefone',
    'email',
    'empresa',
    'mensagem'
  ];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      console.log('not allowed field')
      return res.status(404).json({ name: 'Bad Request' });
    }
  }

  const allowedOrigins = [
    'http://localhost:3001',
    'http://localhost:3001/',

  ];

  const origin = req.headers.origin;
  console.log(origin);
  if (!origin || !allowedOrigins.includes(origin)) {
    console.log('not allowed origin');
    res.status(401).json({ name: 'Unauthorized' });
    return;
  }

  // Enviar e-mail para o destinatário principal
  enviarEmail(
    req.body,
    'karenstudy17@gmail.com',
    'Formulário de contato',
    `
    <html lang="pt-BR">
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Formulário de contato</title>
        <meta name="description" content="Formulário de contato">
        <style type="text/css">
            a:hover {text-decoration: underline !important;}
        </style>
    </head>
    
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
        <!--100% body table-->
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700%7COpen+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
            <tr>
                <td>
                    <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                        align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="height:100px;">&nbsp;</td>
                        </tr>
                        
                        <tr>
                            <td>
                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                    style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0 35px;">
                                            <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                            Um cliente deseja entrar em contato!</h1>
                                            <span
                                                style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                            
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">Nome: ${req.body.nome}</p>
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">Telefone: ${req.body.telefone}</p>
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">Email: ${req.body.email}</p>
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">Empresa: ${req.body.empresa}</p>
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">Mensagem: ${req.body.mensagem}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        <tr>
                            <td style="height:100px;">&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <!--/100% body table-->
    </body>
    
    </html>
    `
  );

  // Enviar e-mail para o cliente
  enviarEmail(
    req.body,
    req.body.email,
    'Agradecemos pelo contato',
    `
      <html lang="pt-BR">
      <head>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <title>Formulário de contato</title>
          <meta name="description" content="Formulário de contato">
          <style type="text/css">
              a:hover {text-decoration: underline !important;}
          </style>
      </head>
      
      <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
          <!--100% body table-->
          <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
              style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700%7COpen+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
              <tr>
                  <td>
                      <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                          align="center" cellpadding="0" cellspacing="0">
                          <tr>
                              <td style="height:100px;">&nbsp;</td>
                          </tr>
                          
                          <tr>
                              <td>
                                  <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                      style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                      <tr>
                                          <td style="height:40px;">&nbsp;</td>
                                      </tr>
                                      <tr>
                                          <td style="padding:0 35px;">
                                              <h1 style="color:#044E78; font-weight:500; margin:0;font-size:24px;font-family:'Rubik',sans-serif;">
                                                  Agradecemos o seu contato!
                                              </h1>
                                              <h1 style="color:#044E78; font-weight:500; margin:0;font-size:20px;font-family:'Rubik',sans-serif;">
                                                  Em breve retornaremos.
                                              </h1>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="height:40px;">&nbsp;</td>
                                      </tr>
                                  </table>
                              </td>
                          <tr>
                              <td style="height:100px;">&nbsp;</td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
          <!--/100% body table-->
      </body>
      
      </html>
    `
  );

  res.status(200).json({ message: 'E-mails enviados com sucesso.' });
}
