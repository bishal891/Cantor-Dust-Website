import { aboutCategories } from '../data/aboutData';

function ProfileLinkButtons({ linkButtons, className = '' }) {
  if (!linkButtons?.length) return null;

  return (
    <div className={`profile-link-buttons${className ? ` ${className}` : ''}`}>
      {linkButtons.map((link) => (
        <a
          key={link.label + link.href}
          href={link.href}
          className="profile-link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function ProfileText({ text }) {
  if (!text?.length) return null;

  return text.map((paragraph, index) => <p key={index}>{paragraph}</p>);
}

function ProfileLinkedIn({ person, className = '' }) {
  if (!person.linkedin) return null;

  return (
    <a
      href={person.linkedin}
      className={`profile-linkedin-btn${className ? ` ${className}` : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>
  );
}

function ProfileMediaActions({ person }) {
  const hasLinkedIn = Boolean(person.linkedin);
  const hasLinks = person.linkButtons?.length > 0;
  if (!hasLinkedIn && !hasLinks) return null;

  return (
    <div className="profile-media-actions">
      {hasLinkedIn ? <ProfileLinkedIn person={person} /> : null}
      <ProfileLinkButtons
        linkButtons={person.linkButtons}
        className="profile-link-buttons--media"
      />
    </div>
  );
}

function ProfilePhoto({ person, frameClass = '' }) {
  const frameClasses = `profile-photo-frame${frameClass}`;
  const photo = <img src={person.image} alt={person.name} loading="lazy" />;

  return (
    <div className="profile-photo-wrap">
      {person.portfolio ? (
        <a
          href={person.portfolio}
          className={`${frameClasses} profile-photo-link`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} portfolio`}
        >
          {photo}
        </a>
      ) : (
        <div className={frameClasses}>{photo}</div>
      )}
    </div>
  );
}

function SeniorRow({ person }) {
  const layout = person.layout ?? {};
  const isReverse = Boolean(layout.reverse);
  const showName = layout.showName !== false;
  const preline = Boolean(layout.preline);
  const frameClass = person.portraitShape === 'square' ? ' profile-photo-frame--square' : '';

  return (
    <div className={`profile-row fade-up${isReverse ? ' profile-row--reverse' : ''}`}>
      <div className="profile-row-media">
        <ProfilePhoto person={person} frameClass={frameClass} />
        <div className="profile-row-meta">
          {showName ? (
            <>
              <h4>{person.name}</h4>
              <p className="team-role">({person.role})</p>
            </>
          ) : null}
          <ProfileMediaActions person={person} />
        </div>
      </div>
      <div className={`profile-row-content${preline ? ' profile-row-content--preline' : ''}`}>
        <ProfileText text={person.text} />
      </div>
    </div>
  );
}

function SectionHeading({ heading, person }) {
  if (!heading) return null;

  if (heading.format === 'name-role-emphasis' && person) {
    return (
      <h2 className={heading.className ?? 'about-heading'}>
        {person.name} - <em>{heading.roleLabel ?? person.role}</em>
      </h2>
    );
  }

  if (heading.text) {
    const Tag = heading.level === 4 ? 'h4' : heading.level === 3 ? 'h3' : 'h2';
    return <Tag className={heading.className}>{heading.text}</Tag>;
  }

  return null;
}

function ProfileGroup({ group }) {
  return (
    <>
      {group.heading ? <SectionHeading heading={group.heading} /> : null}
      <div className="about-team-seniors">
        {group.items.map((member) => (
          <SeniorRow key={member.name} person={member} />
        ))}
      </div>
    </>
  );
}

function AboutSection({ section }) {
  const hasGroups = section.groups?.length > 0;
  const isTeamBlock = hasGroups;

  return (
    <section className={section.sectionClass}>
      <div className={`container container--about${isTeamBlock ? ' about-team-block' : ''}`}>
        {section.heading && !hasGroups ? (
          <SectionHeading heading={section.heading} person={section.items[0]} />
        ) : null}

        {hasGroups ? (
          <>
            {section.heading ? <SectionHeading heading={section.heading} /> : null}
            {section.groups.map((group, index) => (
              <ProfileGroup key={group.heading?.text ?? index} group={group} />
            ))}
          </>
        ) : (
          section.items.map((person) => (
            <SeniorRow key={person.name} person={person} />
          ))
        )}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      {aboutCategories.map((category) =>
        category.sections.map((section, index) => (
          <AboutSection key={`${category.id}-${index}`} section={section} />
        )),
      )}
    </>
  );
}
