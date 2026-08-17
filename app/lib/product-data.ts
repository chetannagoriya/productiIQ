export type View =
  | "dashboard"
  | "products"
  | "validation"
  | "catalogs"
  | "compare"
  | "graph"
  | "analytics"
  | "exports";

export interface Product {
  name: string;
  brand: string;
  model: string;
  category: string;
  confidence: number;
  completeness: number;
  status: "Approved" | "Needs review" | "In validation";
  tone: "blue" | "teal" | "purple" | "amber" | "red";
}

export const products: Product[] = [
  { name: "1LE1001 Motor", brand: "Siemens", model: "1LE1001", category: "Electric motors", confidence: 96, completeness: 92, status: "Needs review", tone: "blue" },
  { name: "CR 5-8 Pump", brand: "Grundfos", model: "CR 5-8", category: "Centrifugal pumps", confidence: 98, completeness: 97, status: "Approved", tone: "teal" },
  { name: "VEGAPULS 6X", brand: "VEGA", model: "PS6X.AB", category: "Radar sensors", confidence: 89, completeness: 84, status: "Needs review", tone: "purple" },
  { name: "V2001 Control Valve", brand: "SAMSON", model: "V2001", category: "Control valves", confidence: 94, completeness: 90, status: "Approved", tone: "amber" },
  { name: "22220 E Bearing", brand: "SKF", model: "22220 E", category: "Roller bearings", confidence: 81, completeness: 76, status: "In validation", tone: "red" },
];

export const attributes = [
  ["Rated power", "7.5 kW", "7.5", "kW", 96, "Verified", "motor_catalog.pdf · p18", false],
  ["Rated voltage", "415 V", "415", "V", 91, "Verified", "motor_catalog.pdf · p18", false],
  ["Efficiency class", "IE3", "IE3", "—", 88, "Review", "motor_catalog.pdf · p19", false],
  ["Mounting type", "IM B3", "IM B3", "—", 72, "Conflict", "2 sources disagree", false],
  ["Typical applications", "Pumps, fans, conveyors", "3 applications", "—", 64, "AI inferred", "Knowledge base", true],
] as const;

export const navigation: Array<{ id: View; label: string; icon: string; badge?: string }> = [
  { id: "dashboard", label: "Overview", icon: "⌂" },
  { id: "products", label: "Products", icon: "▦" },
  { id: "validation", label: "Validation", icon: "✓", badge: "23" },
  { id: "catalogs", label: "Catalogs", icon: "▤" },
  { id: "compare", label: "Compare", icon: "⇄" },
  { id: "graph", label: "Knowledge graph", icon: "⌘" },
  { id: "analytics", label: "Analytics", icon: "⌁" },
  { id: "exports", label: "Export center", icon: "⇧" },
];

export const viewDescriptions: Record<View, string> = {
  dashboard: "Here’s how your product data is performing today.",
  products: "Review enriched product profiles and source evidence.",
  validation: "Resolve issues and turn product data into trusted facts.",
  catalogs: "Manage catalogs, processing status, and product quality.",
  compare: "Compare industrial products side by side.",
  graph: "Explore relationships across your product ecosystem.",
  analytics: "Measure data quality and processing performance.",
  exports: "Publish approved product data to any commerce channel.",
};
