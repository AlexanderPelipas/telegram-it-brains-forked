// Підключаємо потрібні технології
import React from "react";

// ============================================

// Імпортуємо компонент "Шапка"
import Header from "../component/Header";
// Імпортуємо компонент "Меню"
import Menu from "../component/Menu";
// Імпортуємо компонент "Сторінка"
import Page from "../component/Page";
// Імпортуємо компонент "Пусто"
import Empty from "../component/Empty";

import ChatList from "../component/ChatList";
// ============================================
// Імпортуємо файли потрібних картинок

import CatPhoto from "../file/photo/cat.png";
import JekaPhoto from "../file/photo/jeka.png";
import AnnPhoto from "../file/photo/ann.png";
import FamilyPhoto from "../file/photo/family-dog.png";
import News from "../file/photo/60-news.png";
import Cloth from "../file/photo/cloth.png";
import Dad from "../file/photo/dad-ivan.png";
import DearFriends from "../file/photo/drank.png";

// ============================================
// Генеруємо константи, в яких тримаємо дані про список чатів

const CHATS_LIST = [
  {
    id: 1,
    photo: CatPhoto,
    name: "Про котів",
    message: "Я люблю пити молоко",
    isRead: true,
    time: "10:24"
  },
  {
    id: 2,
    photo: JekaPhoto,
    name: "Жека",
    message: "Де доплата?",
    isUnread: true,
    time: "09:53"
  },
  {
    id: 3,
    photo: AnnPhoto,
    name: "Hanna",
    message: "Buy some milk!",
    time: "08:34",
    messageAmount: 3
  },
  {
    id: 4,
    photo: FamilyPhoto,
    name: "Family chat",
    message: "Who is at home?",
    time: "07:53",
    messageAmount: 10,
    notifyOff: true,
    user: "Maman"
  },
  {
    id: 5,
    photo: News,
    name: "News",
    message: "Ukrainian counteroffensive",
    time: "07:43",
    messageAmount: 7,
    notifyOff: true
  },
  {
    id: 6,
    photo: Cloth,
    name: "Brand Clothes",
    message: "New goods",
    time: "05:43",
    messageAmount: 2,
    notifyOff: true
  },
  {
    id: 7,
    photo: Dad,
    name: "Дед Иван",
    message: "Ну шо ты, епта?",
    time: "07:38",
    messageAmount: 1
  },
  {
    id: 8,
    photo: DearFriends,
    name: "Любі друзі",
    message: "Когда бухаем?))",
    time: "02:30",
    isUnread: true,
    hashtag: "#hashtag"
  }
];

// ============================================
// Генеруємо сторінку "Чати"

export default function Chats() {
  return (
    <Page>
      {/* В title передаємо текст заголовка сторінки */}
      <Header title="Чати" />
      <div>
        <ChatList list={CHATS_LIST} />
      </div>
      {/* В activePage передаємо посилання поточної сторінки */}
      <Menu activePage="/chats" />
    </Page>
  );
}
