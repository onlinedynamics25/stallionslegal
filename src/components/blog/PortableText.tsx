interface Block {
  _type: string;
  _key?: string;
  style?: string;
  children?: Array<{
    _type: string;
    _key?: string;
    text?: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    _key: string;
    href?: string;
  }>;
  listItem?: string;
  level?: number;
}

function renderMarks(child: Block["children"][0], markDefs: Block["markDefs"]) {
  if (!child?.text) return null;
  let element: React.ReactNode = child.text;

  child.marks?.forEach((mark) => {
    if (mark === "strong") {
      element = <strong key={mark}>{element}</strong>;
    } else if (mark === "em") {
      element = <em key={mark}>{element}</em>;
    } else if (mark === "underline") {
      element = <u key={mark}>{element}</u>;
    } else {
      const linkDef = markDefs?.find((def) => def._key === mark);
      if (linkDef?.href) {
        element = (
          <a
            key={mark}
            href={linkDef.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline hover:text-gold-dark transition-colors"
          >
            {element}
          </a>
        );
      }
    }
  });

  return element;
}

function renderBlock(block: Block, index: number) {
  if (block._type !== "block") return null;

  const children = block.children?.map((child, i) => (
    <span key={child._key || i}>{renderMarks(child, block.markDefs)}</span>
  ));

  switch (block.style) {
    case "h1":
      return <h1 key={block._key || index} className="text-3xl font-serif font-bold mt-8 mb-4 text-foreground">{children}</h1>;
    case "h2":
      return <h2 key={block._key || index} className="text-2xl font-serif font-bold mt-6 mb-3 text-foreground">{children}</h2>;
    case "h3":
      return <h3 key={block._key || index} className="text-xl font-serif font-semibold mt-5 mb-2 text-foreground">{children}</h3>;
    case "h4":
      return <h4 key={block._key || index} className="text-lg font-serif font-semibold mt-4 mb-2 text-foreground">{children}</h4>;
    case "blockquote":
      return (
        <blockquote key={block._key || index} className="border-l-4 border-gold pl-4 py-2 my-4 italic text-muted-foreground bg-muted/50 rounded-r">
          {children}
        </blockquote>
      );
    default:
      if (block.listItem === "bullet") {
        return <li key={block._key || index} className="text-foreground/80 leading-relaxed ml-6 list-disc">{children}</li>;
      }
      if (block.listItem === "number") {
        return <li key={block._key || index} className="text-foreground/80 leading-relaxed ml-6 list-decimal">{children}</li>;
      }
      return <p key={block._key || index} className="text-foreground/80 leading-relaxed mb-4">{children}</p>;
  }
}

interface PortableTextProps {
  value: Block[];
}

export default function PortableText({ value }: PortableTextProps) {
  if (!value) return null;
  return <div className="prose-custom">{value.map((block, i) => renderBlock(block, i))}</div>;
}
