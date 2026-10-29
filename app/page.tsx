import {
  Settings,
  Share2,
  Pencil,
  FileText,
  Users,
  UserPlus,
  Heart,
  Mail,
  Globe,
  AtSign,
  CalendarDays,
  Image as ImageIcon,
  Star,
  Download,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const stats = [
  { label: "Публикации", value: "128", icon: FileText },
  { label: "Подписчики", value: "2,4 тыс.", icon: Users },
  { label: "Подписки", value: "312", icon: UserPlus },
  { label: "Лайки", value: "8,9 тыс.", icon: Heart },
];

const skills = ["Эспрессо", "Латте-арт", "V60", "Каппинг", "Обжарка", "Альтернатива", "Работа с гостями"];

const posts = [
  { title: "Как я учился делать латте-арт", text: "Первое сердечко получилось только с сотой попытки. Делюсь советами для новичков." },
  { title: "Эспрессо дома без кофемашины", text: "Три простых способа заварить крепкий кофе, если нет оборудования." },
  { title: "Подборка зёрен на осень", text: "Какие сорта подходят для воронки, а какие лучше брать для эспрессо." },
];

const documents = ["Сертификат бариста.pdf", "Карта вкусов.pdf", "Рецепты сезонных напитков.docx"];

const favorites = [
  { title: "Гайд по обжарке зерна", text: "Сохранил, чтобы понять разницу между светлой и тёмной обжаркой." },
  { title: "Рецепт идеального раф-кофе", text: "Пропорции сливок и ванильного сахара, которые я пробовал на работе." },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">

      <Card>
        <CardContent className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Avatar className="size-28">
            <AvatarFallback className="text-3xl font-semibold">МЖ</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h1 className="text-2xl font-bold">миша журавлев</h1>
            <p className="text-muted-foreground">Бариста</p>
            <p className="text-sm text-muted-foreground">@margolissq</p>
            <p className="mt-2 max-w-xl">
              Варю кофе в небольшой кофейне и люблю, когда у каждого напитка есть своя история.
            </p>
          </div>

          <div className="flex gap-2">
            <Button>
              <Pencil /> Редактировать профиль
            </Button>
            <Button variant="outline">
              <Share2 /> Поделиться
            </Button>
            <Button variant="outline" size="icon" aria-label="Настройки">
              <Settings />
            </Button>
          </div>
        </CardContent>
      </Card>


      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <Card key={label}>
            <CardContent className="flex items-center gap-3">
              <Icon className="size-8 text-muted-foreground" />
              <div>
                <p className="text-xl font-bold leading-tight">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>О себе</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p>
              MXSHV 17 Y.O 
            </p>
            <p>
              В свободное время ищу новые сорта зёрен, хожу на каппинги и пробую
              варить кофе разными способами: воронка, аэропресс, турка. Мечтаю
              когда-нибудь открыть свою маленькую кофейню.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold">Навыки</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold">Контакты</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-muted-foreground" /> misha.barista@example.com
              </li>
              <li className="flex items-center gap-2">
                <Globe className="size-4 text-muted-foreground" /> baristamisha.ru
              </li>
              <li className="flex items-center gap-2">
                <AtSign className="size-4 text-muted-foreground" /> Telegram: @margolissq
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays className="size-4 text-muted-foreground" /> На платформе с 12 марта 2024
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>


      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">Все посты</TabsTrigger>
          <TabsTrigger value="media">Медиа</TabsTrigger>
          <TabsTrigger value="docs">Документы</TabsTrigger>
          <TabsTrigger value="fav">Избранное</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.title}>
              <CardHeader>
                <CardTitle className="text-base">{post.title}</CardTitle>
                <CardDescription>{post.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="media" className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div
              key={n}
              className="flex aspect-square items-center justify-center rounded-xl border bg-card text-muted-foreground"
            >
              <ImageIcon className="image" />
            </div>
          ))}
        </TabsContent>

        <TabsContent value="docs" className="mt-4 flex flex-col gap-3">
          {documents.map((doc) => (
            <Card key={doc}>
              <CardContent className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FileText className="size-5 text-muted-foreground" /> {doc}
                </span>
                <Button variant="outline" size="icon" aria-label={`Скачать ${doc}`}>
                  <Download />
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="fav" className="mt-4 grid gap-4 md:grid-cols-2">
          {favorites.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Star className="size-4" /> {item.title}
                </CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
