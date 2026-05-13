
import React, { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Geometry, Program, Mesh } from 'ogl';

const CosmosParticles = ({
    particleCount = 1000,
    speed = 0.5,
    particleColors = ['#ffffff'], // Changed from particleColor to particleColors array
    className
}) => {
    const containerRef = useRef(null);

    const hexToRgb = (hex) => {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16) / 255,
            parseInt(result[2], 16) / 255,
            parseInt(result[3], 16) / 255
        ] : [1, 1, 1];
    };

    useEffect(() => {
        if (!containerRef.current) return;

        const renderer = new Renderer({
            depth: false,
            alpha: true,
            dpr: Math.min(window.devicePixelRatio, 2)
        });
        const gl = renderer.gl;

        // Position fixed to ensure it covers viewport and stays there
        gl.canvas.style.position = 'fixed';
        gl.canvas.style.top = '0';
        gl.canvas.style.left = '0';
        gl.canvas.style.width = '100%';
        gl.canvas.style.height = '100%';
        gl.canvas.style.pointerEvents = 'none'; // Click-through
        gl.canvas.style.zIndex = '0'; // Ensure it's not behind body background (-1)

        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(gl.canvas);

        const camera = new Camera(gl, { fov: 15 });
        camera.position.set(0, 0, 15);

        const resize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            if (camera) camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
        };

        window.addEventListener('resize', resize, false);
        resize();

        const scene = new Transform();

        const count = particleCount;
        const positions = new Float32Array(count * 3);
        const randoms = new Float32Array(count * 4);
        const colors = new Float32Array(count * 3);

        // Pre-calculate RGB values for all provided colors
        const rgbColors = particleColors.map(hexToRgb);

        for (let i = 0; i < count; i++) {
            // Gaussian/Spherical distribution
            const r = Math.random() * 10;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);

            randoms[i * 4] = Math.random();
            randoms[i * 4 + 1] = Math.random();
            randoms[i * 4 + 2] = Math.random(); // Phase
            randoms[i * 4 + 3] = Math.random(); // Speed var

            // Pick a random color from the array
            const randomColorIndex = Math.floor(Math.random() * rgbColors.length);
            const rgb = rgbColors[randomColorIndex];

            colors[i * 3] = rgb[0];
            colors[i * 3 + 1] = rgb[1];
            colors[i * 3 + 2] = rgb[2];
        }

        const geometry = new Geometry(gl, {
            position: { size: 3, data: positions },
            random: { size: 4, data: randoms },
            color: { size: 3, data: colors },
        });

        const program = new Program(gl, {
            vertex: `
        attribute vec3 position;
        attribute vec4 random;
        attribute vec3 color;
        
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        
        varying vec3 vColor;
        varying float vAlpha;

void main() {
    vColor = color;

          // Move particles gently
          vec3 pos = position;
          // noise based on time and random
          float offset = sin(uTime * 0.5 + random.z * 10.0);
    pos.y += offset * 0.1;
    pos.x += cos(uTime * 0.3 + random.w * 10.0) * 0.1;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    // Simple size attenuation
    gl_PointSize = (2.0 + random.x * 2.0) * (10.0 / gl_Position.w);

    // Twinkle alpha
    vAlpha = 0.5 + 0.5 * sin(uTime * 2.0 + random.y * 20.0);
}
`,
            fragment: `
        precision highp float;
        varying vec3 vColor;
        varying float vAlpha;

void main() {
          // Circle shape
          vec2 coord = gl_PointCoord - vec2(0.5);
    if (length(coord) > 0.5) discard;

    gl_FragColor = vec4(vColor, vAlpha);
}
`,
            uniforms: {
                uTime: { value: 0 },
            },
            transparent: true,
            depthTest: false,
        });

        const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });
        particles.setParent(scene);

        let frameId;
        const update = (t) => {
            frameId = requestAnimationFrame(update);
            const time = t * 0.001 * speed;
            program.uniforms.uTime.value = time;

            // Rotate scene slowly
            scene.rotation.y = time * 0.1;
            scene.rotation.x = time * 0.05;

            renderer.render({ scene, camera });
        };

        frameId = requestAnimationFrame(update);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(frameId);
        };
    }, [particleCount, speed, particleColors]);

    return <div ref={containerRef} className={className} />;
};

export default CosmosParticles;

