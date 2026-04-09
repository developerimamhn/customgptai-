import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BgImage from '../assets/image/Frame 2085662539.png';

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ number, unit, label, title, titleGray, description, direction }) => {
  const cardRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    const numEl = numberRef.current;
    const target = parseFloat(number);
    const slideX = direction === 'left' ? -80 : 80;

    if (numEl) numEl.textContent = '0';

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          el,
          { opacity: 0, x: slideX },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            onComplete: () => {
              const obj = { val: 0 };
              gsap.to(obj, {
                val: target,
                duration: 1.5,
                ease: 'power2.out',
                onUpdate: () => {
                  if (numEl) {
                    numEl.textContent = Number.isInteger(target)
                      ? Math.round(obj.val)
                      : obj.val.toFixed(1);
                  }
                },
              });
            },
          }
        );
      },
    });

    return () => st.kill();
  }, [number, direction]); // ✅ dependencies fixed

  return (
    <div className="stat-card-wrapper" ref={cardRef} style={{ opacity: 0 }}>
      <div className="stat-card-border">
        <img src={BgImage} alt="background" className="stat-card-border-img" />
        <div className="stat-card-border-gradient" />
      </div>
      <div className="stat-card">
        <div className="stat-card-top">
          <span className="stat-card-upto">Up to</span>
          <div className="stat-card-number-block">
            <h3 className="stat-card-number">
              <span ref={numberRef}>0</span>
              <span className="stat-card-unit">{unit}</span>
            </h3>
            <p className="stat-card-label">{label}</p>
          </div>
        </div>
        <div className="stat-card-bottom">
          <h4 className="stat-card-title">
            {title} <span className="stat-card-title-gray">{titleGray}</span>
          </h4>
          <p className="stat-card-desc">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function ResultsSection() {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 90%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => context.revert();
  }, []); // ✅ no dependencies needed here

  return (
    <section className="results-section" ref={sectionRef}>
      <div className="results-container">

        <div className="results-grid">
          <StatCard
            number="93"
            unit="%"
            label="Of tickets resolved without a human"
            title="Engage"
            titleGray="customers"
            description="Scale and automate engagement with trustworthy, brand-aligned AI"
            direction="left"
          />
          <StatCard
            number="10"
            unit="hr"
            label="Saved each week, per user"
            title="Work"
            titleGray="faster"
            description="Help your teams work faster and smarter with instant, accurate answers"
            direction="right"
          />
        </div>

        <div className="results-btn-wrapper">
          <button className="results-btn" ref={buttonRef} style={{ opacity: 0 }}>
            Learn more about us
          </button>
        </div>

      </div>
    </section>
  );
}