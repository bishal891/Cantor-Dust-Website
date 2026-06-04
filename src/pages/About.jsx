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

function ProfileMediaActions({ person }) {
  const linkButtons = [];

  const linkedInInLinks = person.linkButtons?.some(
    (link) => link.label.toLowerCase() === 'linkedin',
  );

  if (person.linkedin && !linkedInInLinks) {
    linkButtons.push({ label: 'LinkedIn', href: person.linkedin });
  }

  if (person.linkButtons?.length) {
    linkButtons.push(
      ...person.linkButtons.filter(
        (link) => !(person.linkedin && link.label.toLowerCase() === 'linkedin'),
      ),
    );
  }

  if (!linkButtons.length) return null;

  return (
    <div className="profile-media-actions">
      <ProfileLinkButtons
        linkButtons={linkButtons}
        className="profile-link-buttons--media"
      />
    </div>
  );
}

function ProfilePhoto({ person }) {
  const photo = <img src={person.image} alt={person.name} loading="lazy" />;

  return (
    <div className="profile-photo-wrap">
      {person.portfolio ? (
        <a
          href={person.portfolio}
          className="profile-photo-frame profile-photo-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} portfolio`}
        >
          {photo}
        </a>
      ) : (
        <div className="profile-photo-frame">{photo}</div>
      )}
    </div>
  );
}

function isFounder(person) {
  return person.layout?.variant === 'founder' || person.role === 'Founder';
}

/** Founder — same flex spacing as other profiles; name/role live in section heading */
function FounderRow({ person }) {
  const preline = Boolean(person.layout?.preline);

  return (
    <article className="profile-block profile-block--founder fade-up">
      <div className="profile-block-media">
        <ProfilePhoto person={person} />
        <ProfileMediaActions person={person} />
      </div>
      <div className={`profile-block-content${preline ? ' profile-row-content--preline' : ''}`}>
        <div className="profile-block-text">
          <ProfileText text={person.text} />
        </div>
      </div>
    </article>
  );
}

/** Everyone else — left: photo + links; right: name, (role), bio */
function ProfileBlock({ person }) {
  const preline = Boolean(person.layout?.preline);

  return (
    <article className="profile-block fade-up">
      <div className="profile-block-media">
        <ProfilePhoto person={person} />
        <ProfileMediaActions person={person} />
      </div>
      <div className="profile-block-content">
        <h4 className="profile-block-name">{person.name}</h4>
        <p className="profile-block-role">({person.role})</p>
        <div className={`profile-block-text${preline ? ' profile-row-content--preline' : ''}`}>
          <ProfileText text={person.text} />
        </div>
      </div>
    </article>
  );
}

function ProfileEntry({ person }) {
  return isFounder(person) ? <FounderRow person={person} /> : <ProfileBlock person={person} />;
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
    <div className="about-group">
      {group.heading ? <SectionHeading heading={group.heading} /> : null}
      <div className="about-profile-list">
        {group.items.map((member) => (
          <ProfileEntry key={member.name} person={member} />
        ))}
      </div>
    </div>
  );
}

function AboutSection({ section }) {
  const hasGroups = section.groups?.length > 0;

  return (
    <section className={section.sectionClass}>
      <div className={`container container--about${hasGroups ? ' about-team-block' : ''}`}>
        {section.heading && !hasGroups ? (
          <SectionHeading heading={section.heading} person={section.items[0]} />
        ) : null}

        {hasGroups ? (
          <>
            {section.heading ? <SectionHeading heading={section.heading} /> : null}
            {section.groups.map((group, index) => (
              <ProfileGroup key={group.heading?.text ?? `group-${index}`} group={group} />
            ))}
          </>
        ) : (
          <div className="about-profile-list">
            {section.items.map((person) => (
              <ProfileEntry key={person.name} person={person} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="about-page">
      {aboutCategories.map((category) =>
        category.sections.map((section, index) => (
          <AboutSection key={`${category.id}-${index}`} section={section} />
        )),
      )}
    </div>
  );
}
