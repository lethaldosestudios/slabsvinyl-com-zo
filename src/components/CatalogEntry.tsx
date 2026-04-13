import Link from 'next/link';

export interface CatalogEntryProps {
  index: string;
  genre: string;
  artist: string;
  title: string;
  label: string;
  year: string;
  catalogNumber: string;
  imageUrl?: string;
  slug: string;
  inStock: boolean;
}

export const mockRecords: CatalogEntryProps[] = [
  { index:"001", genre:"Soul",    artist:"Marvin Gaye",     title:"What's Going On",       label:"Tamla",       year:"1971", catalogNumber:"T 310L",    slug:"marvin-gaye-whats-going-on",         inStock:true  },
  { index:"002", genre:"Funk",    artist:"James Brown",     title:"Sex Machine",            label:"King",        year:"1970", catalogNumber:"KSD 1115",  slug:"james-brown-sex-machine",            inStock:true  },
  { index:"003", genre:"Jazz",    artist:"Miles Davis",     title:"Kind of Blue",           label:"Columbia",    year:"1959", catalogNumber:"CL 1355",   slug:"miles-davis-kind-of-blue",           inStock:true  },
  { index:"004", genre:"R&B",     artist:"Aretha Franklin", title:"Young Gifted and Black", label:"Atlantic",    year:"1972", catalogNumber:"SD 7213",   slug:"aretha-franklin-young-gifted-black", inStock:true  },
  { index:"005", genre:"Reggae",  artist:"Burning Spear",   title:"Marcus Garvey",          label:"Island",      year:"1975", catalogNumber:"ILPS 9377", slug:"burning-spear-marcus-garvey",        inStock:false },
  { index:"006", genre:"Latin",   artist:"Celia Cruz",      title:"Tremendo Cache",         label:"Vaya",        year:"1975", catalogNumber:"VS-63",     slug:"celia-cruz-tremendo-cache",          inStock:true  },
  { index:"007", genre:"Gospel",  artist:"Mahalia Jackson", title:"How I Got Over",         label:"Columbia",    year:"1976", catalogNumber:"PC 34073",  slug:"mahalia-jackson-how-i-got-over",     inStock:true  },
  { index:"008", genre:"Hip-Hop", artist:"Eric B. & Rakim", title:"Paid in Full",           label:"4th & B'way", year:"1987", catalogNumber:"MCA-42248", slug:"eric-b-rakim-paid-in-full",          inStock:true  },
];

export default function CatalogEntry({
  index,
  genre,
  artist,
  title,
  label,
  year,
  catalogNumber,
  imageUrl,
  slug,
  inStock,
}: CatalogEntryProps) {
  return (
    <div className="border border-slabs-border bg-slabs-surface cursor-default transition-all duration-200 ease-analog hover:-translate-y-[3px] hover:shadow-[0_4px_16px_rgba(20,19,19,0.08)]">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Link href={`/products/${slug}`} className="block w-full h-full">
          {/* Album Sleeve */}
          <div className="w-full h-full bg-slabs-border/20">
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={`${title} by ${artist}`}
                className={`w-full h-full object-cover ${!inStock ? 'saturate-[0.7]' : ''}`}
              />
            )}
          </div>
        </Link>
      </div>

      {/* Spec Block */}
      <div className="grid grid-cols-[56px_1fr] p-[10px_12px_12px] border-t border-slabs-border text-left">
        {/* Left column */}
        <div className="border-r border-slabs-border pr-2 font-display text-[11px] font-normal tracking-[0.04em] uppercase text-slabs-text-faint flex flex-col justify-between">
          <div>
            <span className="block">{index}</span>
            <span className="block">{genre}</span>
          </div>
          {!inStock && (
            <span className="block font-display text-[10px] font-semibold tracking-[0.10em] uppercase text-wax mt-2">
              Gone
            </span>
          )}
        </div>
        
        {/* Right column */}
        <div className="pl-[10px] font-display text-[11px] font-normal tracking-[0.04em] uppercase">
          <span className="block text-slabs-text">{artist}</span>
          <span className="block text-slabs-text-muted">{title}</span>
          <span className="block text-slabs-text-muted">{label} &middot; {year}</span>
          <span className="block text-slabs-text-muted">{catalogNumber}</span>
        </div>
      </div>
    </div>
  );
}
