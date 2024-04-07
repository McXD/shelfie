import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Book3D = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Book geometry
        const bookGeometry = new THREE.BoxGeometry(1, 2, 0.1); // Width, height, and thickness of the book
        const bookMaterial = new THREE.MeshBasicMaterial({ color: 0x8A2BE2 }); // Purple book
        const book = new THREE.Mesh(bookGeometry, bookMaterial);
        scene.add(book);

        // Camera position
        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            book.rotation.y += 0.01; // Rotate the book for demonstration
            renderer.render(scene, camera);
        };

        animate();

        // Clean up
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default Book3D;
