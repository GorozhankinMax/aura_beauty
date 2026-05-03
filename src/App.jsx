import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ListChecks, Sparkles, Star, UserRoundCheck } from "lucide-react";

const stats = [
  { value: "6+", label: "направлений ухода", Icon: Sparkles },
  { value: "30+", label: "процедур", Icon: ListChecks },
  { value: "10+", label: "лет общего опыта", Icon: Star },
  { value: "100%", label: "индивидуальный подход", Icon: UserRoundCheck },
];

const services = [
  {
    label: "facial care",
    title: "Уход за лицом",
    text: "Очищение, питание и сияние кожи",
    image: "/face-care.png",
  },
  {
    label: "nails",
    title: "Маникюр",
    text: "Аккуратная форма и эстетика деталей",
    image: "/manicure.png",
  },
  {
    label: "brows & lashes",
    title: "Брови и ресницы",
    text: "Естественная выразительность без перегруза",
    image: "/brows-lashes.png",
  },
  {
    label: "makeup",
    title: "Макияж",
    text: "Образ, который подчёркивает черты",
    image: "/makeup.png",
  },
  {
    label: "hair styling",
    title: "Укладки",
    text: "Лёгкая форма и аккуратное завершение образа",
    image: "/hair-styling.png",
  },
  {
    label: "aesthetic care",
    title: "Эстетический уход",
    text: "Массаж лица, пилинги и уходовые программы",
    image: "/aesthetic-care.png",
  },
];

const servicePrices = [
  {
    category: "Уход за лицом",
    items: [
      ["Очищающий уход", "от 3 500 ₽"],
      ["Увлажняющий уход", "от 4 000 ₽"],
      ["Восстанавливающий уход", "от 4 500 ₽"],
      ["Лифтинг-уход", "от 5 000 ₽"],
      ["Экспресс-уход перед мероприятием", "от 3 000 ₽"],
    ],
  },
  {
    category: "Маникюр",
    items: [
      ["Маникюр без покрытия", "от 1 800 ₽"],
      ["Маникюр с покрытием гель-лак", "от 2 800 ₽"],
      ["Укрепление ногтей", "от 3 200 ₽"],
      ["Френч", "от 3 500 ₽"],
      ["SPA-уход для рук", "от 2 500 ₽"],
    ],
  },
  {
    category: "Брови и ресницы",
    items: [
      ["Коррекция бровей", "от 1 200 ₽"],
      ["Окрашивание бровей", "от 1 500 ₽"],
      ["Ламинирование бровей", "от 2 500 ₽"],
      ["Ламинирование ресниц", "от 2 800 ₽"],
      ["Комплекс: брови + ресницы", "от 4 000 ₽"],
    ],
  },
  {
    category: "Макияж",
    items: [
      ["Дневной макияж", "от 3 500 ₽"],
      ["Вечерний макияж", "от 5 000 ₽"],
      ["Нюдовый макияж", "от 4 000 ₽"],
      ["Макияж для фотосессии", "от 5 500 ₽"],
      ["Свадебный макияж", "от 7 000 ₽"],
    ],
  },
  {
    category: "Укладки",
    items: [
      ["Лёгкая укладка", "от 2 500 ₽"],
      ["Локоны / волны", "от 3 500 ₽"],
      ["Гладкая укладка", "от 3 000 ₽"],
      ["Вечерняя укладка", "от 4 500 ₽"],
      ["Свадебная укладка", "от 6 000 ₽"],
    ],
  },
  {
    category: "Эстетический уход",
    items: [
      ["Массаж лица", "от 3 000 ₽"],
      ["Скульптурный массаж лица", "от 4 500 ₽"],
      ["Гуаша-массаж", "от 3 500 ₽"],
      ["Энзимный пилинг", "от 4 000 ₽"],
      ["Уход для зоны шеи и декольте", "от 3 500 ₽"],
    ],
  },
];

const aboutItems = [
  "Сначала понимаем ваш запрос, образ жизни и желаемый результат",
  "Подбираем процедуры бережно — без лишнего и навязанного",
  "Создаём спокойный опыт, в котором важна каждая деталь",
];

const masters = [
  {
    name: "Анна",
    role: "косметолог-эстетист",
    specialty: "уход за лицом, пилинги, массаж",
    experience: "5 лет",
    image: "/Anna.png",
  },
  {
    name: "Мария",
    role: "мастер маникюра",
    specialty: "нюдовые покрытия, укрепление, SPA-уход",
    experience: "4 года",
    image: "/Maria.png",
  },
  {
    name: "Елена",
    role: "бровист / lash-мастер",
    specialty: "ламинирование, коррекция, естественный образ",
    experience: "3 года",
    image: "/Elena.png",
  },
  {
    name: "София",
    role: "визажист-стилист",
    specialty: "макияж, укладки, образы для съёмок",
    experience: "6 лет",
    image: "/Sofia.png",
  },
];

const galleryWorks = [
  {
    title: "Нюдовый маникюр",
    text: "Аккуратная форма и спокойный оттенок",
    tag: "NUDE FINISH",
    image: "/work-manicure.png",
  },
  {
    title: "Естественные брови",
    text: "Мягкая линия без лишней графики",
    tag: "NATURAL SHAPE",
    image: "/work-brows.png",
  },
  {
    title: "Сияние кожи",
    text: "Свежесть, мягкость и ровный тон",
    tag: "SKIN GLOW",
    image: "/work-skin.png",
  },
  {
    title: "Образ / макияж",
    text: "Деликатные акценты под настроение",
    tag: "SOFT MAKEUP",
    image: "/work-makeup.png",
  },
  {
    title: "Гладкая укладка",
    text: "Ровная форма и естественный блеск волос",
    tag: "SMOOTH HAIR",
    image: "/work-smooth-hair.png",
  },
];

const processSteps = [
  ["I", "Вы выбираете услугу", "Смотрите направления и отмечаете, что подходит именно вам"],
  ["II", "Мы уточняем детали", "Задаём пару вопросов и подбираем формат ухода"],
  ["III", "Подбираем время", "Согласовываем день, мастера и комфортное окно для визита"],
  ["IV", "Встречаем вас в студии", "Готовим пространство, чтобы визит прошёл спокойно и без спешки"],
];

const reviews = [
  {
    text: "Очень спокойная атмосфера. На уходе всё объяснили по этапам, без спешки и навязывания лишнего.",
    author: "Алина",
    service: "Уход за лицом",
  },
  {
    text: "Маникюр получился аккуратным и спокойным, как я и хотела. Отдельно понравилось, что мастер не торопилась.",
    author: "Екатерина",
    service: "Маникюр",
  },
  {
    text: "Брови сделали естественно, без жёсткой графики. Получилось аккуратно и очень мягко по образу.",
    author: "Мария",
    service: "Брови и ресницы",
  },
];

const faqItems = [
  {
    question: "Как выбрать процедуру, если я не знаю, что мне нужно?",
    answer:
      "Не обязательно выбирать заранее. Вы можете оставить заявку и коротко описать запрос: состояние кожи, желаемый результат или повод для визита. Мы уточним детали и подскажем, с какой процедуры лучше начать.",
  },
  {
    question: "Можно ли подобрать услугу уже на месте?",
    answer:
      "Да. Если вы сомневаетесь между несколькими услугами, мастер поможет определиться перед началом процедуры. Мы не навязываем лишнее — подбираем уход под ваш запрос, состояние кожи и комфорт.",
  },
  {
    question: "Какие материалы и косметику вы используете?",
    answer:
      "Мы используем косметику и материалы собственного производства Clay. Формулы создаются на основе натуральных компонентов, мягких текстур и безопасных уходовых составов. Такой подход помогает контролировать качество процедур и сохранять единую философию студии: бережный уход без лишней агрессивности.",
  },
  {
    question: "Сколько длится процедура?",
    answer:
      "Время зависит от услуги. Экспресс-уход может занять около 30–40 минут, маникюр — от 1,5 часов, комплексные процедуры и образы — дольше. После выбора услуги мы заранее сориентируем вас по длительности визита.",
  },
  {
    question: "Можно ли записаться к конкретному мастеру?",
    answer:
      "Да, при записи можно выбрать мастера или указать пожелание. Если вы впервые у нас, мы подскажем специалиста под вашу задачу: уход за лицом, маникюр, брови, ресницы, макияж или укладку.",
  },
  {
    question: "Как проходит первый визит?",
    answer:
      "Сначала мы уточняем ваш запрос, затем мастер объясняет этапы процедуры и подбирает подходящий формат. Наша задача — чтобы визит прошёл спокойно, понятно и без ощущения спешки.",
  },
  {
    question: "Можно ли перенести запись?",
    answer:
      "Да, запись можно перенести заранее. Лучше написать нам как можно раньше, чтобы мы успели подобрать новое удобное время и освободить окно для другого клиента.",
  },
];

const footerContacts = [
  { label: "Telegram", href: "https://t.me/", icon: "telegram", image: "/tg.png", scale: 1 },
  { label: "VK", href: "https://vk.com/", icon: "vk", image: "/vk.png", scale: 1 },
  { label: "Почта", href: "mailto:hello@clay-beauty.ru", icon: "mail", image: "/mail.png", scale: 1.2 },
  { label: "WhatsApp", href: "https://wa.me/79990000000", icon: "whatsapp", image: "/whatsapp.png", scale: 1 },
];

function App() {
  const [isSent, setIsSent] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [isServiceSelectOpen, setIsServiceSelectOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [workIndex, setWorkIndex] = useState(0);
  const [visibleWorks, setVisibleWorks] = useState(3);
  const [mastersScrollState, setMastersScrollState] = useState({ atStart: true, atEnd: false });
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);
  const mastersTrackRef = useRef(null);
  const worksTrackRef = useRef(null);
  const serviceSelectRef = useRef(null);

  useLayoutEffect(() => {
    const root = document.documentElement;
    let stableWidth = window.innerWidth;
    let stableHeight = window.innerHeight;

    const applyStableViewport = () => {
      root.style.setProperty("--app-stable-vh", `${stableHeight * 0.01}px`);
      root.classList.toggle("is-tall-mobile-viewport", stableWidth >= 390 && stableWidth <= 420 && stableHeight >= 800);
      root.classList.toggle("is-low-mobile-viewport", stableWidth <= 420 && stableHeight <= 720);
    };

    const refreshStableViewport = () => {
      const nextWidth = window.innerWidth;

      if (Math.abs(nextWidth - stableWidth) < 24) return;

      stableWidth = nextWidth;
      stableHeight = window.innerHeight;
      applyStableViewport();
    };

    const refreshAfterOrientation = () => {
      window.setTimeout(() => {
        stableWidth = window.innerWidth;
        stableHeight = window.innerHeight;
        applyStableViewport();
      }, 250);
    };

    applyStableViewport();
    window.addEventListener("resize", refreshStableViewport);
    window.visualViewport?.addEventListener("resize", refreshStableViewport);
    window.addEventListener("orientationchange", refreshAfterOrientation);

    return () => {
      window.removeEventListener("resize", refreshStableViewport);
      window.visualViewport?.removeEventListener("resize", refreshStableViewport);
      window.removeEventListener("orientationchange", refreshAfterOrientation);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -70px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const toggleFixedHeader = () => {
      setIsHeaderVisible(window.scrollY > 8);
    };

    toggleFixedHeader();
    window.addEventListener("scroll", toggleFixedHeader, { passive: true });
    window.addEventListener("resize", toggleFixedHeader);

    return () => {
      window.removeEventListener("scroll", toggleFixedHeader);
      window.removeEventListener("resize", toggleFixedHeader);
    };
  }, []);

  useEffect(() => {
    const closeMobileMenu = (event) => {
      if (event.type === "resize" && window.innerWidth > 1024) {
        setOpenMobileMenu(null);
      }

      if (event.type === "keydown" && event.key === "Escape") {
        setOpenMobileMenu(null);
      }
    };

    window.addEventListener("resize", closeMobileMenu);
    window.addEventListener("keydown", closeMobileMenu);

    return () => {
      window.removeEventListener("resize", closeMobileMenu);
      window.removeEventListener("keydown", closeMobileMenu);
    };
  }, []);

  useEffect(() => {
    if (!isServicesModalOpen) return undefined;
    const scrollY = window.scrollY;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsServicesModalOpen(false);
      }
    };

    document.body.classList.add("modal-open");
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isServicesModalOpen]);

  useEffect(() => {
    if (!isServiceSelectOpen) return undefined;

    const closeSelect = (event) => {
      if (event.key === "Escape") {
        setIsServiceSelectOpen(false);
      }

      if (event.type === "pointerdown" && !serviceSelectRef.current?.contains(event.target)) {
        setIsServiceSelectOpen(false);
      }
    };

    window.addEventListener("keydown", closeSelect);
    window.addEventListener("pointerdown", closeSelect);

    return () => {
      window.removeEventListener("keydown", closeSelect);
      window.removeEventListener("pointerdown", closeSelect);
    };
  }, [isServiceSelectOpen]);

  useEffect(() => {
    const updateVisibleWorks = () => {
      const nextVisible = window.innerWidth <= 680 ? 1 : window.innerWidth <= 1040 ? 2 : 3;
      setVisibleWorks(nextVisible);
      setWorkIndex((currentIndex) => Math.min(currentIndex, Math.max(galleryWorks.length - nextVisible, 0)));
    };

    updateVisibleWorks();
    window.addEventListener("resize", updateVisibleWorks);
    return () => window.removeEventListener("resize", updateVisibleWorks);
  }, []);

  useEffect(() => {
    const track = mastersTrackRef.current;
    if (!track) return undefined;

    const updateMastersScrollState = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      setMastersScrollState({
        atStart: track.scrollLeft <= 2,
        atEnd: maxScrollLeft <= 2 || track.scrollLeft >= maxScrollLeft - 2,
      });
    };

    updateMastersScrollState();
    track.addEventListener("scroll", updateMastersScrollState, { passive: true });
    window.addEventListener("resize", updateMastersScrollState);

    return () => {
      track.removeEventListener("scroll", updateMastersScrollState);
      window.removeEventListener("resize", updateMastersScrollState);
    };
  }, []);

  useEffect(() => {
    const track = worksTrackRef.current;
    const firstCard = track?.querySelector(".gallery-card");
    if (!track || !firstCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || "0");
    track.scrollTo({
      left: workIndex * (firstCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
      top: 0,
    });
  }, [workIndex, visibleWorks]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors = {};

    if (!String(formData.get("name") || "").trim()) {
      nextErrors.name = "Укажите имя, чтобы мы знали, как к вам обращаться.";
    }

    if (!String(formData.get("phone") || "").trim()) {
      nextErrors.phone = "Оставьте телефон для связи.";
    }

    if (!selectedService) {
      nextErrors.service = "Выберите услугу из списка.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setIsSent(false);
      setFormErrors(nextErrors);
      return;
    }

    setFormErrors({});
    setIsSent(true);
  };

  const scrollToBooking = () => {
    setIsServicesModalOpen(false);
    window.requestAnimationFrame(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const scrollMasters = (direction) => {
    const track = mastersTrackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.85, 620),
      behavior: "smooth",
    });
  };

  const maxWorkIndex = Math.max(galleryWorks.length - visibleWorks, 0);

  const changeWork = (direction) => {
    setWorkIndex((currentIndex) => Math.min(Math.max(currentIndex + direction, 0), maxWorkIndex));
  };

  return (
    <>
      <Header
        className={`topbar topbar--fixed${isHeaderVisible ? " is-visible" : ""}`}
        isMenuOpen={openMobileMenu === "fixed"}
        onMenuToggle={() => setOpenMobileMenu((currentMenu) => (currentMenu === "fixed" ? null : "fixed"))}
        onMenuClose={() => setOpenMobileMenu(null)}
      />
      <main className="page">
        <section className="hero-panel" id="top">
        <Header
          className="topbar topbar--hero"
          isMenuOpen={openMobileMenu === "hero"}
          onMenuToggle={() => setOpenMobileMenu((currentMenu) => (currentMenu === "hero" ? null : "hero"))}
          onMenuClose={() => setOpenMobileMenu(null)}
        />
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">СТУДИЯ КРАСОТЫ</p>
            <h1>
              Красота,
              <br />
              которая работает
              <br />
              на вас
            </h1>
            <div className="hero-action-group">
              <p>Современный уход, спокойная атмосфера и визуально точный результат под ваш образ.</p>
              <div className="hero-actions">
                <a className="primary-button" href="#contact">
                  Записаться <span>→</span>
                </a>
                <a className="inline-link" href="#services">
                  Смотреть услуги
                </a>
              </div>
            </div>
          </div>
          <img className="hero-image" src="/hero_image.png" alt="" aria-hidden="true" />
        </div>
        <Stats />
      </section>

      <section className="portfolio-panel" id="services" data-reveal>
        <div className="panel-head panel-head--light">
          <div>
            <p className="eyebrow">УСЛУГИ</p>
            <h2>Направления ухода</h2>
          </div>
        </div>
        <div className="work-row">
          {services.map((service, index) => (
            <article className="work-card" data-reveal style={{ "--delay": `${index * 70}ms` }} key={service.title}>
              <div className="work-image">
                <img src={service.image} alt="" loading="lazy" />
              </div>
              <div className="work-caption">
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <small>{service.label}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button className="ghost-button" type="button" onClick={() => setIsServicesModalOpen(true)}>
          Смотреть все услуги
        </button>
      </section>

      <section className="about-panel" id="about" data-reveal>
        <div className="about-copy">
          <p className="eyebrow">О СТУДИИ</p>
          <h2>Уход, который начинается с внимания</h2>
          <ul>
            {aboutItems.map((item, index) => (
              <li key={item} data-reveal style={{ "--delay": `${index * 80}ms` }}>
                <span>♡</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="video-card">
          <img src="/resepshen.png" alt="" loading="lazy" />
          <div className="visit-preview">
            <button className="play" type="button" aria-label="Посмотреть, как проходит визит">
              ▶
            </button>
            <p>Как проходит визит</p>
          </div>
        </div>
      </section>

      <section className="masters-panel" id="masters" data-reveal>
        <div className="masters-top">
          <div>
            <SectionHead eyebrow="МАСТЕРА" title="Мастера, которым доверяют" />
            <p className="masters-lead">
              Каждый специалист работает внимательно, аккуратно и с пониманием вашего запроса.
            </p>
          </div>
          <div className="masters-controls" aria-label="Навигация по мастерам">
            <button type="button" onClick={() => scrollMasters(-1)} disabled={mastersScrollState.atStart} aria-label="Предыдущие мастера">
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" onClick={() => scrollMasters(1)} disabled={mastersScrollState.atEnd} aria-label="Следующие мастера">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div className="masters-track" ref={mastersTrackRef}>
          {masters.map((master, index) => (
            <article className="master-card" data-reveal style={{ "--delay": `${index * 80}ms` }} key={master.name}>
              <div className="master-photo">
                <img src={master.image} alt={master.name} loading="lazy" />
              </div>
              <div className="master-info">
                <h3>{master.name}</h3>
                <p className="master-role">{master.role}</p>
                <p className="master-summary">
                  {master.specialty}
                  <span>Опыт {master.experience}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-panel" id="works" data-reveal>
        <div className="gallery-top">
          <div>
            <SectionHead eyebrow="РАБОТЫ" title="Эстетика в деталях" />
            <p className="gallery-lead">
              Результаты без лишней графики и перегруза — только аккуратные детали, которые подчёркивают естественность.
            </p>
          </div>
          <div className="gallery-controls" aria-label="Навигация по работам">
            <button type="button" onClick={() => changeWork(-1)} disabled={workIndex === 0} aria-label="Предыдущие работы">
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" onClick={() => changeWork(1)} disabled={workIndex === maxWorkIndex} aria-label="Следующие работы">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div className="gallery-viewport">
          <div className="gallery-track" ref={worksTrackRef}>
            {galleryWorks.map((work, index) => (
              <article className="gallery-card" data-reveal style={{ "--delay": `${index * 70}ms` }} key={work.title}>
                <div className="gallery-image">
                  <img src={work.image} alt="" loading="lazy" />
                </div>
                <div className="gallery-card-copy">
                  <span>{work.tag}</span>
                  <h3>{work.title}</h3>
                  <p>{work.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-panel" id="process" data-reveal>
        <SectionHead eyebrow="ПРОЦЕСС" title="Как проходит запись" />
        <div className="process-grid">
          {processSteps.map(([number, title, text], index) => (
            <article className="process-step" data-reveal style={{ "--delay": `${index * 80}ms` }} key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="process-line-number" aria-hidden="true">
                {number}
              </span>
            </article>
          ))}
        </div>
        <a className="process-cta" href="#contact">
          Записаться на визит
        </a>
      </section>

      <section className="reviews-panel" id="reviews" data-reveal>
        <SectionHead eyebrow="ОТЗЫВЫ" title="Что говорят клиенты" />
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <article className="review-card" data-reveal style={{ "--delay": `${index * 80}ms` }} key={review.author}>
              <span className="review-quote">“</span>
              <p>{review.text}</p>
              <div className="review-author">
                <span aria-hidden="true">{review.author[0]}</span>
                <div>
                  <strong>{review.author}</strong>
                  <small>{review.service}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-panel" data-reveal>
        <div className="faq-copy">
          <p className="eyebrow">FAQ</p>
          <h2>Частые вопросы</h2>
          <p>Собрали ответы на вопросы, которые чаще всего возникают перед первым визитом.</p>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index;

            return (
              <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}>
                  <span>{item.question}</span>
                  <i aria-hidden="true" />
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact-panel" id="contact" data-reveal>
        <div className="contact-copy">
          <p className="eyebrow">ЗАПИСЬ</p>
          <h2>Запишитесь на удобное время</h2>
          <p>Оставьте заявку — мы свяжемся с вами и подберём процедуру под ваш запрос.</p>
        </div>
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <input
            className={formErrors.name ? "is-invalid" : ""}
            type="text"
            name="name"
            placeholder="Имя"
            aria-invalid={Boolean(formErrors.name)}
            onInput={() => setFormErrors((errors) => ({ ...errors, name: "" }))}
          />
          {formErrors.name && <p className="field-message">{formErrors.name}</p>}
          <input
            className={formErrors.phone ? "is-invalid" : ""}
            type="tel"
            name="phone"
            placeholder="Телефон"
            aria-invalid={Boolean(formErrors.phone)}
            onInput={() => setFormErrors((errors) => ({ ...errors, phone: "" }))}
          />
          {formErrors.phone && <p className="field-message">{formErrors.phone}</p>}
          <div className={`select-field${isServiceSelectOpen ? " is-open" : ""}${formErrors.service ? " is-invalid" : ""}`} ref={serviceSelectRef}>
            <input type="hidden" name="service" value={selectedService} />
            <button
              className={`select-trigger${selectedService ? " has-value" : ""}`}
              type="button"
              aria-haspopup="listbox"
              aria-expanded={isServiceSelectOpen}
              onClick={() => setIsServiceSelectOpen((isOpen) => !isOpen)}
            >
              {selectedService || "Выберите услугу"}
            </button>
            <div className="select-menu" role="listbox" aria-label="Выбор услуги">
              {services.map((service) => (
                <button
                  className={selectedService === service.title ? "is-selected" : ""}
                  type="button"
                  role="option"
                  aria-selected={selectedService === service.title}
                  key={service.title}
                  onClick={() => {
                    setSelectedService(service.title);
                    setFormErrors((errors) => ({ ...errors, service: "" }));
                    setIsServiceSelectOpen(false);
                  }}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
          {formErrors.service && <p className="field-message">{formErrors.service}</p>}
          <textarea name="comment" placeholder="Комментарий" rows="4" />
          <button className="primary-button" type="submit">
            Отправить заявку
          </button>
          <p className={`form-message${isSent ? " is-success" : ""}`}>
            {isSent ? "Спасибо, заявка отправлена. Мы скоро свяжемся с вами." : "Ответим в течение рабочего дня."}
          </p>
        </form>
      </section>

      <footer className="footer-panel">
        <div className="footer-brand">
          <strong>Clay<span>.</span></strong>
          <p>Студия красоты и ухода</p>
          <a className="footer-brand-phone" href="tel:+79220121222">+7 922 012 12 22</a>
        </div>
        <div className="footer-schedule">
          <span>График работы</span>
          <strong>Пн–Вс с 9:00 до 23:00</strong>
        </div>
        <div className="footer-address">
          <span className="footer-info-label">Адрес</span>
          <span>г. Москва, ул. Архитекторов, 22</span>
        </div>
        <div className="footer-phone">
          <span className="footer-info-label">Телефон</span>
          <a href="tel:+79220121222">+7 922 012 12 22</a>
        </div>
        <div className="footer-contacts" aria-label="Контакты Clay">
          {footerContacts.map((item) => (
            <a
              className={`footer-contact footer-contact--${item.icon}`}
              href={item.href}
              aria-label={item.label}
              key={item.label}
            >
              <img
                className="contact-icon-image"
                src={item.image}
                alt=""
                loading="lazy"
                style={{ "--contact-image-scale": item.scale }}
              />
            </a>
          ))}
        </div>
        <p className="footer-copy">
          © 2026 Clay Beauty Studio.
          <br />
          Концепт для демонстрации дизайна.
        </p>
      </footer>
      </main>
      <ServicesModal isOpen={isServicesModalOpen} onClose={() => setIsServicesModalOpen(false)} onBook={scrollToBooking} />
    </>
  );
}

function Header({ className, isMenuOpen, onMenuToggle, onMenuClose }) {
  return (
    <header className={`${className}${isMenuOpen ? " is-menu-open" : ""}`}>
      <a className="brand" href="#top" onClick={onMenuClose}>
        Clay<span>.</span>
      </a>
      <nav>
        <a href="#about">О студии</a>
        <a href="#services">Услуги</a>
        <a href="#masters">Мастера</a>
        <a href="#works">Работы</a>
        <a href="#process">Процесс</a>
        <a href="#reviews">Отзывы</a>
        <a href="#contact">Контакты</a>
      </nav>
      <a className="topbar-button" href="#contact">
        Записаться
      </a>
      <button className="burger-button" type="button" aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={isMenuOpen} onClick={onMenuToggle}>
        <span />
        <span />
      </button>
      <div className="mobile-menu" aria-hidden={!isMenuOpen}>
        <a href="#about" onClick={onMenuClose}>О студии</a>
        <a href="#services" onClick={onMenuClose}>Услуги</a>
        <a href="#masters" onClick={onMenuClose}>Мастера</a>
        <a href="#works" onClick={onMenuClose}>Работы</a>
        <a href="#process" onClick={onMenuClose}>Процесс</a>
        <a href="#reviews" onClick={onMenuClose}>Отзывы</a>
        <a href="#contact" onClick={onMenuClose}>Контакты</a>
        <a className="mobile-menu-cta" href="#contact" onClick={onMenuClose}>Записаться</a>
        <div className="mobile-menu-info">
          <p>Пн–Вс с 9:00 до 23:00</p>
          <a href="tel:+79220121222">+7 922 012 12 22</a>
          <p>г. Москва, ул. Архитекторов, 22</p>
          <div className="mobile-menu-socials" aria-label="Контакты Clay">
            {footerContacts.map((item) => (
              <a className={`footer-contact footer-contact--${item.icon}`} href={item.href} aria-label={item.label} key={item.label}>
                <img
                  className="contact-icon-image"
                  src={item.image}
                  alt=""
                  loading="lazy"
                  style={{ "--contact-image-scale": item.scale }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function ServicesModal({ isOpen, onClose, onBook }) {
  if (!isOpen) return null;

  return (
    <div className="services-modal-overlay" onClick={onClose}>
      <section className="services-modal" role="dialog" aria-modal="true" aria-labelledby="services-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Закрыть окно" onClick={onClose}>
          ×
        </button>
        <div className="modal-head">
          <p className="eyebrow">ПРАЙС</p>
          <h2 id="services-modal-title">Все услуги Clay</h2>
        </div>
        <div className="price-grid">
          {servicePrices.map((group) => (
            <article className="price-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="price-list">
                {group.items.map(([name, price]) => (
                  <div className="price-row" key={name}>
                    <span>{name}</span>
                    <strong>{price}</strong>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <button className="primary-button modal-book-button" type="button" onClick={onBook}>
          Записаться на услугу
        </button>
      </section>
    </div>
  );
}

function SectionHead({ eyebrow, title }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function Stats() {
  return (
    <div className="stats-strip" data-reveal>
      {stats.map(({ value, label, Icon }) => (
        <div className="stat" key={label}>
          <span className="stat-icon">
            <Icon aria-hidden="true" strokeWidth={1.5} />
          </span>
          <div>
            <strong>{value}</strong>
            <p>{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
