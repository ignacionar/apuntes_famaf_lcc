import nextra from 'nextra'

const withNextra = nextra({
  whiteListTagsStyling: ['table', 'thead', 'tbody', 'tr', 'th', 'td'],
  latex: {
    renderer: 'mathjax',
    // options: {
    //   config: {
    //     tex: {
    //       macros: {
    //         RR: '\\mathbb{R}',
    //       }
    //     }
    //   }
    // }
  },
})
 
export default withNextra({
  reactStrictMode: false,
})