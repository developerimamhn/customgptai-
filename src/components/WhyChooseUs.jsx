import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SecurityImg from '../assets/image/chooseus-1.svg';
import TrustImg from '../assets/image/chooseus-2.svg';
import icon1 from '../assets/image/Frame.svg';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {
            gsap.from(headerRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });
            gsap.from('.header-title-primary, .header-title-secondary', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power2.out',
                delay: 0.15,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });
            gsap.from('.card-security, .card-trust', {
                opacity: 0,
                y: 40,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 80%',
                },
            });
            gsap.from('.security-list-item, .trust-list-item', {
                opacity: 0,
                y: 15,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.2,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 75%',
                },
            });
            gsap.from('.card-security-button, .card-trust-button', {
                opacity: 0,
                y: 15,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.3,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 75%',
                },
            });

        }, sectionRef);

        return () => {
            context.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="why-choose-section" ref={sectionRef}>
            <div className="why-choose-container">
                <div className="why-choose-header" ref={headerRef}>
                    <div className="header-left">
                        <h2 className="header-title-primary">
                            Why startup choose
                        </h2>
                        <h3 className="header-title-secondary">
                            CustomGPT.ai
                        </h3>
                    </div>
                    <p className="header-description">
                        Built for organizations. AI that's easy, secure, and <br className='hidden lg:block'/> represents us like a star team member.
                    </p>
                </div>
                <div className="cards-grid" ref={cardsRef}>
                    <div className="card-security">
                        <img
                            src={SecurityImg}
                            alt="Security Graphic"
                            className="card-security-bg"
                        />
                        <div className="card-security-overlay" />
                        <div className="card-security-content">
                            <div className="card-security-header">
                                <h4 className="card-security-title">
                                    Enterprise-grade data security
                                </h4>

                                <ul className="security-list">
                                    <li className="security-list-item">
                                        <span className="security-list-icon">
                                            <img src={icon1} alt="" />
                                        </span>
                                        <span>
                                            <strong className="security-list-strong">Full data protection:</strong>{' '}
                                            <br className="security-list-break" />
                                            No training or sharing your data
                                        </span>
                                    </li>
                                    <li className="security-list-item">
                                        <span className="security-list-icon">
                                            <img src={icon1} alt="" />
                                        </span>
                                        <span>
                                            <strong className="security-list-strong">Enterprise security:</strong>{' '}
                                            <br className="security-list-break" />
                                            SOC-2 type II, GDPR, full encryption
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <button className="card-trust-button">
                                    Explore trust center
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-trust">
                        <div className="card-trust-content">
                            <h4 className="card-trust-title pb-[11px] sm:pb-[12px] md:pb-[13px] lg:pb-[14px] xl:pb-[15px] 2xl:pb-[16px]">
                                Answers you trust
                            </h4>
                            <ul className="trust-list">
                                <li className="trust-list-item">
                                    <img src={icon1} alt="" className="trust-list-icon" />
                                    <span>
                                        <span className="trust-list-strong">Full data protection:</span>{' '}
                                        Third-party verified #1 for anti-hallucination technology, beating out major players like OpenAI and Google
                                    </span>
                                </li>
                                <li className="trust-list-item">
                                    <img src={icon1} alt="" className="trust-list-icon" />
                                    <span>
                                        <span className="trust-list-strong">Enterprise security:</span>{' '}
                                        Every response has a link directly to its source
                                    </span>
                                </li>
                            </ul>
                            <button className="card-trust-button">
                                Benchmark Announcement
                            </button>
                        </div>
                        <div className="">
                            <img
                                src={TrustImg}
                                alt="Trust Mobile Graphic"
                                className="absolute w-3/5 h-full bottom-[-10%] right-0"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;