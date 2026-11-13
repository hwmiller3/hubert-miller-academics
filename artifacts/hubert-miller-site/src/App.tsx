import { useEffect, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Download, ExternalLink, FileText, Mail, Orbit, Quote } from 'lucide-react';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';
import './site.css';

const ORCID = 'https://orcid.org/0009-0003-7250-315X';
const DOI = 'https://doi.org/10.1016/j.copsyc.2024.101851';
const publicFile = (file: string) => `${import.meta.env.BASE_URL}files/${file}`;
const CV = publicFile('hubert-miller-cv.pdf');
const PROFILE = publicFile('hubert-miller-profile.jpeg');
const FEATURED_FIGURE = publicFile('fins-model.png');
const FEATURED_PAPER = publicFile('fins-review-2024.pdf');
const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'About | Hubert W. Miller III', description: 'Hubert W. Miller III is a PhD student and Graduate Teaching Assistant in Communication Science at Michigan State University.' },
  '/research': { title: 'Research | Hubert W. Miller III', description: 'Research interests and publications on organizational communication, innovation diffusion, social norms, and strategic communication.' },
  '/cv': { title: 'Curriculum Vitae | Hubert W. Miller III', description: 'View and download the curriculum vitae of Hubert W. Miller III.' },
  '/contact': { title: 'Contact | Hubert W. Miller III', description: 'Professional contact information for Hubert W. Miller III at Michigan State University.' },
};

function IconLink({ href, children, external = false, className = '' }: { href: string; children: ReactNode; external?: boolean; className?: string }) {
  return <a className={`text-link ${className}`} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}{external && <ArrowUpRight aria-hidden="true" size={14} />}</a>;
}

function Header() {
  const [path] = useLocation();
  const nav = [['/', 'About'], ['/research', 'Research'], ['/cv', 'CV'], ['/contact', 'Contact']];
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="wordmark" aria-label="Hubert W. Miller III, home">
        <span className="wordmark-mark" aria-hidden="true">HM</span><span>Hubert W. Miller III</span>
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        {nav.map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined} className={`nav-link ${path === href ? 'active' : ''}`}>{label}</Link>)}
      </nav>
      <a className="header-email" href="mailto:millerhu@msu.edu"><Mail size={15} aria-hidden="true" /><span>Email</span></a>
    </div>
  </header>;
}

function Footer() {
  return <footer className="footer">
    <div className="footer-inner">
      <p>Hubert W. Miller III <span className="footer-dot">·</span> Communication Science</p>
      <p>Michigan State University <span className="footer-dot">·</span> <a href={ORCID} target="_blank" rel="noopener noreferrer">ORCID <ArrowUpRight size={12} aria-hidden="true" /></a></p>
    </div>
  </footer>;
}

function PageFrame({ children }: { children: ReactNode }) {
  return <div className="site-wrap grain"><Header />{children}<Footer /></div>;
}

function SectionLabel({ children, number }: { children: ReactNode; number?: string }) {
  return <div className="section-label">{number && <span className="section-number">{number}</span>}<span>{children}</span></div>;
}

function Home() {
  return <PageFrame>
    <main className="page-enter">
      <section className="hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Communication Science · Michigan State University</p>
          <h1 className="display">Communication<br /><em>moves things.</em></h1>
          <p className="hero-deck">I study how ideas travel through organizations and communities—and how trust, social norms, and strategic communication shape what people choose to do.</p>
          <div className="hero-actions">
            <Link href="/research" className="button button-primary">Explore my research <ArrowRight size={16} aria-hidden="true" /></Link>
            <a href={CV} className="button button-quiet" download>Download CV <Download size={15} aria-hidden="true" /></a>
            <IconLink href={ORCID} external className="hero-profile-link">ORCID profile</IconLink>
          </div>
          <div className="hero-status"><span className="status-dot" /> PhD student & Graduate Teaching Assistant <span className="status-divider">/</span> MSU Department of Communication</div>
        </div>
        <figure className="portrait-block">
          <img className="portrait" src={PROFILE} alt="Hubert W. Miller III, smiling in a checkered shirt" />
          <figcaption><span>East Lansing, Michigan</span><span>Academic profile <span aria-hidden="true">↗</span></span></figcaption>
          <div className="portrait-stamp" aria-hidden="true">COMMUNICATION<br />SCIENCE<br /><span>MSU</span></div>
        </figure>
        <div className="hero-index" aria-hidden="true">01 / 04</div>
      </section>

      <section className="intro-section content-grid">
        <SectionLabel number="01">About</SectionLabel>
        <div className="intro-copy">
          <h2 className="display">A career in energy.<br /><em>A question about people.</em></h2>
          <p>I am a PhD student in Communication Science and a Graduate Teaching Assistant in the Department of Communication at Michigan State University. Before doctoral study, I spent just over two decades in Michigan’s utility sector.</p>
          <p>That work made visible how communication within groups and teams builds relationships, informs decisions, and helps turn decisions into action. I now bring that experience to questions about how information diffuses through organizations, the role of trust in persuasion, and the ways social norms shape the adoption of innovations.</p>
          <p>My academic path includes a BA in Economics and master’s degrees in Applied Economics, Mathematics, and Public Policy.</p>
          <IconLink href="/contact" className="arrow-link">Get in touch <ArrowRight size={15} aria-hidden="true" /></IconLink>
        </div>
      </section>

      <section className="interest-band">
        <div className="interest-heading"><p className="eyebrow">Questions I return to</p><h2 className="display">Ideas in motion.</h2></div>
        <div className="interest-list">
          <div className="interest-item"><span>01</span><div><h3>Diffusion of Innovations</h3><p>How an idea moves through social systems—and what helps it take hold.</p></div></div>
          <div className="interest-item"><span>02</span><div><h3>Organizational Communication</h3><p>How communication patterns shape coordination, relationships, and change.</p></div></div>
          <div className="interest-item"><span>03</span><div><h3>Strategic Communication</h3><p>How messages and their framing influence understanding and action.</p></div></div>
          <div className="interest-item"><span>04</span><div><h3>Environmental & Energy Communication</h3><p>How trust, norms, and communication connect to energy and environmental decisions.</p></div></div>
        </div>
      </section>

      <section className="program-section content-grid">
        <SectionLabel number="02">Research program</SectionLabel>
        <div className="program-body">
          <div>
            <h2 className="display">From the utility sector<br />to the social system.</h2>
            <p>My research connects organizational life with the wider systems in which innovations are introduced. I am interested in how communication and trust shape adoption, how incentives can alter social norms over time, and how strategic communication can help people make sense of change.</p>
          </div>
          <div className="program-note"><Orbit size={21} aria-hidden="true" /><p>One guiding question</p><blockquote>How does trust in an electric utility shape public acceptance of large solar farms in a community?</blockquote></div>
          <Link href="/research" className="text-link arrow-link">Read about my research <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="featured-preview">
        <div className="preview-top"><SectionLabel number="03">Featured publication</SectionLabel><span className="publication-year">2024</span></div>
        <div className="preview-main">
          <div className="preview-art"><img src={FEATURED_FIGURE} alt="Diagram of the FINS model, showing feedback among decisions and actions, outcomes, and social norms, with interventions and moderators." /></div>
          <div className="preview-copy">
            <p className="eyebrow">Review · Current Opinion in Psychology</p>
            <h2 className="display">Persuasive communication, financial incentives, and social norms</h2>
            <p>A review of the financial incentives in normative systems (FINS) model: how incentives can change behavior directly, influence norms indirectly, and interact with communication over time.</p>
            <Link href="/research" className="text-link arrow-link">Read the study story <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div><p className="eyebrow">Curriculum vitae</p><h2 className="display">The work, in full.</h2></div>
        <p>Academic background, teaching, professional experience, publications, and regulatory proceedings.</p>
        <Link href="/cv" className="button button-dark">View CV <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>
    </main>
  </PageFrame>;
}

function Research() {
  return <PageFrame>
    <main className="page-enter inner-page">
      <section className="page-heading">
        <p className="eyebrow">Research / 02</p>
        <h1 className="display">Communication<br /><em>in systems.</em></h1>
        <p className="page-lede">My work asks how communication shapes what people notice, what they believe others do, and how innovations move across organizations and communities.</p>
      </section>

      <section className="theme-section">
        <SectionLabel number="01">Research areas</SectionLabel>
        <div className="theme-grid">
          <article className="theme-card theme-large"><span>01 / DIFFUSION</span><h2 className="display">How innovations travel</h2><p>Diffusion of Innovations offers a way to think about the movement of ideas and practices through a social system. I am interested in organizational and community contexts, and the role trust and communication play in adoption.</p></article>
          <article className="theme-card"><span>02 / ORGANIZATIONS</span><h2 className="display">Communication at work</h2><p>My utility-sector experience informs questions about how people coordinate, build relationships, and make decisions within organizations.</p></article>
          <article className="theme-card"><span>03 / STRATEGY & NORMS</span><h2 className="display">Messages, incentives, norms</h2><p>Strategic communication can shape how people interpret incentives and social norms—and how those interpretations affect action.</p></article>
          <article className="theme-card theme-wide"><span>04 / ENVIRONMENT & ENERGY</span><h2 className="display">Public choices about energy</h2><p>Environmental and energy communication connects my prior work in Michigan’s utility sector to questions of public trust, innovation, and the communication surrounding community-level change.</p><span className="theme-footnote">Research focus listed on CV</span></article>
        </div>
      </section>

      <section className="featured-study">
        <div className="study-heading">
          <SectionLabel number="02">Featured study</SectionLabel>
          <span className="study-type">Review article <span>·</span> 2024</span>
        </div>
        <div className="study-title-row">
          <h2 className="display">Persuasive communication,<br /><em>financial incentives, and social norms: Interactions and effects on behaviors</em></h2>
          <p className="study-byline">Maria Knight Lapinski, John M. Kerr, Hubert W. Miller, Moonsun Jeon & Kayla Tracey</p>
        </div>
        <div className="study-story">
          <div className="study-narrative">
            <article className="story-block">
              <h3><span>01</span> Purpose & question</h3>
              <p>This 2024 review introduces and discusses the <strong>financial incentives in normative systems (FINS) model</strong>. It asks whether introducing financial incentives can form, change, reinforce, or undermine social norms—and how strategic communication about incentives and norms can influence people’s responses.</p>
            </article>
            <article className="story-block">
              <h3><span>02</span> Why it matters</h3>
              <p>Incentives may prompt an immediate action, but their effects can reach beyond the person receiving a payment. When people see behavior changing, they may update their sense of what others commonly do or approve. These norm shifts can shape later behavior and may persist after an incentive ends.</p>
            </article>
            <article className="story-block">
              <h3><span>03</span> Review approach</h3>
              <p>The authors synthesize and discuss the FINS framework alongside prior research on social norms, incentives, and communication. The article is a conceptual review: <strong>it reports no new participant sample and uses no single empirical method as its own study.</strong></p>
            </article>
            <article className="story-block">
              <h3><span>04</span> What the review concludes</h3>
              <p>The framework links incentives to decisions and actions directly, and to social norms indirectly. It also highlights that incentives can change how strongly norms influence behavior. Carefully framed communication—shaped with attention to context and stakeholder input—may help improve desired outcomes and reduce unintended ones. The model is heuristic; further testing and refinement are needed.</p>
            </article>
          </div>
          <aside className="study-aside">
            <div className="plain-language">
              <p className="eyebrow">In plain language</p>
              <p className="display">An incentive can change what one person does now—and what a group comes to expect later.</p>
              <p>Financial incentives may act directly on someone’s choices. If enough people respond, others can notice and revise their sense of what is common or approved. Those social norms can then influence future choices, even when the incentive is gone.</p>
            </div>
            <div className="doi-card">
              <span className="eyebrow">The article</span>
              <p>Current Opinion in Psychology<br />Volume 59 · Article 101851</p>
              <IconLink href={FEATURED_PAPER} external>Open supplied PDF</IconLink>
              <IconLink href={DOI} external>Open article DOI <ArrowUpRight size={13} aria-hidden="true" /></IconLink>
            </div>
          </aside>
        </div>
        <figure className="model-figure">
          <div className="figure-image"><img src={FEATURED_FIGURE} alt="The FINS model: financial interventions can affect decisions and actions directly and social norms directly; actions influence outcomes, while feedback links connect actions and norms over time. Moderators include incentives, group identity, group orientation, and outcome expectations." /></div>
          <figcaption>The financial incentives in normative systems (FINS) model.</figcaption>
        </figure>
        <div className="reviewed-results">
          <div className="reviewed-label"><Quote size={18} aria-hidden="true" /><span>Evidence discussed<br />in the review</span></div>
          <div><p>The article summarizes findings from other studies—not new results from its own sample. For example, it describes a cited public-goods experiment in which incentives increased contributions, while the effect of perceived descriptive norms weakened over time and remained weakened after the incentive ended.</p><p>It also discusses reviewed studies where incentives combined with descriptive-norm messages were more effective than either alone in certain consumer-motivation and natural-resource-management contexts. These are findings of the cited studies as reported in the review, not findings from the review article itself.</p></div>
        </div>
      </section>

      <section className="publications-section">
        <div className="publications-header"><SectionLabel number="03">Selected publications</SectionLabel><p>Published work, forthcoming chapters, and work under review are distinguished below.</p></div>
        <div className="publication-list">
          <article className="publication-entry"><span className="pub-year">2026<br /><small>forthcoming</small></span><div><p className="pub-kind">Encyclopedia chapter · Co-authored with James Dearing</p><h3>“Diffusion of Innovations”</h3><p>In Craig & Kim (Eds.), forthcoming edition of <em>International Encyclopedia of Communication Theory and Philosophy</em>.</p></div><span className="pub-status">Forthcoming</span></article>
          <article className="publication-entry"><span className="pub-year">2025<br /><small>forthcoming</small></span><div><p className="pub-kind">Book chapter · Co-authored with James Dearing</p><h3>“Designing Complex Health Innovations for Dissemination and Diffusion”</h3><p>Chapter 29, in Richards & Rahm-Halberg (Eds.), forthcoming edition of <em>Complex Interventions in Health</em>.</p></div><span className="pub-status">Forthcoming</span></article>
          <article className="publication-entry"><span className="pub-year">2024</span><div><p className="pub-kind">Refereed review article · Current Opinion in Psychology</p><h3>“Persuasive Communication, Financial Incentives, And Social Norms: Interactions and Effects on Behaviors”</h3><p>Lapinski, M., Kerr, J., Miller, H., Jeon, M., & Tracey, K. <em>Current Opinion in Psychology, 59</em>, 101851.</p><IconLink href={DOI} external>https://doi.org/10.1016/j.copsyc.2024.101851 <ArrowUpRight size={13} aria-hidden="true" /></IconLink></div><span className="pub-status published">Published</span></article>
          <article className="publication-entry under-review"><span className="pub-year">Under<br /><small>review</small></span><div><p className="pub-kind">Manuscript under review · Not published</p><h3>“Signaling Organizational and Peer Support to Promote Intra-Organizational Adoption of Innovations”</h3><p>Miller III, H., Larson, R. S., Dearing, J. W., & Lapinski, M.</p></div><span className="pub-status review">Under review</span></article>
        </div>
      </section>
      <section className="research-bottom"><p>See academic background, teaching, and professional experience in the full CV.</p><Link className="button button-primary" href="/cv">View curriculum vitae <ArrowRight size={16} aria-hidden="true" /></Link></section>
    </main>
  </PageFrame>;
}

function CVPage() {
  return <PageFrame>
    <main className="page-enter inner-page cv-page">
      <section className="page-heading cv-heading">
        <p className="eyebrow">Curriculum vitae / 03</p>
        <h1 className="display">The work,<br /><em>in full.</em></h1>
        <p className="page-lede">Academic background, teaching, professional experience, publications, and selected regulatory proceedings.</p>
        <div className="cv-actions"><a className="button button-primary" href={CV} download><Download size={16} aria-hidden="true" /> Download CV</a><a className="button button-outline" href={CV} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} aria-hidden="true" /> Open in new tab</a></div>
      </section>
      <section className="cv-viewer" aria-label="Curriculum vitae PDF">
        <div className="viewer-bar"><div><span className="viewer-indicator" /> <FileText size={15} aria-hidden="true" /> Hubert W. Miller III — Curriculum Vitae</div><a href={CV} target="_blank" rel="noopener noreferrer">Open document <ArrowUpRight size={13} aria-hidden="true" /></a></div>
        <iframe title="Hubert W. Miller III curriculum vitae PDF viewer" src={`${CV}#view=FitH`} />
        <div className="viewer-fallback"><p>If the PDF preview does not appear in your browser, use either document link above.</p><a href={CV} target="_blank" rel="noopener noreferrer">Open the CV PDF <ArrowRight size={14} aria-hidden="true" /></a></div>
      </section>
      <section className="cv-note"><BookOpen size={18} aria-hidden="true" /><p>This document includes personal contact information intended for the CV; residential address and phone number are not reproduced elsewhere on this site.</p></section>
    </main>
  </PageFrame>;
}

function Contact() {
  return <PageFrame>
    <main className="page-enter inner-page contact-page">
      <section className="page-heading">
        <p className="eyebrow">Contact / 04</p>
        <h1 className="display">Good questions<br /><em>start somewhere.</em></h1>
        <p className="page-lede">For academic and professional correspondence, please email me at Michigan State University.</p>
      </section>
      <section className="contact-card">
        <div className="contact-card-top"><span className="eyebrow">Professional contact</span><Mail size={22} aria-hidden="true" /></div>
        <div className="contact-main"><p className="display">Hubert W.<br />Miller III</p><a className="contact-email" href="mailto:millerhu@msu.edu">millerhu@msu.edu <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        <div className="contact-details">
          <div><span>Department</span><p>Department of Communication</p></div>
          <div><span>Institution</span><p>Michigan State University</p></div>
          <div><span>Program</span><p>Communication Science</p></div>
        </div>
        <a className="button button-dark mail-button" href="mailto:millerhu@msu.edu">Send an email <ArrowRight size={15} aria-hidden="true" /></a>
      </section>
      <section className="profile-reference">
        <div><p className="eyebrow">Researcher identifier</p><h2 className="display">ORCID</h2><p>A persistent identifier for my scholarly work.</p></div>
        <IconLink href={ORCID} external>0009-0003-7250-315X <ArrowUpRight size={14} aria-hidden="true" /></IconLink>
      </section>
      <section className="contact-footnote"><BriefcaseBusiness size={18} aria-hidden="true" /><p>My professional path includes more than two decades in Michigan’s utility sector and current graduate study in communication.</p><Link href="/research" className="text-link">Research <ArrowRight size={14} aria-hidden="true" /></Link></section>
    </main>
  </PageFrame>;
}

function Router() {
  const [location] = useLocation();
  useEffect(() => {
    const meta = pageMeta[location] ?? { title: 'Page not found | Hubert W. Miller III', description: 'The requested page could not be found.' };
    document.title = meta.title;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', meta.description);
  }, [location]);
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/research" component={Research} />
    <Route path="/cv" component={CVPage} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch>;
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;
