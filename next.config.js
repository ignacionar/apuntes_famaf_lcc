import remarkMdxDisableExplicitJsx from 'remark-mdx-disable-explicit-jsx'
import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  mdxOptions: {
    remarkPlugins: [
      [
        remarkMdxDisableExplicitJsx,
        { whiteList: ['table', 'thead', 'tbody', 'tr', 'th', 'td'] }
      ]
    ]
  }
})
 
export default withNextra()