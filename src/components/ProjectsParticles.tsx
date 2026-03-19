'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ProjectsParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="projects-particles"
      className="absolute inset-0 w-full h-full"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        background: {
          color: { value: 'transparent' },
        },
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
            },
          },
          color: {
            value: ['#a855f7', '#7c3aed', '#6366f1', '#3b82f6', '#06b6d4', '#d946ef', '#8b5cf6'],
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: {
              enable: true,
              speed: 0.8,
              sync: false,
            },
          },
          size: {
            value: { min: 0.5, max: 3 },
            animation: {
              enable: true,
              speed: 1.5,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: { min: 0.2, max: 0.8 },
            direction: 'none' as const,
            random: true,
            straight: false,
            outModes: {
              default: 'out' as const,
            },
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
          },
          links: {
            enable: false,
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.03,
              opacity: 1,
              color: {
                value: ['#a855f7', '#06b6d4', '#d946ef'],
              },
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.2,
                color: '#a855f7',
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
