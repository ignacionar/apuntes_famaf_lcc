/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const { viewport } = Head

export default async function RootLayout({ children }) {
  const lastUpdatedDate = new Date();
  const formattedDate = `${lastUpdatedDate.getDate()} de ${lastUpdatedDate.toLocaleString('es-ES', { month: 'long' })} de ${lastUpdatedDate.getFullYear()}`;

  const footer = (
    <Footer>
      <span>
        MIT {new Date().getFullYear()} ©{' '} 
        Proyecto realizado con &nbsp; 
        <u>
          <a href="https://nextra.site" target="_blank">
            Nextra
          </a>
        </u>
      </span>
    </Footer>
  )

  const search = (
    <Search 
      emptyResult={"No se encontraron resultados."}
      loading={"Cargando..."}
      errorText={"Error al cargar."}
      placeholder={"Buscar en la documentación..."}
    />
  )
  
  const navbar = (
    <Navbar
      logo={<span>Apuntes - FAMAF | LCC</span>}
      projectLink={'https://github.com/ignacionar/apuntes_famaf_lcc'}
    />
  )
  return (
    <html lang="es" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          docsRepositoryBase={"https://github.com/ignacionar/apuntes_famaf_lcc"}
          navbar={navbar}
          footer={footer}
          editLink={null}
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: false }}
          feedback={{ content: null }}
          lastUpdated={<span>Última vez actualizado el {formattedDate}</span>}          
          pageMap={await getPageMap()}
          search={search}
          toc={{ backToTop: "Volver hacia arriba", title: "En esta página:", }}
          themeSwitch={{ light: 'Claro', dark: "Oscuro", system: "Sistema" }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}