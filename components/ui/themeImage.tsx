import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type ThemedImageProps = {
    dark: string;
    light: string;
    width: number;
    height: number;
    alt: string;
};

export default function ThemedImage({ dark, light, width, height, alt }: ThemedImageProps) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check if the 'dark' class is present on the body tag
        const darkModeActive = document.body.classList.contains('dark');
        setDarkMode(darkModeActive);

        // Optional: Add an event listener to listen for class changes
        // This is useful if your application allows toggling the theme without a page reload
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    const darkModeActive = document.body.classList.contains('dark');
                    setDarkMode(darkModeActive);
                }
            });
        });

        observer.observe(document.body, { attributes: true });

        // Clean up the observer on component unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div>
            {darkMode ? (
                <Image src={dark} height={height} width={width} alt={alt}/>
            ) : (
                <Image src={light} height={height} width={width} alt={alt} />
            )}
        </div>
    );
}
