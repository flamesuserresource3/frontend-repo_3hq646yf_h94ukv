import Panel from './Panel';

export default function ComicGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <p className="text-gray-600">6–12 panels • ~250 words • Colorful and clear</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Panel number={1} title="Beginning: Group Project Day">
          <p>
            In a bright classroom, four students plan a science demo. Mia suggests testing water
            quality. Omar nods, but Jay laughs: "That’s cute. We need something real." The teacher is
            across the room. Mia’s smile fades. The others glance at each other.
          </p>
        </Panel>
        <Panel number={2} title="Misogyny Appears">
          <p>
            Jay keeps talking over Mia and assigns her "the pretty poster" while the guys handle the
            experiment. When Mia tries to explain her idea includes data analysis, Jay interrupts:
            "Relax, you’re good at making things look nice."
          </p>
        </Panel>
        <Panel number={3} title="Notice and Name It">
          <p>
            Omar notices Mia has spoken the least. He says, "Let’s pause. Mia was sharing. Can we hear
            her out?" Jay rolls his eyes, but the room quiets. Mia, surprised, continues with calm
            confidence.
          </p>
        </Panel>
        <Panel number={4} title="Speak Up with Respect">
          <p>
            Mia explains how testing tap water from different fountains could reveal inequalities in
            the building. She outlines steps, roles, and how the poster will support—not replace—the
            experiment. The plan is clear and ambitious.
          </p>
        </Panel>
        <Panel number={5} title="Change Behavior">
          <p>
            Jay exhales. "My bad. I was being dismissive." He offers to handle sample labels while Mia
            leads the data log. Omar manages timing. Priya designs the poster with everyone’s input.
            The team gets to work.
          </p>
        </Panel>
        <Panel number={6} title="Result and Reflection">
          <p>
            On presentation day, the class applauds the findings. The teacher notes how roles matched
            skills—not stereotypes. Jay adds, "I learned that shutting people down makes us miss good
            ideas." Mia smiles: "We did this together."
          </p>
        </Panel>
      </div>
    </section>
  );
}
