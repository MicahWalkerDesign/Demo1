import { useEffect, useState, type FormEvent } from 'react';

type Lang = 'es' | 'en';

const asset = (filename: string) => `${import.meta.env.BASE_URL}assets/gesiemes/${filename}`;

const media = {
  logo: asset('logo-transparent.png'),
  pool: asset('swimming-pool.jpg'),
  lifeguard: asset('lifeguard-1.jpg'),
  lifeguardAlt: asset('lifeguard-2.jpg'),
  hotel: asset('hotel.jpg'),
  entertainment: asset('magician.jpg'),
  contact: asset('contact.jpg'),
  aqua: asset('aqua-fitness.jpg'),
  salsa: asset('salsa-premium.jpg'),
} as const;

const googleBusinessUrl =
  'https://www.google.com/maps/search/?api=1&query=Gesiemes+2017%2C+S.L.%2C+Carrer+de+Roger+de+Ll%C3%BAria+15%2C+43840+Salou';

const content = {
  es: {
    nav: ['Servicios', 'Cobertura', 'Nosotros', 'Empleo', 'Contacto'],
    proposal: 'Solicitar propuesta',
    heroTitle: 'Experiencias que los huéspedes recuerdan',
    heroBody:
      'Equipos cualificados para hoteles y resorts: seguridad acuática, animación, deporte y entretenimiento durante toda la temporada.',
    servicesCta: 'Ver servicios',
    customCta: 'Cuéntanos qué necesitas',
    proofHotels: 'hoteles en temporada',
    proofServices: 'servicios especializados',
    servicesTitle: 'Todo lo que tu hotel necesita para activar el verano',
    servicesBody:
      'Explora cada servicio para conocer perfiles, coberturas y opciones de contratación. Adaptamos el equipo al ritmo real de cada establecimiento.',
    coverageTitle: 'Cobertura real, hotel a hotel',
    coverageBody:
      'No trabajamos con una solución genérica. Empezamos por entender instalaciones, ocupación, horarios y perfil de huésped para dimensionar cada servicio.',
    coverageIntro:
      'Desde nuestra base en Salou coordinamos personal cualificado para hoteles, resorts y complejos turísticos en España.',
    processTitle: 'Así construimos cada cobertura',
    process: [
      ['01', 'Diagnóstico', 'Revisamos espacios, horarios, aforo, calendario y necesidades específicas del hotel.'],
      ['02', 'Selección y planificación', 'Asignamos perfiles adecuados, definimos turnos y dejamos claros los responsables y protocolos.'],
      ['03', 'Seguimiento', 'Mantenemos comunicación directa para resolver incidencias, refuerzos y cambios de ocupación.'],
    ],
    modesTitle: 'Opciones de cobertura',
    modes: [
      ['Temporada completa', 'Equipos estables durante los meses de mayor actividad.'],
      ['Refuerzos puntuales', 'Fines de semana, eventos y picos de ocupación.'],
      ['Aperturas y cierres', 'Apoyo al inicio o final de temporada.'],
      ['Programas especiales', 'Actividades o espectáculos diseñados para una necesidad concreta.'],
    ],
    aboutTitle: 'Personas preparadas. Hoteles mejor atendidos.',
    aboutBody:
      'GESIEMES proporciona personal cualificado y servicios para hoteles, resorts, complejos turísticos y centros de ocio. Más de 15 años de experiencia respaldan una forma de trabajar cercana, flexible y orientada al huésped.',
    quoteTitle: 'Lo que una buena colaboración debe sentirse',
    quoteNote: 'Ejemplos de valoración para sustituir por testimonios verificados del cliente.',
    quotes: [
      [
        '“Durante la temporada necesitamos respuestas rápidas. Tener una persona de contacto y los turnos bien definidos nos da mucha tranquilidad.”',
        'Dirección de hotel',
      ],
      [
        '“El equipo se integró con recepción y mantenimiento desde el primer día. Cuando cambió la ocupación, reorganizamos la cobertura sin complicaciones.”',
        'Responsable de operaciones',
      ],
      [
        '“Las actividades tienen ritmo, pero también se adaptan a cada familia. Los huéspedes saben qué ocurre y el equipo del hotel no tiene que perseguir información.”',
        'Resort familiar · Costa Daurada',
      ],
    ],
    customTitle: '¿Tienes algo diferente en mente?',
    customBody:
      'Si tu hotel necesita un perfil, actividad o formato que no aparece en la lista, cuéntanoslo. Podemos estudiar una propuesta a medida para la temporada.',
    careersTitle: 'Trabaja con nosotros',
    careersBody:
      'Buscamos personas responsables, comunicativas y con ganas de crear buenas experiencias. Envíanos tu candidatura para próximos equipos de temporada.',
    roles: ['Socorristas', 'Animadores/as', 'Monitores/as de fitness', 'Artistas y grupos'],
    apply: 'Enviar candidatura',
    applicationTitle: 'Candidatura de temporada',
    contactTitle: 'Hablemos de tu próxima temporada',
    contactBody:
      'Cuéntanos qué tipo de hotel tienes, fechas aproximadas y qué servicio necesitas. Te responderemos para entender el proyecto.',
    send: 'Enviar solicitud',
    sent: 'Solicitud preparada. En una web conectada, se enviaría al equipo comercial.',
    applicationSent: 'Candidatura preparada. En una web conectada, se enviaría al equipo de selección.',
    imprint: 'Información legal',
    privacy:
      'Responsable: GESIEMES 2017, SL. Finalidad: atender su solicitud y mantener una relación comercial. Puede ejercer sus derechos de acceso, rectificación, supresión, limitación y oposición escribiendo a info@gesiemes.com.',
  },
  en: {
    nav: ['Services', 'Coverage', 'About', 'Careers', 'Contact'],
    proposal: 'Request a proposal',
    heroTitle: 'Experiences guests remember',
    heroBody:
      'Qualified teams for hotels and resorts: aquatic safety, animation, sport, and entertainment throughout the season.',
    servicesCta: 'View services',
    customCta: 'Tell us what you need',
    proofHotels: 'hotels in season',
    proofServices: 'specialist services',
    servicesTitle: 'Everything your hotel needs to bring summer to life',
    servicesBody:
      'Explore each service to understand profiles, coverage, and hiring options. We adapt the team to the real rhythm of every property.',
    coverageTitle: 'Real coverage, hotel by hotel',
    coverageBody:
      'We do not use a generic solution. We start by understanding facilities, occupancy, schedules, and guest profile to size every service correctly.',
    coverageIntro:
      'From our base in Salou, we coordinate qualified staff for hotels, resorts, and tourism complexes across Spain.',
    processTitle: 'How we build each assignment',
    process: [
      ['01', 'Assessment', 'We review spaces, schedules, capacity, calendar, and each hotel’s specific requirements.'],
      ['02', 'Selection and planning', 'We assign suitable profiles, define shifts, and clarify responsibilities and protocols.'],
      ['03', 'Follow-up', 'We stay in direct contact to handle incidents, reinforcements, and occupancy changes.'],
    ],
    modesTitle: 'Coverage options',
    modes: [
      ['Full season', 'Stable teams throughout the busiest months.'],
      ['Targeted reinforcement', 'Weekends, events, and occupancy peaks.'],
      ['Opening and closing', 'Support at the start or end of the season.'],
      ['Special programmes', 'Activities or shows designed for a specific requirement.'],
    ],
    aboutTitle: 'Prepared people. Better-served hotels.',
    aboutBody:
      'GESIEMES provides qualified staff and services for hotels, resorts, tourism complexes, and leisure centres. More than 15 years of experience support a close, flexible, guest-focused way of working.',
    quoteTitle: 'What a strong partnership should feel like',
    quoteNote: 'Sample review copy to replace with verified client testimonials.',
    quotes: [
      [
        '“During the season we need quick answers. Having one point of contact and clearly defined shifts gives us real peace of mind.”',
        'Hotel management',
      ],
      [
        '“The team integrated with reception and maintenance from day one. When occupancy changed, we reorganised coverage without complications.”',
        'Operations manager',
      ],
      [
        '“Activities have energy but still adapt to each family. Guests know what is happening, and our hotel team does not have to chase information.”',
        'Family resort · Costa Daurada',
      ],
    ],
    customTitle: 'Have something different in mind?',
    customBody:
      'If your hotel needs a profile, activity, or format that is not listed, tell us. We can explore a tailored proposal for the season.',
    careersTitle: 'Work with us',
    careersBody:
      'We look for responsible, communicative people who want to create great experiences. Send your application for upcoming seasonal teams.',
    roles: ['Lifeguards', 'Activity leaders', 'Fitness instructors', 'Artists and groups'],
    apply: 'Send application',
    applicationTitle: 'Seasonal application',
    contactTitle: 'Let’s talk about your next season',
    contactBody:
      'Tell us about your hotel, approximate dates, and the service you need. We will reply to understand the project.',
    send: 'Send request',
    sent: 'Request prepared. On a connected website, it would be sent to the commercial team.',
    applicationSent: 'Application prepared. On a connected website, it would be sent to recruitment.',
    imprint: 'Legal information',
    privacy:
      'Controller: GESIEMES 2017, SL. Purpose: to respond to your request and maintain a commercial relationship. You may exercise your rights of access, rectification, erasure, restriction, and objection by writing to info@gesiemes.com.',
  },
} as const;

function getServices(lang: Lang) {
  return lang === 'es'
    ? [
        {
          title: 'Socorrismo acuático',
          intro: 'Seguridad profesional para piscinas, zonas acuáticas y espacios de ocio.',
          image: media.lifeguard,
          points: [
            'Personal con titulación aplicable y experiencia en entornos turísticos.',
            'Planificación de turnos según horarios, aforo y ocupación.',
            'Protocolos de prevención, vigilancia y respuesta ante incidencias.',
            'Cobertura para hoteles, resorts, parques acuáticos y centros de ocio.',
            'Contratos de temporada, sustituciones o refuerzos en momentos de demanda.',
          ],
        },
        {
          title: 'Animación infantil y familiar',
          intro: 'Programas de ocio que acompañan a familias y huéspedes durante toda la estancia.',
          image: media.entertainment,
          points: [
            'Mini club, juegos, talleres y actividades adaptadas por edades.',
            'Programación diurna y apoyo a eventos familiares.',
            'Equipos comunicativos con experiencia en atención al huésped.',
            'Calendarios ajustados al perfil, espacios y ritmo de cada hotel.',
            'Coordinación con recepción, restauración y dirección de operaciones.',
          ],
        },
        {
          title: 'Aqua fitness y actividades deportivas',
          intro: 'Bienestar, movimiento y participación con actividades accesibles para huéspedes.',
          image: media.aqua,
          points: [
            'Aqua gym, movilidad, estiramientos y sesiones dirigidas.',
            'Actividades de intensidad adaptable y enfoque inclusivo.',
            'Monitores con preparación deportiva y trato cercano.',
            'Programación semanal visible y fácil de comunicar al huésped.',
            'Sesiones especiales para grupos, eventos o semanas temáticas.',
          ],
        },
        {
          title: 'Música, espectáculos y entretenimiento',
          intro: 'Propuestas para noches, eventos y momentos especiales dentro del hotel.',
          image: media.salsa,
          points: [
            'Grupos musicales, artistas, shows y formatos de animación.',
            'Selección según público, espacio, presupuesto y horario.',
            'Programación puntual o calendario completo de temporada.',
            'Coordinación técnica y operativa con el establecimiento.',
            'Propuestas familiares, temáticas y para público adulto.',
          ],
        },
      ]
    : [
        {
          title: 'Aquatic lifeguarding',
          intro: 'Professional safety for pools, aquatic areas, and leisure facilities.',
          image: media.lifeguard,
          points: [
            'Staff with applicable qualifications and tourism-sector experience.',
            'Shift planning based on opening hours, capacity, and occupancy.',
            'Prevention, supervision, and incident-response protocols.',
            'Coverage for hotels, resorts, water parks, and leisure centres.',
            'Seasonal contracts, substitutions, or peak-demand reinforcement.',
          ],
        },
        {
          title: 'Children and family animation',
          intro: 'Leisure programmes that accompany families and guests throughout their stay.',
          image: media.entertainment,
          points: [
            'Mini club, games, workshops, and age-appropriate activities.',
            'Daytime programming and support for family events.',
            'Communicative teams experienced in guest care.',
            'Schedules adapted to each hotel’s audience, spaces, and pace.',
            'Coordination with reception, food service, and operations.',
          ],
        },
        {
          title: 'Aqua fitness and sport activities',
          intro: 'Wellbeing, movement, and participation through accessible guest activities.',
          image: media.aqua,
          points: [
            'Aqua gym, mobility, stretching, and instructor-led sessions.',
            'Adaptable intensity and an inclusive approach.',
            'Instructors with sporting knowledge and strong people skills.',
            'A visible weekly programme that is easy to communicate.',
            'Special sessions for groups, events, or themed weeks.',
          ],
        },
        {
          title: 'Music, shows, and entertainment',
          intro: 'Programming for evenings, events, and special moments at the hotel.',
          image: media.salsa,
          points: [
            'Music groups, artists, shows, and animation formats.',
            'Selection based on audience, space, budget, and schedule.',
            'One-off programming or a complete seasonal calendar.',
            'Technical and operational coordination with the property.',
            'Family, themed, and adult-oriented proposals.',
          ],
        },
      ];
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [lang, setLang] = useState<Lang>('es');
  const [menuOpen, setMenuOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [applicationSent, setApplicationSent] = useState(false);
  const t = content[lang];
  const services = getServices(lang);

  useEffect(() => {
    document.documentElement.lang = lang === 'es' ? 'es-ES' : 'en';
    document.title =
      lang === 'es'
        ? 'GESIEMES | Servicios para hoteles y resorts'
        : 'GESIEMES | Services for hotels and resorts';
  }, [lang]);

  const navTargets = ['services', 'coverage', 'about', 'careers', 'contact'];
  const handleSubmit = (event: FormEvent<HTMLFormElement>, type: 'contact' | 'career') => {
    event.preventDefault();
    if (type === 'contact') setContactSent(true);
    else setApplicationSent(true);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <button className="brand" type="button" onClick={() => scrollToId('top')} aria-label="GESIEMES">
          <img src={media.logo} alt="GESIEMES" />
        </button>

        <nav className="desktop-nav" aria-label={lang === 'es' ? 'Navegación principal' : 'Main navigation'}>
          {t.nav.map((label, index) => (
            <button key={label} type="button" onClick={() => scrollToId(navTargets[index])}>
              {label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Language">
            <button className={lang === 'es' ? 'is-active' : ''} type="button" onClick={() => setLang('es')}>
              ES
            </button>
            <span>/</span>
            <button className={lang === 'en' ? 'is-active' : ''} type="button" onClick={() => setLang('en')}>
              EN
            </button>
          </div>
          <button className="button button--primary header-cta" type="button" onClick={() => scrollToId('contact')}>
            {t.proposal}
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label={lang === 'es' ? 'Abrir menú' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>

        {menuOpen ? (
          <nav className="mobile-nav" aria-label={lang === 'es' ? 'Navegación móvil' : 'Mobile navigation'}>
            {t.nav.map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  scrollToId(navTargets[index]);
                  setMenuOpen(false);
                }}
              >
                {label}
              </button>
            ))}
            <button
              className="button button--primary"
              type="button"
              onClick={() => {
                scrollToId('contact');
                setMenuOpen(false);
              }}
            >
              {t.proposal}
            </button>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero__image" src={media.pool} alt={lang === 'es' ? 'Piscina de un resort junto al mar' : 'Seaside resort pool'} />
          <div className="hero__shade" />
          <div className="hero__content">
            <h1>{t.heroTitle}</h1>
            <p>{t.heroBody}</p>
            <div className="hero__actions">
              <button className="button button--primary" type="button" onClick={() => scrollToId('services')}>
                {t.servicesCta}
              </button>
              <button className="button button--outline-light" type="button" onClick={() => scrollToId('contact')}>
                {t.proposal}
              </button>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label={lang === 'es' ? 'Cifras principales' : 'Key figures'}>
          <div className="proof">
            <strong>28</strong>
            <span>{t.proofHotels}</span>
          </div>
          <div className="proof">
            <strong>4</strong>
            <span>{t.proofServices}</span>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading section-heading--wide">
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesBody}</p>
          </div>
          <div className="service-accordion">
            {services.map((service, index) => (
              <details className="service-item" key={service.title} open={index === 0}>
                <summary>
                  <img src={service.image} alt="" />
                  <span className="service-item__number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="service-item__summary">
                    <strong>{service.title}</strong>
                    <small>{service.intro}</small>
                  </span>
                  <span className="service-item__toggle" aria-hidden="true" />
                </summary>
                <div className="service-item__content">
                  <div className="service-item__media">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-item__details">
                    <p>{service.intro}</p>
                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <button className="text-link" type="button" onClick={() => scrollToId('contact')}>
                      {lang === 'es' ? 'Consultar este servicio' : 'Ask about this service'} <span>↗</span>
                    </button>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="coverage section" id="coverage">
          <div className="coverage__intro">
            <div className="section-heading">
              <h2>{t.coverageTitle}</h2>
              <p>{t.coverageBody}</p>
            </div>
            <div className="coverage__photo">
              <img src={media.hotel} alt={lang === 'es' ? 'Hotel atendido durante la temporada' : 'Hotel served during the season'} />
              <div className="coverage__photo-stat">
                <strong>28</strong>
                <span>{t.proofHotels}</span>
              </div>
            </div>
            <p className="coverage__intro-copy">{t.coverageIntro}</p>
          </div>

          <div className="coverage__process">
            <h3>{t.processTitle}</h3>
            <ol>
              {t.process.map(([number, title, body]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="coverage__modes">
            <h3>{t.modesTitle}</h3>
            <div className="coverage__mode-grid">
              {t.modes.map(([title, body]) => (
                <article key={title}>
                  <span aria-hidden="true">●</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about__image">
            <img src={media.lifeguardAlt} alt={lang === 'es' ? 'Profesional de GESIEMES en una piscina' : 'GESIEMES pool professional'} />
          </div>
          <div className="about__copy">
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutBody}</p>
            <div className="about__facts">
              <div>
                <strong>15+</strong>
                <span>{lang === 'es' ? 'años de experiencia' : 'years of experience'}</span>
              </div>
              <div>
                <strong>Salou</strong>
                <span>{lang === 'es' ? 'base de coordinación' : 'coordination base'}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews section">
          <div className="section-heading">
            <h2>{t.quoteTitle}</h2>
            <p className="sample-note">{t.quoteNote}</p>
          </div>
          <div className="review-grid">
            {t.quotes.map(([quote, author]) => (
              <blockquote key={author}>
                <p>{quote}</p>
                <footer>{author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="custom-request section">
          <img src={media.contact} alt="" />
          <div className="custom-request__glass">
            <div>
              <h2>{t.customTitle}</h2>
              <p>{t.customBody}</p>
            </div>
            <button className="button button--primary" type="button" onClick={() => scrollToId('contact')}>
              {t.customCta}
            </button>
          </div>
        </section>

        <section className="careers section" id="careers">
          <div className="careers__image">
            <img src={media.salsa} alt={lang === 'es' ? 'Espectáculo de salsa cubana en un resort' : 'Cuban salsa show at a resort'} />
          </div>
          <div className="careers__content">
            <h2>{t.careersTitle}</h2>
            <p>{t.careersBody}</p>
            <div className="role-list">
              {t.roles.map((role, index) => (
                <span key={role}>
                  <b>{String(index + 1).padStart(2, '0')}</b>
                  {role}
                </span>
              ))}
            </div>
            <button className="button button--dark" type="button" onClick={() => setCareerOpen((open) => !open)} aria-expanded={careerOpen}>
              {t.apply}
            </button>
          </div>

          {careerOpen ? (
            <form className="career-form" onSubmit={(event) => handleSubmit(event, 'career')}>
              <div className="form-heading">
                <h3>{t.applicationTitle}</h3>
                <button type="button" onClick={() => setCareerOpen(false)} aria-label={lang === 'es' ? 'Cerrar' : 'Close'}>
                  ×
                </button>
              </div>
              <div className="field-grid">
                <label>
                  <span>{lang === 'es' ? 'Nombre y apellidos' : 'Full name'}</span>
                  <input required name="name" autoComplete="name" />
                </label>
                <label>
                  <span>Email</span>
                  <input required type="email" name="email" autoComplete="email" />
                </label>
                <label>
                  <span>{lang === 'es' ? 'Perfil profesional' : 'Professional profile'}</span>
                  <select required name="role" defaultValue="">
                    <option value="" disabled>
                      {lang === 'es' ? 'Selecciona una opción' : 'Choose an option'}
                    </option>
                    {t.roles.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>{lang === 'es' ? 'Disponibilidad' : 'Availability'}</span>
                  <input name="availability" placeholder={lang === 'es' ? 'Fechas y zona' : 'Dates and area'} />
                </label>
              </div>
              <label>
                <span>{lang === 'es' ? 'Experiencia y titulaciones' : 'Experience and qualifications'}</span>
                <textarea required name="experience" rows={4} />
              </label>
              <label className="consent">
                <input required type="checkbox" />
                <span>{lang === 'es' ? 'Acepto el tratamiento de mis datos para gestionar esta candidatura.' : 'I accept the processing of my data to manage this application.'}</span>
              </label>
              <button className="button button--primary" type="submit">
                {t.apply}
              </button>
              {applicationSent ? <p className="form-success" role="status">{t.applicationSent}</p> : null}
            </form>
          ) : null}
        </section>

        <section className="contact section" id="contact">
          <div className="contact__copy">
            <h2>{t.contactTitle}</h2>
            <p>{t.contactBody}</p>
            <address>
              <a href="tel:+34658273162">+34 658 27 31 62</a>
              <a href="mailto:info@gesiemes.com">info@gesiemes.com</a>
              <a href={googleBusinessUrl} target="_blank" rel="noreferrer">
                Carrer de Roger de Llúria, 15<br />43840 Salou, Tarragona, España
              </a>
              <span>{lang === 'es' ? 'L–V 09:00–18:00 · S 10:00–14:00' : 'Mon–Fri 09:00–18:00 · Sat 10:00–14:00'}</span>
            </address>
          </div>
          <form className="contact-form" onSubmit={(event) => handleSubmit(event, 'contact')}>
            <div className="field-grid">
              <label>
                <span>{lang === 'es' ? 'Nombre y apellidos' : 'Full name'}</span>
                <input required name="name" autoComplete="name" />
              </label>
              <label>
                <span>Email</span>
                <input required type="email" name="email" autoComplete="email" />
              </label>
              <label>
                <span>{lang === 'es' ? 'Hotel o empresa' : 'Hotel or company'}</span>
                <input required name="company" autoComplete="organization" />
              </label>
              <label>
                <span>{lang === 'es' ? 'Teléfono' : 'Phone'}</span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
            </div>
            <label>
              <span>{lang === 'es' ? '¿Qué necesitas?' : 'What do you need?'}</span>
              <textarea required name="message" rows={5} />
            </label>
            <label className="consent">
              <input required type="checkbox" />
              <span>{t.privacy}</span>
            </label>
            <button className="button button--primary" type="submit">
              {t.send}
            </button>
            {contactSent ? <p className="form-success" role="status">{t.sent}</p> : null}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={media.logo} alt="GESIEMES" />
          <p>{lang === 'es' ? 'Servicios profesionales para hoteles y resorts.' : 'Professional services for hotels and resorts.'}</p>
          <a href="mailto:info@gesiemes.com">info@gesiemes.com</a>
        </div>
        <div className="footer-business">
          <h2>{lang === 'es' ? 'Ficha de empresa' : 'Business profile'}</h2>
          <address>
            <strong>Gesiemes 2017, S.L.</strong>
            <span>{lang === 'es' ? 'Servicio de empresa a empresa' : 'Business-to-business service'}</span>
            <span>NIF B55704852</span>
            <a href={googleBusinessUrl} target="_blank" rel="noreferrer">
              Carrer de Roger de Llúria, 15<br />
              43840 Salou, Tarragona
            </a>
            <a href="tel:+34658273162">+34 658 27 31 62</a>
            <a href="https://www.gesiemes.com/" target="_blank" rel="noreferrer">gesiemes.com</a>
            <a href={googleBusinessUrl} target="_blank" rel="noreferrer">
              5,0 ★ · 7 {lang === 'es' ? 'reseñas en Google' : 'Google reviews'}
            </a>
          </address>
        </div>
        <div className="footer-hours">
          <h2>{lang === 'es' ? 'Horario' : 'Hours'}</h2>
          <span>{lang === 'es' ? 'Lunes–viernes' : 'Monday–Friday'} <strong>09:00–18:00</strong></span>
          <span>{lang === 'es' ? 'Sábado' : 'Saturday'} <strong>10:00–14:00</strong></span>
          <span>{lang === 'es' ? 'Domingo' : 'Sunday'} <strong>{lang === 'es' ? 'Cerrado' : 'Closed'}</strong></span>
          <p>{lang === 'es' ? 'Servicios in situ · Citas online · Acceso adaptado' : 'On-site services · Online appointments · Accessible entrance'}</p>
          <a href={googleBusinessUrl} target="_blank" rel="noreferrer">
            {lang === 'es' ? 'Ver ficha y cómo llegar ↗' : 'View profile and directions ↗'}
          </a>
        </div>
        <div className="footer-links">
          <h2>{t.imprint}</h2>
          <a href="https://www.gesiemes.com/aviso-legal/" target="_blank" rel="noreferrer">
            {lang === 'es' ? 'Aviso legal' : 'Legal notice'}
          </a>
          <a href="https://www.gesiemes.com/politica-de-privacidad/" target="_blank" rel="noreferrer">
            {lang === 'es' ? 'Política de privacidad' : 'Privacy policy'}
          </a>
          <a href="https://www.gesiemes.com/politica-de-cookies/" target="_blank" rel="noreferrer">
            {lang === 'es' ? 'Política de cookies' : 'Cookie policy'}
          </a>
        </div>
        <p className="footer-bottom">© {new Date().getFullYear()} GESIEMES 2017, SL. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
      </footer>
    </div>
  );
}

export default App;
