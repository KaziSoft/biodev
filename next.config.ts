import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    domains: [ 'images.ctfassets.net', 'res.cloudinary.com'],
    unoptimized: true,
  },
  
  eslint:{
    ignoreDuringBuilds:true,
  },
};

export default nextConfig;
