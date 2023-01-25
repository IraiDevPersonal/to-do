import { inter } from './fonts'
import './globals.css'

function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="es" className={inter.variable}>
         <head>
            <title>To-do</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         </head>
         <body>{children}</body>
      </html>
   )
}

export default RootLayout
