import walePhoto from "@/assets/team/wale.jpg";
import princePhoto from "@/assets/team/prince.jpg";
import onyekaPhoto from "@/assets/team/onyeka.jpg";
import eberechiPhoto from "@/assets/team/eberechi.jpg";
import akinbowalePhoto from "@/assets/team/akinbowale.jpg";

export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  group: "leadership" | "of-counsel" | "associate" | "external";
  qualifications?: string;
  specialty?: string;
  photo?: string;
  email: string;
  linkedin: string;
  summary: string;
  biography: string[];
  education?: string[];
  practiceAreas?: string[];
  appointments?: string[];
  memberships?: string[];
  research?: { title: string; body: string };
  philosophy?: string;
}

export const teamGroups: { id: TeamMember["group"]; label: string; blurb: string }[] = [
  {
    id: "leadership",
    label: "Leadership",
    blurb: "Strategic direction, client advisory and institutional stewardship.",
  },
  {
    id: "of-counsel",
    label: "Of Counsel",
    blurb: "Seasoned advisers who strengthen our judgment on complex matters.",
  },
  {
    id: "associate",
    label: "Associates",
    blurb: "Committed counsel delivering diligent advocacy and day-to-day client service.",
  },
  {
    id: "external",
    label: "External Associate",
    blurb: "Trusted collaborators who extend our reach and capacity.",
  },
];

export const team: TeamMember[] = [
  {
    slug: "wale-oyinlola-michael",
    name: "Wale Oyinlola-Michael, Esq.",
    title: "Founder & Managing Associate",
    group: "leadership",
    qualifications: "B.A., LL.B., B.L., LL.M., Dip. WBS, A.ARCON, M.ICMC",
    specialty: "Commercial litigation, ADR & migration advisory",
    photo: walePhoto,
    email: "consultation@stallionslegal.com",
    linkedin: "#",
    summary:
      "Founder and Managing Associate of Stallions Sterling Law Firm, with almost two decades of experience across legal practice, dispute resolution, corporate advisory and migration consulting. He combines technical legal expertise with commercial insight to deliver practical, sustainable outcomes.",
    biography: [
      "Wale Oyinlola-Michael, Esq. is the Founder and Managing Associate of Stallions Sterling Law Firm, a progressive, client-focused law firm dedicated to delivering practical, innovative and commercially sound legal solutions. He is an accomplished legal practitioner, Alternative Dispute Resolution (ADR) professional, migration consultant, business development strategist, author and public speaker whose multidisciplinary career spans legal practice, dispute resolution, corporate advisory, migration consulting and entrepreneurship development.",
      "With almost two decades of professional experience, Wale has built a reputation for providing strategic legal counsel and business-oriented solutions to individuals, corporate organisations, institutions and entrepreneurs. His approach combines technical legal expertise with commercial insight, enabling clients to navigate complex legal and regulatory environments while achieving practical and sustainable outcomes.",
      "As the Firm's Managing Associate, he provides strategic leadership for the Firm's legal practice, institutional development and client advisory services. He oversees the delivery of legal services across multiple practice areas, ensuring that every client receives responsive, ethical and solution-oriented representation founded upon excellence, professionalism and integrity.",
      "Wale has a particular passion for Alternative Dispute Resolution, recognising mediation, negotiation and other consensual mechanisms as indispensable tools for achieving efficient, cost-effective and mutually beneficial outcomes. He combines robust courtroom advocacy with strategic dispute management, always seeking solutions that protect clients' legal and commercial interests while preserving valuable business relationships where appropriate.",
      "Since 2007, he has also distinguished himself in Travel and Migration Advisory Consulting, advising students, professionals, investors and families on international education, lawful migration pathways and global mobility. His extensive experience in migration consultancy has earned him recognition as a respected voice in the industry and a strong advocate for ethical, compliant and professionally regulated migration advisory services in Nigeria.",
      "He is the Convener of the Association of Professional Visa Consultants of Nigeria (APVCN), where he promotes professionalism, consumer protection and policy reforms aimed at strengthening Nigeria's migration consulting industry through responsible private-sector participation.",
      "In addition, Wale has provided Business Development Consultancy since 2007, advising entrepreneurs, SMEs, educational institutions and corporate organisations on business strategy, organisational development, regulatory compliance and sustainable growth. His ability to integrate legal analysis with commercial strategy enables clients to make informed decisions while effectively managing legal and operational risks.",
      "An accomplished author, Wale is passionate about financial intelligence, entrepreneurship and personal development. His writings seek to equip individuals and organisations with the knowledge and mindset required for responsible wealth creation, sound leadership and sustainable success.",
      "From 2007 to 2013, he hosted the widely acclaimed daily radio programme \u201cMind Your Minutes,\u201d a financial and business inspirational talk show aired on prominent radio stations across South-West Nigeria. Through this platform, he educated and inspired thousands of listeners on entrepreneurship, financial literacy, leadership, productivity and personal development.",
      "As Founder and Managing Associate, Wale continues to mentor young legal practitioners and promote a culture of professionalism, innovation and continuous learning within the Firm. His leadership has positioned Stallions Sterling Law Firm as a trusted legal adviser to individuals, businesses, institutions and international clients seeking practical, responsive and value-driven legal representation.",
    ],
    education: [
      "Bachelor of Arts (B.A.)",
      "Bachelor of Laws (LL.B.)",
      "Barrister-at-Law (B.L.)",
      "Master of Laws (LL.M.)",
      "Diploma in WBS (Dip. WBS)",
      "Professional Certification, Institute of Chartered Mediators and Conciliators (ICMC)",
    ],
    practiceAreas: [
      "Civil & Commercial Litigation",
      "Alternative Dispute Resolution (ADR)",
      "Corporate & Commercial Practice",
      "Property & Real Estate Law",
      "Employment & Labour Law",
      "Immigration & Migration Law",
      "Regulatory Compliance",
      "Business Advisory & Corporate Governance",
    ],
    appointments: [
      "Founder & Managing Associate, Stallions Sterling Law Firm",
      "Convener, Association of Professional Visa Consultants of Nigeria (APVCN)",
      "Director / Consultant, Online Dynamics Ltd.",
      "Legal Adviser, Advertising Practitioners Association, Oyo State Chapter",
    ],
    memberships: [
      "Member, Institute of Chartered Mediators and Conciliators (ICMC), Nigeria",
      "Associate Member, Advertising Regulatory Council of Nigeria (ARCON)",
    ],
    research: {
      title:
        "Development of Migration through Private Sector Involvement: Legal Framework",
      body: "His research explores the legal and regulatory frameworks necessary to encourage responsible private-sector participation in migration governance, with particular emphasis on consumer protection, institutional accountability, international best practices and sustainable migration policy.",
    },
    philosophy:
      "The philosophy of Stallions Sterling Law Firm is encapsulated in its enduring motto: \u201cSafe Solutions, Real Relationships.\u201d This philosophy reflects the Firm's unwavering commitment to providing legally sound, commercially practical and ethically grounded solutions while fostering enduring relationships built on trust, professionalism, integrity and exceptional client service.",
  },
  {
    slug: "prince-adediran-ayo-adeyemo",
    name: "Prince Adediran Ayo Adeyemo, Esq.",
    title: "Of Counsel",
    group: "of-counsel",
    specialty: "Litigation strategy & legal advisory",
    photo: princePhoto,
    email: "matters@stallionslegal.com",
    linkedin: "#",
    summary:
      "A distinguished legal practitioner of over four decades' standing at the Nigerian Bar and Principal of Adediran Adeyemo & Co. As Of Counsel, he brings institutional wisdom, courtroom experience and measured strategic judgment to the Firm.",
    biography: [
      "Prince Adediran Ayo Adeyemo, Esq. is a distinguished legal practitioner of over four decades' standing at the Nigerian Bar, whose career has been defined by exceptional professionalism, sound legal judgment, unwavering integrity, and an enduring commitment to the administration of justice. He is the Principal of Adediran Adeyemo & Co., an established legal practice through which he has successfully represented individuals, corporate organisations, public institutions and private clients in a broad spectrum of legal matters.",
      "As Of Counsel to Stallions Sterling Law Firm, Prince Adeyemo occupies a strategic advisory role, bringing to the Firm an invaluable reservoir of legal knowledge, courtroom experience and institutional wisdom accumulated through more than forty years of active legal practice. His association with the Firm significantly enhances its capacity to deliver innovative legal solutions while maintaining the highest standards of professional ethics and excellence.",
      "Throughout his distinguished career, Prince Adeyemo has earned a reputation as an accomplished advocate, trusted legal adviser and respected mentor. His extensive experience in litigation, legal advisory services, dispute resolution and professional practice enables him to provide insightful guidance on complex legal issues, litigation strategy, case management and risk assessment. His seasoned perspective continues to strengthen the Firm's decision-making processes and contributes meaningfully to the successful handling of high-value and sensitive legal matters.",
      "In his capacity as Of Counsel, he provides strategic legal opinions, reviews complex litigation, mentors younger counsel, supports the professional development of the Firm's lawyers and contributes to the formulation of legal strategies on matters of significant importance. His wealth of practical experience and measured counsel have become an invaluable asset to the continued growth and institutional development of Stallions Sterling Law Firm.",
      "Prince Adeyemo remains deeply committed to the ideals of justice, professional integrity and excellence in legal practice. His enduring passion for mentoring the next generation of legal practitioners, coupled with his dedication to promoting the highest ethical standards within the legal profession, exemplifies the values upon which Stallions Sterling Law Firm is founded.",
      "His affiliation with the Firm reflects a shared commitment to excellence, integrity, sound advocacy and the delivery of exceptional legal services to clients across diverse sectors. As Of Counsel, Prince Adediran Ayo Adeyemo continues to provide distinguished leadership, strategic direction and invaluable professional support, reinforcing the Firm's vision of becoming one of Nigeria's leading full-service law firms.",
    ],
    practiceAreas: [
      "Civil & Commercial Litigation",
      "Litigation Strategy & Case Management",
      "Dispute Resolution",
      "Legal Advisory & Risk Assessment",
    ],
    appointments: ["Principal, Adediran Adeyemo & Co.", "Of Counsel, Stallions Sterling Law Firm"],
  },
  {
    slug: "onyeka-izuchukwu-charles",
    name: "Onyeka Izuchukwu Charles, Esq.",
    title: "Associate",
    group: "associate",
    qualifications: "LL.B",
    specialty: "Civil litigation & dispute resolution",
    photo: onyekaPhoto,
    email: "consultation@stallionslegal.com",
    linkedin: "#",
    summary:
      "An Associate at Stallions Sterling Law Firm whose practice focuses on civil litigation and dispute resolution, delivering rigorous legal analysis and assertive advocacy.",
    biography: [
      "Onyeka Izuchukwu Charles Esq. is an Associate at Stallions Sterling Law Firm, where his practice focuses on civil litigation and dispute resolution. He is dedicated to providing rigorous legal analysis and assertive advocacy for clients across a wide range of civil matters. He holds an LL.B from Abia State University, and is committed to delivering strategic, results-oriented representation with the highest standards of professional excellence.",
    ],
    education: ["LL.B, Abia State University"],
    practiceAreas: ["Civil Litigation", "Dispute Resolution"],
  },
  {
    slug: "eberechi-azubuine",
    name: "Eberechi Azubuine, Esq.",
    title: "Associate",
    group: "associate",
    specialty: "Dispute resolution, media & entertainment law",
    photo: eberechiPhoto,
    email: "supports@stallionslegal.com",
    linkedin: "#",
    summary:
      "A lawyer with interests in dispute resolution, media and entertainment law, and corporate and commercial law, known for sound research and attention to detail.",
    biography: [
      "Eberechi Azubuine Esq. is a lawyer with interests in dispute resolution, media and entertainment law, and corporate and commercial law. He is committed to delivering practical legal solutions through sound research, attention to detail, while maintaining the highest standards of professionalism and ethics.",
    ],
    practiceAreas: [
      "Dispute Resolution",
      "Media & Entertainment Law",
      "Corporate & Commercial Law",
    ],
  },
  {
    slug: "m-e-akinbowale",
    name: "M. E. Akinbowale, Esq.",
    title: "External Associate",
    group: "external",
    qualifications: "LL.B (Hons.), B.L.",
    specialty: "Litigation support, drafting & legal research",
    photo: akinbowalePhoto,
    email: "supports@stallionslegal.com",
    linkedin: "#",
    summary:
      "A legal practitioner with a sound foundation in Nigerian law and practice, focused on legal research, litigation support, drafting and advisory services.",
    biography: [
      "M. E. Akinbowale, Esq. is an External Associate of Stallions Sterling Law Firm and a legal practitioner with a sound foundation in Nigerian law and legal practice. He holds a Bachelor of Laws (LL.B (Hons.)) degree and was called to the Nigerian Bar after successfully obtaining the Barrister-at-Law (B.L.) qualification.",
      "His practice encompasses legal research, litigation support, legal drafting, dispute resolution, and advisory services across diverse areas of law. He is committed to delivering practical, client-focused legal solutions while maintaining the highest standards of professionalism, integrity, and ethical practice.",
      "As an External Associate, Mr. Akinbowale collaborates with the Firm in providing responsive and result-oriented legal services, contributing to Stallions Sterling Law Firm's commitment to delivering Safe Solutions, Real Relationships.",
    ],
    education: ["Bachelor of Laws (LL.B (Hons.))", "Barrister-at-Law (B.L.)"],
    practiceAreas: [
      "Legal Research",
      "Litigation Support",
      "Legal Drafting",
      "Dispute Resolution",
      "Advisory Services",
    ],
  },
];

export const getMemberBySlug = (slug?: string) =>
  team.find((m) => m.slug === slug);

export const initialsOf = (name: string) =>
  name
    .replace(/,.*$/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
