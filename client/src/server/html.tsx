import React from 'react'

type HtmlProps = {
  content: string
  state: string
  config: { [key: string]: string | undefined }
}

const Html = ({ content, state, config }: HtmlProps) => (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='apple-touch-icon' sizes='76x76' href='/assets/apple-touch-icon.png' />
      <link rel='icon' type='image/x-icon' href='/assets/favicon.ico' />
      <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon-16x16.png' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sometype+Mono:ital,wght@0,400..700;1,400..700&display=swap'
        rel='stylesheet'
      />
      <title>Super App 7000</title>
    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: content }}></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
        }}
      />
      <script
        // Pass in app variables to web client here
        dangerouslySetInnerHTML={{ __html: `window.__WEB_ENV__=${JSON.stringify(config)}` }}
      />
      <script src='/bundle.js'></script>
    </body>
  </html>
)

export default Html
