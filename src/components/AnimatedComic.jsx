import { motion } from 'framer-motion';
import Panel from './Panel';

const variants = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
    hover: { y: -4, boxShadow: '0 10px 24px rgba(0,0,0,0.08)' }
  }
};

export default function AnimatedComic() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-gray-600">6 panels • ~230 words • Colorful and clear</p>
        <div className="text-xs text-gray-500">Animated panels — hover to lift</div>
      </div>
      <motion.div
        variants={variants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={variants.item} whileHover="hover">
          <Panel number={1} title="Beginning: The Pitch">
            <p>
              In media class, a team plans a showcase. Mia proposes a data-driven water test. Jay smirks:
              "Cute project." The room buzzes; her idea is pushed aside. A small silence grows.
            </p>
          </Panel>
        </motion.div>

        <motion.div variants={variants.item} whileHover="hover">
          <Panel number={2} title="Problem: Everyday Misogyny">
            <p>
              Jay talks over Mia and assigns her the “pretty poster.” When she mentions analysis, he
              interrupts: "Relax, you’re good with visuals." The joke lands like a door closing.
            </p>
          </Panel>
        </motion.div>

        <motion.div variants={variants.item} whileHover="hover">
          <Panel number={3} title="Response: Notice and Name It">
            <p>
              Omar says, "Hold up. Mia hadn’t finished." The group pauses. Mia nods, breathes, and
              continues—clear, calm, specific.
            </p>
          </Panel>
        </motion.div>

        <motion.div variants={variants.item} whileHover="hover">
          <Panel number={4} title="Solution: Share Space, Share Roles">
            <p>
              She outlines steps, roles, and data logs. The poster supports the experiment—it doesn’t
              replace it. Priya offers visuals; Jay labels samples; Mia leads the dataset.
            </p>
          </Panel>
        </motion.div>

        <motion.div variants={variants.item} whileHover="hover">
          <Panel number={5} title="Change: Owning Impact">
            <p>
              Jay says, "I was dismissive—sorry." The team reorganizes. Work flows, laughter returns,
              and everyone’s skills show up.
            </p>
          </Panel>
        </motion.div>

        <motion.div variants={variants.item} whileHover="hover">
          <Panel number={6} title="Result: Better Together">
            <p>
              The showcase applauds. The teacher notes how roles matched skills, not stereotypes. Mia:
              "We did this together." Jay: "I learned to listen first."
            </p>
          </Panel>
        </motion.div>
      </motion.div>
    </section>
  );
}
