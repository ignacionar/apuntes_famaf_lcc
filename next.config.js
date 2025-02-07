import nextra from 'nextra'

const withNextra = nextra({
  whiteListTagsStyling: ['table', 'thead', 'tbody', 'tr', 'th', 'td'],
  latex: {
    renderer: 'mathjax',
    options: {
      config: {
        tex: {
          macros: {
            RR: '\\mathbb{R}',
            CC: '\\mathbb{C}',
            KK: '\\mathbb{K}',
            bfv: '\\mathbf{v}',
            bfw: '\\mathbf{w}',
            mcalx: '\\mathcal{X}'
          }
        }
      }
    }
  },
})
 
export default withNextra({
  reactStrictMode: false,
})