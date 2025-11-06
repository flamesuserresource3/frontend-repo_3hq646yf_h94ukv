import { ShieldAlert, Users, Briefcase, Heart } from "lucide-react";

const items = [
  {
    icon: ShieldAlert,
    title: "Safety & violence",
    text:
      "Misogyny normalizes harassment and abuse. It increases the risk of domestic and sexual violence and discourages reporting, allowing harm to continue unchecked.",
  },
  {
    icon: Users,
    title: "Community & representation",
    text:
      "When women are sidelined in media, leadership, and public life, decisions overlook their needs. Societies lose creativity, talent, and trust.",
  },
  {
    icon: Briefcase,
    title: "Work & economy",
    text:
      "Bias limits access to jobs, pay, and promotions. This reduces economic security for families and slows growth for entire communities.",
  },
  {
    icon: Heart,
    title: "Health & wellbeing",
    text:
      "Everyday sexism chips away at confidence and mental health. It is linked to anxiety, depression, and poorer health outcomes across a lifetime.",
  },
];

export default function Effects() {
  return (
    <section id="effects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
          How misogyny harms everyone
        </h3>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Challenging misogyny benefits all of us—women, men, and gender-diverse people. Inclusive communities are safer, healthier, and more innovative.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600">
              <Icon className="h-5 w-5" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
