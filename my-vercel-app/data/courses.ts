export type Course = {
  id: string;
  title: string;
  lead: string;
  items: string[];
};

export const courses: Course[] = [
  {
    id: "elementary",
    title: "小学生コース",
    lead: "学ぶ楽しさと基礎力を育てる",
    items: ["学校補習・基礎固め", "中学受験準備", "英検・漢検対策"],
  },
  {
    id: "junior",
    title: "中学生コース",
    lead: "定期テストと高校受験を両立",
    items: ["内申点対策", "高校受験対策", "部活と両立する学習計画"],
  },
  {
    id: "high",
    title: "高校生コース",
    lead: "志望校から逆算して伴走",
    items: ["大学受験対策", "推薦入試対策", "英検などの検定対策"],
  },
];
