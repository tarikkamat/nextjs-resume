'use client';
import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

const ExperienceItem = ({ title, company, duration, location, description }) => {
    const { language } = useLanguage();
    return (
        <div className="mb-8 border-l-2 border-gray-200 pl-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{title[language]}</h3>
            <p className="text-md text-gray-600 mb-2">{company[language]}</p>
            <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaCalendar className="mr-2" />
                <span>{duration[language]}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-3">
                <FaMapMarkerAlt className="mr-2" />
                <span>{location[language]}</span>
            </div>
            <ul className="list-disc list-inside text-gray-700">
                {description[language].map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const Experience = () => {
    const { language } = useLanguage();
    const experiences = [
        {
            title: {
                tr: "Entegrasyon & Yazılım Mühendisi",
                en: "Integration & Software Engineer",
            },
            company: {
                tr: "iyzico",
                en: "iyzico",
            },
            duration: {
                tr: "Ocak 2024 - Günümüz",
                en: "Jan 2024 - Present",
            },
            location: {
                tr: "İstanbul, Türkiye",
                en: "Istanbul, Turkey",
            },
            description: {
                tr: [
                    "Açık kaynak e-ticaret platformları için resmi eklentilerin geliştirilmesi, güncellenmesi ve bakımından sorumlu oldum.",
                    "Farklı platformlarda iyzico ödeme sistemlerinin entegrasyonu için teknik destek sağladım.",
                    "Teknoloji trendlerini sürekli takip ederek, en güncel çözümleri entegre etmeye yönelik çalışmalar yaptım.",
                    "Yeni teknolojiler ve geliştirme yöntemleri konusunda ekip arkadaşlarına mentorluk yaptım."
                ],
                en: [
                    "Responsible for developing, updating, and maintaining official plugins for open-source e-commerce platforms.",
                    "Provided technical support for the integration of iyzico payment systems across various platforms.",
                    "Consistently tracked technology trends to work on integrating the latest solutions.",
                    "Mentored team members on new technologies and development methodologies."
                ]
            }
        },
        {
            title: {
                tr: "Yazılım Geliştirici",
                en: "Software Developer",
            },
            company: {
                tr: "Eanship Teknoloji A.Ş.",
                en: "Eanship Teknoloji A.Ş.",
            },
            duration: {
                tr: "Ağustos 2022 - Ocak 2024",
                en: "Aug 2022 - Jan 2024",
            },
            location: {
                tr: "İstanbul, Türkiye",
                en: "Istanbul, Turkey",
            },
            description: {
                tr: [
                    "Web uygulamaları için backend mantığını geliştirdim ve web API'lerini hazırladım.",
                    "HTML, CSS, JavaScript, PHP ve Twig gibi frontend teknolojilerini kullandım.",
                    "C# ve .NET WebAPI teknolojileri kullanarak backend tarafını güçlendirdim.",
                    "Web tasarımı, arayüz geliştirme ve sunucu-veritabanı bağlantılarını sağladım."
                ],
                en: [
                    "Developed backend logic for web applications and prepared web APIs.",
                    "Utilized frontend technologies such as HTML, CSS, JavaScript, PHP, and Twig.",
                    "Strengthened backend using C# and .NET WebAPI technologies.",
                    "Supported web design, interface development, and server-database connections."
                ]
            }
        },
        {
            title: {
                tr: "Yazılım Geliştirici",
                en: "Software Developer",
            },
            company: {
                tr: "Natro",
                en: "Natro",
            },
            duration: {
                tr: "Ağustos 2021 - Nisan 2022",
                en: "Aug 2021 - Apr 2022",
            },
            location: {
                tr: "İstanbul, Türkiye",
                en: "Istanbul, Turkey",
            },
            description: {
                tr: [
                    "Web tasarımı ve arayüzü destekledim, frontend ve backend bağlantılarını sağladım.",
                    "Tasarımı fonksiyonel koda dönüştürmek için PHP, C#, HTML, CSS, JavaScript ve Bootstrap gibi teknolojileri kullandım.",
                    "Veritabanı bağlantıları ve sunucu ile projelerin entegrasyonunu gerçekleştirdim."
                ],
                en: [
                    "Supported web design and interface, managing frontend and backend connections.",
                    "Used technologies like PHP, C#, HTML, CSS, JavaScript, and Bootstrap to convert designs into functional code.",
                    "Handled database connections and server integration with projects."
                ]
            }
        },
        {
            title: {
                tr: "Yardım Masası",
                en: "Helpdesk",
            },
            company: {
                tr: "Natro",
                en: "Natro",
            },
            duration: {
                tr: "Haziran 2021 - Ağustos 2021",
                en: "Jun 2021 - Aug 2021",
            },
            location: {
                tr: "Bursa, Türkiye",
                en: "Bursa, Turkey",
            },
            description: {
                tr: [
                    "Müşterilere sunucu, hosting ve domain yönetimi konularında yardım sağladım.",
                    "Linux, cPanel ve Plesk hakkında bilgi kazandım.",
                    "Müşteri sorunlarını telefon veya yazılı olarak çözdüm."
                ],
                en: [
                    "Assisted customers with server, hosting, and domain management issues.",
                    "Gained knowledge on Linux, cPanel, and Plesk.",
                    "Resolved customer issues via call or written communication."
                ]
            }
        },
        {
            title: {
                tr: "Stajyer Wordpress Geliştirici",
                en: "Intern, Wordpress Developer",
            },
            company: {
                tr: "Gurmesoft",
                en: "Gurmesoft",
            },
            duration: {
                tr: "Haziran 2021 - Ağustos 2021",
                en: "Jun 2021 - Aug 2021",
            },
            location: {
                tr: "Bursa, Türkiye",
                en: "Bursa, Turkey",
            },
            description: {
                tr: [
                    "Wordpress deneyimini artırmak için özel olarak geliştirilen eklentiler üzerinde çalıştım.",
                    "Ödeme eklentileri, pazaryeri entegrasyon eklentileri gibi çeşitli projelerde yer aldım.",
                    "Wordpress üzerinde kullanıcı deneyimini iyileştirmek için yenilikçi çözümler geliştirdim."
                ],
                en: [
                    "Worked on specially developed plugins to enhance the WordPress experience.",
                    "Participated in various projects including payment plugins and marketplace integration plugins.",
                    "Developed innovative solutions to improve user experience on WordPress."
                ]
            }
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                {language === 'tr' ? 'Deneyim' : 'Experience'}
            </h2>
            <div>
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </div>
    );
};

export default Experience;