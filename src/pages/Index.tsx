import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const posts = [
    {
      id: 1,
      title: "Путешествие по Исландии",
      description:
        "Удивительная страна льда и огня, где каждый шаг открывает новые чудеса природы",
      date: "15 июня 2024",
      tags: ["Исландия", "Природа", "Фотография"],
      readTime: "8 мин",
    },
    {
      id: 2,
      title: "Япония: культура и традиции",
      description: "Погружение в мир древних традиций и современных технологий",
      date: "3 июня 2024",
      tags: ["Япония", "Культура", "Традиции"],
      readTime: "12 мин",
    },
    {
      id: 3,
      title: "Бали: остров богов",
      description:
        "Тропический рай с удивительными храмами и дружелюбными людьми",
      date: "20 мая 2024",
      tags: ["Бали", "Храмы", "Пляжи"],
      readTime: "6 мин",
    },
  ];

  const popularTags = [
    "Путешествия",
    "Фотография",
    "Культура",
    "Природа",
    "Приключения",
    "Кулинария",
    "Архитектура",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="/img/922e2f52-393a-4f05-a13d-c4f287685f0d.jpg"
                alt="Glebnet Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 font-serif">
                  Glebnet
                </h1>
                <p className="text-sm text-orange-600">Блог о путешествиях</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Посты
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Теги
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Связаться
              </a>
            </nav>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-serif animate-float">
            Путешествуй с
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500 animate-pulse-slow">
              Glebnet
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Делюсь впечатлениями от удивительных мест, культур и приключений.
            Вдохновляю на новые открытия и незабываемые путешествия.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative">
              <Input
                placeholder="Поиск по блогу..."
                className="w-80 pr-10 bg-white/80 backdrop-blur-sm border-orange-200 focus:border-orange-400"
              />
              <Icon
                name="Search"
                size={20}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white px-8 transform hover:scale-105 transition-all duration-200 animate-pulse-slow">
              <Icon name="Compass" size={20} className="mr-2" />
              Начать путешествие
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-serif">
            Популярные теги
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-4 py-2 text-sm bg-gradient-to-r from-orange-100 to-teal-100 text-gray-700 hover:from-orange-200 hover:to-teal-200 transition-all duration-200 cursor-pointer transform hover:scale-105"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center font-serif">
            Последние приключения
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-orange-100"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Badge variant="outline" className="text-xs">
                      <Icon name="Clock" size={12} className="mr-1" />
                      {post.readTime}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-serif group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-orange-50 text-orange-700"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors"
                  >
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6 font-serif">
            Связаться со мной
          </h3>
          <p className="text-xl text-orange-100 mb-8">
            Есть вопросы о путешествиях? Хотите поделиться своими историями?
            Пишите мне!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Input
              placeholder="Ваш email"
              className="w-80 bg-white/90 backdrop-blur-sm border-white/20 focus:border-white"
            />
            <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8">
              <Icon name="Send" size={20} className="mr-2" />
              Отправить
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/img/922e2f52-393a-4f05-a13d-c4f287685f0d.jpg"
                  alt="Glebnet Logo"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <h4 className="text-xl font-bold font-serif">Glebnet</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Блог о путешествиях, культуре и приключениях. Вдохновляю на
                новые открытия каждый день.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Навигация</h5>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Посты
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Теги
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  О блоге
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Категории</h5>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Путешествия
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Фотография
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Культура
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Кулинария
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Glebnet. Все права защищены. Создано с ❤️ для
              путешественников.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
