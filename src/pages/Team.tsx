import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { team, teamGroups, initialsOf, type TeamMember } from "@/data/team";

const MemberCard = ({ member }: { member: TeamMember }) => (
  <article className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/40">
    <Link
      to={`/team/${member.slug}`}
      className="block aspect-[4/5] bg-charcoal relative overflow-hidden border-b border-gold/20"
      aria-label={`View profile of ${member.name}`}
    >
      {member.photo ? (
        <img
          src={member.photo}
          alt={`Portrait of ${member.name}`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-charcoal to-charcoal-light">
          <span className="font-serif text-5xl text-gold/70 tracking-widest">
            {initialsOf(member.name)}
          </span>
        </div>
      )}
      <span className="absolute inset-x-0 bottom-0 h-1 bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
    </Link>

    <div className="p-6">
      <Link to={`/team/${member.slug}`}>
        <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors leading-snug">
          {member.name}
        </h3>
      </Link>
      <p className="text-sm text-gold mt-1 font-medium">{member.title}</p>
      {member.specialty && (
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
          {member.specialty}
        </p>
      )}
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
        {hasLinkedIn(member.linkedin) && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn profile of ${member.name}`}
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold/50 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        <a
          href={`mailto:${member.email}`}
          aria-label={`Email ${member.name}`}
          className="p-2 rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold/50 transition-colors"
        >
          <Mail className="h-4 w-4" />
        </a>
        <Link
          to={`/team/${member.slug}`}
          className="ml-auto text-sm font-medium text-foreground/70 hover:text-gold inline-flex items-center gap-1 transition-colors"
        >
          Profile <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  </article>
);

const Team = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="bg-charcoal py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <span className="text-gold font-medium uppercase tracking-[0.3em] text-xs">
              Stallions Sterling
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream mt-5 tracking-tight">
              Our Team
            </h1>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-cream/70 text-base md:text-lg leading-relaxed mt-6">
              At Stallions Sterling, our lawyers are selected for their
              preparedness to apply intelligence, discipline, and genuine care
              to solving real-life legal and commercial problems. We believe the
              best legal solutions are both technically sound and relationally
              grounded.
            </p>
          </div>
        </section>

        {/* Groups */}
        {teamGroups.map((group, i) => {
          const members = team.filter((m) => m.group === group.id);
          if (!members.length) return null;
          return (
            <section
              key={group.id}
              className={`py-16 md:py-20 ${i % 2 === 1 ? "bg-secondary/40" : ""}`}
            >
              <div className="container mx-auto px-4">
                <div className="max-w-2xl mb-10">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                    {group.label}
                  </h2>
                  <div className="mt-3 h-px w-16 bg-gold" />
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {group.blurb}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {members.map((m) => (
                    <MemberCard key={m.slug} member={m} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Footer CTA */}
        <section className="bg-charcoal border-t border-gold/20 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-cream tracking-tight">
              Need help? Let us know how we can help you
            </h2>
            <p className="text-cream/60 mt-4 leading-relaxed">
              Safe Solutions. Real Relationships.
            </p>
            <Button
              asChild
              className="mt-8 bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-8 h-12"
            >
              <Link to="/#contact">Request Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
