import nextra from 'nextra'
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: "/JellyCAD",
  images: {
    unoptimized: true // mandatory, otherwise won't export
  }
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
}
const withNextra = nextra({
  // ... other Nextra config options
  contentDirBasePath: '/JellyCAD'
})
 
export default withNextra(nextConfig)