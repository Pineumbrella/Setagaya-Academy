export type FlowStep = {
  id: string;
  step: string;
  title: string;
  text: string;
};

export const flows: FlowStep[] = [
  {
    id: "counseling",
    step: "01",
    title: "無料相談・面談",
    text: "現在の成績や学習習慣、目標をお聞きし、必要なサポートを整理します。",
  },
  {
    id: "trial",
    step: "02",
    title: "無料体験授業",
    text: "実際の授業を体験し、講師との相性や教室の雰囲気を確認できます。",
  },
  {
    id: "plan",
    step: "03",
    title: "入会・学習計画の作成",
    text: "目標から逆算して、科目・回数・家庭学習まで含めた計画を作ります。",
  },
  {
    id: "start",
    step: "04",
    title: "授業スタート",
    text: "理解度を毎回確認しながら、無理なく続けられるペースで進めます。",
  },
];
