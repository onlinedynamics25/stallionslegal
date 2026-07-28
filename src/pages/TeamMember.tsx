import { Link, useParams, Navigate } from "react-router-dom";
import { Linkedin, Mail, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getMemberBySlug, initialsOf } from "@/data/team";

const Block = ({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) => {
  if (!items?.length) return null;
  return (
    <div>
      <h2 className="font-serif text-xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="mt-3 h-px w-12 bg-gold" />
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-muted-foreground leading-relaxed pl-5 relative"
          >
            <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-gold" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TeamMemberPage = () => {
  const { slug } = useParams();
  const member = getMemberBySlug(slug);

  if (!member) return <Navigate to="/team" replace />;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="bg-charcoal py-14 md:py-20">
          <div className="container mx-auto px-4">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Our Team
            </Link>

            <div className="grid md:grid-cols-[300px_1fr] gap-10 mt-8 items-start">
              <div className="aspect-[4/5] w-full max-w-[300px] rounded-xl overflow-hidden border border-gold/20 bg-gradient-to-br from-charcoal-light to-charcoal-dark flex items-center justify-center">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-serif text-6xl text-gold/70 tracking-widest">
                    {initialsOf(member.name)}
                  </span>
                )}
              </div>

              <div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-cream tracking-tight">
                  {member.name}
                </h1>
                <p className="text-gold font-medium mt-3 uppercase tracking-[0.2em] text-sm">
                  {member.title}
                </p>
                {member.qualifications && (
                  <p className="text-cream/50 text-sm mt-2">
                    {member.qualifications}
                  </p>
                )}
                <p className="text-cream/75 leading-relaxed mt-6 max-w-2xl">
                  {member.summary}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-8">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-cream hover:bg-gold hover:text-primary-foreground transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-cream hover:bg-gold hover:text-primary-foreground transition-colors text-sm"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_340px] gap-12">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground tracking-tight">
                  Biography
                </h2>
                <div className="mt-3 h-px w-16 bg-gold" />
                <div className="mt-6 space-y-5">
                  {member.biography.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {member.research && (
                  <div className="mt-10 rounded-xl border border-border bg-secondary/40 p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      Research Interest
                    </h3>
                    <p className="text-gold text-sm mt-2 font-medium">
                      {member.research.title}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      {member.research.body}
                    </p>
                  </div>
                )}

                {member.philosophy && (
                  <div className="mt-6 border-l-2 border-gold pl-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      Professional Philosophy
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      {member.philosophy}
                    </p>
                  </div>
                )}
              </div>

              <aside className="space-y-10 lg:border-l lg:border-border lg:pl-10">
                <Block title="Education & Qualifications" items={member.education} />
                <Block title="Practice Areas" items={member.practiceAreas} />
                <Block title="Professional Appointments" items={member.appointments} />
                <Block title="Professional Memberships" items={member.memberships} />
                <div>
                  <h2 className="font-serif text-xl font-semibold text-foreground">
                    Contact
                  </h2>
                  <div className="mt-3 h-px w-12 bg-gold" />
                  <div className="mt-4 space-y-3 text-sm">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                    >
                      <Mail className="h-4 w-4" /> {member.email}
                    </a>
                    <a
                      href={member.linkedin}
                      className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn profile
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-charcoal border-t border-gold/20 py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-cream tracking-tight">
              Need help? Let us know how we can help you
            </h2>
            <Button
              asChild
              className="mt-7 bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-8 h-12"
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

export default TeamMemberPage;
