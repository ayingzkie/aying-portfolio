export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
  };

  /**
   * @type {import('next').NextConfig}
   */
  const devConfig = {
    reactStrictMode: true,
  };

  if (phase === "phase-development-server") {
    return devConfig;
  }

  return nextConfig;
};
