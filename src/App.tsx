import { useEffect, useState, type ReactNode } from 'react';

type Lang = 'es' | 'en';
type Variant = 'portfolio' | 'internal' | 'marketing';

type Route = {
  view: 'home' | Variant;
  lang: Lang;
};

const copy = {
  es: {
    brand: 'GESIEMES',
    homeTitle: 'Tres formas de mostrar la marca.',
    homeSubtitle:
      'Elige el tipo de experiencia que quieres ver. Cada opción funciona en español e inglés y está pensada para un entorno hotelero real.',
    homeCta: 'Explorar mockup',
    backHome: 'Volver al inicio',
    switchTo: 'EN',
    switchLabel: 'Cambiar a inglés',
    selectorTitle: 'Selecciona una ruta',
    selectorBody:
      'Tres mockups distintos para explicar el negocio, apoyar al equipo interno o captar nuevos hoteles.',
    portfolioTitle: 'Portafolio puro',
    portfolioLead:
      'Una página centrada solo en lo que hacen: socorristas, animación infantil, fitness de grupo y entretenimiento para hoteles.',
    portfolioSubtitle:
      'Sin capas internas ni mensajes comerciales extra. La prioridad es mostrar valor visual y confianza.',
    internalTitle: 'Portafolio + recursos internos',
    internalLead:
      'La misma base de portfolio, pero con herramientas para el equipo: turnos, recursos, listas y seguimiento operativo.',
    internalSubtitle:
      'Pensado para coordinar al personal de temporada con menos fricción y más visibilidad.',
    marketingTitle: 'Portafolio + marketing',
    marketingLead:
      'Portfolio de servicio con bloques para captar nuevos hoteles y explicar la propuesta a decisores comerciales.',
    marketingSubtitle:
      'Orientado a vender mejor la temporada, las zonas y la cobertura por hotel.',
    heroKicker: 'España · Hoteles · Verano',
    portfolioStats: [
      { value: '28', label: 'hoteles activos' },
      { value: '4', label: 'servicios clave' },
      { value: '100%', label: 'en temporada' },
    ],
    internalStats: [
      { value: '14', label: 'turnos visibles' },
      { value: '6', label: 'recursos internos' },
      { value: '24/7', label: 'soporte operativo' },
    ],
    marketingStats: [
      { value: '3', label: 'zonas objetivo' },
      { value: '12', label: 'argumentos comerciales' },
      { value: '1', label: 'CTA principal' },
    ],
    sections: {
      portfolio: {
        one: 'Socorristas acuáticos',
        two: 'Animación infantil y familiar',
        three: 'Fitness de grupo',
        four: 'Música y entretenimiento',
        callout:
          'La página debe sentirse como una vitrina editorial de verano: clara, fresca y con prueba visual real.',
      },
      internal: {
        one: 'Horario semanal',
        two: 'Checklists de apertura',
        three: 'Incidencias y cobertura',
        four: 'Material de onboarding',
        callout:
          'Una capa interna con acceso rápido a lo que el equipo necesita para operar mejor cada día.',
      },
      marketing: {
        one: 'Captación de hoteles',
        two: 'Campañas por región',
        three: 'Casos y resultados',
        four: 'Landing de contacto',
        callout:
          'Más foco comercial, más urgencia y una narrativa pensada para abrir conversaciones con nuevos clientes.',
      },
    },
    panels: {
      intro: 'Vitrina principal',
      support: 'Bloque secundario',
      footer: 'Hecho para móvil y escritorio',
    },
    card: 'Abrir experiencia',
  },
  en: {
    brand: 'GESIEMES',
    homeTitle: 'Three ways to present the brand.',
    homeSubtitle:
      'Choose the experience you want to see. Each option works in English and Spanish and is shaped for a real hotel context.',
    homeCta: 'Open mockup',
    backHome: 'Back home',
    switchTo: 'ES',
    switchLabel: 'Switch to Spanish',
    selectorTitle: 'Choose a route',
    selectorBody:
      'Three different mockups to showcase the business, support the internal team, or win new hotels.',
    portfolioTitle: 'Pure portfolio',
    portfolioLead:
      'A page focused only on what they do: lifeguards, children’s animation, group fitness, and hotel entertainment.',
    portfolioSubtitle:
      'No internal layers, no extra sales messaging. The priority is to show visual value and trust.',
    internalTitle: 'Portfolio + internal resources',
    internalLead:
      'The same portfolio base, but with tools for the team: shifts, resources, checklists, and operational tracking.',
    internalSubtitle:
      'Designed to coordinate seasonal staff with less friction and better visibility.',
    marketingTitle: 'Portfolio + marketing',
    marketingLead:
      'A service portfolio with blocks focused on acquiring new hotels and explaining the offer to commercial decision-makers.',
    marketingSubtitle:
      'Built to sell the season, the regions, and the coverage hotel by hotel.',
    heroKicker: 'Spain · Hotels · Summer',
    portfolioStats: [
      { value: '28', label: 'active hotels' },
      { value: '4', label: 'core services' },
      { value: '100%', label: 'in season' },
    ],
    internalStats: [
      { value: '14', label: 'visible shifts' },
      { value: '6', label: 'internal tools' },
      { value: '24/7', label: 'ops support' },
    ],
    marketingStats: [
      { value: '3', label: 'target regions' },
      { value: '12', label: 'sales angles' },
      { value: '1', label: 'primary CTA' },
    ],
    sections: {
      portfolio: {
        one: 'Lifeguards',
        two: 'Children and family animation',
        three: 'Group fitness',
        four: 'Music and entertainment',
        callout:
          'The page should feel like a summer editorial showcase: clear, fresh, and backed by real visuals.',
      },
      internal: {
        one: 'Weekly rota',
        two: 'Opening checklists',
        three: 'Incidents and coverage',
        four: 'Onboarding material',
        callout:
          'An internal layer with fast access to everything the team needs to operate better every day.',
      },
      marketing: {
        one: 'Hotel acquisition',
        two: 'Regional campaigns',
        three: 'Cases and results',
        four: 'Contact landing page',
        callout:
          'More commercial focus, more urgency, and a narrative designed to start conversations with new clients.',
      },
    },
    panels: {
      intro: 'Primary showcase',
      support: 'Secondary layer',
      footer: 'Built for mobile and desktop',
    },
    card: 'Open experience',
  },
} as const;

const routes: Record<Variant, { es: string; en: string }> = {
  portfolio: {
    es: 'Portfolio puro',
    en: 'Pure portfolio',
  },
  internal: {
    es: 'Portfolio + recursos internos',
    en: 'Portfolio + internal resources',
  },
  marketing: {
    es: 'Portfolio + marketing',
    en: 'Portfolio + marketing',
  },
};

const routeMeta: Record<
  Variant,
  {
    accent: string;
    glow: string;
    shape: string;
  }
> = {
  portfolio: {
    accent: '#EB9035',
    glow: 'rgba(235, 144, 53, 0.18)',
    shape: 'linear-gradient(135deg, rgba(235,144,53,0.18), rgba(50,129,188,0.12))',
  },
  internal: {
    accent: '#A1B03B',
    glow: 'rgba(161, 176, 59, 0.20)',
    shape: 'linear-gradient(135deg, rgba(161,176,59,0.18), rgba(69,79,100,0.12))',
  },
  marketing: {
    accent: '#3281BC',
    glow: 'rgba(50,129,188,0.18)',
    shape: 'linear-gradient(135deg, rgba(50,129,188,0.18), rgba(169,45,79,0.12))',
  },
};

const asset = (filename: string) => `${import.meta.env.BASE_URL}assets/gesiemes/${filename}`;

const media = {
  logo: asset('logo.png'),
  pool: asset('swimming-pool.jpg'),
  poolAlt: asset('lifeguard-2.jpg'),
  lifeguard: asset('lifeguard-1.jpg'),
  hotel: asset('hotel.jpg'),
  magician: asset('magician.jpg'),
  contact: asset('contact.jpg'),
  coding: asset('coding-icon.jpg'),
} as const;

function parseRoute(): Route {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const [path, queryString] = hash.split('?');
  const params = new URLSearchParams(queryString ?? '');
  const lang = params.get('lang') === 'en' ? 'en' : 'es';

  if (path === '/' || path === '') {
    return { view: 'home', lang };
  }
  if (path.includes('internal')) {
    return { view: 'internal', lang };
  }
  if (path.includes('marketing')) {
    return { view: 'marketing', lang };
  }
  return { view: 'portfolio', lang };
}

function useRoute() {
  const [route, setRoute] = useState<Route>(() => parseRoute());

  useEffect(() => {
    const onChange = () => setRoute(parseRoute());
    window.addEventListener('hashchange', onChange);
    window.addEventListener('popstate', onChange);
    return () => {
      window.removeEventListener('hashchange', onChange);
      window.removeEventListener('popstate', onChange);
    };
  }, []);

  return route;
}

function goTo(path: string) {
  window.location.hash = path;
}

function toggleLang(current: Lang) {
  return current === 'es' ? 'en' : 'es';
}

function buildPath(view: 'home' | Variant, lang: Lang) {
  const base = view === 'home' ? '/' : `/${view}`;
  return `${base}?lang=${lang}`;
}

function App() {
  const route = useRoute();
  const lang = route.lang;
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'es' ? 'es-ES' : 'en';
    document.title =
      route.view === 'home'
        ? `GESIEMES Demo1 | ${lang === 'es' ? 'Selector' : 'Selector'}`
        : `GESIEMES Demo1 | ${routes[route.view][lang]}`;
  }, [lang, route.view]);

  return (
    <div className="app-shell">
      <Ambient />
      {route.view === 'home' ? (
        <header className="topbar topbar--home">
          <button
            className="brand"
            type="button"
            onClick={() => goTo(buildPath('home', lang))}
            aria-label={lang === 'es' ? 'Volver al inicio' : 'Go home'}
          >
            <span className="brand-mark">
              <img src={media.logo} alt="" />
            </span>
            <span className="brand-name">{t.brand}</span>
          </button>
          <nav className="topnav" aria-label="Primary">
            <button type="button" onClick={() => goTo(buildPath('portfolio', lang))}>
              {lang === 'es' ? 'Portfolio' : 'Portfolio'}
            </button>
            <button type="button" onClick={() => goTo(buildPath('internal', lang))}>
              {lang === 'es' ? 'Equipo' : 'Team'}
            </button>
            <button type="button" onClick={() => goTo(buildPath('marketing', lang))}>
              {lang === 'es' ? 'Crecimiento' : 'Growth'}
            </button>
          </nav>
          <div className="topbar-actions">
            <button
              className="lang-toggle lang-toggle--light"
              type="button"
              onClick={() => goTo(buildPath(route.view, toggleLang(lang)))}
              aria-label={t.switchLabel}
            >
              <span>{lang.toUpperCase()}</span>
              <span>{t.switchTo}</span>
            </button>
            <button className="primary primary--small" type="button" onClick={() => goTo(buildPath('marketing', lang))}>
              {lang === 'es' ? 'Solicitar propuesta' : 'Request proposal'}
            </button>
          </div>
        </header>
      ) : (
        <header className="topbar">
          <button
            className="brand"
            type="button"
            onClick={() => goTo(buildPath('home', lang))}
            aria-label={lang === 'es' ? 'Volver al inicio' : 'Go home'}
          >
            <span className="brand-mark">
              <img src={media.logo} alt="" />
            </span>
            <span className="brand-name">{t.brand}</span>
          </button>
          <div className="topbar-actions">
            <button className="ghost" type="button" onClick={() => goTo(buildPath('home', lang))}>
              {t.backHome}
            </button>
            <button
              className="lang-toggle"
              type="button"
              onClick={() => goTo(buildPath(route.view, toggleLang(lang)))}
              aria-label={t.switchLabel}
            >
              <span>{lang.toUpperCase()}</span>
              <span>{t.switchTo}</span>
            </button>
          </div>
        </header>
      )}

      {route.view === 'home' ? (
        <HomeView lang={lang} />
      ) : (
        <MockupView lang={lang} variant={route.view} />
      )}
    </div>
  );
}

function HomeView({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <main className="home-page">
      <section className="concept-hero">
        <div className="concept-hero__copy">
          <p className="kicker">{t.heroKicker}</p>
          <h1>
            {lang === 'es' ? (
              <>
                Hacemos que cada estancia sea <em>inolvidable</em>
              </>
            ) : (
              <>
                We make every stay <em>unforgettable</em>
              </>
            )}
          </h1>
          <p className="lede">
            {lang === 'es'
              ? 'Animación, deporte y bienestar para hoteles que buscan experiencias memorables y equipos fiables.'
              : 'Animation, sport, and wellbeing for hotels that want memorable experiences and reliable teams.'}
          </p>
          <div className="hero-actions">
            <button
              className="primary"
              type="button"
              onClick={() => document.getElementById('options')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {lang === 'es' ? 'Explorar las 3 propuestas' : 'Explore the 3 concepts'}
            </button>
            <button className="hero-link" type="button" onClick={() => goTo(buildPath('portfolio', lang))}>
              {lang === 'es' ? 'Ver portfolio' : 'View portfolio'}
              <span aria-hidden="true">↗</span>
            </button>
          </div>
          <div className="hero-signals">
            {[
              lang === 'es' ? 'Equipos especializados' : 'Specialist teams',
              lang === 'es' ? 'Seguridad y cumplimiento' : 'Safety and compliance',
              lang === 'es' ? 'Cobertura en 28 hoteles' : 'Coverage across 28 hotels',
              lang === 'es' ? 'Experiencias que generan valor' : 'Experiences that create value',
            ].map((item) => (
              <div className="hero-signal" key={item}>
                <span className="hero-signal__icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="concept-hero__media">
          <div className="concept-hero__showcase">
            <div className="concept-hero__showcase-main">
              <img src={media.pool} alt="" />
              <div className="concept-hero__glass concept-hero__glass--anchor">
                <img src={media.logo} alt="" />
                <strong>{lang === 'es' ? '28 hoteles en verano' : '28 summer hotels'}</strong>
                <span>{lang === 'es' ? 'Socorristas, animación y entretenimiento' : 'Lifeguards, animation, and entertainment'}</span>
              </div>
            </div>
            <div className="concept-hero__stack">
              <article className="concept-hero__glass concept-hero__glass--photo">
                <img src={media.lifeguard} alt="" />
                <span>{lang === 'es' ? 'Cobertura segura' : 'Safe coverage'}</span>
              </article>
              <article className="concept-hero__glass concept-hero__glass--photo">
                <img src={media.hotel} alt="" />
                <span>{lang === 'es' ? 'Experiencia hotelera' : 'Hotel experience'}</span>
              </article>
              <article className="concept-hero__glass concept-hero__glass--label">
                <img src={media.magician} alt="" />
                <div>
                  <strong>{lang === 'es' ? 'Entretenimiento' : 'Entertainment'}</strong>
                  <span>{lang === 'es' ? 'Música, shows y equipos de animación' : 'Music, shows, and animation teams'}</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="selector-section" id="options">
        <div className="selector-section__heading">
          <p className="selector-eyebrow">{lang === 'es' ? 'Accede a tu espacio' : 'Access your space'}</p>
          <h2>{lang === 'es' ? 'Elige tu ruta / Choose your path' : 'Choose your path / Elige tu ruta'}</h2>
          <p>
            {lang === 'es'
              ? 'Tres espacios, un mismo objetivo: hacer crecer la experiencia en tu hotel.'
              : 'Three spaces, one objective: grow the guest experience at your hotel.'}
          </p>
        </div>

        <div className="selector-grid selector-grid--home">
          {(Object.keys(routes) as Variant[]).map((variant, index) => (
            <button
              key={variant}
              type="button"
              className={`selector-card selector-card--${variant} selector-card--home`}
              onClick={() => goTo(buildPath(variant, lang))}
            >
              <div className="selector-card__head">
                <div className={`selector-card__badge selector-card__badge--${variant}`}>
                  {variant === 'portfolio' ? '◻' : variant === 'internal' ? '◫' : '↗'}
                </div>
                <div>
                  <div className="selector-card__eyebrow">
                    {index + 1}. {lang === 'es' ? routes[variant].es : routes[variant].en}
                  </div>
                  <div className="selector-card__subeyebrow">
                    {lang === 'es' ? labelsEs[variant] : labelsEn[variant]}
                  </div>
                </div>
              </div>
              <div className={`selector-card__preview selector-card__preview--${variant}`}>
                {variant === 'portfolio' ? (
                  <>
                    <img src={media.pool} alt="" />
                    <div className="selector-card__preview-chip">{lang === 'es' ? 'Portfolio visual' : 'Visual portfolio'}</div>
                  </>
                ) : variant === 'internal' ? (
                  <>
                    <img src={media.hotel} alt="" />
                    <div className="preview-sidebar" />
                    <div className="preview-grid">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="selector-card__preview-chip selector-card__preview-chip--dark">
                      {lang === 'es' ? 'Herramientas internas' : 'Internal tools'}
                    </div>
                  </>
                ) : (
                  <>
                    <img src={media.contact} alt="" />
                    <div className="preview-chart" />
                    <div className="preview-map" />
                    <div className="selector-card__preview-chip">{lang === 'es' ? 'Captación comercial' : 'Commercial growth'}</div>
                  </>
                )}
              </div>
              <p className="selector-card__body">
                {variant === 'portfolio'
                  ? lang === 'es'
                    ? 'Explora quiénes somos, lo que hacemos y cómo se vive la experiencia.'
                    : 'Explore who they are, what they do, and how the experience feels.'
                  : variant === 'internal'
                    ? lang === 'es'
                      ? 'Accede a herramientas, calendarios, manuales y comunicaciones internas.'
                      : 'Access tools, calendars, manuals, and internal communication.'
                    : lang === 'es'
                      ? 'Recursos y herramientas para captar nuevos hoteles y solicitudes de propuesta.'
                      : 'Resources and tools to win new hotels and handle proposal requests.'}
              </p>
              <span className="selector-card__link">
                {lang === 'es'
                  ? variant === 'portfolio'
                    ? 'Entrar al portafolio / Enter portfolio'
                    : variant === 'internal'
                      ? 'Entrar al área interna / Enter internal area'
                      : 'Entrar a marketing / Enter marketing area'
                  : variant === 'portfolio'
                    ? 'Enter portfolio / Entrar al portafolio'
                    : variant === 'internal'
                      ? 'Enter internal area / Entrar al área interna'
                      : 'Enter marketing area / Entrar a marketing'}
              </span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

const labelsEs: Record<Variant, string> = {
  portfolio: 'Solo vitrina, solo portfolio.',
  internal: 'Añade recursos internos para el equipo.',
  marketing: 'Añade una capa comercial para captar hoteles.',
};

const labelsEn: Record<Variant, string> = {
  portfolio: 'Showcase only, no extra layers.',
  internal: 'Add internal resources for the team.',
  marketing: 'Add a commercial layer to win new hotels.',
};

function MockupView({ lang, variant }: { lang: Lang; variant: Variant }) {
  const t = copy[lang];
  const variantCopy = t.sections[variant];
  const meta = routeMeta[variant];
  const stagePhotos: Record<Variant, { main: string; secondary: string; tertiary: string; badge: string }> = {
    portfolio: {
      main: media.pool,
      secondary: media.lifeguard,
      tertiary: media.magician,
      badge: media.logo,
    },
    internal: {
      main: media.hotel,
      secondary: media.poolAlt,
      tertiary: media.lifeguard,
      badge: media.coding,
    },
    marketing: {
      main: media.contact,
      secondary: media.hotel,
      tertiary: media.pool,
      badge: media.magician,
    },
  };
  const stage = stagePhotos[variant];

  return (
    <main className="mockup-page">
      <section className="mockup-hero">
        <div className="mockup-hero__copy">
          <p className="kicker">{t.heroKicker}</p>
          <h1>{copy[lang][`${variant}Title` as const]}</h1>
          <p className="lede">{copy[lang][`${variant}Lead` as const]}</p>
          <p className="subtle">{copy[lang][`${variant}Subtitle` as const]}</p>
          <div className="stat-row">
            {(
              copy[lang][`${variant}Stats` as const] as unknown as ReadonlyArray<{
                value: string;
                label: string;
              }>
            ).map(
              (stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ),
            )}
          </div>
        </div>

        <div
          className="mockup-visual"
          style={{ ['--accent' as never]: meta.accent, ['--glow' as never]: meta.glow } as React.CSSProperties}
        >
          <div className="mockup-visual__top">
            <span>{t.panels.intro}</span>
            <span>{variant.toUpperCase()}</span>
          </div>
          <div className={`hero-art hero-art--${variant}`}>
            <div className="hero-art__rail" style={{ background: meta.shape }}>
              <img src={stage.main} alt="" />
            </div>
            <div className="hero-art__card hero-art__card--primary">
              <div className="hero-art__eyebrow">{variant === 'portfolio' ? t.panels.intro : variant === 'internal' ? t.panels.support : t.panels.intro}</div>
              <div className="hero-art__title">{variantCopy.one}</div>
              <div className="hero-art__subtitle">{variantCopy.callout}</div>
              <div className="hero-art__pill-row">
                <span>{variantCopy.two}</span>
                <span>{variantCopy.three}</span>
              </div>
            </div>
            <div className="hero-art__stack">
              <article className="hero-art__mini hero-art__mini--photo">
                <img src={stage.secondary} alt="" />
                <span>{variantCopy.two}</span>
              </article>
              <article className="hero-art__mini hero-art__mini--photo">
                <img src={stage.tertiary} alt="" />
                <span>{variantCopy.three}</span>
              </article>
              <article className="hero-art__mini hero-art__mini--badge">
                <img src={stage.badge} alt="" />
                <span>{variantCopy.four}</span>
              </article>
            </div>
          </div>
          <div className="mockup-visual__footer">
            <span>{t.panels.footer}</span>
            <a href={`#/${variant}?lang=${lang}`}>{lang === 'es' ? 'Abrir vista completa' : 'Open full view'}</a>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="section-band__heading">
          <h2>{variant === 'portfolio' ? 'Portfolio' : variant === 'internal' ? 'Equipo' : 'Growth'}</h2>
          <p>{variantCopy.callout}</p>
        </div>
        <div className="feature-grid">
          <FeatureCard
            title={lang === 'es' ? 'Presencia clara' : 'Clear presence'}
            body={
              lang === 'es'
                ? 'Un recorrido visual para hoteles que quieren comunicar rapidez, confianza y experiencia.'
                : 'A visual journey for hotels that wants to communicate speed, trust, and experience.'
            }
            accent={meta.accent}
          />
          <FeatureCard
            title={lang === 'es' ? 'Sistema flexible' : 'Flexible system'}
            body={
              lang === 'es'
                ? 'El mismo núcleo sirve para portfolio, coordinación interna o captación comercial.'
                : 'The same core works for portfolio, internal coordination, or commercial acquisition.'
            }
            accent={meta.accent}
          />
          <FeatureCard
            title={lang === 'es' ? 'Listo para móvil' : 'Mobile ready'}
            body={
              lang === 'es'
                ? 'Pensado para responsables de hotel que revisan y responden desde el móvil.'
                : 'Designed for hotel managers who review and reply from mobile first.'
            }
            accent={meta.accent}
          />
        </div>
      </section>

      {variant === 'portfolio' ? (
        <PortfolioSections lang={lang} />
      ) : variant === 'internal' ? (
        <InternalSections lang={lang} />
      ) : (
        <MarketingSections lang={lang} />
      )}
    </main>
  );
}

function FeatureCard({ title, body, accent }: { title: string; body: string; accent: string }) {
  return (
    <article className="feature-card">
      <div className="feature-card__line" style={{ background: accent }} />
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function SectionBlock({
  eyebrow,
  title,
  body,
  children,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className={`story-section ${reverse ? 'story-section--reverse' : ''}`}>
      <div className="story-section__heading">
        <p className="selector-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="story-section__content">{children}</div>
    </section>
  );
}

function PortfolioSections({ lang }: { lang: Lang }) {
  return (
    <>
      <SectionBlock
        eyebrow={lang === 'es' ? 'Servicios en temporada' : 'In-season services'}
        title={
          lang === 'es'
            ? 'Una vitrina de servicios clara y fácil de leer'
            : 'A clear service showcase that is easy to scan'
        }
        body={
          lang === 'es'
            ? 'Los cuatro servicios principales se entienden de inmediato, con una narrativa pensada para hoteles y resorts.'
            : 'The four core services are instantly readable, with a narrative made for hotels and resorts.'
        }
      >
        <div className="service-grid">
          {[
            {
              title: lang === 'es' ? 'Socorristas' : 'Lifeguards',
              image: media.lifeguard,
              body:
                lang === 'es'
                  ? 'Supervisión, seguridad y cobertura de piscina con foco en confianza operativa.'
                  : 'Pool supervision, safety, and coverage with operational trust built in.',
            },
            {
              title: lang === 'es' ? 'Animación infantil' : 'Children animation',
              image: media.magician,
              body:
                lang === 'es'
                  ? 'Actividades familiares, juegos y mini clubs que activan la estancia.'
                  : 'Family activities, games, and mini clubs that energize the stay.',
            },
            {
              title: lang === 'es' ? 'Fitness de grupo' : 'Group fitness',
              image: media.poolAlt,
              body:
                lang === 'es'
                  ? 'Clases dinámicas, bienestar y energía durante toda la temporada.'
                  : 'Dynamic classes, wellness, and energy throughout the season.',
            },
            {
              title: lang === 'es' ? 'Música y shows' : 'Music and shows',
              image: media.contact,
              body:
                lang === 'es'
                  ? 'Entretenimiento nocturno, equipos de animación y grupos para eventos.'
                  : 'Evening entertainment, animation teams, and groups for events.',
            },
          ].map((item, index) => (
            <article className="service-card" key={item.title}>
              <div className="service-card__media">
                <img src={item.image} alt="" />
                <span className="service-card__badge">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow={lang === 'es' ? 'Operación y cobertura' : 'Operations and coverage'}
        title={
          lang === 'es'
            ? 'La estructura detrás de los 28 hoteles'
            : 'The structure behind 28 hotels'
        }
        body={
          lang === 'es'
            ? 'Un sistema flexible para temporada alta: turnos, seguridad, visibilidad y coordinación con hotel.'
            : 'A flexible high-season system: shifts, safety, visibility, and hotel coordination.'
        }
        reverse
      >
        <div className="coverage-layout">
          <div className="coverage-card coverage-card--text">
            <strong>{lang === 'es' ? 'Cobertura real' : 'Real coverage'}</strong>
            <p>
              {lang === 'es'
                ? 'El sitio muestra una oferta concreta, con espacio para explicar cómo se cubren piscinas, animación y eventos sin perder calidad.'
                : 'The site shows a concrete offer, with room to explain how pools, animation, and events are covered without losing quality.'}
            </p>
            <ul>
              <li>{lang === 'es' ? 'Planificación por hotel' : 'Hotel-by-hotel planning'}</li>
              <li>{lang === 'es' ? 'Coordinación por turnos' : 'Shift coordination'}</li>
              <li>{lang === 'es' ? 'Lenguaje comercial claro' : 'Clear commercial language'}</li>
            </ul>
          </div>
          <div className="coverage-map">
            <img src={media.pool} alt="" />
            <div className="coverage-map__overlay">
              {['01', '07', '12', '18', '21', '28'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="coverage-card coverage-card--stats">
            <div>
              <strong>28</strong>
              <span>{lang === 'es' ? 'hoteles' : 'hotels'}</span>
            </div>
            <div>
              <strong>4</strong>
              <span>{lang === 'es' ? 'servicios' : 'services'}</span>
            </div>
            <div>
              <strong>1</strong>
              <span>{lang === 'es' ? 'sistema' : 'system'}</span>
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow={lang === 'es' ? 'Prueba social' : 'Social proof'}
        title={
          lang === 'es' ? 'Mensajes que ayudan a cerrar acuerdos' : 'Messages that help close deals'
        }
        body={
          lang === 'es'
            ? 'Un portfolio fuerte necesita confianza visible. Aquí entran testimonios, cobertura y resultados.'
            : 'A strong portfolio needs visible trust. This is where testimonials, coverage, and results fit.'
        }
      >
        <div className="quote-grid">
          {[
            {
              quote:
                lang === 'es'
                  ? 'Equipo puntual, energía alta y una experiencia que los huéspedes realmente recuerdan.'
                  : 'Punctual team, high energy, and an experience guests genuinely remember.',
              source: lang === 'es' ? 'Director de hotel' : 'Hotel director',
            },
            {
              quote:
                lang === 'es'
                  ? 'Nos ayudaron a mantener la piscina y la animación con una coordinación muy sencilla.'
                  : 'They helped us run pool coverage and animation with very simple coordination.',
              source: lang === 'es' ? 'Responsable de operaciones' : 'Operations manager',
            },
            {
              quote:
                lang === 'es'
                  ? 'Su propuesta es clara y comercialmente muy fácil de explicar al cliente final.'
                  : 'Their offer is clear and very easy to explain to the final client.',
              source: lang === 'es' ? 'Partner comercial' : 'Commercial partner',
            },
          ].map((item) => (
            <blockquote className="quote-card" key={item.source}>
              <p>{item.quote}</p>
              <footer>{item.source}</footer>
            </blockquote>
          ))}
        </div>
      </SectionBlock>

      <section className="cta-band">
        <div>
          <p className="selector-eyebrow">{lang === 'es' ? 'Siguiente paso' : 'Next step'}</p>
          <h2>{lang === 'es' ? 'Portfolio listo para presentar a hoteles' : 'Portfolio ready to present to hotels'}</h2>
        </div>
        <button className="primary" type="button" onClick={() => goTo(buildPath('marketing', lang))}>
          {lang === 'es' ? 'Ver versión comercial' : 'See the commercial version'}
        </button>
      </section>
    </>
  );
}

function InternalSections({ lang }: { lang: Lang }) {
  return (
    <>
      <SectionBlock
        eyebrow={lang === 'es' ? 'Panel operativo' : 'Ops dashboard'}
        title={
          lang === 'es'
            ? 'Una capa interna para coordinar mejor la temporada'
            : 'An internal layer to coordinate the season better'
        }
        body={
          lang === 'es'
            ? 'La misma marca, pero con una interfaz pensada para turnos, incidencias y soporte al equipo.'
            : 'Same brand, but with an interface designed for shifts, incidents, and team support.'
        }
      >
        <div className="dashboard-shell">
          <aside className="dashboard-nav">
            <span className="dashboard-nav__brand">GESIEMES</span>
            <button className="dashboard-nav__item dashboard-nav__item--active">{lang === 'es' ? 'Resumen' : 'Overview'}</button>
            <button className="dashboard-nav__item">{lang === 'es' ? 'Turnos' : 'Shifts'}</button>
            <button className="dashboard-nav__item">{lang === 'es' ? 'Checklist' : 'Checklist'}</button>
            <button className="dashboard-nav__item">{lang === 'es' ? 'Mensajes' : 'Messages'}</button>
            <button className="dashboard-nav__item">{lang === 'es' ? 'Formación' : 'Training'}</button>
          </aside>
          <div className="dashboard-main">
            <div className="dashboard-main__hero">
              <img src={media.hotel} alt="" />
              <div className="dashboard-main__hero-card">
                <span>{lang === 'es' ? 'Hoy' : 'Today'}</span>
                <strong>{lang === 'es' ? 'Equipo cubierto' : 'Coverage ready'}</strong>
                <p>{lang === 'es' ? 'Bloque interno para ver turnos y avisos en un vistazo.' : 'Internal block to see shifts and notices at a glance.'}</p>
              </div>
            </div>
            <div className="dashboard-metrics">
              {[
                [lang === 'es' ? 'Hoteles activos' : 'Active hotels', '28'],
                [lang === 'es' ? 'Incidencias' : 'Incidents', '6'],
                [lang === 'es' ? 'Cobertura hoy' : 'Coverage today', '92%'],
                [lang === 'es' ? 'Equipos' : 'Teams', '14'],
              ].map(([label, value]) => (
                <div className="dashboard-metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="shift-rail">
              {[
                [lang === 'es' ? 'Apertura piscina' : 'Pool opening', '08:00', '09:30'],
                [lang === 'es' ? 'Animación mini club' : 'Mini club animation', '10:00', '13:00'],
                [lang === 'es' ? 'Fitness / aqua' : 'Fitness / aqua', '11:00', '12:00'],
                [lang === 'es' ? 'Show nocturno' : 'Evening show', '20:00', '22:30'],
              ].map(([label, start, end]) => (
                <div className="shift-row" key={label}>
                  <span>{label}</span>
                  <span>{start}</span>
                  <span>{end}</span>
                </div>
              ))}
            </div>
            <div className="dashboard-main__gallery">
              <img src={media.lifeguard} alt="" />
              <img src={media.poolAlt} alt="" />
              <img src={media.coding} alt="" />
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow={lang === 'es' ? 'Recursos internos' : 'Internal resources'}
        title={lang === 'es' ? 'Manuales, listas y materiales de onboarding' : 'Manuals, checklists, and onboarding materials'}
        body={
          lang === 'es'
            ? 'Toda la información clave agrupada para que el equipo actúe con menos dependencia y más rapidez.'
            : 'All the key information grouped so the team can act with less dependency and more speed.'
        }
        reverse
      >
        <div className="resource-grid">
          {[
            lang === 'es' ? 'Manual de apertura' : 'Opening manual',
            lang === 'es' ? 'Checklist diario' : 'Daily checklist',
            lang === 'es' ? 'Guía de seguridad' : 'Safety guide',
            lang === 'es' ? 'Kit de bienvenida' : 'Welcome kit',
          ].map((title, index) => (
            <article className="resource-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>
                {lang === 'es'
                  ? 'Acceso rápido para que el equipo abra, revise y entregue el servicio con el mismo estándar.'
                  : 'Quick access so the team can open, review, and deliver the service to the same standard.'}
              </p>
              <img src={index % 2 === 0 ? media.lifeguard : media.hotel} alt="" />
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow={lang === 'es' ? 'Comunicación y soporte' : 'Communication and support'}
        title={lang === 'es' ? 'Avisos claros y seguimiento del día' : 'Clear notices and day-to-day follow-up'}
        body={
          lang === 'es'
            ? 'Mensajes breves, decisiones rápidas y una capa visual que reduce fricción operativa.'
            : 'Short messages, fast decisions, and a visual layer that reduces operational friction.'
        }
      >
        <div className="notice-grid">
          <article className="notice-card notice-card--wide">
            <p>{lang === 'es' ? 'Aviso del día' : 'Today’s notice'}</p>
            <h3>{lang === 'es' ? 'Cambio de turno a las 17:30' : 'Shift change at 5:30 PM'}</h3>
            <span>{lang === 'es' ? 'Revisar cobertura antes del briefing.' : 'Review coverage before briefing.'}</span>
          </article>
          <article className="notice-card">
            <p>{lang === 'es' ? 'WhatsApp interno' : 'Internal WhatsApp'}</p>
            <h3>+34 600 111 222</h3>
            <span>{lang === 'es' ? 'Soporte rápido para la temporada.' : 'Fast seasonal support.'}</span>
          </article>
          <article className="notice-card">
            <p>{lang === 'es' ? 'Formación' : 'Training'}</p>
            <h3>{lang === 'es' ? 'Nueva sesión mañana' : 'New session tomorrow'}</h3>
            <span>{lang === 'es' ? 'Material para nuevos incorporados.' : 'Material for new joiners.'}</span>
          </article>
        </div>
      </SectionBlock>

      <section className="cta-band">
        <div>
          <p className="selector-eyebrow">{lang === 'es' ? 'Equipo' : 'Team'}</p>
          <h2>{lang === 'es' ? 'Un sitio que ayuda a operar' : 'A site that helps the operation'}</h2>
        </div>
        <button className="primary" type="button" onClick={() => goTo(buildPath('marketing', lang))}>
          {lang === 'es' ? 'Ver versión de marketing' : 'See the marketing version'}
        </button>
      </section>
    </>
  );
}

function MarketingSections({ lang }: { lang: Lang }) {
  return (
    <>
      <SectionBlock
        eyebrow={lang === 'es' ? 'Captación comercial' : 'Commercial acquisition'}
        title={
          lang === 'es' ? 'Un sitio pensado para abrir conversaciones' : 'A site designed to start conversations'
        }
        body={
          lang === 'es'
            ? 'La experiencia comercial necesita más urgencia, más prueba y una entrada clara hacia la solicitud de propuesta.'
            : 'The commercial experience needs more urgency, more proof, and a clear entry point into proposal requests.'
        }
      >
        <div className="region-grid">
          {[
            {
              region: 'Costa',
              value: lang === 'es' ? 'Hoteles de playa y resorts' : 'Beach hotels and resorts',
              image: media.pool,
            },
            {
              region: 'Interior',
              value: lang === 'es' ? 'Programas familiares y de relax' : 'Family and relaxation programs',
              image: media.hotel,
            },
            {
              region: 'Islas',
              value: lang === 'es' ? 'Cobertura alta en temporada' : 'High seasonal coverage',
              image: media.lifeguard,
            },
          ].map((item) => (
            <article className="region-card" key={item.region}>
              <span>{item.region}</span>
              <img src={item.image} alt="" />
              <h3>{item.value}</h3>
              <p>
                {lang === 'es'
                  ? 'Propuesta comercial alineada con la realidad de contratación hotelera.'
                  : 'Commercial offer aligned with hotel procurement realities.'}
              </p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow={lang === 'es' ? 'Casos de éxito' : 'Case studies'}
        title={lang === 'es' ? 'Bloques listos para vender el valor' : 'Blocks ready to sell the value'}
        body={
          lang === 'es'
            ? 'Cada caso puede explicar cobertura, resultado y confianza de forma breve.'
            : 'Each case can explain coverage, outcome, and trust in a concise way.'
        }
        reverse
      >
        <div className="case-grid">
          {[
            [lang === 'es' ? 'Un hotel, tres servicios' : 'One hotel, three services', '28% +', media.hotel],
            [lang === 'es' ? 'Estrategia por temporada' : 'Seasonal strategy', '12 semanas', media.pool],
            [lang === 'es' ? 'Recontratación' : 'Rebooking', '92%', media.contact],
          ].map(([title, metric, image]) => (
            <article className="case-card" key={title}>
              <img src={image as string} alt="" />
              <div className="case-card__metric">{metric}</div>
              <h3>{title}</h3>
              <p>
                {lang === 'es'
                  ? 'Un formato ideal para demostrar continuidad, capacidad y calidad del servicio.'
                  : 'An ideal format to show continuity, capacity, and service quality.'}
              </p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow={lang === 'es' ? 'Contacto' : 'Contact'}
        title={lang === 'es' ? 'Formulario corto, respuesta rápida' : 'Short form, fast response'}
        body={
          lang === 'es'
            ? 'Reducir fricción es clave: fecha, hotel, servicio y teléfono.'
            : 'Reducing friction is key: date, hotel, service, and phone.'
        }
      >
        <div className="contact-panel">
          <div className="contact-copy">
            <img src={media.contact} alt="" />
            <strong>{lang === 'es' ? 'Solicita propuesta' : 'Request a proposal'}</strong>
            <p>
              {lang === 'es'
                ? 'Ideal para captar nuevos hoteles con una ruta clara hacia presupuesto y seguimiento comercial.'
                : 'Ideal for acquiring new hotels with a clear route to pricing and commercial follow-up.'}
            </p>
            <button className="primary" type="button">
              {lang === 'es' ? 'Abrir formulario' : 'Open form'}
            </button>
          </div>
          <div className="contact-form">
            <div className="contact-form__art">
              <img src={media.magician} alt="" />
            </div>
            <div className="form-row">
              <span>{lang === 'es' ? 'Nombre del hotel' : 'Hotel name'}</span>
            </div>
            <div className="form-row">
              <span>{lang === 'es' ? 'Servicio solicitado' : 'Requested service'}</span>
            </div>
            <div className="form-row">
              <span>{lang === 'es' ? 'Temporada' : 'Season'}</span>
            </div>
            <div className="form-row form-row--cta">
              <span>{lang === 'es' ? 'Enviar solicitud' : 'Send request'}</span>
            </div>
          </div>
        </div>
      </SectionBlock>

      <section className="cta-band">
        <div>
          <p className="selector-eyebrow">{lang === 'es' ? 'Marketing' : 'Marketing'}</p>
          <h2>{lang === 'es' ? 'Listo para vender a nuevos hoteles' : 'Ready to sell to new hotels'}</h2>
        </div>
        <button className="primary" type="button" onClick={() => goTo(buildPath('portfolio', lang))}>
          {lang === 'es' ? 'Ver portafolio' : 'See the portfolio'}
        </button>
      </section>
    </>
  );
}

function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__blob ambient__blob--one" />
      <div className="ambient__blob ambient__blob--two" />
      <div className="ambient__grain" />
    </div>
  );
}

export default App;
