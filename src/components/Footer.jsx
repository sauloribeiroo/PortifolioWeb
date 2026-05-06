import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container footer__inner">
        <span className="footer__brand-dot" />
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Saulo de Sousa Ribeiro. Todos os direitos reservados.
        </p>
        <p className="footer__small">
          Construído com React + Framer Motion
        </p>
      </div>
    </motion.footer>
  )
}
