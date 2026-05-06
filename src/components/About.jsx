import { motion } from 'framer-motion'
import './About.css'

const stats = [
  { value: '6+', label: 'Projetos entregues' },
  { value: '2+', label: 'Anos com tecnologia' },
  { value: 'Full', label: 'Stack' },
]

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow">Sobre mim</span>
          <h2 className="section-title">Quem é Saulo Ribeiro</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              Sou uma pessoa autêntica, apaixonada por aprender e explorar o vasto universo
              da tecnologia. Busco constantemente expandir meus conhecimentos no ecossistema
              de desenvolvimento, com o objetivo de dominar tanto o back-end quanto o front-end.
            </p>
            <p>
              Acredito que a excelência técnica deve caminhar junto ao desenvolvimento de
              habilidades comportamentais, pois a tecnologia é feita por e para pessoas. Minha
              curiosidade constante me move a encarar cada novo desafio como uma jornada de
              aprendizado contínuo, permitindo que eu encontre soluções criativas mesmo em
              contextos de alta complexidade.
            </p>
            <p>
              Para mim, a tecnologia tem o poder de transformar o mundo, e estou comprometido
              em evoluir tanto tecnicamente quanto pessoalmente para ser parte ativa dessa
              transformação.
            </p>
          </motion.div>

          <motion.div
            className="about__stats"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
            }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                className="about__stat"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
