import nextra from 'nextra'

const withNextra = nextra({
  whiteListTagsStyling: ['table', 'thead', 'tbody', 'tr', 'th', 'td'],
  latex: {
    renderer: 'mathjax',
    options: {
      config: {
        tex: {
          macros: {
            NN: '\\mathbb{N}',
            RR: '\\mathbb{R}',
            CC: '\\mathbb{C}',
            KK: '\\mathbb{K}',
            bfv: '\\mathbf{v}',
            bfw: '\\mathbf{w}',
            proc: '\\mathbf{proc}',
            bfend: '\\mathbf{end}',
            out: '\\mathbf{out}',
            bfin: '\\mathbf{in}',
            inout: '\\mathbf{in/out}',
            if: '\\mathbf{if}',
            fi: '\\mathbf{fi}',
            var: '\\mathbf{var}',
            else: '\\mathbf{else}',
            then: '\\mathbf{then}',
            fun: '\\mathbf{fun}',
            ret: '\\mathbf{ret}',
            of: '\\mathbf{of}',
            array: '\\mathbf{array}',
            skip: '\\mathbf{skip}',
            while: '\\mathbf{while}',
            do: '\\mathbf{do}',
            od: '\\mathbf{od}',
            for: '\\mathbf{for}',
            too: '\\mathbf{to}',
            downto: '\\mathbf{downto}',
            bool: '\\mathbf{bool}',
            int: '\\mathbf{int}',
            nat: '\\mathbf{nat}',
            real: '\\mathbf{real}',
            char: '\\mathbf{char}',
            string: '\\mathbf{string}',
            pointer: '\\mathbf{pointer}',
            bigO: '\\mathcal{O}',
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