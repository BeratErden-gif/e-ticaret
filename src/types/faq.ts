export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: "Genel" | "Ürünler" | "Kargo";
}

export interface FAQResponse {
  data: FAQItem[];
}