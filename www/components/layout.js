import Head from 'next/head'

export default ({children, title = 'SOOD'}) => (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        <link
            href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
            rel="stylesheet"></link>
        <link rel="shortcut icon" type="image/png" href="/static/favicon.png"/>
      </Head>
      {children}

      <style jsx global>{`
      @font-face {
        src: url('/static/fonts/adam-pro.otf');
        font-family: adam
      }
      body, html { 
        padding: 0;
        margin: 0;
        font-family: 'adam', sans-serif;
        background-color: gray;
      }
    `}</style>
    </div>

)
