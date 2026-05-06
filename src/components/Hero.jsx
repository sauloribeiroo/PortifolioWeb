import { motion } from 'framer-motion'
import './Hero.css'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.85, rotate: -6 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <motion.div
          className="hero__blob hero__blob--1"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__blob hero__blob--2"
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={item} className="hero__greeting">
            <span className="hero__wave">👋</span> Olá, eu sou
          </motion.span>

          <motion.h1 variants={item} className="hero__title">
            Saulo de Sousa <span className="hero__title-highlight">Ribeiro</span>
          </motion.h1>

          <motion.p variants={item} className="hero__subtitle">
            Estudante de TI <span className="hero__dot">•</span> Desenvolvedor Full-Stack
          </motion.p>

          <motion.p variants={item} className="hero__lead">
            Apaixonado por construir soluções que unem tecnologia e impacto humano —
            do back-end robusto à interface fluida.
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <motion.a
              href="#projetos"
              className="hero__cta hero__cta--primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver projetos
            </motion.a>
            <motion.a
              href="#contato"
              className="hero__cta hero__cta--ghost"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Entrar em contato
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__image-col"
          variants={imageVariant}
          initial="hidden"
          animate="show"
        >
          <div className="hero__image-wrap">
            <motion.div
              className="hero__image-glow"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img
              src="/fotorepos.jpeg"
              alt="Saulo de Sousa Ribeiro"
              className="hero__image"
              whileHover={{ scale: 1.04, rotate: 1.5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          </div>
          <motion.div
            className="hero__image-tag"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <span className="hero__image-tag-pulse" />
            Disponível para projetos
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.4 }, y: { repeat: Infinity, duration: 1.6 } }}
      >
        <span>Role para descobrir</span>
        <div className="hero__scroll-arrow" />
      </motion.div>
    </section>
  )
}
