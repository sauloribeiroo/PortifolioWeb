import { motion } from 'framer-motion'
import './Contact.css'

const links = [
  {
    label: 'E-mail',
    value: 'sauloo.ribeirooo@gmail.com',
    href: 'mailto:sauloo.ribeirooo@gmail.com',
    icon: '📧',
  },
  {
    label: 'LinkedIn',
    value: '/in/sauloribeiroo',
    href: 'https://www.linkedin.com/in/sauloribeiroo',
    icon: '💼',
    external: true,
  },
  {
    label: 'GitHub',
    value: '/sauloribeiroo',
    href: 'https://github.com/sauloribeiroo',
    icon: '💻',
    external: true,
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Contact() {
  return (
    <section id="contato" className="section contact">
      <div className="container">
        <motion.div
          className="contact__inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">Contato</span>
          <h2 className="contact__title">
            Vamos construir algo <span className="contact__title-highlight">juntos?</span>
          </h2>
          <p className="contact__lead">
            Estou sempre aberto a novos desafios, oportunidades e conversas sobre tecnologia.
            Escolha o canal que preferir.
          </p>

          <motion.div
            className="contact__cards"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
          >
            {links.map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                className="contact__card"
                variants={cardVariant}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="contact__card-icon">{l.icon}</span>
                <span className="contact__card-label">{l.label}</span>
                <span className="contact__card-value">{l.value}</span>
                <span className="contact__card-arrow">→</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
