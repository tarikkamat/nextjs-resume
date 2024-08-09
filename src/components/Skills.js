'use client';
import React from 'react';
import { FaCode, FaDatabase, FaServer, FaMobileAlt, FaTools, FaBrain } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

const SkillCategory = ({ title, skills, icon: Icon }) => {
    const { language } = useLanguage();
    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-700">
                <Icon className="mr-2 text-gray-500" />
                {title[language]}
            </h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-200 transition-colors duration-200"
                    >
                        {skill[language]}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const { language } = useLanguage();
    const skillCategories = [
        {
            title: {
                tr: "Frontend Geliştirme",
                en: "Frontend Development"
            },
            icon: FaCode,
            skills: [
                { tr: "HTML", en: "HTML" },
                { tr: "CSS", en: "CSS" },
                { tr: "JavaScript", en: "JavaScript" },
                { tr: "React JS", en: "React JS" },
                { tr: "Tailwind CSS", en: "Tailwind CSS" },
                { tr: "Bootstrap", en: "Bootstrap" }
            ]
        },
        {
            title: {
                tr: "Backend Geliştirme",
                en: "Backend Development"
            },
            icon: FaServer,
            skills: [
                { tr: "C#", en: "C#" },
                { tr: ".NET", en: ".NET" },
                { tr: ".NET Core", en: ".NET Core" },
                { tr: "PHP", en: "PHP" },
                { tr: "Laravel", en: "Laravel" }
            ]
        },
        {
            title: {
                tr: "Veritabanları",
                en: "Databases"
            },
            icon: FaDatabase,
            skills: [
                { tr: "MySQL", en: "MySQL" },
                { tr: "PostgreSQL", en: "PostgreSQL" },
                { tr: "Redis", en: "Redis" }
            ]
        },
        {
            title: {
                tr: "Araçlar ve DevOps",
                en: "Tools and DevOps"
            },
            icon: FaTools,
            skills: [
                { tr: "Git", en: "Git" },
                { tr: "Docker", en: "Docker" }
            ]
        },
        {
            title: {
                tr: "Sosyal Beceri",
                en: "Soft Skills"
            },
            icon: FaBrain,
            skills: [
                { tr: "Problem Çözme", en: "Problem Solving" },
                { tr: "Takım Çalışması", en: "Teamwork" },
                { tr: "İletişim", en: "Communication" },
                { tr: "Zaman Yönetimi", en: "Time Management" }
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">
                {language === 'tr' ? 'Beceriler' : 'Skills'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                    <SkillCategory key={index} {...category} />
                ))}
            </div>
        </div>
    );
};

export default Skills;