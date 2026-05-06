import { motion } from 'framer-motion'
import './Skills.css'

const groups = [
  {
    title: 'Back-end',
    icon: '⚙️',
    items: ['Node.js', 'Express', 'Prisma ORM', 'Criação de rotas e APIs', 'Testes e integração'],
  },
  {
    title: 'Front-end & Linguagens',
    icon: '🎨',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'React'],
  },
  {
    title: 'Banco de Dados',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'Firebase', 'Gestão de tabelas'],
  },
  {
    title: 'Ferramentas & Cloud',
    icon: '☁️',
    items: ['AWS S3 / EC2', 'Postman', 'Prisma', 'Git & GitHub'],
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const tagVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <section id="conhecimentos" className="section skills">
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">Conhecimentos</span>
          <h2 className="section-title">Stack & ferramentas</h2>
          <div className="section-divider" />
          <p className="skills__lead">
            Tecnologias com as quais venho construindo soluções reais — do banco de dados ao
            deploy em nuvem.
          </p>
        </motion.div>

        <motion.div
          className="skills__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {groups.map((g) => (
            <motion.div key={g.title} className="skills__card" variants={cardVariant}>
              <div className="skills__card-head">
                <span className="skills__card-icon">{g.icon}</span>
                <h3 className="skills__card-title">{g.title}</h3>
              </div>
              <motion.ul
                className="skills__tags"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                }}
              >
                {g.items.map((it) => (
                  <motion.li
                    key={it}
                    className="skills__tag"
                    variants={tagVariant}
                    whileHover={{ scale: 1.07, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    {it}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
