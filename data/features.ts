export type Feature = {
  id: string;
  title: string;
  text: string;
};

export const features: Feature[] = [
  {
    id: "personal",
    title: "完全個別指導",
    text: "講師が一人ひとりの理解度を確認しながら、苦手単元のつまずきまで丁寧に戻って指導します。",
  },
  {
    id: "test",
    title: "定期テスト対策",
    text: "近隣学校の進度に合わせ、提出物・小テスト・過去の出題傾向まで見ながら内申点アップを支えます。",
  },
  {
    id: "study",
    title: "自習サポート",
    text: "授業日以外も使える学習スペースを用意。質問しやすい環境で、家庭学習の習慣化を後押しします。",
  },
];
