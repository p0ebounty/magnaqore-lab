import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { teamMembers } from '../../data/content';
import type { TeamMember } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import styles from './TeamSection.module.css';

export type TeamId = 'ina' | 'maryia' | 'artyom' | 'elena';

type TeamCardCopy = {
  id: TeamId;
  role: string;
  name: string;
  title: string;
  bio: string;
  creds: string[];
};

function TeamMemberModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  const { t } = useTranslation('landing');
  const { t: tClients } = useTranslation('clients');
  const tid = member.id as TeamId;

  const highlights = t(`teamMembers.${tid}.highlights`, {
    returnObjects: true,
  }) as { title: string; bullets: string[] }[];

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const modal = (
    <div className={styles.modalOverlay} role="presentation" onClick={onClose}>
      <div
        className={styles.modalDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.modalClose}
          onClick={onClose}
          aria-label={tClients('team.closeModal')}
        >
          <X size={22} aria-hidden />
        </button>
        <div className={styles.modalBody}>
          <div className={styles.modalPhotoWrap}>
            <img src={member.photoUrl} alt={member.name} className={styles.modalPhoto} />
          </div>
          <h2 id="team-modal-title" className={styles.modalName}>
            {member.name}
          </h2>
          <p className={styles.modalJobTitle}>{t(`teamMembers.${tid}.title`).toUpperCase()}</p>
          <p className={styles.modalTags}>{t(`teamMembers.${tid}.tags`)}</p>

          {member.trustLine ? (
            <div className={styles.metaBox}>{t(`teamMembers.${tid}.trustLine`)}</div>
          ) : null}
          {member.statLine ? (
            <div className={styles.metaBox}>{t(`teamMembers.${tid}.statLine`)}</div>
          ) : null}
          {member.roleDescription ? (
            <p className={styles.roleDescription}>{t(`teamMembers.${tid}.roleDescription`)}</p>
          ) : null}

          <div className={styles.modalHighlights}>
            {highlights.map((highlight, hIdx) => (
              <div key={`${hIdx}-${highlight.title}`} className={styles.highlightBlock}>
                <strong className={styles.highlightTitle}>{highlight.title}</strong>
                <ul className={styles.highlightList}>
                  {highlight.bullets.map((text, bIdx) => {
                    const orig = member.highlights[hIdx]?.bullets[bIdx];
                    return (
                      <li key={bIdx}>
                        <span className={styles.highlightBullet} aria-hidden>
                          •
                        </span>
                        {orig?.url ? (
                          <a
                            href={orig.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.highlightLink}
                          >
                            {text}
                          </a>
                        ) : (
                          <span>{text}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modal, document.body) : null;
}

export default function TeamSection() {
  const { t: tClients } = useTranslation('clients');
  const reveal = useReveal();
  const [openMemberId, setOpenMemberId] = useState<TeamId | null>(null);

  const teamCards = tClients('team.cards', { returnObjects: true }) as TeamCardCopy[];
  const cardsById = Object.fromEntries(teamCards.map((c) => [c.id, c])) as Record<
    TeamId,
    TeamCardCopy
  >;

  const openMember = openMemberId ? teamMembers.find((m) => m.id === openMemberId) : undefined;

  return (
    <section className="section">
      <div className="container">
        <div className={styles.sectionIntro}>
          <span className="badge">{tClients('team.badge')}</span>
          <h2>{tClients('team.heading')}</h2>
          <p className="text-secondary">{tClients('team.sub')}</p>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => {
            const card = cardsById[member.id as TeamId];
            if (!card) return null;

            return (
              <article
                key={member.id}
                className={`glass-panel reveal ${styles.teamCard}`}
                ref={reveal}
              >
                <div className={styles.teamPhotoWrapper}>
                  <img src={member.photoUrl} alt={member.name} className={styles.teamPhoto} />
                  <div className={styles.teamPhotoOverlay} aria-hidden />
                </div>
                <div className={styles.teamCardBody}>
                  <p className={styles.teamRole}>{card.role}</p>
                  <h3>{card.name}</h3>
                  <p className={styles.teamTitle}>{card.title}</p>
                  <p className="text-secondary">{card.bio}</p>
                  <ul>
                    {card.creds.map((cred) => (
                      <li key={cred}>{cred}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={styles.readMore}
                    onClick={() => setOpenMemberId(member.id as TeamId)}
                  >
                    {tClients('team.readMore')}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {openMember && (
        <TeamMemberModal member={openMember} onClose={() => setOpenMemberId(null)} />
      )}
    </section>
  );
}
