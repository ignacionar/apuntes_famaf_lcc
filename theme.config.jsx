import { useRouter } from 'next/router'

export default {
  faviconGlyph: "🇫",
  logo: <span>Apuntes - FAMAF | LCC</span>,
  toc: {
    title: "En esta página:",
    backToTop: false,
  },
  project: {
    link: 'https://github.com/ignacionar/apuntes_famaf_lcc'
  },
  search: {
    placeholder: "Buscar en la documentación...",
    loading: "Cargando...",
  },
  editLink: {
    content: <p onClick={(e) => {
      e.preventDefault()
      window.scroll(0, 0)
    }}
    >Volver Arriba ↑</p>
  },
  feedback: {
    content: "Tus sugerencias son bienvenidas →",
    useLink: () => "https://github.com/ignacionar/apuntes_famaf_lcc/issues/new"
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: false
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Claro',
        dark: 'Oscuro',
        system: 'Sistema'
      }
    }
  },
  gitTimestamp: function GitTimestamp({ timestamp }) {
    const { locale = 'es-ES' } = useRouter()
    return (
      <>
        Última vez actualizado el{' '}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </time>
      </>
    )
  },
  scrollToTop: {
    content: "Volver arriba",
  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{' '} 
        <a href="https://nextra.site" target="_blank">
          Proyecto realizado con Nextra
        </a>
        
      </span>
    )
  }
}
