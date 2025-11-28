import { Container } from '../ui/Container';

const stats = [
  { number: '25+', label: 'Members around the world' },
  { number: '9', label: 'Cities worldwide' },
  { number: '40+', label: 'Meetings hosted' },
];

export function StatsStrip() {
  return (
    <section className="py-12 bg-white border-y border-border-light">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-border-light">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-text-primary/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
