'use client';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

const EducationItem = ({ degree, institution, duration, description }) => {
    const { language } = useLanguage();
    return (
        <div className="mb-8 border-l-2 border-gray-200 pl-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{degree[language]}</h3>
            <p className="text-md text-gray-600 mb-2">{institution[language]}</p>
            <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaCalendar className="mr-2" />
                <span>{duration[language]}</span>
            </div>
            {description && <p className="text-gray-700">{description[language]}</p>}
        </div>
    );
};

const Education = () => {
    const { language } = useLanguage();
    const educationList = [
        {
            degree: {
                tr: "Yönetim Bilişim Sistemleri",
                en: "Management Information Systems"
            },
            institution: {
                tr: "Anadolu Üniversitesi",
                en: "Anadolu University"
            },
            duration: {
                tr: "2022 - Devam Ediyor",
                en: "2022 - Present"
            },
            location: {
                tr: "Eskişehir, Türkiye",
                en: "Eskisehir, Turkey"
            }
        },
        {
            degree: {
                tr: "Yazılım Mühendisliği (B.Sc.)",
                en: "Software Engineering (B.Sc.)"
            },
            institution: {
                tr: "Zaim Üniversitesi",
                en: "Zaim University"
            },
            duration: {
                tr: "2022 - 2023",
                en: "2022 - 2023"
            },
            location: {
                tr: "İstanbul, Türkiye",
                en: "Istanbul, Turkey"
            }
        },
        {
            degree: {
                tr: "Bilgisayar Programcılığı",
                en: "Computer Programming"
            },
            institution: {
                tr: "Düzce Üniversitesi",
                en: "Duzce University"
            },
            duration: {
                tr: "2019 - 2021",
                en: "2019 - 2021"
            },
            location: {
                tr: "Düzce, Türkiye",
                en: "Duzce, Turkey"
            },
            description: {
                tr: "Onur öğrencisi olarak mezun oldum.",
                en: "I graduated as an honor student."
            }
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                {language === 'tr' ? 'Eğitim' : 'Education'}
            </h2>
            <div>
                {educationList.map((edu, index) => (
                    <EducationItem key={index} {...edu} />
                ))}
            </div>
        </div>
    );
};

export default Education;