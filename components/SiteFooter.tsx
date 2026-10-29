import Link from "next/link";
import { Coffee, Send, Globe, Mail, Rss } from "lucide-react";

const mainLinks = ["О нас", "Поддержка", "Блог", "Вакансии"];
const legalLinks = ["Конфиденциальность", "Условия использования"];


function Divider() {
  return <span className="hidden h-5 w-px bg-border md:block" aria-hidden="true" />;
}

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-6 text-sm md:flex-row md:flex-wrap md:items-center md:gap-5">
        
        <div className="flex items-center gap-2">
          <Coffee className="size-5" />
          <span className="font-semibold">cxffxx klvn</span>
          <span className="text-muted-foreground">© 2026 cxffxx klvn. Все права защищены.</span>
        </div>

        <Divider />

        
        <nav className="flex flex-wrap gap-4">
          {mainLinks.map((label) => (
            <Link key={label} href="#" className="hover:underline">
              {label}
            </Link>
          ))}
        </nav>

        <Divider />

        
        <nav className="flex flex-wrap gap-4 text-muted-foreground">
          {legalLinks.map((label) => (
            <Link key={label} href="#" className="hover:underline">
              {label}
            </Link>
          ))}
        </nav>

      
        <div className="flex gap-3 md:ml-auto">
          <Link href="#" aria-label="Telegram" className="text-muted-foreground hover:text-foreground">
            <Send className="size-5" />
          </Link>
          <Link href="#" aria-label="Сайт" className="text-muted-foreground hover:text-foreground">
            <Globe className="size-5" />
          </Link>
          <Link href="#" aria-label="Почта" className="text-muted-foreground hover:text-foreground">
            <Mail className="size-5" />
          </Link>
          <Link href="#" aria-label="RSS" className="text-muted-foreground hover:text-foreground">
            <Rss className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
