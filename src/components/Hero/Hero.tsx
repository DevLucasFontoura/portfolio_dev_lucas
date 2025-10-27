'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const fullText = "Hello, I'm ";
  const nameText = "Lucas Fontoura";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < nameText.length) {
          setDisplayedText(nameText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(nameText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, nameText, typingSpeed, deletingSpeed]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.output}>
            {fullText}
            <span className={styles.nameHighlight}>
              {displayedText}
            </span>
            <span className={styles.cursor}>|</span>
          </span>
        </h1>
        
        <p className={styles.description}>
          Full Stack Developer passionate about creating innovative digital solutions
          and exceptional user experiences.
        </p>
        
        <div className={styles.buttonContainer}>
          <a
            href="#projects"
            className={styles.primaryButton}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={styles.secondaryButton}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
