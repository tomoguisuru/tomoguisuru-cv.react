import { ISocialBadge } from '../../interfaces/social-badges';

import './social-badges.css';

export default function SocialBadges({ socialBadges }: { socialBadges: ISocialBadge[] }) {
    return (
        <div className="social-badges text-[40px]">
            {socialBadges.map((b, i) => (
                <a
                    className="social-badge"
                    href={b.url}
                    key={i}
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <span
                        className={`material-icons mdi mdi-${b.icon}`}
                        title={b.text}
                    ></span>
                </a>
            ))}
        </div>
    );
}
