import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:contact@satish.dev', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-400 font-mono text-sm">
          &copy; {new Date().getFullYear()} Satish Sahu. Engineered with Next.js
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-neon-cyan transition-colors transform hover:scale-110"
              aria-label={social.label}
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
