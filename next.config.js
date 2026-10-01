import nextra from 'nextra'

const withNextra = nextra({
  whiteListTagsStyling: ['table', 'thead', 'tbody', 'tr', 'th', 'td'],
  latex: {
    renderer: 'katex',
    options: {
      macros: {
        '\\NN': '\\mathbb{N}',
        '\\RR': '\\mathbb{R}',
        '\\CC': '\\mathbb{C}',
        '\\QQ': `\\mathbb{Q}`,
        '\\KK': '\\mathbb{K}',
        '\\ZZ': '\\mathbb{Z}',
        '\\bfv': '\\mathbf{v}',
        '\\bfw': '\\mathbf{w}',
        '\\proc': '\\mathbf{proc}',
        '\\bfend': '\\mathbf{end}',
        '\\out': '\\mathbf{out}',
        '\\bfin': '\\mathbf{in}',
        '\\inout': '\\mathbf{in/out}',
        '\\ops(': '\\textnormal{ops}',
        '\\bft': '\\mathbf{T}',
        '\\if': '\\mathbf{if}',
        '\\fi': '\\mathbf{fi}',
        '\\var': '\\mathbf{var}',
        '\\else': '\\mathbf{else}',
        '\\then': '\\mathbf{then}',
        '\\fun': '\\mathbf{fun}',
        '\\ret': '\\mathbf{ret}',
        '\\of': '\\mathbf{of}',
        '\\array': '\\mathbf{array}',
        '\\skip': '\\mathbf{skip}',
        '\\while': '\\mathbf{while}',
        '\\do': '\\mathbf{do}',
        '\\od': '\\mathbf{od}',
        '\\for': '\\mathbf{for}',
        '\\too': '\\mathbf{to}',
        '\\downto': '\\mathbf{downto}',
        '\\bool': '\\mathbf{bool}',
        '\\intt': '\\mathbf{int}',
        '\\float': '\\mathbf{float}',
        '\\nat': '\\mathbf{nat}',
        '\\real': '\\mathbf{real}',
        '\\char': '\\mathbf{char}',
        '\\string': '\\mathbf{string}',
        '\\pointer': '\\mathbf{pointer}',
        '\\type': '\\mathbf{type}',
        '\\enumerate': '\\mathbf{enumerate}',
        '\\tuple': '\\mathbf{tuple}',
        '\\bigO': '\\mathcal{O}',
        '\\alloc': '\\mathbf{alloc}',
        '\\free': '\\mathbf{free}',
        '\\null': '\\mathbf{null}',
        '\\where': '\\mathbf{where}',
        '\\spec': '\\mathbf{spec}',
        '\\cons': '\\mathbf{constructors}',
        '\\oprts': '\\mathbf{operations}',
        '\\destroy': '\\mathbf{destroy}',
        '\\impt': '\\mathbf{implement}',
        '\\mcalx': '\\mathcal{X}'
      }
    }
  },
})

const mathjaxMacros = Object.fromEntries(
  Object.entries(macros)
    .map(([k, v]) => [k.slice(1), v])
    .filter(([k]) => /^[a-zA-Z]+$/.test(k))
)

const useMathjax = process.env.LATEX_RENDERER === 'mathjax'

const latex = useMathjax
  ? { renderer: 'mathjax', options: { config: { tex: { macros: mathjaxMacros } } } }
  : { renderer: 'katex', options: { macros } }

const withNextra = nextra({
  whiteListTagsStyling: ['table', 'thead', 'tbody', 'tr', 'th', 'td'],
  latex,
})

export default withNextra({
  images: { unoptimized: true },
  experimental: { webpackMemoryOptimizations: true },
})
