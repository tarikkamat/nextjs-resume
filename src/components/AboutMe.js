'use client';
import React from 'react';
import { useLanguage } from './LanguageContext';

const AboutMe = () => {
    const { language } = useLanguage();

    const aboutMeContent = {
        tr: `
        Merhabalar 👋, ben Tarık, tutkulu bir Full-Stack Developer'ım. 2019'da Düzce Üniversitesi'nde Bilgisayar Programcılığı bölümünden onur öğrencisi olarak mezun oldum 🎓. Yazılım Mühendisliği lisans eğitimine başlamış olmama rağmen, profesyonel kariyerime odaklanmak için örgün eğitimden ayrılma kararı aldım. Şu anda, iş hayatımla paralel olarak Anadolu Üniversitesi Açıköğretim Fakültesi'nde Yönetim Bilişim Sistemleri bölümünde eğitimime devam ediyorum 🖥️📚.


        Haziran 2020'de başladığım üniversite stajımdan bu yana, yazılım geliştirme alanında kendimi sürekli geliştiriyorum 🚀. PHP, Laravel, C#, .NET, .NET Core, Bootstrap, Tailwind ve Vanilla JavaScript gibi çeşitli programlama dilleri ve çerçevelerinde deneyim sahibiyim. Şu anki pozisyonumda, 10.000'den fazla kullanıcısı olan kritik bir eklentinin sorumluluğunu üstlenmiş durumdayım 🏆.
        

        Kariyerim boyunca çeşitli rollerde deneyim kazandım. Gurmesoft'ta e-ticaret modülleri geliştirerek 🛒 başladığım yolculuğuma, Natro'da hosting hizmetleri ☁️ konusunda çalışarak devam ettim. Daha sonra Eanship Teknoloji A.Ş.'de e-ticaret domain projeleri 🌐 üzerinde çalıştım ve şu anda iyzico'da açık kaynak projeleri alanında çözümler üretiyorum 💳. Bu süreçte, büyük ölçekli projeleri yönetme ve kullanıcı odaklı çözümler üretme yeteneğimi geliştirdim.
        

        Yazılım geliştirme sürecinde en çok tasarım aşamasından keyif alıyorum. İhtiyaçları belirlemek ve detaylı planlama yapmak, projelerimin sağlam temeller üzerine inşa edilmesini sağlıyor. Kendimi sürekli geliştirmek için çeşitli platformları takip ediyor ve kişisel projeler üzerinde çalışıyorum 📚.
        

        Takım çalışmasına yatkın bir "ekip adamı" olarak, iş arkadaşlarımla uyum içinde çalışmaktan ve ortak hedefler doğrultusunda ilerlemekten keyif alıyorum 🤝. Uzun vadeli hedefim, kendi fikrimi hayata geçirip kendi işimin patronu olmak 🚀.
        

        İyi bir yazılımcıyı diğerlerinden ayıran en önemli özellikler olarak pratiklik ve araştırmacı kişiliği görüyorum 🔍. Bu özellikleri kendi kariyerimde de ön planda tutarak, her projede en iyi sonucu elde etmeye çalışıyorum 💯.
      `,
        en: `
        Hello 👋, I'm Tarık, a passionate Full-Stack Developer. I graduated as an honor student in 2019 from the Computer Programming department at Düzce University 🎓. Although I started an undergraduate degree in Software Engineering, I decided to leave formal education to focus on my professional career. Currently, I am continuing my education in Management Information Systems at Anadolu University Open Education Faculty, alongside my work 🖥️📚.
        

        Since starting my university internship in June 2021, I have been continuously developing myself in the field of software development 🚀. I have experience in various programming languages and frameworks such as PHP, Laravel, C#, .NET, .NET Core, Bootstrap, Tailwind, and Vanilla JavaScript. In my current position, I am responsible for a critical plugin with over 10,000 users 🏆.
        

        Throughout my career, I have gained experience in various roles. I started my journey by developing e-commerce modules at Gurmesoft 🛒, then continued working on hosting services ☁️ at Natro. Later, I worked on e-commerce domain projects 🌐 at Eanship Technology Inc. and now I'm providing solutions in the field of open-source projects at iyzico 💳. During this process, I have developed my ability to manage large-scale projects and produce user-focused solutions.
        

        I enjoy the design phase the most in the software development process. Identifying needs and detailed planning ensure that my projects are built on solid foundations. I follow various platforms to continuously improve myself and work on personal projects 📚.
        

        As a "team player" who is inclined towards teamwork, I enjoy working in harmony with my colleagues and progressing towards common goals 🤝. My long-term goal is to bring my own idea to life and be my own boss 🚀.
        
        
        I believe the most important qualities that set a good developer apart from others are practicality and a research-oriented personality 🔍. By prioritizing these qualities in my own career, I strive to achieve the best results in every project 💯.
      `
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                {language === 'tr' ? 'Hakkımda' : 'About Me'}
            </h2>
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="text-gray-700 leading-relaxed">
                    {aboutMeContent[language].split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
