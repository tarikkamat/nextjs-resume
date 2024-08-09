'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

const SocialLink = ({ href, icon: Icon }) => (
    <Link href={href} className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
        <Icon className="w-5 h-5" />
    </Link>
);

const Divider = () => <span className="text-gray-300 mx-2">|</span>;

const Header = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <header className="bg-white shadow-sm py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex flex-col sm:flex-row items-center">
                        <Image
                            src="/profile-picture.jpg"
                            alt="Tarık KAMAT"
                            width={100}
                            height={100}
                            className="rounded-full mb-4 sm:mb-0 sm:mr-6"
                        />
                        <div className="text-center sm:text-left">
                            <h1 className="text-3xl font-bold text-gray-800 mb-1">Tarık KAMAT</h1>
                            <p className="text-l text-gray-600 mb-4">
                                {language === 'tr' ? 'Entegrasyon & Yazılım Mühendisi' : 'Integration & Software Engineer'}
                            </p>
                            <div className="flex justify-center sm:justify-start items-center">
                                <SocialLink href="mailto:tarikkamat2@gmail.com" icon={FaEnvelope} />
                                <Divider />
                                <SocialLink href="https://linkedin.com/in/tarikkamat" icon={FaLinkedin} />
                                <Divider />
                                <SocialLink href="https://github.com/tarikkamat" icon={FaGithub} />
                                <Divider />
                                <SocialLink href="https://medium.com/@tarikkamat" icon={FaMedium} />
                            </div>
                        </div>
                    </div>
                    <button onClick={toggleLanguage} className="mt-4 sm:mt-0 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200">
                        {language === 'tr' ? '🇹🇷' : '🇺🇸'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;