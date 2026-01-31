// AboutSection.jsx - NEON COLORS WORKING VERSION
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';

function Model3D() {
  const { scene } = useGLTF('/t.glb');
  scene.position.set(0, -0.6, 0);
  scene.rotation.set(0, Math.PI, 0);
  const scale = 0.6; 
  return <primitive object={scene} scale={scale} />;
}

function FloatingModel() {
  const group = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current.position.x = Math.sin(t * 0.5) * 0.4;
    group.current.position.y = Math.sin(t * 0.9) * 0.04 - 0.6;
    group.current.rotation.y = t * 0.3;
  });
  return (
    <group ref={group}>
      <Model3D />
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="text-cyan-400 text-sm font-medium tracking-widest animate-pulse uppercase drop-shadow-lg">
        Syncing Systems...
      </div>
    </Html>
  );
}

export default function AboutSection() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white flex items-center justify-center px-6 py-16 overflow-hidden" id='about'>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/15 blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.1fr_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
        
        {/* 🔥 NEON CONTENT - WORKING COLORS */}
        <div className="space-y-7">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] animate-pulse">
            The Digital Frontier
          </p>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
            {/* <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
              Mind Bridge Tech
            </span> */}
            <span className="block text-white mt-1 drop-shadow-xl">
              ARCHITECTING INNOVATION
            </span>
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl drop-shadow-lg">
            Mind Bridge Tech is a premium digital agency dedicated to elevating brands through cutting-edge Technology. 
            We transform conventional digital footprints into high-performance, immersive environments.
          </p>

          <div className="space-y-4">
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Whether you require a <span className="text-cyan-400 font-bold border-b-2 border-cyan-400/50 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">Next-Gen 3D Website</span>, 
              impactful <span className="text-purple-400 font-bold border-b-2 border-purple-400/50 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">Social Branding</span>, 
              or a robust <span className="text-blue-400 font-bold border-b-2 border-blue-400/50 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">Management Ecosystem</span>:
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-bold tracking-wide">
              <li className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-all duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]">
                ○ Interactive 3D Webscapes
              </li>
              <li className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-all duration-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]">
                ○ Strategic Brand Identity
              </li>
              <li className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-all duration-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">
                ○ Enterprise Automation
              </li>
              <li className="flex items-center gap-3 text-pink-400 hover:text-pink-300 transition-all duration-300 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.7)]">
                ○ Scalable E-Commerce Platforms
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="relative group px-8 py-3 overflow-hidden rounded-full bg-black/30 border-2 border-cyan-400/70 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:border-cyan-400/100">
              <span className="relative z-10 text-sm font-bold uppercase tracking-widest text-cyan-400 group-hover:text-cyan-300 transition-all duration-300">
                Contact Our Studio
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>

            <div className="hidden md:flex flex-col text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold drop-shadow-lg">
              <span>Strategy · Design</span>
              <span>Development · Support</span>
            </div>
          </div>
        </div>

        {/* 3D SAME */}
        <div className="relative w-full h-[400px] lg:h-[500px]">
          <Canvas
            camera={{ position: [4.5, 3.2, 7], fov: 30 }}
            className="w-full h-full"
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-10, -5, -10]} color="#a855f7" intensity={1} />
            
            <Suspense fallback={<Loader />}>
              <FloatingModel />
              <Environment preset="city" />
            </Suspense>

            <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
          </Canvas>

          <div className="absolute bottom-0 right-0 p-4 border-r border-b border-purple-500/30 w-16 h-16 pointer-events-none"></div>
          <div className="absolute top-0 left-0 p-4 border-l border-t border-cyan-400/30 w-16 h-16 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
