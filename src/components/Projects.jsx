import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    title: 'Portfólio Web',
    description: 'Portfólio pessoal moderno construído em React com animações em Framer Motion, scroll reveals e identidade visual própria.',
    year: '2026',
    tags: ['React', 'Framer Motion', 'Vite'],
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Sistema de Listagem de Produtos',
    description: 'Aplicação full stack para gerenciamento e listagem de produtos, com interface intuitiva e API REST robusta.',
    year: '2025',
    tags: ['Node.js', 'React', 'PostgreSQL'],
    accent: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Sistema de Gestão Financeira',
    description: 'Aplicação full stack para acompanhamento da movimentação financeira pessoal, com foco em clareza e usabilidade.',
    year: '2025',
    tags: ['Full Stack', 'Prisma', 'TypeScript'],
    accent: 'from-emerald-500 to-blue-500',
  },
  {
    title: 'Robô com Arduino',
    description: 'Construção de um robô programado para participar das competições do Dia T, integrando hardware e lógica embarcada.',
    year: '2025',
    tags: ['Arduino', 'C++', 'Hardware'],
    accent: 'from-amber-500 to-rose-500',
  },
  {
    title: 'Marketplace GestãoAoVivo',
    description: 'Marketplace desenvolvido para a empresa GestãoAoVivo, viabilizando negociações de obras entre as partes.',
    year: '2024',
    tags: ['Marketplace', 'Back-end', 'API'],
    accent: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Sistema GestãoAoVivo',
    description: 'Manutenção e evolução do back-end do sistema de acompanhamento de obras: novos endpoints, gestão de tabelas e organização no Postman.',
    year: '2024',
    tags: ['Node.js', 'PostgreSQL', 'Postman'],
    accent: 'from-blue-500 to-violet-500',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">Projetos</span>
          <h2 className="section-title">O que venho construindo</h2>
          <div className="section-divider" />
          <p className="projects__lead">
            Uma seleção de iniciativas pessoais e profissionais que marcam minha trajetória.
          </p>
        </motion.div>

        <motion.div
          className="projects__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              className="projects__card"
              variants={cardVariant}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            >
              <div className="projects__card-top">
                <span className="projects__year">{p.year}</span>
                <motion.span
                  className="projects__arrow"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </div>

              <h3 className="projects__card-title">{p.title}</h3>
              <p className="projects__card-desc">{p.description}</p>

              <div className="projects__tags">
                {p.tags.map((t) => (
                  <span key={t} className="projects__tag">{t}</span>
                ))}
              </div>

              <span className="projects__shine" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
