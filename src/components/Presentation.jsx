import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import qr from '../qr/qrglush.png';
import screen1_1 from '../images/1.1.png'
import screen1_2 from '../images/1.2.png'
import screen2_1 from '../images/2.1.png'
import screen2_2 from '../images/2.2.png'
import screen3_1 from '../images/3.1.png'
import screen3_2 from '../images/3.2.png'
import screen4_1 from '../images/4.1.png'
import screen4_2 from '../images/4.2.png'
import icon1 from '../images/science.png'
import icon2 from '../images/science.png'
import icon3 from '../images/science.png'
import icon4 from '../images/science.png'
import icon5 from '../images/science.png'
import icon6 from '../images/science.png'
import './Presentation.css';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  const slides = [
    { id: 0, title: "Титульная страница", effect: "split" },
    { id: 1, title: "Актуальность", effect: "zoom" },
    { id: 2, title: "Цель и задачи", effect: "flip" },
    { id: 3, title: "Стек технологий", effect: "rotate" },
    { id: 4, title: "Скриншоты - 1", effect: "morph" },
    { id: 5, title: "Скриншоты - 2", effect: "blur" },
    { id: 6, title: "Скриншоты - 3", effect: "scale" },
    { id: 7, title: "Скриншоты - 4", effect: "glitch" },
    { id: 8, title: "Заключение", effect: "fade" }
  ];

  const effects = {
    split: (direction) => ({
      enter: { 
        x: direction > 0 ? 300 : -300, 
        opacity: 0, 
        clipPath: "inset(0 0 0 100%)",
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
      },
      center: { 
        x: 0, 
        opacity: 1, 
        clipPath: "inset(0 0 0 0%)", 
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
      },
      exit: { 
        x: direction > 0 ? -300 : 300, 
        opacity: 0, 
        clipPath: "inset(0 100% 0 0)", 
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
      }
    }),
    zoom: (direction) => ({
      enter: { 
        scale: 0.2, 
        opacity: 0, 
        rotateZ: direction > 0 ? 12 : -12,
        transition: { duration: 0.7, ease: [0.34, 1.2, 0.64, 1] }
      },
      center: { 
        scale: 1, 
        opacity: 1, 
        rotateZ: 0, 
        transition: { duration: 0.7, delay: 0.1, ease: [0.34, 1.2, 0.64, 1] }
      },
      exit: { 
        scale: 0.2, 
        opacity: 0, 
        rotateZ: direction > 0 ? -12 : 12, 
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
      }
    }),
    flip: (direction) => ({
      enter: { 
        rotateY: direction > 0 ? 80 : -80, 
        opacity: 0, 
        scale: 0.85,
        transition: { duration: 0.7, ease: [0.34, 1.2, 0.64, 1] }
      },
      center: { 
        rotateY: 0, 
        opacity: 1, 
        scale: 1, 
        transition: { duration: 0.7, delay: 0.05, ease: [0.34, 1.2, 0.64, 1] }
      },
      exit: { 
        rotateY: direction > 0 ? -80 : 80, 
        opacity: 0, 
        scale: 0.85, 
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
      }
    }),
    rotate: (direction) => ({
      enter: { 
        rotate: direction > 0 ? 25 : -25, 
        opacity: 0, 
        scale: 0.8, 
        x: direction > 0 ? 150 : -150,
        transition: { duration: 0.7, ease: [0.34, 1.2, 0.64, 1] }
      },
      center: { 
        rotate: 0, 
        opacity: 1, 
        scale: 1, 
        x: 0, 
        transition: { duration: 0.7, delay: 0.05, ease: [0.34, 1.2, 0.64, 1] }
      },
      exit: { 
        rotate: direction > 0 ? -25 : 25, 
        opacity: 0, 
        scale: 0.8, 
        x: direction > 0 ? -150 : 150, 
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
      }
    }),
    morph: (direction) => ({
      enter: { 
        borderRadius: "50%", 
        scale: 0.5, 
        opacity: 0,
        rotate: direction > 0 ? 180 : -180,
        transition: { duration: 0.8, ease: [0.34, 1.2, 0.64, 1] }
      },
      center: { 
        borderRadius: "0%", 
        scale: 1, 
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.8, delay: 0.05, ease: [0.34, 1.2, 0.64, 1] }
      },
      exit: { 
        borderRadius: "50%", 
        scale: 0.5, 
        opacity: 0,
        rotate: direction > 0 ? -180 : 180,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
      }
    }),
    blur: (direction) => ({
      enter: { 
        filter: "blur(25px)", 
        opacity: 0, 
        scale: 1.08, 
        y: direction > 0 ? 40 : -40,
        transition: { duration: 0.7, ease: [0.34, 1.2, 0.64, 1] }
      },
      center: { 
        filter: "blur(0px)", 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        transition: { duration: 0.7, delay: 0.05, ease: [0.34, 1.2, 0.64, 1] }
      },
      exit: { 
        filter: "blur(25px)", 
        opacity: 0, 
        scale: 0.92, 
        y: direction > 0 ? -40 : 40, 
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
      }
    }),
    scale: (direction) => ({
      enter: { 
        scale: 0.3, 
        opacity: 0, 
        borderRadius: "40%",
        transition: { duration: 0.7, ease: [0.34, 1.2, 0.64, 1] }
      },
      center: { 
        scale: 1, 
        opacity: 1, 
        borderRadius: "0%", 
        transition: { duration: 0.7, delay: 0.05, ease: [0.34, 1.2, 0.64, 1] }
      },
      exit: { 
        scale: 0.3, 
        opacity: 0, 
        borderRadius: "40%", 
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
      }
    }),
    glitch: (direction) => ({
      enter: { 
        x: direction > 0 ? 40 : -40, 
        opacity: 0, 
        skewX: "15deg",
        transition: { duration: 0.6, ease: [0.34, 1.2, 0.64, 1] }
      },
      center: { 
        x: 0, 
        opacity: 1, 
        skewX: "0deg", 
        transition: { duration: 0.6, delay: 0.05, ease: [0.34, 1.2, 0.64, 1] }
      },
      exit: { 
        x: direction > 0 ? -40 : 40, 
        opacity: 0, 
        skewX: "-15deg", 
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
      }
    }),
    fade: (direction) => ({
      enter: { 
        opacity: 0, 
        y: 20,
        transition: { duration: 0.7, ease: [0.34, 1.2, 0.64, 1] }
      },
      center: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.7, delay: 0.05, ease: [0.34, 1.2, 0.64, 1] }
      },
      exit: { 
        opacity: 0, 
        y: -20, 
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
      }
    })
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0 && currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    } else if (e.deltaY < 0 && currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const currentEffect = slides[currentSlide]?.effect || "fade";

  return (
    <div className="presentation-container" ref={containerRef} onWheel={handleWheel}>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
      </div>

      <div className="side-nav">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            className={`nav-dot ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          >
            <span className="nav-dot-inner" />
            <span className="nav-label">{slide.title}</span>
          </button>
        ))}
      </div>

      <div className="slides-wrapper">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={effects[currentEffect]}
            className="slide-content"
          >
            {currentSlide === 0 && <Slide0 />}
            {currentSlide === 1 && <Slide1 />}
            {currentSlide === 2 && <Slide2 />}
            {currentSlide === 3 && <Slide3 />}
            {currentSlide === 4 && <Slide4 />}
            {currentSlide === 5 && <Slide5 />}
            {currentSlide === 6 && <Slide6 />}
            {currentSlide === 7 && <Slide7 />}
            {currentSlide === 8 && <Slide8 />}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

// Слайд 0 - Титульная страница
const Slide0 = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  return (
    <div className="slide slide-0" ref={ref}>
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s`, animationDuration: `${8 + Math.random() * 12}s` }} />
        ))}
      </div>
      
      <motion.div
        initial={{ scale: 0, opacity: 0, rotateY: 180 }}
        animate={inView ? { scale: 1, opacity: 1, rotateY: 0 } : {}}
        transition={{ duration: 0.8, type: "spring", delay: 0.2, bounce: 0.3 }}
        className="logo-wrapper"
      >
        <div className="logo-glow" />
        <div className="logo-3d">
          <span className="logo-text-lux">Визы и </span>
          <span className="logo-text-trips">Путешествия</span>
        </div>
      </motion.div>
      
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Разработка веб-приложения для премиального<br />туристического агентства
      </motion.h1>
      
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Дипломный проект
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="qr-container"
      >
        <div className="qr-frame">
          <img src={qr} alt="QR-код" className="qr-code" />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="diploma-info"
      >
        <div className="info-line">
          <span className="info-label">Выполнил:</span>
          <span className="info-value">Глушков Александр Владимирович, группа ИСП-05</span>
        </div>
        <div className="info-line">
          <span className="info-label">Руководитель:</span>
          <span className="info-value">Сметанин Андрей Евгеньевич, преподаватель</span>
        </div>
        <div className="info-line">
          <span className="info-label">Учреждение:</span>
          <span className="info-value">Новгородский строительный колледж, 2026</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="scroll-hint"
      >
      </motion.div>
    </div>
  );
};

// Слайд 1 - Актуальность
const Slide1 = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const stats = [
    { number: "6-8%", label: "Ежегодный рост рынка люксовых путешествий" },
    { number: "30+", label: "Эксклюзивных туров в каталоге" },
    { number: "24/7", label: "Поддержка клиентов" },
  ];
  
  return (
    <div className="slide slide-1" ref={ref}>
      <div className="slide-bg-glow" />
      <motion.h2
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
      >
        Актуальность проекта
      </motion.h2>
      <div className="relevance-content">
        <motion.div
          initial={{ scale: 0.7, opacity: 0, y: 30 }}
          animate={inView ? { scale: 1, opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relevance-text"
        >
          <p>В современной эпохе автоматизации и информатизации существует острая потребность в создании приложений для удобного бронирования туров и управления заявками. Такое приложение может повысить качество и скорость работы сотрудников туристического агентства, а также сделать процесс выбора и бронирования тура более комфортным для клиентов.</p>
          <p>Разработка такого приложения позволит сократить временные и ресурсные затраты, улучшить координацию деятельности и создать благоприятную среду для взаимодействия всех конечных пользователей.</p>
        </motion.div>
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, opacity: 0, rotateY: 180 }}
              animate={inView ? { scale: 1, opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.15, type: "spring", bounce: 0.4 }}
              className="stat-card"
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Слайд 2 - Цель и задачи
const Slide2 = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const tasks = [
    "Провести анализ предметной области",
    "Проанализировать существующие решения на рынке",
    "Выбрать средства разработки информационной системы",
    "Разработать план выполнения дипломного проекта",
    "Разработать веб-приложение",
    "Разработать описание применения информационной системы",
  ];
  
  return (
    <div className="slide slide-2" ref={ref}>
      <div className="slide-bg-glow" />
      <motion.h2
        initial={{ rotateY: 90, opacity: 0 }}
        animate={inView ? { rotateY: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
      >
        Цель и задачи
      </motion.h2>
      <motion.div
        initial={{ rotateX: 90, opacity: 0 }}
        animate={inView ? { rotateX: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
        className="goal-card"
      >
        <h3>Цель</h3>
        <p>Разработка информационной системы для автоматизации деятельности туристического агентства «Визы и путешествия».</p>
      </motion.div>
      <div className="tasks-grid">
        {tasks.map((task, idx) => (
          <motion.div
            key={idx}
            initial={{ rotateY: -90, opacity: 0 }}
            animate={inView ? { rotateY: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.08, type: "spring", bounce: 0.2 }}
            className="task-item"
          >
            <span>{task}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Слайд 3 - Стек технологий
const Slide3 = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const technologies = [
    { name: "React 19", icon: {icon1}, color: "#61dafb", desc: "Библиотека для создания пользовательских интерфейсов" },
    { name: "Firebase", icon: {icon2}, color: "#ffca28", desc: "Платформа для серверной части и аутентификации" },
    { name: "Three.js", icon: {icon3}, color: "#c77dff", desc: "3D-глобус с интерактивными маркерами" },
    { name: "Framer Motion", icon: {icon4}, color: "#d4af37", desc: "Плавные анимации и переходы" },
    { name: "CSS3", icon: {icon5}, color: "#2965f1", desc: "Стилизация и адаптивный дизайн" },
    { name: "JavaScript", icon: {icon6}, color: "#f7df1e", desc: "Логика приложения" },
  ];
  
  return (
    <div className="slide slide-3" ref={ref}>
      <div className="slide-bg-glow" />
      <motion.h2
        initial={{ rotate: -180, opacity: 0 }}
        animate={inView ? { rotate: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
      >
        Стек технологий
      </motion.h2>
      <div className="tech-grid">
        {technologies.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ rotate: 180, scale: 0, opacity: 0 }}
            animate={inView ? { rotate: 0, scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", bounce: 0.3 }}
            className="tech-card"
            style={{ borderBottomColor: tech.color }}
          >
            <div className="tech-icon" style={{ background: `${tech.color}20`, color: tech.color }}>{tech.icon}</div>
            <h3>{tech.name}</h3>
            <p>{tech.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Слайд 4 - Скриншоты 1
const Slide4 = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const images = [screen1_1, screen1_2];
  
  return (
    <div className="slide slide-screenshot" ref={ref}>
      <div className="slide-bg-glow" />
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
      >
        Главная страница и параллакс-эффект
      </motion.h2>
      <div className="screenshot-grid">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ borderRadius: "50%", scale: 0.3, opacity: 0 }}
            animate={inView ? { borderRadius: "16px", scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: idx * 0.2, type: "spring", bounce: 0.4 }}
            className="screenshot-card"
          >
            <div className="screenshot-img">
              <img src={img} alt={`screenshot-${idx}`} />
              <div className="screenshot-overlay"><span></span></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Слайд 5 (каталог)
const Slide5 = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const images = [screen2_1, screen2_2];
  
  return (
    <div className="slide slide-screenshot" ref={ref}>
      <div className="slide-bg-glow" />
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
      >
        Каталог товаров с фильтрацией
      </motion.h2>
      <div className="screenshot-grid">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ borderRadius: "50%", scale: 0.3, opacity: 0 }}
            animate={inView ? { borderRadius: "16px", scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: idx * 0.2, type: "spring", bounce: 0.4 }}
            className="screenshot-card"
          >
            <div className="screenshot-img">
              <img src={img} alt={`screenshot-${idx}`} />
              <div className="screenshot-overlay"><span></span></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Slide6 = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const images = [screen3_1, screen3_2];
  
  return (
    <div className="slide slide-screenshot" ref={ref}>
      <div className="slide-bg-glow" />
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
      >
        Личный кабинет и бронирование
      </motion.h2>
      <div className="screenshot-grid">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ borderRadius: "50%", scale: 0.3, opacity: 0 }}
            animate={inView ? { borderRadius: "16px", scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: idx * 0.2, type: "spring", bounce: 0.4 }}
            className="screenshot-card"
          >
            <div className="screenshot-img">
              <img src={img} alt={`screenshot-${idx}`} />
              <div className="screenshot-overlay"><span></span></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Slide7 = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const images = [screen4_1, screen4_2]; // 👈 ВСТАВЛЯЙТЕ СКРИНЫ СЮДА
  
  return (
    <div className="slide slide-screenshot" ref={ref}>
      <div className="slide-bg-glow" />
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
      >
        Панель администратора и отзывы
      </motion.h2>
      <div className="screenshot-grid">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ borderRadius: "50%", scale: 0.3, opacity: 0 }}
            animate={inView ? { borderRadius: "16px", scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: idx * 0.2, type: "spring", bounce: 0.4 }}
            className="screenshot-card"
          >
            <div className="screenshot-img">
              <img src={img} alt={`screenshot-${idx}`} />
              <div className="screenshot-overlay"><span></span></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Слайд 8 - Заключение
const Slide8 = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const achievements = [
    "Разработано полнофункциональное веб-приложение",
    "Реализовано 30+ туров с динамической подгрузкой",
    "Создана система бронирования с валидацией",
    "Внедрена административная панель для управления",
    "Добавлен 3D-глобус с интерактивными маркерами",
    "Интегрирована система отзывов с модерацией",
  ];
  
  return (
    <div className="slide slide-8" ref={ref}>
      <div className="slide-bg-glow" />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        Заключение
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="conclusion-text"
      >
        <p>В ходе выполнения дипломной работы были полностью достигнуты поставленные цель и задачи. Приложение позволяет клиентам просматривать каталог туров, бронировать поездки, оставлять отзывы, а сотрудникам — эффективно управлять заявками через административную панель.</p>
        <p>Использование современных технологий (React, Firebase) обеспечивает высокую производительность, надёжность и привлекательный интерфейс. Разработанный продукт готов к внедрению в реальную бизнес-среду.</p>
      </motion.div>
      <div className="achievements-grid">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + idx * 0.08, type: "spring", bounce: 0.2 }}
            className="achievement-item"
          >
            <span className="achievement-icon"></span>
            <span>{item}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.9, type: "spring", bounce: 0.5 }}
        className="thankyou"
      >
        Спасибо за внимание!
      </motion.div>
    </div>
  );
};

export default Presentation;